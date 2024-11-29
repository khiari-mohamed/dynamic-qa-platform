let currentSlideIndex = 0;
const answers = {};

function renderSlides() {
  const slidesContainer = document.getElementById("slides");
  questions.forEach((q, index) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    if (index === 0) slide.classList.add("active-slide");

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${q.text}`;
    slide.appendChild(questionText);

    if (q.type === "mcq") {
      q.options.forEach((option) => {
        const label = document.createElement("label");
        label.textContent = option.text;

        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${index}`;
        input.value = option.text;
        input.onclick = () => {
          answers[`q${index}`] = option.text;
          updateAnswerStatus(input, option.correct);
        };

        label.prepend(input);
        slide.appendChild(label);
        slide.appendChild(document.createElement("br"));
      });
    } else if (q.type === "code") {
      const editorDiv = document.createElement("div");
      editorDiv.className = "code-editor";
      editorDiv.id = `editor-${index}`;
      slide.appendChild(editorDiv);

      setTimeout(() => {
        const editor = CodeMirror(editorDiv, {
          mode: "python",
          lineNumbers: true,
        });
        answers[`q${index}`] = () => editor.getValue();
      }, 0);
    } else if (q.type === "scale") {
      const select = document.createElement("select");
      q.scaleOptions.forEach((option) => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
      });
      select.onchange = (e) => {
        answers[`q${index}`] = e.target.value;
      };
      slide.appendChild(select);
    } else {
      const input = document.createElement("textarea");
      input.rows = 4;
      input.cols = 50;
      input.oninput = (e) => {
        answers[`q${index}`] = e.target.value;
      };
      slide.appendChild(input);
    }

    slidesContainer.appendChild(slide);
  });

  addThankYouSlide(); // Add the thank you slide after the last question
  slidesContainer.style.display = "block";
}

function updateAnswerStatus(input, isCorrect) {
  const status = document.createElement("span");
  status.textContent = isCorrect ? "✅" : "❌"; // Show correct or incorrect symbol
  input.parentElement.appendChild(status);
}

function addThankYouSlide() {
  const slidesContainer = document.getElementById("slides");

  const thankYouSlide = document.createElement("div");
  thankYouSlide.className = "slide";
  thankYouSlide.classList.add("thank-you-slide");
  thankYouSlide.style.display = "none"; // Initially hidden

  const thankYouText = document.createElement("p");
  thankYouText.textContent = "Thank you for completing the questionnaire!";
  thankYouSlide.appendChild(thankYouText);

  const downloadLink = document.createElement("a");
  downloadLink.id = "download";
  downloadLink.style.display = "none"; // Hidden until answers are ready to be downloaded
  thankYouSlide.appendChild(downloadLink);

  slidesContainer.appendChild(thankYouSlide);
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    slide.classList.toggle("active-slide", i === index);
  });
}

function nextSlide() {
  if (currentSlideIndex < questions.length) {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
  } else {
    showThankYouSlide(); // Show the thank you slide after the last question
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    showSlide(currentSlideIndex);
  }
}

function showThankYouSlide() {
  const slides = document.querySelectorAll(".slide");
  const thankYouSlide = slides[slides.length - 1];
  thankYouSlide.style.display = "block"; // Show the thank you slide
}

function submitAnswers() {
  const jsonAnswers = JSON.stringify(answers, null, 2);
  const blob = new Blob([jsonAnswers], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.getElementById("download");
  downloadLink.href = url;
  downloadLink.download = "answers.json";
  downloadLink.style.display = "inline";
  downloadLink.textContent = "Download Answers";
}

renderSlides();

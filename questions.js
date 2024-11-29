const questions = [
    { type: "open", text: "What is the difference between supervised, unsupervised, and reinforcement learning?" },
    { type: "open", text: "Explain the role of a loss function in machine learning." },
    { type: "open", text: "Explain the process of backpropagation in neural networks." },
    { type: "open", text: "What is generative AI, and how does it differ from discriminative AI?" },
    { type: "open", text: "Explain how GANs (Generative Adversarial Networks) work." },
    { type: "open", text: "What is the difference between a parametric model and a non-parametric model?" },
    { type: "open", text: "Explain the importance of the training-validation-testing split in machine learning." },
    { type: "open", text: "Define overfitting and underfitting. How can you address them?" },
    {
      type: "mcq",
      text: "What type of these is generative AI?",
      options: [
        { text: "Random Forest", correct: false },
        { text: "GPT", correct: true },
        { text: "K-Mean Clustering", correct: false }
      ]
    },
    {
      type: "mcq",
      text: "What is the primary goal of the discriminator in a GAN?",
      options: [
        { text: "Generate realistic outputs", correct: false },
        { text: "Classify data into multiple categories", correct: false },
        { text: "Distinguish between real and fake data", correct: true }
      ]
    },
    { type: "code", text: "Write a Python function that generates random noise as input for a generative model." },
    { type: "open", text: "Scenario: A company wants to use generative AI to create synthetic training data for a classification problem." },
    { type: "open", text: "In a Transformer model, what is the role of the 'attention mechanism,' and how does it address limitations of RNNs?" },
    {
      type: "scale",
      text: "In Variational Autoencoders, how does the KL-divergence term in the loss function help enforce the distribution of the latent space?",
      scaleOptions: [
        "It ensures the latent space follows a specific distribution, such as a normal distribution, by minimizing the difference between the learned distribution (Correct Answer).",
        "It maximizes the reconstruction accuracy by directly penalizing the encoder's output for deviating from the training data.",
        "It helps prevent the latent space from overfitting by making sure it stays close to the prior distribution, promoting a smooth and continuous latent space."
      ]
    },
    { type: "open", text: "What is a loss function, and how does it work in a neural network?" },
    { type: "open", text: "What is gradient descent, and why is it used in training neural networks?" },
    {
      type: "mcq",
      text: "What is the relationship between the loss function and gradient descent?",
      options: [
        { text: "Loss function generates predictions, and gradient descent calculates outputs.", correct: false },
        { text: "Loss function measures error; gradient descent minimizes it by updating parameters.", correct: true },
        { text: "Gradient descent replaces the loss function during training.", correct: false }
      ]
    }
  ];
  
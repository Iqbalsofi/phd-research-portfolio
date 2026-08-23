export const personalInfo = {
  name: "Iqbal Maqbool Sofi",
  title: "3D Deep Learning & Semantic Communication Researcher",
  institution: "Rowan University",
  location: "Glassboro, NJ",
  email: "iqbalmaqbol@gmail.com",
  phone: "+1 (856) 244-0515",
  github: "https://github.com/iqbalsofi",
  linkedin: "https://www.linkedin.com/in/iqbal-mohammad-sofi",
  degree: "Master of Science in Data Science",
  gpa: "3.448",
  creditsEarned: 31,
  advisor: "Prof. Silvija (Rowan AI / SceneSense Lab)",
  collaborator: "Rudhra Joshi",
  researchFocus: "3D Point Cloud Semantic Communication via MaskedVQVAE3D & Discrete Diffusion (DoT / SEDD)",
  bio: "Graduate Research Assistant at Rowan University's SceneSense Lab. Research focuses on extending the Discernment semantic communication framework (arXiv:2602.13556) to 3D point cloud manifolds (ModelNet40) using MaskedVQVAE3D tokenization and discrete diffusion models (DoT & SEDD) under extreme channel corruption (up to 99.2% token loss).",
  stats: [
    { label: "M.S. Cumulative GPA", value: "3.45", detail: "Rowan University" },
    { label: "Summer Research Final", value: "Grade A (4.0)", detail: "Prof. Silvija / MONAI DoT" },
    { label: "Corrupted Channel Acc.", value: "59.5%", detail: "At 99.2% Tokens Missing" },
    { label: "Token Sequence Length", value: "4096 Tokens", detail: "MaskedVQVAE3D / 40 Classes" }
  ]
};

export const researchHighlights = [
  {
    id: "discernment-3d-dot-sedd",
    title: "Extending 3D Semantic Communication via MaskedVQVAE3D & Discrete Diffusion (DoT / SEDD)",
    role: "Graduate Research Assistant (Lead Analyst & MONAI DoT Developer)",
    period: "Summer 2026",
    venue: "Rowan SceneSense AI Lab / Target IEEE JSAC & CVPR Workshop",
    abstract: "Extended the Discernment semantic communication framework (arXiv:2602.13556) to 3D point cloud manifolds on ModelNet40. Engineered the MONAI-style Diffusion-on-Tokens (DoT) architecture and evaluated channel loss resilience (truncation via DoT and puncturing via SEDD) across 4096-length discrete token sequences. Demonstrated that conditional class conditioning maintains 59.5% classification accuracy even under 99.2% token loss.",
    keywords: ["3D Point Clouds", "MaskedVQVAE3D", "Discrete Diffusion (DoT)", "SEDD", "Semantic Communication", "ModelNet40", "PyTorch"],
    metrics: [
      { name: "0% Missing (Clean)", value: "93.5%", target: "Full Token Sequence" },
      { name: "50% Missing (2048 Tokens)", value: "84.5%", target: "NanoGPT DoT Cond" },
      { name: "99.2% Missing (32 Tokens)", value: "59.5%", target: "Robustness Limit" },
      { name: "MONAI DoT Val Loss", value: "1.0694", target: "Epoch 99 vs 1.0735 Baseline" }
    ],
    math: {
      pipeline: "\\text{Cloud}(X) \\xrightarrow{\\text{Encode}} Z \\in \\{0..255\\}^{4096} \\xrightarrow{\\text{Channel Loss (99.2\\%)}} \\hat{Z} \\xrightarrow{\\text{DoT / SEDD}} \\tilde{Z} \\xrightarrow{\\text{Decode}} \\hat{X}",
      vqLoss: "\\mathcal{L}_{VQ} = \\|z_e(x) - e\\|_2^2 + \\beta \\|z_e(x) - sg[e]\\|_2^2 + \\mathcal{L}_{DoT}(\\theta)"
    },
    benchmarkTable: [
      { missing: "0% (Clean)", tokens: 4096, ngCond: "93.5%", mCond: "93.5%", ngUncond: "93.5%", mUncond: "93.5%" },
      { missing: "50.0%", tokens: 2048, ngCond: "84.5%", mCond: "78.5%", ngUncond: "60.0%", mUncond: "75.0%" },
      { missing: "87.5%", tokens: 512, ngCond: "71.0%", mCond: "58.5%", ngUncond: "4.5%", mUncond: "6.5%" },
      { missing: "96.9%", tokens: 128, ngCond: "57.5%", mCond: "50.5%", ngUncond: "16.5%", mUncond: "7.5%" },
      { missing: "99.2%", tokens: 32, ngCond: "59.5%", mCond: "51.0%", ngUncond: "5.0%", mUncond: "1.0%" }
    ],
    links: {
      code: "https://github.com/iqbalsofi",
      pdf: "#",
      bibtex: `@article{sofi2026discernment3d,
  author = {Sofi, Iqbal Maqbool and Joshi, Rudhra and Professor, Silvija},
  title = {3D Semantic Communication over Corrupted Channels via MaskedVQVAE3D and Discrete Token Diffusion},
  journal = {Rowan University SceneSense Lab Research Report},
  year = {2026}
}`
    }
  },
  {
    id: "vit-dino-finetune",
    title: "Self-Supervised Vision Transformer Fine-Tuning (DINO + PyTorch)",
    role: "Lead Researcher",
    period: "2025",
    venue: "Deep Learning Research Repository",
    abstract: "Fine-tuned self-supervised Vision Transformers (ViT-Base/16) on custom domain subsets using PyTorch and DINO framework. Implemented CUDA mixed-precision training, multi-head self-attention visualization, and positional encoding analysis.",
    keywords: ["Vision Transformers", "PyTorch", "DINO", "Self-Supervised Learning", "CUDA", "Computer Vision"],
    metrics: [
      { name: "Top-1 Accuracy", value: "85.4%", target: "ImageNet-100 Subset" },
      { name: "Training Throughput", value: "+2.4x", target: "AMP Mixed Precision" }
    ],
    math: {
      loss: "\\mathcal{L}_{DINO} = - \\sum_{i} P_s(x_i) \\log P_t(x_i)"
    },
    links: {
      code: "https://github.com/iqbalsofi",
      bibtex: `@software{sofi2025vit,
  author = {Sofi, Iqbal Maqbool},
  title = {Vision Transformer Fine-Tuning with DINO and PyTorch},
  year = {2025}
}`
    }
  },
  {
    id: "audio-mnist-vqvae",
    title: "Audio MNIST Representation Learning with VQ-VAE + Transformer",
    role: "Lead Developer",
    period: "2025",
    venue: "Rowan CS Deep Learning Project",
    abstract: "Designed a discrete latent codebook pipeline using Vector Quantized Variational Autoencoders (VQ-VAE) coupled with an autoregressive Transformer for spoken digit audio representation and classification.",
    keywords: ["VQ-VAE", "Audio Processing", "PyTorch", "Transformers", "Discrete Codebook"],
    metrics: [
      { name: "Test Accuracy", value: "98.5%", target: "Audio MNIST Benchmark" },
      { name: "Codebook Size", value: "512 Vectors", target: "Latent Dimension 64" }
    ],
    math: {
      vqLoss: "\\mathcal{L}_{VQ} = \\|sg[z_e(x)] - e\\|_2^2 + \\beta \\|z_e(x) - sg[e]\\|_2^2"
    },
    links: {
      code: "https://github.com/iqbalsofi",
      bibtex: `@software{sofi2025audio,
  author = {Sofi, Iqbal Maqbool},
  title = {Audio MNIST VQ-VAE Transformer Architecture},
  year = {2025}
}`
    }
  }
];

export const courseworkData = [
  { code: "CS 07695", title: "Adv Topics CS: Independent Study (MONAI DoT 3D Research)", grade: "A", credits: 3.0, term: "Summer 2026", category: "Research Focus", qp: 12.0 },
  { code: "CS 07559", title: "Advanced Models of Deep Learning", grade: "B", credits: 3.0, term: "Fall 2025", category: "Core AI", qp: 9.0 },
  { code: "CS 02505", title: "Data Mining I", grade: "A-", credits: 3.0, term: "Spring 2026", category: "Core CS", qp: 11.1 },
  { code: "STAT 02515", title: "Applied Multivariate Data Analysis", grade: "B+", credits: 3.0, term: "Spring 2026", category: "Statistics", qp: 9.9 },
  { code: "CS 02630", title: "Advanced Topics in Database Systems", grade: "A-", credits: 3.0, term: "Fall 2025", category: "Systems", qp: 11.1 },
  { code: "DA 03511", title: "Patient Data Privacy & Ethics", grade: "B+", credits: 3.0, term: "Fall 2025", category: "Ethics & Security", qp: 9.9 },
  { code: "CS 02516", title: "Big Data Tools & Techniques", grade: "B+", credits: 3.0, term: "Spring 2025", category: "Engineering", qp: 9.9 },
  { code: "CS 00500", title: "Computer Science Graduate Seminar", grade: "A", credits: 1.0, term: "Fall 2024", category: "Seminar", qp: 4.0 },
  { code: "CS 02530", title: "Adv Database Systems: Theory & Practice", grade: "A", credits: 3.0, term: "Fall 2024", category: "Systems", qp: 12.0 },
  { code: "DS 02510", title: "Visual Analytics", grade: "A", credits: 3.0, term: "Fall 2024", category: "Analytics", qp: 12.0 },
  { code: "STAT 02509", title: "Probability & Statistics for Data Science", grade: "C", credits: 3.0, term: "Fall 2024", category: "Statistics", qp: 6.0 }
];

export const experienceTimeline = [
  {
    role: "Graduate Research Assistant (3D Deep Learning & Semantic Comm)",
    org: "SceneSense AI Lab, Rowan University",
    location: "Glassboro, NJ (Advisor: Prof. Silvija)",
    period: "May 2026 – Present",
    type: "Academic Research",
    bullets: [
      "Extended Discernment semantic communication framework (arXiv:2602.13556) to 3D point cloud manifolds (ModelNet40) using MaskedVQVAE3D tokenization (4096 tokens, 297 vocab length).",
      "Architected TransformerMonai.py DoT framework, resolving lm_head layer dimensionality mismatches and data pipeline bugs.",
      "Conducted benchmarking of 4 discrete diffusion models (NanoGPT Cond/Uncond vs MONAI Cond/Uncond) under truncation and puncturing noise up to 99.2% token loss.",
      "Proved class conditioning is the decisive factor for channel resilience, holding 59.5% accuracy even with 32 tokens remaining out of 4096."
    ]
  },
  {
    role: "Software Engineering Analyst – Data & Analytics",
    org: "Accenture",
    location: "Bengaluru, India",
    period: "Feb 2022 – Aug 2024",
    type: "Industry Engineering",
    bullets: [
      "Architected enterprise analytics data pipelines processing 500K+ daily interactions for C-suite reporting.",
      "Engineered automated SQL and Python ETL workflows, boosting data pipeline performance by 35%.",
      "Formulated statistical customer segmentation models in R, yielding 20% growth in targeted campaign ROI."
    ]
  },
  {
    role: "Associate Software Engineer",
    org: "DXC Technology",
    location: "Noida, India",
    period: "Aug 2021 – Feb 2022",
    type: "Industry Engineering",
    bullets: [
      "Developed high-concurrency backend services using C#/.NET and SQL Server for 10K+ active users.",
      "Created scalable REST APIs and query optimization protocols, improving server throughput by 40%."
    ]
  }
];

export const technicalSkills = {
  programming: ["Python (Expert)", "C/C++", "Java", "C#", "SQL", "Shell Scripting", "LaTeX"],
  deepLearning: ["PyTorch", "MaskedVQVAE3D", "Discrete Diffusion (DoT)", "SEDD", "Vision Transformers (ViT)", "PointMAE", "Hugging Face", "CUDA"],
  computerVision: ["3D Point Clouds (ModelNet40)", "Open3D", "PointNet++", "Chamfer Distance (CD)", "Earth Mover's Distance (EMD)", "Occupancy Decoding"],
  dataEngineering: ["ETL Pipelines", "PostgreSQL", "MongoDB", "InfluxDB", "Power BI", "Tableau", "Git/Docker"]
};

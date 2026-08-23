export const personalInfo = {
  name: "Iqbal Maqbool Sofi",
  title: "Machine Learning Researcher | Deep Learning · Semantic Communication · 3D Vision",
  institution: "Rowan University",
  location: "Glassboro, NJ",
  email: "iqbalmaqbol@gmail.com",
  phone: "+1 (856) 244-0515",
  github: "https://github.com/iqbalsofi",
  linkedin: "https://www.linkedin.com/in/iqbal-mohammad-sofi",
  degree: "Master of Science in Data Science",
  gpa: "3.448",
  creditsEarned: 31,
  advisor: "Prof. Silvija (SceneSense AI Lab)",
  collaborator: "Rudhra Joshi",
  researchFocus: "Semantic Communication, Generative Reconstruction & 3D Representations",
  bio: "Exploring robust and generative machine-learning systems, with current work on semantic communication and reconstruction of 3D representations under severe information loss."
};

export const researchAtAGlance = {
  title: "Semantic Communication for 3D Representations",
  summary: "Investigating how discrete 3D representations can be reconstructed when large portions of transmitted semantic information are missing.",
  themes: [
    {
      title: "Semantic Communication",
      desc: "Robust representation transmission under severe information loss over communication channels."
    },
    {
      title: "3D Representation Learning",
      desc: "Discrete token representations of ModelNet40 geometry via MaskedVQVAE3D."
    },
    {
      title: "Generative Reconstruction",
      desc: "SEDD and decoder-only transformer approaches for reconstructing missing semantic tokens."
    },
    {
      title: "Robustness Evaluation",
      desc: "Testing downstream classification behavior under extreme token corruption (up to 99.2% missing)."
    }
  ]
};

export const mainProjectDetails = {
  id: "discernment-3d",
  title: "Extending Semantic Communication from 1D Signals to 3D Point Clouds",
  framework: "Discernment 3D Extension (arXiv:2602.13556)",
  dataset: "ModelNet40 (40 Object Categories)",
  attribution: {
    baseModels: "Rudhra Joshi trained the original base models (conditional/unconditional SEDD and DoT, classifiers, semantic channels) and established the initial 3D pipeline.",
    myRole: "Research analysis, pipeline verification, debugging, MONAI-style DoT transformer implementation, dataset reconciliation, controlled evaluations, and experimental limitation analysis."
  },
  problemStatement: {
    simple: "What happens when a machine must reconstruct a 3D object after most of its semantic representation is lost during transmission?",
    technical: "Extending the Discernment semantic communication framework from 1D signals to 3D point cloud manifolds (ModelNet40) using MaskedVQVAE3D discrete tokenization (4096 tokens) and evaluating discrete diffusion model behavior under severe channel corruption."
  },
  techSpecs: {
    dataset: "ModelNet40 (40 Classes)",
    model: "MaskedVQVAE3D",
    sequenceLength: 4096,
    vqVocab: 256,
    maskId: 256,
    numClasses: 40,
    extendedVocab: 297,
    bosToken: 256,
    classTokensRange: "257 – 296"
  },
  corruptionConcepts: {
    sedd: {
      title: "SEDD / Puncturing",
      pattern: "●  ●  ×  ●  ×  ×  ●  ×  ●",
      desc: "Tokens are missing at distributed/random positions across the sequence. Reconstruction fills missing semantic tokens across the sequence."
    },
    dot: {
      title: "DoT / Truncation",
      pattern: "●  ●  ●  ●  ●  |  ×  ×  ×  ×  ×",
      desc: "A prefix/context remains while later tokens are truncated/missing. Decoder-only transformer generates and reconstructs the continuation."
    }
  },
  baselineFindings: {
    note: "These baseline evaluations classify reconstructed token representations rather than fully decoded 3D geometry.",
    cleanAcc: "67.90%",
    condSEDD: "Holds 64% – 67% accuracy even at 97% tokens missing",
    condDoT: "Degrades gracefully: 85.5% at 50% missing → 58.0% at 99.0% missing",
    uncondSEDD: "45% – 55% across corruption levels",
    uncondDoT: "Collapses under token loss",
    fullGen: "Generate-from-scratch: unconditional ~2.5% (near random chance), conditional SEDD 41.75%, conditional DoT 15.0%"
  },
  researchQuestions: [
    {
      id: "rq1",
      number: "Research Question 1",
      question: "Can reconstructed semantic tokens be decoded back into meaningful 3D geometry?",
      investigation: "Investigated the decode-to-3D path in stage3_decode.py.",
      pipelineSteps: "codes → codebook → demasker → decoder → occupancy",
      findings: [
        "stage3_decode.py implements codes → codebook → demasker → decoder → occupancy.",
        "The decoder output is sparse occupancy rather than a clean point cloud, requiring compatible downstream classifiers.",
        "PointMAE was investigated as a candidate ModelNet40 classifier for decoded geometry.",
        "Existing decoder checkpoints reached approximately IoU = 0.42.",
        "One remaining question was whether the MeshGPT classifier checkpoint operates on decoded geometry or an encoder latent representation."
      ],
      status: "Feasibility verified; downstream geometry-classification path requires further validation."
    },
    {
      id: "rq2",
      number: "Research Question 2",
      question: "How should class conditioning be adapted to ModelNet40?",
      investigation: "Checked class conditioning assumptions when adapting NanoGPT DoT from audio data to ModelNet40.",
      findings: [
        "Original audio implementation indexed class conditioning around tokens 256–266.",
        "Conditioning logic required mapping to the 40 distinct ModelNet40 classes (tokens 257–296)."
      ],
      status: "Implementation/verification issue; exact vocabulary-index verification remained an open item."
    },
    {
      id: "rq3",
      number: "Research Question 3",
      question: "Does a MONAI-style DoT transformer behave differently from NanoGPT under semantic-channel loss?",
      investigation: "Implemented a MONAI-style DoT transformer (TransformerMonai.py) to compare architecture robustness against NanoGPT DoT under semantic-channel loss.",
      debugging: [
        {
          title: "Transformer Dimensionality Mismatch",
          file: "TransformerMonai.py",
          details: "The lm_head output layer incorrectly used d_model + additional_vocab instead of d_model, producing shape mismatches. Corrected in research workspace."
        },
        {
          title: "Dataset Validation Tracing",
          file: "sedd_data pipeline",
          details: "Initial MONAI experiments produced ~2% classifier accuracy. Traced data pipeline and identified that experiments were using an incorrect token dataset. Re-running on the correct dataset (8,047 train samples, 1,402 val samples) restored expected performance to 67.90% clean accuracy."
        }
      ],
      trainingLoss: {
        conditional: { monai: 1.0694, nanoGPT: 1.0735, epoch: 99 },
        unconditional: { monai: 1.0406, nanoGPT: 1.0433, epoch: 99 },
        note: "The two implementations reached nearly identical language-model validation losses."
      },
      mainFinding: "Despite nearly identical language-model validation losses, the conditional NanoGPT implementation maintained higher downstream classification accuracy than MONAI under severe token loss. This suggests that conventional validation loss alone may not predict downstream robustness under semantic-channel corruption, and that architectural and conditioning behavior should be evaluated directly under transmission loss.",
      takeaway: "Similar validation loss ≠ similar robustness.",
      extremeCorruptionCallout: {
        missingPct: "99.2%",
        tokensRetained: "32 / 4096",
        ngCondAcc: "59.5%",
        monaiCondAcc: "51.0%"
      },
      limitation: "The robustness comparison used dot_n_eval = 200, selecting the first 200 validation samples from a class-sorted distribution (an easier subset). This explains why the 93.5% clean accuracy on this evaluation subset runs higher than the full-validation clean baseline of 67.90%."
    }
  ],
  robustnessData: [
    { context: 4096, missingPct: 0.0, ngCond: 93.5, mCond: 93.5, ngUncond: 93.5, mUncond: 93.5 },
    { context: 2048, missingPct: 50.0, ngCond: 84.5, mCond: 78.5, ngUncond: 60.0, mUncond: 75.0 },
    { context: 512, missingPct: 87.5, ngCond: 71.0, mCond: 58.5, ngUncond: 4.5, mUncond: 6.5 },
    { context: 128, missingPct: 96.9, ngCond: 57.5, mCond: 50.5, ngUncond: 16.5, mUncond: 7.5 },
    { context: 32, missingPct: 99.2, ngCond: 59.5, mCond: 51.0, ngUncond: 5.0, mUncond: 1.0 }
  ]
};

export const ongoingResearch = {
  title: "Beyond Token-Space Evaluation",
  subtitle: "Decoding Reconstructed Tokens into 3D Geometry",
  question: "Do reconstructed semantic tokens actually decode into geometrically meaningful 3D objects?",
  pipeline: "Tokens → Codebook → Demasker → Decoder → Sparse Occupancy → Geometry Evaluation",
  notes: [
    "stage3_decode.py establishes the token-to-occupancy decoding path.",
    "Decoder output is sparse occupancy; downstream classifier compatibility requires verification.",
    "PointMAE was investigated as a candidate ModelNet40 classifier for decoded geometry.",
    "Available decoder checkpoints reached approximately IoU = 0.42.",
    "Determining whether an existing classifier consumes geometry or latent representations remains an open verification step."
  ],
  status: "Ongoing / Future Work"
};

export const myContributions = [
  "Analyzed and mapped the existing 1D Discernment semantic communication framework to 3D ModelNet40 point clouds.",
  "Investigated the token → decoder → 3D occupancy path (stage3_decode.py) and evaluated downstream PointMAE classifier compatibility.",
  "Identified and corrected the lm_head dimension bug in TransformerMonai.py (d_model + additional_vocab → d_model).",
  "Traced data pipeline mismatch in early MONAI runs, identifying the correct token dataset (1,402 val samples, 67.90% clean baseline).",
  "Implemented and retrained the MONAI-style DoT discrete diffusion transformer over 150 epochs.",
  "Designed and executed controlled evaluations comparing MONAI DoT vs. NanoGPT DoT across 0% to 99.2% token corruption.",
  "Analyzed channel corruption robustness under 50–99.2% token loss and identified evaluation methodology sampling limitations (dot_n_eval = 200).",
  "Synthesized findings demonstrating that similar validation loss does not guarantee equivalent channel corruption robustness."
];

export const selectedProjects = [
  {
    id: "vit-dino",
    title: "Self-Supervised Vision Transformer Fine-Tuning",
    problem: "Evaluating self-supervised representations on domain-specific image classification tasks.",
    approach: "Fine-tuned ViT-Base/16 architectures using DINO self-supervision and PyTorch mixed-precision training.",
    result: "Achieved 85.4% Top-1 accuracy on ImageNet-100 subset with 2.4x training throughput.",
    tech: ["PyTorch", "Vision Transformers", "DINO", "CUDA", "Mixed Precision"]
  },
  {
    id: "audio-vqvae",
    title: "Audio MNIST Representation Learning with VQ-VAE + Transformer",
    problem: "Learning compact discrete latent codebooks for audio spectrogram classification.",
    approach: "Coupled a Vector Quantized Variational Autoencoder (VQ-VAE) with an autoregressive Transformer.",
    result: "Achieved 98.5% test classification accuracy on Audio MNIST with 512 codebook vectors.",
    tech: ["PyTorch", "VQ-VAE", "Transformers", "Audio Processing", "Discrete Quantization"]
  }
];

export const groupedSkills = {
  researchML: ["Deep Learning", "Transformers", "Generative Reconstruction", "Representation Learning", "Semantic Communication"],
  mlEngineering: ["PyTorch", "MONAI", "Model Evaluation", "Controlled Experimentation", "Debugging Research Code"],
  data: ["Python", "SQL", "Statistical Analysis", "ETL Pipelines"],
  tools: ["Git", "Linux", "CUDA", "LaTeX", "Docker", "Jupyter"]
};

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
    role: "Graduate Research Assistant",
    org: "SceneSense AI Lab, Rowan University",
    location: "Glassboro, NJ (Advisor: Prof. Silvija)",
    period: "May 2026 – Present",
    type: "Academic Research",
    bullets: [
      "Investigating semantic communication extensions from 1D signals to ModelNet40 3D point clouds via MaskedVQVAE3D and discrete diffusion.",
      "Developed TransformerMonai.py DoT framework, resolving lm_head dimensionality bugs and dataset pipeline mismatches.",
      "Executed controlled evaluations across 4 discrete diffusion models (NanoGPT Cond/Uncond vs MONAI Cond/Uncond) under 0% to 99.2% token loss."
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

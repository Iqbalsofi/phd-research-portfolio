export const personalInfo = {
  name: "Iqbal Maqbool Sofi",
  title: "Graduate Research Assistant — 3D Deep Learning & Semantic Communication",
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
  researchFocus: "3D Point Cloud Semantic Communication via MaskedVQVAE3D & Discrete Diffusion (DoT / SEDD)",
  bio: "Graduate Research Assistant at Rowan University's SceneSense Lab under Prof. Silvija. Research focused on analytical verification, debugging, discrete transformer development, and evaluation of 3D semantic communication models over corrupted wireless channels.",
  stats: [
    { label: "M.S. Cumulative GPA", value: "3.45", detail: "Rowan University" },
    { label: "Course Research Final", value: "Grade A (4.0)", detail: "MONAI DoT Implementation" },
    { label: "Corrupted Channel Acc.", value: "59.5%", detail: "NanoGPT-Cond @ 99.2% Token Loss" },
    { label: "Token Sequence Length", value: "4096 Tokens", detail: "MaskedVQVAE3D / 40 Classes" }
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
  techSpecs: {
    model: "MaskedVQVAE3D (not PointMAE)",
    sequenceLength: 4096,
    vqVocab: 256,
    maskId: 256,
    numClasses: 40,
    extendedVocab: 297,
    bosToken: 256,
    classTokensRange: "257 – 296"
  },
  baselineFindings: {
    note: "All baseline figures below were measured on raw-token classification, not classification of fully decoded 3D geometry.",
    cleanAcc: "67.90%",
    condSEDD: "Holds 64% – 67% accuracy even at 97% tokens missing",
    condDoT: "Degrades gracefully: 85.5% at 50% missing → 58% at 99% missing",
    uncondSEDD: "45% – 55% across corruption levels",
    uncondDoT: "Collapses under token loss",
    fullGen: "Generate-from-scratch: unconditional ~2.5% (near random chance), conditional SEDD 41.75%, conditional DoT 15.0%"
  },
  researchQuestions: [
    {
      id: "rq1",
      number: "Research Question 1",
      question: "Can reconstructed semantic tokens be decoded back into meaningful 3D geometry?",
      investigation: "Investigated the decode-to-3D pipeline in mesh_vqvae/src/stage3_decode.py.",
      pipelineSteps: "codes → codebook → demasker → decoder → occupancy",
      findings: [
        "Decoder output is sparse occupancy rather than a clean point cloud, requiring compatible downstream classifiers.",
        "PointMAE (/mnt/AI/SceneSense/silvijaPointMAE/) was investigated as a candidate ModelNet40 classifier.",
        "Existing decoder checkpoints reached approximately IoU = 0.42.",
        "Open research question: whether the MeshGPT-with-classifier checkpoint's head operates on decoded geometry or the encoder latent representation."
      ],
      status: "Feasibility verified; downstream geometry-classification path requires further validation."
    },
    {
      id: "rq2",
      number: "Research Question 2",
      question: "How should class conditioning be adapted to ModelNet40?",
      investigation: "Checked class conditioning assumptions when adapting NanoGPT DoT from audio data to ModelNet40.",
      findings: [
        "Original audio implementation indexed class conditioning around 256–266.",
        "Conditioning logic required mapping to the 40 distinct ModelNet40 classes (tokens 257–296)."
      ],
      status: "Implementation/verification issue; exact vocabulary-index verification remained an open item."
    },
    {
      id: "rq3",
      number: "Research Question 3",
      question: "Does a MONAI-style DoT transformer behave differently from NanoGPT under semantic-channel loss?",
      investigation: "Implemented a MONAI-style DoT transformer (TransformerMonai.py) to compare architecture robustness against NanoGPT DoT.",
      debugging: [
        {
          title: "Transformer Dimensionality Bug",
          details: "In TransformerMonai.py, lm_head incorrectly used d_model + additional_vocab instead of d_model, causing shape mismatches. Corrected in research workspace."
        },
        {
          title: "Dataset Mismatch Resolution",
          details: "Initial MONAI runs accidentally used an incorrect token dataset (new_implementation/trash/sedd_data) yielding ~2% accuracy. Traced and identified correct dataset (/mnt/joshi/sementic_channel_project/data/raw_data/runs/sedd_data) with 8,047 train samples, 1,402 val samples, and 67.90% clean baseline accuracy."
        }
      ],
      trainingLoss: {
        conditional: { monai: 1.0694, nanoGPT: 1.0735, epoch: 99 },
        unconditional: { monai: 1.0406, nanoGPT: 1.0433, epoch: 99 },
        note: "Language-model validation losses were nearly identical between MONAI and NanoGPT."
      },
      mainFinding: "Despite nearly identical language-model validation losses, the conditional NanoGPT model maintained higher downstream classification accuracy than the MONAI implementation under severe token loss. These results suggest that architecture-level differences and the behavior of class conditioning under corruption can substantially affect reconstruction robustness, even when conventional validation losses are similar.",
      takeaway: "Similar validation loss ≠ similar robustness.",
      limitation: "The robustness evaluation used dot_n_eval=200, selecting the first 200 validation samples from a class-sorted distribution (an easier subset). This explains why the 93.5% clean accuracy in this evaluation runs higher than the full-validation clean baseline of 67.90%."
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

export const myContributions = [
  "Analyzed and mapped the existing 1D Discernment semantic communication framework to 3D point cloud manifolds.",
  "Investigated the token → decoder → 3D occupancy path (stage3_decode.py) and evaluated downstream PointMAE classifier compatibility.",
  "Identified and fixed the lm_head dimension bug in TransformerMonai.py (d_model + additional_vocab → d_model).",
  "Discovered and resolved the experimental token dataset mismatch, restoring validation data integrity (1,402 val samples, 67.90% clean baseline).",
  "Implemented and retrained the MONAI-style DoT discrete diffusion transformer over 150 epochs.",
  "Designed and executed controlled evaluation experiments comparing MONAI DoT vs. NanoGPT DoT across 0% to 99.2% token corruption.",
  "Identified key evaluation sampling limitations (dot_n_eval=200 class-sorted subset impact).",
  "Synthesized findings demonstrating that similar validation loss does not guarantee equivalent channel corruption robustness."
];

export const demonstratedSkills = [
  "Deep Learning & Transformer Architectures",
  "Vector-Quantized Latent Representations (MaskedVQVAE3D)",
  "Semantic Communication Systems",
  "3D Point Cloud Learning (ModelNet40)",
  "Discrete Diffusion Models (DoT & SEDD)",
  "PyTorch Architecture Development",
  "Experimental Design & Benchmarking",
  "Research Codebase Debugging & Reproducibility",
  "Scientific Result Interpretation"
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
      "Extending Discernment semantic communication framework (arXiv:2602.13556) to ModelNet40 3D point clouds via MaskedVQVAE3D and discrete diffusion.",
      "Developed TransformerMonai.py DoT framework, resolving lm_head dimensionality bugs and dataset pipeline mismatches.",
      "Executed controlled evaluations across 4 discrete diffusion models (NanoGPT Cond/Uncond vs MONAI Cond/Uncond) under 0% to 99.2% token loss.",
      "Synthesized critical empirical finding showing that identical language-model validation loss does not guarantee equivalent corruption robustness."
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
  deepLearning: ["PyTorch", "MaskedVQVAE3D", "Discrete Diffusion (DoT)", "SEDD", "Transformers", "PointMAE", "CUDA"],
  computerVision: ["3D Point Clouds (ModelNet40)", "Open3D", "PointNet++", "Chamfer Distance (CD)", "Earth Mover's Distance (EMD)"],
  dataEngineering: ["ETL Pipelines", "PostgreSQL", "MongoDB", "InfluxDB", "Power BI", "Tableau", "Git/Docker"]
};

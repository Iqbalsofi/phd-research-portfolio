export const personalInfo = {
  name: "Iqbal Maqbool Sofi",
  title: "Machine Learning Researcher",
  subtitle: "M.S. in Data Science, Rowan University",
  location: "Glassboro, New Jersey",
  email: "iqbalmaqbol@gmail.com",
  phone: "+1 (856) 244-0515",
  linkedin: "https://linkedin.com/in/iqbalsofi",
  github: "https://github.com/Iqbalsofi",
  portfolio: "https://iqbalsofi.github.io/phd-research-portfolio/",
  cvFilename: "Iqbal_Maqbool_Sofi_Research_CV.pdf",
  bio: "Working at the intersection of robust machine learning, generative models, semantic communication, and 3D representation learning."
};

export const researchInterests = [
  {
    title: "Robust & Trustworthy Machine Learning",
    desc: "Evaluating model reliability, failure modes, data quality, and performance under distribution shifts or corrupted input streams."
  },
  {
    title: "Generative Modeling",
    desc: "Investigating discrete diffusion models, decoder-only transformers, and VQ-VAE architectures for structured multimodal generation."
  },
  {
    title: "Semantic Communication",
    desc: "Reconstructing high-level semantic representations across noisy or bandlimited communication channels under severe packet loss."
  },
  {
    title: "3D Representation Learning",
    desc: "Exploring discrete token representations of 3D point clouds and shape manifolds for generative reconstruction and classification."
  },
  {
    title: "Evaluation Under Corrupted Data",
    desc: "Designing controlled benchmarking frameworks to analyze downstream classification robustness under extreme information loss."
  }
];

export const mainCaseStudy = {
  id: "discernment-3d",
  title: "Semantic Communication and 3D Generative Reconstruction",
  subtitle: "Extending Semantic Communication to 3D Point Cloud Manifolds",
  dataset: "ModelNet40 (40 Object Categories)",
  pipelineSpec: "4,096 MaskedVQVAE3D discrete tokens per shape",
  
  attribution: {
    baseModels: "Rudhra Joshi trained the original base models and developed the initial 3D pipeline.",
    myRole: "Research analysis, pipeline verification, debugging, implementation of the MONAI-style decoder-only transformer, dataset reconciliation, controlled evaluation, and analysis of experimental limitations."
  },

  summary: [
    "Analyzed a ModelNet40 3D point cloud pipeline represented by 4,096 discrete MaskedVQVAE3D tokens per shape.",
    "Implemented a MONAI-style decoder-only transformer (DoT) and benchmarked it against NanoGPT under token-loss levels from 50% to 99.2%.",
    "Diagnosed an output-head dimensionality mismatch in the MONAI transformer implementation and identified the use of an incorrect token dataset during early validation.",
    "Found that similar language-model validation loss (~1.07) could still produce downstream accuracy differences of approximately 6 to 12.5 percentage points under severe corruption.",
    "Verified the token-to-geometry decoding path and identified sampling bias in a 200-sample class-sorted evaluation subset."
  ],

  robustnessTable: [
    { context: 4096, missing: "0%", ngCond: "93.5%", mCond: "93.5%", ngUncond: "93.5%", mUncond: "93.5%" },
    { context: 2048, missing: "50%", ngCond: "84.5%", mCond: "78.5%", ngUncond: "60.0%", mUncond: "75.0%" },
    { context: 512, missing: "87.5%", ngCond: "58.5%", ngUncond: "4.5%", mCond: "58.5%", ngUncondVal: "4.5%", mUncondVal: "6.5%" }, // corrected below
  ],

  robustnessDataExact: [
    { context: 4096, missingPct: "0%",   ngCond: "93.5%", mCond: "93.5%", ngUncond: "93.5%", mUncond: "93.5%" },
    { context: 2048, missingPct: "50%",  ngCond: "84.5%", mCond: "78.5%", ngUncond: "60.0%", mUncond: "75.0%" },
    { context: 512,  missingPct: "87.5%",ngCond: "71.0%", mCond: "58.5%", ngUncond: "4.5%",  mUncond: "6.5%"  },
    { context: 128,  missingPct: "96.9%",ngCond: "57.5%", mCond: "50.5%", ngUncond: "16.5%", mUncond: "7.5%"  },
    { context: 32,   missingPct: "99.2%",ngCond: "59.5%", mCond: "51.0%", ngUncond: "5.0%",  mUncond: "1.0%"  }
  ],

  evaluationLimitation: "The 200-sample evaluation used the first 200 examples from a class-sorted validation distribution, producing an easier subset. Its 93.5% clean accuracy should not be compared directly with the 67.9% clean accuracy measured on the complete validation set.",

  mainConclusion: "Similar token-prediction loss does not necessarily imply similar downstream robustness.",

  extremeCorruptionNote: "At 99.2% token missingness, precisely 32 of 4,096 tokens were retained. Conditional NanoGPT achieved 59.5% and MONAI achieved 51.0% accuracy on the 200-sample evaluation subset."
};

export const selectedProjects = [
  {
    id: "trust-aware-ml",
    title: "Trust-Aware Machine Learning Pipeline",
    focus: "Data Reliability & Leakage Prevention",
    description: "Analyzed 541,909 retail transaction records to build a reproducible data-cleaning, feature-engineering, modeling, and evaluation workflow. Emphasized reliability, data quality, leakage prevention, and transparent evaluation.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Data Quality", "Reproducible Pipelines"]
  },
  {
    id: "generative-audio",
    title: "Generative Audio Modeling",
    focus: "Audio Representation & VQ-VAE",
    description: "Developed a VQ-VAE and transformer-based audio-generation pipeline using AudioMNIST. Used a downstream classifier to evaluate generated samples and reported a verified 98.5% classifier accuracy.",
    tech: ["PyTorch", "VQ-VAE", "Transformers", "AudioMNIST", "Classifier Evaluation"]
  },
  {
    id: "vit-coursework",
    title: "Vision Transformer Coursework Experimentation",
    focus: "Image Classification Analysis",
    description: "Experimented with a ViT-Small model using patch size 8 on ImageNet100/ImageNette, with batch size 8 and two training epochs.",
    tech: ["PyTorch", "Vision Transformers", "ImageNet100", "ImageNette"]
  }
];

export const selectedGraduateCoursework = [
  "Advanced Models of Deep Learning",
  "Data Mining I",
  "Applied Multivariate Data Analysis",
  "Advanced Topics in Database Systems",
  "Patient Data Privacy & Ethics",
  "Big Data Tools & Techniques",
  "Visual Analytics",
  "Probability & Statistics for Data Science"
];

export const educationHistory = [
  {
    institution: "Rowan University",
    degree: "M.S. in Data Science",
    period: "2024 – 2026",
    location: "Glassboro, NJ"
  },
  {
    institution: "Amity University",
    degree: "B.Tech. in Computer Science and Engineering",
    period: "2017 – 2021",
    location: "India"
  }
];

export const experienceHistory = [
  {
    company: "Accenture",
    role: "Application Development Analyst",
    period: "Feb 2022 – Aug 2024",
    location: "India",
    bullets: [
      "Supported analytics, tracking, and data-governance work across more than 80 pharmaceutical websites.",
      "Contributed to work for a major UK banking client.",
      "Collaborated across technical and business teams."
    ]
  },
  {
    company: "DXC Technology",
    role: "Associate Professional Software Engineer",
    period: "Aug 2021 – Feb 2022",
    location: "India",
    bullets: [
      "Developed software applications using C#, .NET, SQL, REST APIs, and Agile software development."
    ]
  }
];

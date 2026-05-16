// Centralised portfolio content. Edit here to update the site.

export const PROFILE = {
  name: 'Yashwanth Balusu',
  title: 'AI/ML Engineer · Data Scientist · LLM & NLP Engineer',
  location: 'London, United Kingdom',
  email: 'yashwanthbalusu@outlook.com',
  phone: '+44 7490 541257',
  links: {
    linkedin: 'https://www.linkedin.com/in/yashwanth-balusu-b812803a6',
    github: 'https://github.com/yashwanthbalusu6-scode',
    huggingface: 'https://huggingface.co/yashjanthb',
  },
  taglineHighlights: ['Production ML', 'LLM Apps', 'MLOps', 'Explainable AI'],
}

export const ABOUT = {
  intro:
    'I design, build and ship production-grade AI systems — from training and evaluation through to deployment, monitoring and rollback. I have 1.5+ years of hands-on experience across regulated public-sector ML and AI-research products, and I care equally about model quality and the engineering around it.',
  paragraphs: [
    'My day-to-day lives across the full ML lifecycle: data ingestion, feature engineering, training and evaluation, then containerised deployment on Azure Databricks, AWS SageMaker and Hugging Face Spaces. I have shipped LLM-powered products using Anthropic Claude, OpenAI, Groq and LLaMA3, with RAG, fine-tuning and prompt engineering, all wrapped behind FastAPI services with full request logging.',
    'I also believe AI should be trustworthy. I have implemented Explainable AI (SHAP) and fairness monitoring (demographic parity, 4/5ths rule) on real systems, with GDPR Article 22 compliance built in from day one.',
  ],
  coreSkills: [
    { label: 'Languages', items: ['Python', 'SQL', 'R', 'JavaScript', 'Bash'] },
    { label: 'ML / DL', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Keras'] },
    {
      label: 'NLP / LLM',
      items: [
        'Hugging Face Transformers',
        'BERT',
        'GPT',
        'LLaMA3',
        'Groq',
        'Anthropic Claude',
        'OpenAI',
        'LangChain',
        'RAG',
        'Prompt Engineering',
      ],
    },
    {
      label: 'Cloud',
      items: ['Azure Databricks', 'Azure Data Lake', 'Azure Cognitive Services', 'AWS SageMaker', 'AWS Lambda', 'Hugging Face Spaces'],
    },
    { label: 'Backend / APIs', items: ['FastAPI', 'Streamlit', 'REST', 'Pydantic', 'SQLAlchemy', 'OpenAPI/Swagger'] },
    { label: 'MLOps / DevOps', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Git', 'Linux'] },
    {
      label: 'Evaluation & Practice',
      items: ['ROUGE', 'BLEU', 'Perplexity', 'SHAP', 'Explainable AI', 'Fairness (4/5ths rule)', 'GDPR Article 22'],
    },
  ],
}

export type Project = {
  slug: string
  title: string
  tagline: string
  stack: string[]
  liveUrl: string
  highlight: string
  problem: string
  approach: string[]
  impact: string[]
  accent: 'cyan' | 'violet' | 'mint'
}

export const PROJECTS: Project[] = [
  {
    slug: 'ai-paper-summarizer',
    title: 'AI Research Paper Summarizer',
    tagline: 'Cuts 30 minutes of academic reading down to <5 seconds.',
    stack: ['Python', 'BART', 'Hugging Face Transformers', 'Streamlit', 'PyPDF2', 'SQLite', 'Docker'],
    liveUrl: 'https://yashjanthb-ai-paper-summarizer.hf.space',
    highlight: '< 5s warm inference',
    problem:
      'Researchers and engineers spend ~30 minutes triaging each new paper to decide if it is worth reading in full. The bottleneck is comprehension speed on long-form PDFs, not access.',
    approach: [
      'Built a Streamlit front-end that accepts a PDF upload or arXiv URL.',
      'Chunked long PDFs with PyPDF2 to stay within BART-large-CNN context limits, then re-stitched summaries with overlap to preserve coherence.',
      'Persisted a per-user history in SQLite with export to .txt and copy-to-clipboard.',
      'Containerised with Docker (non-root user, health checks, lazy model load) and deployed to Hugging Face Spaces with GitHub auto-deploy.',
    ],
    impact: [
      'Sub-5-second warm inference per paper after the first request.',
      'Triage time dropped from ~30 min/paper to under 5 seconds for the abstract-quality summary.',
      'Public live demo on Hugging Face Spaces, free for any user.',
    ],
    accent: 'cyan',
  },
  {
    slug: 'loan-ml-gdpr',
    title: 'Interpretable Loan Approval ML with GDPR',
    tagline: 'XGBoost lending model with SHAP explanations that satisfy GDPR Article 22.',
    stack: ['Python', 'XGBoost', 'SHAP', 'FastAPI', 'Streamlit', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://yashjanthb-loan-ml-dashboard.hf.space',
    highlight: 'AUC 0.92 · 4/5ths rule pass',
    problem:
      'Lending decisions made by ML must be both accurate and individually explainable to satisfy GDPR Article 22 (right to explanation) and demographic-fairness rules. Most demo notebooks ignore one or the other.',
    approach: [
      'Trained an XGBoost classifier reaching 84.5% accuracy / AUC 0.92 on the loan-approval task.',
      'Wired SHAP into a FastAPI service so every prediction returns its per-feature contribution alongside the decision.',
      'Designed 8 REST endpoints: predict, explain, GDPR access / deletion / rectification, audit log, model metrics, and health.',
      'Built fairness monitoring with demographic parity (Δ = 0.067) and the 4/5ths rule baked into the audit pipeline.',
      'Deployed FastAPI backend + Streamlit dashboard as two coupled Hugging Face Spaces with lazy model loading.',
    ],
    impact: [
      'Every prediction is traceable: applicant, features, decision, SHAP attribution, and timestamp.',
      'Passes demographic-parity / 4/5ths rule on the test set.',
      'Showcases a real GDPR-compliant ML deployment pattern, not just a notebook.',
    ],
    accent: 'violet',
  },
  {
    slug: 'ats-resume-suite',
    title: 'ATS Resume & Job Application Suite',
    tagline: 'A free AI career platform with bring-your-own-key routing across Claude, OpenAI and YepAPI.',
    stack: ['Python', 'Streamlit', 'Anthropic Claude', 'OpenAI', 'YepAPI', 'SQLAlchemy', 'Docker'],
    liveUrl: 'https://yashjanthb-resume-ats-builder.hf.space',
    highlight: '5 tabs · BYOK · $0 infra',
    problem:
      'Most AI resume tools either charge per use or lock you to a single LLM vendor. Job-seekers want one place that scores against ATS, rewrites bullet points, drafts cover letters, runs interview prep, and tracks applications — without paying twice.',
    approach: [
      'Designed a 5-tab Streamlit app: ATS scoring, resume optimisation, cover letter, interview prep, application tracker.',
      'Built a unified AI client that auto-detects the user\'s API key prefix and routes to YepAPI, Anthropic or OpenAI — full BYOK.',
      'Implemented a deterministic ATS scoring algorithm (keyword match, formatting, sections, readability) so the app stays usable even with zero LLM credit.',
      'Engineered robust UX: temp-file PDF/DOCX parsing, Streamlit session-state persistence, downloadable .txt outputs, full try/except.',
    ],
    impact: [
      'Zero infrastructure cost — every user runs on their own key.',
      'ATS scoring works offline, so the app degrades gracefully without API credit.',
      'Used as the tooling backbone for my own multi-region applications across the UK, Germany and the Netherlands.',
    ],
    accent: 'mint',
  },
]

export const EXPERIENCE = [
  {
    company: 'Dheeraja Systems',
    location: 'United Kingdom (Hybrid)',
    role: 'AI/ML Data Scientist',
    period: 'Aug 2024 – Dec 2025',
    engagements: [
      {
        client: 'HMRC (HM Revenue & Customs)',
        project: 'Internal HR System',
        dates: 'Feb 2025 – Dec 2025',
        summary:
          'End-to-end AI/ML platform supporting the full employee lifecycle (recruitment to retirement) with predictive analytics, NLP-driven feedback analysis and self-service reporting.',
        bullets: [
          'Designed and shipped end-to-end ML pipelines on Azure Databricks and AWS SageMaker — ingestion, preprocessing, feature engineering, deployment — reducing manual HR interventions by 35%.',
          'Built attrition prediction, recruitment optimisation and performance analysis models with Scikit-learn, TensorFlow and PyTorch.',
          'Deployed BERT/GPT-based sentiment analysis on employee feedback, with Azure Data Lake for scalable storage and retrieval.',
          'Created Power BI / Tableau dashboards integrating SQL Server and Oracle DB for real-time workforce trends, anomaly detection and compliance metrics.',
          'Implemented Explainable AI frameworks aligned with UK government standards for ethical AI adoption.',
          'Adopted MLOps best practices (Docker, Kubernetes, GitHub Actions) for reproducible deployment, model versioning and continuous delivery.',
        ],
        stack: [
          'Python',
          'R',
          'SQL',
          'Azure Databricks',
          'Azure Data Lake',
          'AWS SageMaker',
          'TensorFlow',
          'PyTorch',
          'Scikit-learn',
          'Tableau',
          'Power BI',
          'SQL Server',
          'Oracle DB',
          'Docker',
          'Kubernetes',
          'GitHub Actions',
        ],
      },
      {
        client: 'London General Practice',
        project: 'AI News Insight Bot',
        dates: 'Aug 2024 – Feb 2025',
        summary:
          'Conversational AI delivering automated weekly and monthly summaries of AI industry trends, deployed on Hugging Face Spaces with two chatbot modes (general Q&A and AI news insights).',
        bullets: [
          'Designed AI summarisation pipelines using Groq, LLaMA3 and Hugging Face Transformers, producing weekly and monthly AI news digests.',
          'Built and fine-tuned NLP models for summarisation, topic classification and entity recognition, improving content relevance and readability by 40%.',
          'Built automated API-based content ingestion pipelines to fetch and process AI articles, blogs and journals.',
          'Deployed the chatbot on Hugging Face Spaces with two modes: general Q&A and AI news insights.',
          'Applied prompt engineering and contextual embedding optimisation to lift contextual accuracy.',
          'Developed evaluation metrics (ROUGE, BLEU, perplexity) across multiple datasets.',
          'Integrated Azure Cognitive Services and AWS Lambda for scalable, event-driven backends.',
        ],
        stack: [
          'Python',
          'Hugging Face Transformers',
          'Groq',
          'LLaMA3',
          'TensorFlow',
          'PyTorch',
          'spaCy',
          'Azure Databricks',
          'AWS Lambda',
          'Azure Cognitive Services',
          'Docker',
          'Kubernetes',
          'GitHub Actions',
        ],
      },
    ],
  },
]

export const EDUCATION = [
  {
    degree: 'MSc Computing',
    school: 'University of Essex',
    location: 'United Kingdom',
    period: 'Oct 2023 – Oct 2024',
    detail:
      'Coursework: Machine Learning, Deep Learning, Big Data, Software Engineering, Data Mining, Cloud Computing.',
  },
  {
    degree: 'BSc Computer Systems & Engineering',
    school: 'Loyola Academy Degree & PG College',
    location: 'India',
    period: 'Jun 2018 – Apr 2021',
    detail: 'Foundations in algorithms, operating systems, databases, computer networks and software engineering.',
  },
]

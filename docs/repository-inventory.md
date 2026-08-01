# Connected GitHub repository inventory

Audit date: 1 August 2026  
Authenticated account: [`Saroswat`](https://github.com/Saroswat)  
Accessible repositories: 30 public repositories; no private repository was returned by the connected GitHub installation.

## Method and safety

The inventory combines connected-account metadata, repository README files, source trees, dependency manifests, tests, notebooks and saved result artefacts. The eight portfolio case studies received the deepest review. Other repositories were assessed conservatively and excluded when they were empty, course exercises, data-only collections, likely upstream copies, small demonstrations or weaker evidence of original engineering.

A targeted secret scan covered the four strongest locally available source trees (FinTech guardrails, EduSentinel, VeriNLI and biomedical NER). It searched for common cloud keys, GitHub tokens, hosted-model keys, private-key blocks and credential assignments while excluding dependency and VCS folders. No high-confidence exposed secret was found. The pre-existing CV contained private home, telephone and identity information; none of it was copied into the portfolio.

Last-update dates are not asserted where the connected repository response did not expose commit dates. A blank live-demo field means no public deployment was verified.

## Featured and supporting projects

| Repository | Visibility | Primary language / stack | Problem and main functionality | AI / data techniques | Deployment / visual evidence | Quality and suitability | Security notes | Category |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Agentic-AI-Guardrail-Engine-for-FinTech-Companies](https://github.com/Saroswat/Agentic-AI-Guardrail-Engine-for-FinTech-Companies) | Public | TypeScript, Python; Next.js, FastAPI, SQLAlchemy, Docker | Governs financial-agent recommendations through policy, risk, fairness, audit and human review | Deterministic rule agents, risk scoring, fairness escalation, explainability | Vercel/Railway-ready configuration; no public demo verified | Strong full-stack architecture, tests and recruiter-quality documentation; **featured** | Synthetic demo data; no scanned secret found | Agentic AI / Responsible AI |
| [explainable-nli-hallucination-verifier](https://github.com/Saroswat/explainable-nli-hallucination-verifier) | Public | Python; FastAPI, Pydantic, Typer | Verifies generated claims against evidence with cited, exportable verdicts | BM25, NLI, calibration, abstention, adversarial evaluation | Local web workbench; no public demo verified | Strong package structure, strict typing, seven test modules and clear failure policy; **featured** | Local-first default; no scanned secret found | NLP / Explainable AI |
| [EduSentinel-AI](https://github.com/Saroswat/EduSentinel-AI) | Public | Python, HTML/CSS/JS; FastAPI, SQLite | Unifies teaching support, safeguarding, policy intelligence, explainability and IT/exam operations | Agent planning, grounded retrieval, triage, governance telemetry | Verified repository screenshots; local service | Strong modular API, tests, architecture docs and GitHub governance; **featured** | Local-first; human escalation; no scanned secret found | Agentic AI / Responsible AI / IT Automation |
| [biomedical-ner-thesis-showcase](https://github.com/Saroswat/biomedical-ner-thesis-showcase) | Public | Python, Jupyter; PyTorch, Transformers | Fine-tunes domain transformers for biomedical entity recognition with a safe demo | BioBERT, SciBERT, PubMedBERT, RoBERTa; token classification | Local demo; verified flowchart and research artefacts | Strongest research evidence; ten curated notebooks and extracted metrics; **featured** | No committed thesis checkpoint; personal/admin artefacts excluded; no scanned secret found | NLP / Research |
| [axiom-engineering-intelligence](https://github.com/Saroswat/axiom-engineering-intelligence) | Public | TypeScript; Next.js, React, Ollama, OpenAI API | Converts repository issues into evidence-linked plans, proposed patches and approval-gated changes | Tool-using coding agents, provider abstraction, local LLM | Local demo/Ollama/OpenAI modes; no public deployment verified | Strong current architecture and security model; **featured** | Local/private provider available; mutation approval-gated | Agentic AI / Software Engineering |
| [Reducing-the-size-of-Large-Language-Models-with-8-bit-quantization](https://github.com/Saroswat/Reducing-the-size-of-Large-Language-Models-with-8-bit-quantization) | Public | Python, TypeScript; NumPy, PyTorch, FastAPI, React | Reproducibly compares LLM memory, quality and inference after quantisation | INT8 per-tensor/per-channel quantisation, perplexity, latency and throughput benchmarking | Verified repository screenshots; local laboratory | Strong modernised branch, tests and benchmark design; **featured** | No analytics; local model execution; installer warns against unsafe overwrite | ML Systems / LLMOps |
| [Ultra-GAT-Robust-Graph-Attention-Networks-with-Failure-Geometry-Analysis](https://github.com/Saroswat/Ultra-GAT-Robust-Graph-Attention-Networks-with-Failure-Geometry-Analysis) | Public | Python / Jupyter; PyTorch Geometric | Studies GATv2 behaviour under topology perturbation and sparse labels | Graph attention, consistency loss, adversarial sweeps, failure geometry | Notebook project; no public demo | Technically distinctive but concise documentation and small repository; **featured conservatively** | No sensitive integration identified | Graph ML / Research |
| [Applied-Data-Science-Capstone](https://github.com/Saroswat/Applied-Data-Science-Capstone) | Public | Python, SQL; Pandas, scikit-learn, Folium, Plotly Dash | Explores and predicts Falcon 9 first-stage landing outcomes | EDA, feature engineering, GridSearchCV, classification, geospatial analysis | Local Dash artefact; no public demo verified | Complete educational workflow with recorded metrics; supporting case study | Educational provenance is explicit | Data Science |

## Reviewed but not featured

| Repository | Visibility | Evidence summary | Quality / documentation | Portfolio decision | Recommended category |
| --- | --- | --- | --- | --- | --- |
| [Predictive_Maintenance_using_Machine-Learning_Microsoft_Casestudy](https://github.com/Saroswat/Predictive_Maintenance_using_Machine-Learning_Microsoft_Casestudy) | Public | Large predictive-maintenance case-study repository and notebooks | Substantial academic evidence, but older and less differentiated than current work | De-emphasise; useful as academic history | Machine Learning |
| [Typo-Detector-with-OpenVINO](https://github.com/Saroswat/Typo-Detector-with-OpenVINO) | Public | Notebook demonstrating transformer conversion and OpenVINO inference | Clear README; narrow demonstration | Exclude from main grid; tutorial-scale | NLP / Edge inference |
| [Cross-lingual-Books-Alignment-with-Transformers-and-OpenVINO-](https://github.com/Saroswat/Cross-lingual-Books-Alignment-with-Transformers-and-OpenVINO-) | Public | English/German alignment using LaBSE embeddings and OpenVINO | Detailed notebook-style documentation; appears strongly derived from a reference workflow | Exclude from main grid; limited evidence of original extension | Multilingual NLP |
| [Accelerate-Inference-of-Sparse-Transformer-Models-with-OpenVINO-](https://github.com/Saroswat/Accelerate-Inference-of-Sparse-Transformer-Models-with-OpenVINO-) | Public | Sparse-transformer OpenVINO demonstration | Very small and tutorial-oriented | Exclude | ML Systems |
| [Masked-Language-Model-MLM-with-BERT-and-fine-tune-it-on-the-IMDB-Reviews-dataset.](https://github.com/Saroswat/Masked-Language-Model-MLM-with-BERT-and-fine-tune-it-on-the-IMDB-Reviews-dataset.) | Public | BERT/IMDB masked-language-model exercise | Very small academic exercise | Exclude | NLP learning |
| [Text-Classification-using-RNN-using-IMDB-Dataset](https://github.com/Saroswat/Text-Classification-using-RNN-using-IMDB-Dataset) | Public | RNN sentiment-classification exercise | Narrow and academically common | Exclude | NLP learning |
| [Deep-Cross-Network-DCN-](https://github.com/Saroswat/Deep-Cross-Network-DCN-) | Public | DCN notebook and explanatory README | Useful model study but limited product/originality evidence | Exclude | Recommender Systems |
| [bioemu](https://github.com/Saroswat/bioemu) | Public | BioEmu repository material | Likely upstream or externally originated; no original contribution established in this audit | Exclude pending contribution evidence | Scientific ML |
| [passage-of-time-mcp](https://github.com/Saroswat/passage-of-time-mcp) | Public | MCP temporal tools; README clone instructions point to `jlumbroso/passage-of-time-mcp` | Useful project, but upstream authorship is explicit | Exclude as fork/upstream copy unless original contributions are documented | MCP tooling |
| [e-plantShopping](https://github.com/Saroswat/e-plantShopping) | Public | React plant-shopping course application | Functional exercise; weak fit for senior AI positioning | Exclude | Full Stack learning |
| [oaqjp-final-project-emb-ai](https://github.com/Saroswat/oaqjp-final-project-emb-ai) | Public | Small embedded-AI course final | Minimal original evidence | Exclude | AI learning |
| [bank-application](https://github.com/Saroswat/bank-application) | Public | Small banking application | Early programming work; not aligned with current positioning | Exclude | Software fundamentals |
| [personal-diary](https://github.com/Saroswat/personal-diary) | Public | Minimal diary application | Very small and potentially personal in theme | Exclude | Software fundamentals |
| [LogisticsShippingRates](https://github.com/Saroswat/LogisticsShippingRates) | Public | Shipping-rate calculation exercise | Very small | Exclude | Software fundamentals |
| [Centralized-repository-shipping_calculations](https://github.com/Saroswat/Centralized-repository-shipping_calculations) | Public | Shipping calculation exercise | Very small / overlapping scope | Exclude as duplicate or course exercise | Software fundamentals |
| [github-final-project](https://github.com/Saroswat/github-final-project) | Public | Git/GitHub course artefact | Course exercise | Exclude | Tooling learning |
| [jbbmo-Introduction-to-Git-and-GitHub](https://github.com/Saroswat/jbbmo-Introduction-to-Git-and-GitHub) | Public | Introductory Git/GitHub work | Course exercise | Exclude | Tooling learning |
| [learn-react](https://github.com/Saroswat/learn-react) | Public | Minimal React learning repository | Course exercise | Exclude | Front-end learning |
| [datasets](https://github.com/Saroswat/datasets) | Public | Dataset collection | Data-only; not an application or research narrative by itself | Exclude | Data resources |
| [docs](https://github.com/Saroswat/docs) | Public | Very large documentation repository | Purpose and original contribution not established; too broad for confident presentation | Exclude pending manual provenance review | Documentation |
| [The-AI-Incubator](https://github.com/Saroswat/The-AI-Incubator) | Public | Empty repository | No source or documentation | Exclude | Not available |
| [saroswatroy.github.io](https://github.com/Saroswat/saroswatroy.github.io) | Public | Empty repository | No existing portfolio to preserve | Not used; a dedicated portfolio repository is preferable | Portfolio infrastructure |

## Not found in the connected account

No public repository matching the requested **UK Job Market Intelligence System** or a standalone **Explainable Credit Risk Prediction System** was returned. These projects are therefore not represented as existing work. The FinTech guardrail engine includes deterministic financial risk and explainability controls, but it is not relabelled as a credit-risk predictor.

## Follow-up verification

- Confirm whether the eight featured repositories may all remain publicly highlighted.
- Add public deployment URLs only after each application has been deployed and checked.
- Verify issuer credential pages before adding certification links.
- Add exact last-meaningful-update dates in a future audit using commit-history metadata.

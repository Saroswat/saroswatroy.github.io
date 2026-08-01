from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "saroswat-roy-resume.pdf"
PUBLIC = ROOT / "public" / "documents" / "saroswat-roy-resume.pdf"
FAVICON = ROOT / "public" / "favicon.png"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
PUBLIC.parent.mkdir(parents=True, exist_ok=True)
FAVICON.parent.mkdir(parents=True, exist_ok=True)

PAGE_W, PAGE_H = A4
INK = colors.HexColor("#111820")
MUTED = colors.HexColor("#526171")
ACCENT = colors.HexColor("#0369A1")
LINE = colors.HexColor("#D8DFE7")

styles = getSampleStyleSheet()
name_style = ParagraphStyle("Name", fontName="Helvetica-Bold", fontSize=25, leading=27, textColor=INK, spaceAfter=4)
role_style = ParagraphStyle("Role", fontName="Helvetica", fontSize=10.5, leading=14, textColor=ACCENT, spaceAfter=8)
contact_style = ParagraphStyle("Contact", fontName="Helvetica", fontSize=8.4, leading=11, textColor=MUTED, spaceAfter=15)
section_style = ParagraphStyle("Section", fontName="Helvetica-Bold", fontSize=9.2, leading=12, textColor=ACCENT, spaceBefore=10, spaceAfter=6, uppercase=True, borderColor=LINE, borderWidth=0, borderPadding=0)
heading_style = ParagraphStyle("Heading", fontName="Helvetica-Bold", fontSize=10.8, leading=13, textColor=INK, spaceAfter=2)
meta_style = ParagraphStyle("Meta", fontName="Helvetica", fontSize=8.2, leading=10.5, textColor=ACCENT, spaceAfter=4)
body_style = ParagraphStyle("Body", fontName="Helvetica", fontSize=8.8, leading=12.3, textColor=INK, alignment=TA_LEFT, spaceAfter=5)
bullet_style = ParagraphStyle("Bullet", parent=body_style, leftIndent=10, firstLineIndent=-6, bulletIndent=0, spaceAfter=2.5)
small_style = ParagraphStyle("Small", fontName="Helvetica", fontSize=7.5, leading=9.5, textColor=MUTED)


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 14 * mm, PAGE_W - 18 * mm, 14 * mm)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 9.5 * mm, "Saroswat Roy · Portfolio résumé · Prepared 1 August 2026")
    canvas.drawRightString(PAGE_W - 18 * mm, 9.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def bullet(text):
    return Paragraph(f"• {text}", bullet_style)


def role(title, organisation, period, summary, bullets):
    return KeepTogether([
        Paragraph(title, heading_style),
        Paragraph(f"{organisation} · {period}", meta_style),
        Paragraph(summary, body_style),
        *[bullet(item) for item in bullets],
        Spacer(1, 4),
    ])


story = [
    Paragraph("SAROSWAT ROY", name_style),
    Paragraph("AI Engineer & Data Scientist · Agentic AI · NLP · Explainable AI · IT Operations", role_style),
    Paragraph("London, United Kingdom  |  saroswatroy@gmail.com  |  linkedin.com/in/saroswat-roy  |  github.com/Saroswat", contact_style),
    Paragraph("PROFILE", section_style),
    Paragraph("AI Engineer and Data Scientist combining agentic systems, natural language processing, Generative AI, Explainable AI and real-world IT operations. Builds intelligent systems that are autonomous where appropriate, explainable where necessary, secure by design and operationally useful.", body_style),
    Paragraph("EXPERIENCE", section_style),
    role("Information Technology Support Engineer", "City of London Corporation · City of London School", "Sep 2025 – Present", "Supports secure, reliable technology services and applies automation to operational workflows.", ["Office 365 administration, technical troubleshooting, networking and device support.", "Cybersecurity, cloud-security and risk-aware incident handling.", "AI-assisted ticket triage, prioritisation and repetitive-work reduction."]),
    role("Artificial Intelligence Research Graduate Assistant", "City of London School", "Sep 2024 – Aug 2025", "Applied AI research and education with an emphasis on responsible use in learning environments.", ["Machine learning, NLP, prompt engineering and AI-assisted teaching.", "Software testing, AWS experimentation and safe, age-appropriate AI support."]),
    role("Research Assistant", "University of Engineering & Management, Jaipur", "Nov 2021 – Jun 2022", "Contributed to research on semantic analysis of code.", ["Code semantics, data modelling, statistical analysis and algorithms.", "Research methodology and technical documentation."]),
    Paragraph("EDUCATION", section_style),
    Paragraph("MSc Artificial Intelligence — Natural Language Processing", heading_style),
    Paragraph("Queen Mary University of London · Sep 2023 – Sep 2024 · Merit", meta_style),
    Paragraph("Research: biomedical named entity recognition using transformer-based models. Study included NLP, NLU, deep learning, transformers, statistics, knowledge engineering and responsible AI.", body_style),
    Paragraph("BTech Computer Science", heading_style),
    Paragraph("University of Engineering & Management, Jaipur · Aug 2019 – May 2023", meta_style),
    Paragraph("Algorithms, data structures, programming, machine learning, software engineering, statistics and computer networks.", body_style),
    PageBreak(),
    Paragraph("SELECTED ENGINEERING WORK", section_style),
    role("Agentic Guardrail Engine for Financial AI", "Next.js · FastAPI · SQLAlchemy · Docker", "Governed agentic decision control", "Routes financial AI recommendations through deterministic policy, risk, fairness, audit and human-review controls.", ["Versioned policies, explainable risk contributors and persisted overrides.", "Only approve, reject or escalate outcomes are permitted."]),
    role("VeriNLI: Explainable Hallucination Verification", "Python · FastAPI · BM25 · NLI", "Evidence-grounded language systems", "Splits generated answers into claims, retrieves evidence, calibrates verdicts and produces reviewable reports.", ["Handles contradiction, abstention and conflicting credible sources.", "Seven test modules cover the pipeline, API, retrieval, calibration and adversarial cases."]),
    role("EduSentinel AI", "Python · FastAPI · SQLite", "Responsible educational AI infrastructure", "Combines teaching support, safeguarding triage, policy intelligence, governance telemetry and IT operations in a local-first platform.", ["Specialist service architecture with audit trails and human escalation.", "Includes policy grounding, explainability and multi-agent planning surfaces."]),
    role("Biomedical Named Entity Recognition", "PyTorch · Hugging Face Transformers · Jupyter", "MSc research", "Compared domain transformer families for biomedical token classification on JNLPBA.", ["Strongest saved run: F1 0.7831, precision 0.7359, recall 0.8369.", "Confidence-aware demo can defer uncertain spans for human review."]),
    role("QuantLab: LLM Quantisation Benchmarks", "NumPy · PyTorch · OpenVINO · FastAPI · React", "Model efficiency", "Measures INT8 reconstruction, memory, perplexity, latency and throughput under reproducible settings.", ["Separates simulated quantisation from deployable compressed inference."]),
    Paragraph("CORE CAPABILITIES", section_style),
    Paragraph("<b>AI systems:</b> Agentic AI, AI agents, autonomous LLM systems, multi-agent workflows, Generative AI, prompt engineering, MCP, Ollama", body_style),
    Paragraph("<b>NLP and ML:</b> Transformers, biomedical NER, NLI, embeddings, RAG, BM25, PyTorch, TensorFlow, scikit-learn, graph neural networks, model evaluation", body_style),
    Paragraph("<b>Responsible AI:</b> Explainability, governance, guardrails, human-in-the-loop controls, calibration, risk management, data ethics and auditability", body_style),
    Paragraph("<b>Engineering and operations:</b> Python, TypeScript, React, Next.js, FastAPI, SQL, REST APIs, Docker, GitHub Actions, IT operations, Office 365, networking and cybersecurity", body_style),
    Paragraph("SELECTED PROFESSIONAL LEARNING", section_style),
    Paragraph("IBM Building AI Agents and Agentic Workflows · Duke Explainable AI · Oxford Saïd AI Governance · Google Cloud Responsible AI for Developers · IBM Data Science · IBM Cybersecurity Analyst · Google IT Support", body_style),
    Spacer(1, 6),
    Paragraph("Review note: This résumé was refreshed from verified portfolio information and reviewed repository evidence. Certification credential URLs remain pending issuer-page verification.", small_style),
]

doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=16 * mm, bottomMargin=19 * mm, title="Saroswat Roy - AI Engineer and Data Scientist Resume", author="Saroswat Roy", subject="Professional resume")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
PUBLIC.write_bytes(OUTPUT.read_bytes())

image = Image.new("RGB", (128, 128), "#090b0f")
draw = ImageDraw.Draw(image)
draw.rectangle((8, 8, 119, 119), outline="#7dd3fc", width=4)
try:
    font = ImageFont.truetype("arialbd.ttf", 48)
except OSError:
    font = ImageFont.load_default()
bbox = draw.textbbox((0, 0), "SR", font=font)
draw.text(((128 - (bbox[2] - bbox[0])) / 2, (128 - (bbox[3] - bbox[1])) / 2 - 5), "SR", fill="#7dd3fc", font=font)
image.save(FAVICON, optimize=True)

print(OUTPUT)
print(PUBLIC)
print(FAVICON)

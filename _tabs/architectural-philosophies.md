---
# the default layout is 'page'
icon: fas fa-brain
order: 12
---

# Architectural Philosophy & Practices

My approach to architecture is rooted in pragmatism, transparency, and a relentless drive for improvement. Architecture is not just about technology choices—it's about enabling teams, reducing friction, and ensuring that systems can evolve safely and sustainably. I believe documentation is a living asset, not an afterthought; nothing is more permanent than a temporary solution, so we must think ahead and create designs that meet the whole of the business's needs, not just the flavour of the day.

---

## 🧠 Strategic Thinking & Architectural Stewardship

Architecture is a living discipline. I maintain and evolve a backlog of long-standing, partially implemented, and anticipated low-level designs (LLDs). Valuable proposals from the past shouldn’t be lost—if an idea still holds merit, I’ll work to resurrect and adapt it. Documenting architectural decisions (ADRs) is essential for transparency, knowledge sharing, and future-proofing.

---

## 🛠️ Operational Excellence

Operational excellence is non-negotiable. I believe in proactive drift detection and remediation, structured deprecation processes for outdated components, and automating routine maintenance. These practices ensure our systems remain robust, secure, and easy to operate.

---

## 🔐 Security & Compliance

Security must be embedded from the start. I champion a DevSecOps mindset, ensuring that confidentiality, integrity, and availability are considered in every architectural decision. For regulated domains like payments, I make sure we address vulnerabilities within SLA and maintain compliance (e.g., PCI DSS).

---

## 📚 Knowledge Management & Enablement

Architecture should empower, not obscure. I invest in onboarding guides, clear documentation, and internal developer portals like Backstage to make knowledge accessible and governance visible. Good documentation is a force multiplier for teams.

---

## 🧩 Systems Thinking & Governance

Tech debt is inevitable, but unmanaged tech debt is a risk. I help define what constitutes tech debt, advocate for its visibility, and align remediation with strategic goals. I believe in strong architecture board processes to ensure decisions are traceable and requirements are met. Incremental improvement is key—try not to introduce tech debt unknowingly, and mathematically prioritise its resolution.

---

## Why I Believe in These Practices

**What architectural failures or successes have most shaped your philosophy?**  
One of the most formative experiences was leading the modernisation of our commerce platform at Evri. We inherited a monolithic, legacy estate and had to decouple, standardise, and automate. Success came from focusing on creating, reusing, and enhancing domain-based microservices. Failures often stemmed from lack of alignment, poor communication, or neglecting operational realities—lessons that reinforced my belief in transparency and continuous feedback.

**How do you balance innovation with stability in your designs?**  
I believe in incremental change: introducing new patterns or technologies behind clear interfaces, with robust monitoring and rollback strategies. Stability comes from automated testing, ADRs, and a culture where it’s safe to challenge assumptions. Innovation is encouraged, but always with an eye on long-term maintainability and business value.

**What role do you think architects should play in day-to-day engineering?**  
Architects should remain close to delivery teams—not always hands-on, but in the "shotgun" position, ready to take the reins and steer back on course if needed. We provide guidance, review designs, and help unblock issues, but our goal is to enable, not gatekeep.

**How do you ensure your architectural decisions remain relevant as technology and business needs evolve?**  
By treating architecture as iterative and adaptive. I regularly review and update ADRs, encourage feedback from engineers, and keep an eye on emerging trends. I also advocate for regular retrospectives on architectural decisions, so we can learn and adjust as needed.

**What’s your approach to mentoring or enabling other architects and engineers?**  
Mentoring is about sharing context, not just answers. I encourage engineers to ask “why” and to participate in architectural discussions. I provide onboarding materials, run knowledge-sharing sessions, and make myself available for ad-hoc support. My goal is to build a culture where architectural thinking is everyone’s responsibility.

---

## Additional Principles

- **Strong Standards with Automated Enforcement:** I prefer strong standards that are automatically enforced. If enforcement isn’t automated or regularly reported, it doesn’t work—there must be consequences, even if it’s just failing builds, otherwise people will ignore them.
- **Business Needs First:** Always start with business needs—understand both short-term and long-term plans, consider user experience, and trace requirements through designs to tickets. Non-functionals are non-negotiable.

---

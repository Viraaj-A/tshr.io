---
link: "https://www.my-rights.info/prediction/"
company: Human Rights Violation Prediction
year: "2024"
project: "Legal Violation Prediction Tool"
work: "Germany's Federal Ministry of Education and Research"
credits:
  - name: "Prototype Fund"
    role: "Granting Organisation"
  - name: "TSHR"
    role: "Grantee"
thumbnail:
  url: "/work/prediction_demo.gif"
  alt: "A screen grab video of the human rights prediction tool being used"
---
As the video above shows, users don’t need formal legal language or perfect spelling. They simply describe their issue in plain words, and the system interprets it—even correcting typos—to identify key legal issues. From there, the issue is classified and matched with relevant human rights violations. Finally, a semantic search brings up related case law, allowing anyone—regardless of legal expertise—to gain a clear, detailed understanding of their situation with just a few clicks.

## Human Rights Violation Prediction Tool

The Human Rights Violation Prediction Tool is the world’s first platform that enables individuals to explore potential human rights violations by automatically comparing their situations with European Court of Human Rights (ECtHR) case law. Funded by the Prototype Fund and the German Federal Ministry of Education and Research, this innovative tool combines cutting-edge legal classification research and design principles grounded in decolonial studies, making complex human rights information accessible to those who need it most.

### Approach and Technology

- **Integration of Leading Academic Research**: This tool is built upon advanced research in legal classification, applying robust methodologies to categorize potential human rights issues with precision. It translates complex legal language into accessible insights, bridging academic advancements with practical, real-world applications.

- **Decolonial Design Concepts**: Following principles from decolonial studies, the tool is crafted to be accessible and relevant to marginalized populations often excluded from mainstream legal resources. By prioritizing inclusivity, the design ensures that users from varied backgrounds can engage meaningfully with human rights information.

- **Issue Conversion with ECHR Legal Converter**: The [ECHR Legal Converter](https://huggingface.co/TSHR-MR/echr_legal_converter), created by TSHR and which is made open source, interprets user inputs and transforms them into legally relevant terms aligned with ECtHR categories, facilitating accurate legal analysis.

- **Semantic Search Using FAISS**: The tool employs Facebook AI Similarity Search (FAISS) to perform semantic searches across ECtHR case law, providing users with relevant legal precedents and helping them understand how similar cases have been adjudicated.

- **Multi-Label Classification with RoBERTa**: A fine-tuned RoBERTa model categorizes user inputs into multiple potential human rights violation categories, offering a comprehensive view of possible infringements.

- **User-Friendly and Accessible Design**: With a strong focus on usability, the tool is designed for individuals with limited legal knowledge, providing straightforward insights into potential human rights violations without needing specialized expertise.

### Key Features

- **Open Source and Privacy-Focused**: The platform is fully open source, allowing organizations to host the tool internally and ensuring that sensitive user data remains private.
- **Automated Legal Insights**: Users can describe their situation in simple language, and the tool will identify relevant human rights issues, minimizing the need for costly legal consultations.
- **Empowering Self-Advocacy**: By providing direct access to relevant case law and legal classifications, the tool enables individuals to advocate for their rights more effectively.

This pioneering project by TSHR highlights our commitment to translating complex legal information into accessible, user-centered resources, empowering populations often overlooked by traditional legal systems.
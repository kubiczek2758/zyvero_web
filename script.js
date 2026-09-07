document.addEventListener("DOMContentLoaded", () => {
    /* Fade-up animations */
    const animatedElements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running";
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(el => {
        el.style.animationPlayState = "paused";
        observer.observe(el);
    });

    /* Modal elements */
    const modalOverlay = document.getElementById("modalOverlay");
    const modalTitle = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");
    const closeModalBtn = document.getElementById("closeModal");

    const openTosBtn = document.getElementById("openTos");
    const openPrivacyBtn = document.getElementById("openPrivacy");
    const openTosHeroBtn = document.getElementById("openTosHero");
    const openTosNavBtn = document.getElementById("openTosNav");

    /* Image Zoom */
    const previewImage = document.querySelector(".preview-image");
    const imageZoomOverlay = document.getElementById("imageZoomOverlay");
    const zoomedImage = document.getElementById("zoomedImage");

    if (previewImage) {
        previewImage.addEventListener("click", () => {
            zoomedImage.src = previewImage.src;
            imageZoomOverlay.classList.remove("hidden");
        });
    }

    imageZoomOverlay.addEventListener("click", () => {
        imageZoomOverlay.classList.add("hidden");
    });

    /* Full TOS content */
    const tosContent = `Zyvero — Terms of Service  
Effective date: October 1, 2026

By accessing or using Zyvero (the “Service”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, you may not use the Service.

1. Acceptance of Terms  
These Terms constitute a legally binding agreement between you and Zyvero. Your continued use of the Service, including after updates or modifications, signifies your acceptance of all current and future Terms. Zyvero may revise these Terms at any time, and updated versions will be posted within the application or on the official website.

2. Eligibility  
You must be at least 13 years old to use Zyvero. By creating an account, you represent that you meet the minimum age requirement, that the information you provide is accurate and complete, and that you have the legal capacity to enter into this agreement. Zyvero may suspend or terminate accounts that violate these requirements.

3. Account Registration and Security  
You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to keep your password secure, notify Zyvero immediately of any unauthorized access, and ensure that your account is used in compliance with these Terms. Zyvero is not liable for losses resulting from compromised accounts due to user negligence.

4. Acceptable Use  
You agree to use Zyvero only for lawful and permitted purposes. Prohibited actions include harassment, threats, impersonation, spamming, phishing, fraudulent activity, distribution of malware, attempts to bypass security measures, disruption of the Service, unauthorized scraping, automated access, or reverse engineering. Zyvero may take enforcement actions including warnings, suspensions, or permanent bans.

5. Prohibited Content  
You may not upload or share content that is illegal, hateful, violent, discriminatory, sexually explicit involving minors, promotes self-harm or dangerous activities, infringes intellectual property rights, includes personal data of others without consent, or is misleading or harmful. Zyvero may use automated systems and human moderators to detect, remove, or report prohibited content.

6. User Content and Licenses  
You retain ownership of all content you create and upload. By submitting content to Zyvero, you grant a non-exclusive, worldwide, limited license to store, process, display, and transmit your content to intended recipients. This license exists solely to operate the Service and ends when you delete your content, except for temporary technical backups and security logs.

7. Intellectual Property  
All Zyvero trademarks, logos, software, interfaces, and documentation are the exclusive property of Zyvero. You may not copy, modify, distribute, create derivative works, reverse engineer, or attempt to extract source code. Any exceptions require written permission from Zyvero.

8. Privacy and Data Handling  
Zyvero processes user data in accordance with applicable laws and its Privacy Policy. Zyvero may collect technical, diagnostic, and usage data to maintain and improve the Service, ensure security, analyze performance, and prevent abuse. Zyvero does not sell user data to third parties.

9. Security  
Zyvero implements technical and organizational measures to protect user data and system integrity. However, no online service can guarantee absolute security. You agree to use Zyvero responsibly and avoid actions that may compromise the platform.

10. Service Availability  
Zyvero may experience interruptions due to maintenance, updates, or unforeseen issues. Zyvero does not guarantee continuous, error-free, or fully secure operation of the Service.

11. Termination  
Zyvero may suspend or terminate your account if you violate these Terms, engage in harmful or unlawful behavior, or if required by law. You may delete your account at any time through the Profile section. Provisions related to intellectual property, liability, and indemnification survive termination.

12. Disclaimers  
The Service is provided “as is” and “as available.” Zyvero disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, non-infringement, and uninterrupted or error-free operation.

13. Limitation of Liability  
To the fullest extent permitted by law, Zyvero and its operators are not liable for indirect, incidental, special, or consequential damages, loss of data, profits, or revenue, unauthorized access to your account, or actions of third parties. Total liability shall not exceed the amount paid by you for the Service, if applicable.

14. Indemnification  
You agree to indemnify and hold harmless Zyvero and its operators from any claims, damages, losses, liabilities, or expenses arising from your use of the Service, your violation of these Terms, or your interactions with other users.

15. Reporting Violations  
Users may report violations or harmful behavior through Mod Mail or built-in reporting tools. Zyvero may investigate reports and take appropriate action, including notifying law enforcement when required.

16. Changes to Terms  
Zyvero may update these Terms at any time. Significant changes will be communicated through the application or official channels. Continued use of the Service constitutes acceptance of updated Terms.

17. Contact  
For questions regarding these Terms of Service, please contact Zyvero through Mod Mail or reach out directly to the service owner.
`;

    /* Full Privacy Policy content */
    const privacyContent = `Zyvero — Privacy Policy  
Effective date: October 1, 2026

This Privacy Policy explains how Zyvero collects, uses, stores, and protects your personal information when you use our messaging platform.

1. Information We Collect  
We collect only the information you provide directly, including your username, display name, email address, profile avatar, bio, status, friend list, group memberships, messages, attachments, and Mod Mail communications. Zyvero does not collect IP addresses, browser information, device information, operating system details, usage logs, or security-related metadata.

2. How We Use Your Information  
We use your information to operate and improve Zyvero, deliver messages, personalize your experience, enforce our Terms of Service, prevent abuse, provide customer support, and send important service notices. We may also use aggregated and anonymized data for analytics, performance monitoring, and product development.

3. Cookies and Local Storage  
Zyvero uses browser local storage to keep you signed in, remember your preferences, and maintain session integrity. We do not use third-party tracking cookies or external advertising trackers. Local storage may contain authentication tokens, theme settings, and interface preferences.

4. Data Sharing  
We do not sell your personal data. We may share information only when required by law, to comply with legal processes, to protect our rights, to respond to valid law enforcement requests, or with your explicit consent. Messages are visible only to intended recipients and authorized moderators when necessary for safety or policy enforcement.

5. Data Security  
We implement reasonable technical and organizational measures to protect your data, including hashed passwords, encrypted connections, rate limiting, access controls, and monitoring systems. However, no online service can guarantee absolute security. You are responsible for maintaining the security of your account credentials.

6. Data Retention  
Account data and messages are stored as long as your account is active. Deleted messages may remain in backups for a limited time due to system integrity and disaster recovery processes. Mod Mail tickets are automatically deleted seven days after closure. Technical logs may be retained temporarily for security and diagnostic purposes.

7. Your Rights  
You may access, update, or delete your account and profile data at any time from the Profile tab. You may request a copy of your data or ask us to delete specific content by contacting moderation. Depending on your jurisdiction, you may have additional rights such as data portability or objection to processing.

8. Children’s Privacy  
Zyvero is not intended for users under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with data, please contact us immediately so we can take appropriate action.

9. International Transfers  
Your data may be stored and processed on servers located outside your country. By using Zyvero, you consent to any such transfers, including transfers to jurisdictions with different data protection laws.

10. Changes to This Policy  
We may update this Privacy Policy from time to time. Significant changes will be communicated through the application or by email. Continued use of Zyvero after changes indicates acceptance of the updated policy.

11. Contact Us  
If you have questions about this Privacy Policy or your data, please open a Mod Mail ticket or contact the site owner.
`;

    /* Modal functions */
    function openModal(title, content) {
        modalTitle.textContent = title;
        modalText.textContent = content;
        modalOverlay.classList.remove("hidden");
    }

    function closeModal() {
        modalOverlay.classList.add("hidden");
    }

    /* Buttons */
    if (openTosBtn) {
        openTosBtn.addEventListener("click", () => openModal("Terms of Service", tosContent));
    }

    if (openTosHeroBtn) {
        openTosHeroBtn.addEventListener("click", () => openModal("Terms of Service", tosContent));
    }

    if (openTosNavBtn) {
        openTosNavBtn.addEventListener("click", () => openModal("Terms of Service", tosContent));
    }

    if (openPrivacyBtn) {
        openPrivacyBtn.addEventListener("click", () => openModal("Privacy Policy", privacyContent));
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
    }

    /* Close modal on overlay click */
    modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    /* ESC closes both modals */
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (!modalOverlay.classList.contains("hidden")) {
                closeModal();
            }
            if (!imageZoomOverlay.classList.contains("hidden")) {
                imageZoomOverlay.classList.add("hidden");
            }
        }
    });
});

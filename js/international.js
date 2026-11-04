/* ==========================================
   BYU-I FIND | INTERNATIONAL SUPPORT
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     OFFICIAL RESOURCE LINKS
     ========================================== */

  const base =
    "https://www.byui.edu/international-services/international-student-resources/";

  const resources = [
    {
      id: "applying",
      icon: "school",
      title: "I want to apply to BYU-Idaho as an international student",
      subtitle: "Find out how to begin the application process.",
      name: "Applying to BYU-Idaho",
      description:
        "This resource explains the application process for students coming to BYU-Idaho from another country.",
      note:
        "Check the current application requirements and deadlines before applying.",
      steps: [
        "Open the Applying to BYU-Idaho page.",
        "Review the admission requirements for international students.",
        "Check the application steps and deadlines.",
        "Prepare the documents requested by the university.",
        "Follow the instructions to apply."
      ],
      links: [
        {
          name: "Applying to BYU-Idaho",
          url: base + "applying-to-byu-idaho"
        }
      ],
      keywords:
        "apply application admission new students international requirements"
    },

    {
      id: "i20-documents",
      icon: "file-check",
      title: "I need to apply for my Form I-20",
      subtitle: "Learn how to get the document needed for your student visa.",
      name: "Form I-20",
      description:
        "The Form I-20 is an important immigration document for F-1 students. BYU-Idaho International Services issues it to eligible students.",
      note:
        "Students who have been conditionally admitted receive an invitation from International Services to begin the I-20 application.",
      steps: [
        "Open the Form I-20 page.",
        "Read the information about I-20 eligibility.",
        "Watch for instructions from International Services after conditional admission.",
        "Complete the required application steps.",
        "Review your I-20 when it is issued."
      ],
      links: [
        {
          name: "Form I-20 Information",
          url: base + "form-i"
        }
      ],
      keywords:
        "i20 i-20 form immigration documents sevis visa admission"
    },

    {
      id: "travel",
      icon: "plane",
      title: "I want to travel outside the United States",
      subtitle: "Check what you need before leaving and returning.",
      name: "International Student Travel",
      description:
        "This resource explains travel considerations for international students, including documents that may be needed when returning to the United States.",
      note:
        "Before traveling, confirm that your immigration documents are valid and check whether you need a new travel signature.",
      steps: [
        "Open the International Student Travel page.",
        "Review the travel requirements that apply to you.",
        "Check your passport, visa, and Form I-20.",
        "Follow the instructions for requesting a travel signature if needed.",
        "Contact International Services before traveling if you have questions."
      ],
      links: [
        {
          name: "Travel Information",
          url: base + "travel-1"
        }
      ],
      keywords:
        "travel signature passport visa i20 reentry trip international"
    },

    {
      id: "f1-status",
      icon: "shield-check",
      title: "I want to make sure I'm maintaining my F-1 status",
      subtitle: "Understand your responsibilities as an international student.",
      name: "Maintaining F-1 Visa Status",
      description:
        "This resource explains important requirements for maintaining F-1 student status while studying at BYU-Idaho.",
      note:
        "Changing your enrollment or other important student information may affect your status. Check with International Services before making changes.",
      steps: [
        "Open the Maintaining F-1 Visa Status page.",
        "Read the requirements for enrollment and academic progress.",
        "Review the information about valid immigration documents.",
        "Check which requirements apply to your situation.",
        "Contact International Services if you are unsure about anything."
      ],
      links: [
        {
          name: "Maintaining F-1 Visa Status",
          url: base + "maintaining-f-1-visa-status"
        }
      ],
      keywords:
        "f1 f-1 status enrollment full time classes immigration requirements"
    },

    {
      id: "employment",
      icon: "briefcase-business",
      title: "I want to work while studying at BYU-Idaho",
      subtitle: "Learn about employment rules for international students.",
      name: "International Student Employment",
      description:
        "This resource explains employment options and restrictions that may apply to international students.",
      note:
        "Do not begin employment without confirming that it is permitted under your immigration status and that you have any required authorization.",
      steps: [
        "Open the International Student Employment page.",
        "Review the different types of employment.",
        "Read the eligibility rules for your immigration status.",
        "Ask International Services about any required authorization.",
        "Confirm that you are allowed to work before starting a job."
      ],
      links: [
        {
          name: "International Student Employment",
          url: base + "employment-1"
        },
        {
          name: "Student Employment",
          url: "https://web.byui.edu/studentemployment/"
        }
      ],
      keywords:
        "employment campus jobs work student employment authorization"
    },

    {
      id: "internships",
      icon: "graduation-cap",
      title: "I want to complete an internship using CPT",
      subtitle: "Learn about internships and work authorization.",
      name: "International Student Internships",
      description:
        "This resource explains internship requirements for international students, including immigration considerations for practical training.",
      note:
        "An internship being approved by your department does not automatically mean you have permission to work. Confirm any CPT authorization before starting.",
      steps: [
        "Open the International Student Internships page.",
        "Review the internship and CPT information.",
        "Talk with your academic department about internship requirements.",
        "Contact International Services about your eligibility.",
        "Complete the required approval and authorization steps.",
        "Wait for authorization before beginning employment."
      ],
      links: [
        {
          name: "International Student Internships & CPT",
          url: base + "internships-1"
        },
        {
          name: "Handshake – Find Internships",
          url: "https://byui.joinhandshake.com/login"
        }
      ],
      keywords:
        "internships internship cpt curricular practical training authorization"
    },

    {
      id: "graduation",
      icon: "award",
      title: "I'm getting ready to graduate",
      subtitle: "Understand what international students need to do.",
      name: "Graduation Information",
      description:
        "This resource explains important immigration considerations for international students who are approaching graduation.",
      note:
        "If you plan to work after graduation, start learning about OPT early so you understand the application process and deadlines.",
      steps: [
        "Open the International Student Graduation page.",
        "Review the information for graduating students.",
        "Check your expected graduation date.",
        "Learn about the options available after completing your program.",
        "Contact International Services to discuss your plans."
      ],
      links: [
        {
          name: "Graduation Information",
          url: base + "graduation"
        },
        {
          name: "OPT Information",
          url: base + "optional-practical-training-opt"
        }
      ],
      keywords:
        "graduation graduating finish program international student next steps"
    },

    {
      id: "opt",
      icon: "calendar-check",
      title: "I want to apply for OPT after graduation",
      subtitle: "Learn about temporary work authorization after your degree.",
      name: "Optional Practical Training (OPT)",
      description:
        "OPT may allow eligible F-1 students to work in jobs related to their field of study. The BYU-Idaho resource explains the application process and responsibilities.",
      note:
        "OPT has important deadlines and approval requirements. Do not begin working until you are authorized to do so.",
      steps: [
        "Open the Optional Practical Training page.",
        "Review the eligibility and application timeline.",
        "Read the instructions for requesting an OPT recommendation.",
        "Prepare the required documents.",
        "Follow the university and USCIS application instructions.",
        "Review the employment reporting requirements."
      ],
      links: [
        {
          name: "Optional Practical Training (OPT)",
          url: base + "optional-practical-training-opt"
        }
      ],
      keywords:
        "opt optional practical training graduation ead work authorization"
    },

    {
      id: "stem-opt",
      icon: "flask-conical",
      title: "I want to apply for a STEM OPT extension",
      subtitle: "Learn about extending OPT after a qualifying STEM degree.",
      name: "STEM OPT",
      description:
        "Eligible students with qualifying STEM degrees may be able to apply for a 24-month extension of post-completion OPT.",
      note:
        "STEM OPT has additional requirements involving employers, training plans, deadlines, and reporting. Review the official instructions carefully.",
      steps: [
        "Open the BYU-Idaho STEM OPT page.",
        "Review the eligibility and application requirements.",
        "Check whether your degree and employment qualify.",
        "Work with your employer on the required training plan.",
        "Follow the instructions from International Services and USCIS.",
        "Keep track of reporting requirements after approval."
      ],
      links: [
        {
          name: "STEM OPT Extension",
          url: base + "stem-opt"
        }
      ],
      keywords:
        "stem opt extension science technology engineering mathematics i983"
    },

    {
      id: "deposit-refund",
      icon: "wallet",
      title: "I want to request my international student deposit",
      subtitle: "Find out when and how to request a refund.",
      name: "International Student Deposit Refund",
      description:
        "This resource explains when international students may request a deposit refund and how to begin the process.",
      note:
        "The deposit is generally not refundable while you are actively attending BYU-Idaho. The official page also explains limited withdrawals and refunds after leaving or completing your studies.",
      steps: [
        "Open the Deposit Refund page.",
        "Review the refund eligibility information.",
        "Check whether you qualify to request a refund.",
        "Find the Deposit Refund Request link on the page.",
        "Complete the request and follow any additional instructions."
      ],
      links: [
        {
          name: "Deposit Refund Information",
          url: base + "deposit-refund"
        }
      ],
      keywords:
        "deposit refund money international student graduation withdrawal"
    },

    {
      id: "transferring",
      icon: "arrow-left-right",
      title: "I want to transfer to another school",
      subtitle: "Understand the immigration steps for transferring.",
      name: "Transferring Schools",
      description:
        "This resource explains the process international students should review when transferring from BYU-Idaho to another school.",
      note:
        "A school transfer can affect your SEVIS record and immigration status. Coordinate with International Services before making the change.",
      steps: [
        "Open the Transferring Schools page.",
        "Review the transfer requirements.",
        "Confirm your admission and plans with the new school.",
        "Contact BYU-Idaho International Services about your SEVIS record.",
        "Follow the transfer instructions from both schools."
      ],
      links: [
        {
          name: "Transferring Schools",
          url: base + "transferring-schools"
        }
      ],
      keywords:
        "transfer transferring schools sevis new university international"
    },

    {
      id: "international-help",
      icon: "message-circle-question",
      title: "I still have questions about my immigration status",
      subtitle: "Find the right office to contact.",
      name: "BYU-Idaho International Services",
      description:
        "International Services is the university office that helps international students with immigration questions, student status, documents, and other related concerns.",
      note:
        "For questions about your personal immigration situation, contact International Services directly instead of relying only on general online information.",
      steps: [
        "Open the International Services website.",
        "Review the information for your situation.",
        "Write down your questions.",
        "Contact International Services or arrange an appointment.",
        "Follow the instructions given for your specific situation."
      ],
      links: [
        {
          name: "International Services",
          url: "https://www.byui.edu/international-services"
        }
      ],
      keywords:
        "international services advisor immigration questions help support contact"
    }
  ];

  /* ==========================================
     PAGE ELEMENTS
     ========================================== */

  const list = document.querySelector("#international-resource-list");
  const searchInput = document.querySelector("#resource-search");
  const searchButton = document.querySelector("#search-button");
  const count = document.querySelector(".international-resource-count");
  const noResults = document.querySelector("#no-results");

  if (!list || !searchInput) return;

  /* ==========================================
     CREATE RESOURCE GUIDES
     ========================================== */

  function createGuide(resource) {

    const steps = resource.steps
      .map(step => `<li>${step}</li>`)
      .join("");

    const resourceLinks = resource.links.map(link => `
      <a
        href="${link.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="guide-official-link"
      >
        ${link.name}
        <i data-lucide="external-link" aria-hidden="true"></i>
      </a>
    `).join("");

    return `
      <details
        class="resource-guide"
        id="${resource.id}"
        data-search="${resource.keywords}"
      >

        <summary>

          <span class="list-icon">
            <i data-lucide="${resource.icon}" aria-hidden="true"></i>
          </span>

          <span class="resource-details">
            <strong>${resource.title}</strong>
            <small>${resource.subtitle}</small>
          </span>

          <i
            class="guide-chevron"
            data-lucide="chevron-down"
            aria-hidden="true"
          ></i>

        </summary>

        <div class="guide-content">

          <h3>${resource.name}</h3>

          <p>${resource.description}</p>

          <p class="guide-note">
            <strong>Good to know:</strong>
            ${resource.note}
          </p>

          <h4>How to get started</h4>

          <ol>${steps}</ol>

          <div class="guide-resource-links">
            ${resourceLinks}
          </div>

        </div>

      </details>
    `;
  }

  /* ==========================================
     DISPLAY RESOURCES
     ========================================== */

  list.innerHTML = resources.map(createGuide).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* ==========================================
     SEARCH RESOURCES
     ========================================== */

  const guides = Array.from(
    list.querySelectorAll(".resource-guide")
  );

  function filterResources() {

    const query = searchInput.value.trim().toLowerCase();

    let visible = 0;

    guides.forEach(guide => {

      const searchableText = (
        (guide.dataset.search || "") + " " +
        guide.textContent
      ).toLowerCase();

      const matches = searchableText.includes(query);

      guide.hidden = !matches;

      if (matches) visible++;

    });

    if (count) {
      count.textContent =
        `${visible} ${visible === 1 ? "resource" : "resources"}`;
    }

    if (noResults) {
      noResults.hidden = visible !== 0;
    }

  }

  searchInput.addEventListener("input", filterResources);
  searchButton?.addEventListener("click", filterResources);

  filterResources();

});
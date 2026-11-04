/* ==========================================
   BYU-I FIND | HOUSING
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     HOUSING RESOURCES
     ========================================== */

  const resources = [
    {
      id: "approved-housing",
      icon: "house",
      title: "I need to find a place to live",
      subtitle: "Explore approved student housing near campus.",
      name: "BYU-Idaho Approved Housing Search",
      description:
        "The Approved Housing Search helps eligible students find apartment options near BYU-Idaho. You can compare housing properties and contact apartment management for more details.",
      note:
        "Single students ages 17–25 generally need approved housing unless an exception applies. Check the university's current eligibility rules before signing a contract.",
      steps: [
        "Open the Approved Housing Search.",
        "Explore the apartments listed.",
        "Compare prices, locations, and amenities.",
        "Contact the apartments you are interested in.",
        "Confirm availability and read the contract before signing."
      ],
      links: [
        {
          name: "Approved Housing Search",
          url: "https://web.byui.edu/approvedhousingsearch"
        },
        {
          name: "Housing for New Students",
          url: "https://www.byui.edu/housing/student-resources/new-students"
        }
      ],
      keywords:
        "housing apartments approved rent room place live rexburg"
    },

    {
      id: "community-housing",
      icon: "building-2",
      title: "I need housing for married students or students 26 and older",
      subtitle: "Explore community and university housing options.",
      name: "BYU-Idaho Community Housing",
      description:
        "BYU-Idaho provides information about community housing options for married students and older single students. The university also has University Village Apartments for eligible married students.",
      note:
        "Community housing is different from approved single-student housing. Availability, eligibility, and rental requirements vary by property.",
      steps: [
        "Open the BYU-Idaho Housing website.",
        "Find the community housing or married housing section.",
        "Explore the housing options available.",
        "Contact the property to ask about availability and costs.",
        "Review the rental agreement before signing."
      ],
      links: [
        {
          name: "Community Housing",
          url: "https://www.byui.edu/housing/community-housing"
        },
        {
          name: "BYU-Idaho Housing",
          url: "https://www.byui.edu/housing/"
        }
      ],
      keywords:
        "married housing family university village community housing 26 older"
    },

    {
      id: "housing-contract",
      icon: "file-text",
      title: "I don't understand my housing contract",
      subtitle: "Learn what to check before signing a lease.",
      name: "Know Your Housing Contract",
      description:
        "BYU-Idaho provides videos and information to help students understand their housing contracts, including rent, fees, deposits, and other responsibilities.",
      note:
        "A housing contract is a binding agreement. Pay attention to the contract length, payment dates, cancellation rules, deposits, and any addendum.",
      steps: [
        "Open the Know Your Housing Contract page.",
        "Watch the videos that relate to your questions.",
        "Read your own contract and addendum carefully.",
        "Write down any terms you do not understand.",
        "Ask your apartment management or Housing Office for clarification before signing."
      ],
      url: "https://www.byui.edu/housing/student-resources/housing-contract",
      keywords:
        "lease contract rent deposit fees signing agreement rules"
    },

    {
      id: "roommate-problems",
      icon: "users-round",
      title: "I'm having problems with my roommates",
      subtitle: "Find ways to improve communication and solve conflicts.",
      name: "BYU-Idaho Student Living",
      description:
        "Student Living provides guidance to help roommates communicate, respect one another, and create a better apartment environment.",
      note:
        "For serious safety concerns, get help immediately rather than trying to solve the situation alone.",
      steps: [
        "Open the Student Housing Resources page.",
        "Find the Roommate Guide.",
        "Review the suggestions for communication and problem-solving.",
        "Talk with your roommates when it is safe to do so.",
        "Contact apartment management or the Housing Office if you need more help."
      ],
      links: [
        {
          name: "Student Housing Resources",
          url: "https://www.byui.edu/housing/student-resources"
        },
        {
          name: "Student Living",
          url: "https://www.byui.edu/student-living/"
        }
      ],
      keywords:
        "roommates conflict problems communication apartment disagreement"
    },

    {
      id: "housing-standards",
      icon: "clipboard-list",
      title: "I want to understand apartment living rules",
      subtitle: "Review housing guidelines and living standards.",
      name: "BYU-Idaho Apartment Living Standards",
      description:
        "Apartment Living Standards explain expectations for student housing and help students understand the rules that apply to apartment life.",
      note:
        "Review the latest version of the standards because university housing policies may change.",
      steps: [
        "Open the Student Housing Resources page.",
        "Find the Apartment Living Standards.",
        "Read the sections that apply to your questions.",
        "Review any additional rules in your apartment contract.",
        "Ask the Housing Office if you need clarification."
      ],
      links: [
        {
          name: "Student Housing Resources",
          url: "https://www.byui.edu/housing/student-resources"
        },
        {
          name: "Apartment Living Standards 2026",
          url: "https://brightspotcdn.byui.edu/cb/8b/0594c827479b815db09844ad07ca/apartment-living-standards-2026.pdf"
        }
      ],
      keywords:
        "apartment living standards rules guidelines visitors cleaning responsibilities"
    },

    {
      id: "housing-dates",
      icon: "calendar-days",
      title: "I need to know when I can move in or move out",
      subtitle: "Find housing dates and important deadlines.",
      name: "BYU-Idaho Housing Contract Dates",
      description:
        "The Housing Contract Dates page lists important dates for different semesters, including check-in, check-out, and contract cancellation deadlines.",
      note:
        "Dates can vary by semester and housing situation. Confirm your specific move-in or move-out instructions with your apartment management.",
      steps: [
        "Open the Housing Contract Dates page.",
        "Find the semester you need.",
        "Review the check-in, check-out, and cancellation dates.",
        "Compare those dates with your own contract.",
        "Contact your apartment management if you have questions."
      ],
      url: "https://www.byui.edu/housing/student-resources/contract-dates",
      keywords:
        "move in move out check in checkout semester housing dates deadlines"
    },

    {
      id: "sell-contract",
      icon: "refresh-cw",
      title: "I need to cancel or sell my housing contract",
      subtitle: "Learn about contract changes and possible fees.",
      name: "BYU-Idaho Housing Contract Resources",
      description:
        "If your housing plans change, the university provides information about selling a housing contract and understanding contract obligations.",
      note:
        "Cancellation or transfer may involve deadlines, fees, and approval from apartment management. Do not assume you are released from payment until the contract change is confirmed.",
      steps: [
        "Read the cancellation and transfer terms in your contract.",
        "Open the Know Your Housing Contract page.",
        "Watch the video about selling a housing contract.",
        "Contact your apartment management about available options.",
        "Get any approved changes confirmed in writing."
      ],
      links: [
        {
          name: "Know Your Housing Contract",
          url: "https://www.byui.edu/housing/student-resources/housing-contract"
        },
        {
          name: "Housing Contract Dates",
          url: "https://www.byui.edu/housing/student-resources/contract-dates"
        }
      ],
      keywords:
        "cancel contract sell contract transfer lease cancellation refund fees"
    },

    {
      id: "housing-disputes",
      icon: "message-circle-warning",
      title: "I'm having a problem with my landlord or apartment",
      subtitle: "Learn what to do about housing disagreements.",
      name: "BYU-Idaho Housing Disputes",
      description:
        "BYU-Idaho provides information about housing disputes, including disagreements between students and apartment management.",
      note:
        "Keep copies of your contract, payment records, photos, and messages. If there is an immediate threat to your safety, contact emergency services.",
      steps: [
        "Read your housing contract and any related rules.",
        "Write down what happened and save relevant records.",
        "Contact your landlord or manager about the problem if it is safe.",
        "Review the Housing Disputes video.",
        "Contact the Housing Office if the problem remains unresolved."
      ],
      links: [
        {
          name: "Housing Disputes Information",
          url: "https://www.byui.edu/housing/student-resources/housing-contract"
        },
        {
          name: "Housing Office",
          url: "https://www.byui.edu/housing/"
        }
      ],
      keywords:
        "landlord dispute apartment maintenance complaint problem manager deposit"
    },

    {
      id: "housing-exceptions",
      icon: "file-check",
      title: "I want to live somewhere other than approved housing",
      subtitle: "Learn about housing exceptions and eligibility.",
      name: "BYU-Idaho Approved Housing Exceptions",
      description:
        "Some students may qualify for an exception to the approved housing requirement. The university explains the eligibility rules and how to request an exception.",
      note:
        "An exception is not automatic. Follow the university's process and wait for a decision before making housing commitments that depend on approval.",
      steps: [
        "Open the Approved Housing Exceptions page.",
        "Read the eligibility requirements.",
        "Review the situations that may qualify for an exception.",
        "Follow the instructions to submit a request if eligible.",
        "Wait for confirmation from the Housing Office."
      ],
      url: "https://www.byui.edu/housing/student-resources/approved-housing-exceptions",
      keywords:
        "approved housing exception exemption family parents relative off campus"
    },

    {
      id: "housing-support",
      icon: "circle-help",
      title: "I still have questions about housing",
      subtitle: "Find the right office to contact for help.",
      name: "BYU-Idaho Housing & Student Living Office",
      description:
        "The Housing & Student Living Office helps students understand housing policies, eligibility, contracts, and available housing resources.",
      note:
        "Housing & Student Living Office: Kimball 240. Phone: (208) 496-9220. Email: housing@byui.edu.",
      steps: [
        "Open the BYU-Idaho Housing website.",
        "Review the student resources related to your question.",
        "Write down your question and any important details.",
        "Contact the Housing Office using the official contact information.",
        "Follow the instructions they provide for your situation."
      ],
      links: [
        {
          name: "BYU-Idaho Housing",
          url: "https://www.byui.edu/housing/"
        },
        {
          name: "Student Housing Resources",
          url: "https://www.byui.edu/housing/student-resources"
        }
      ],
      keywords:
        "housing office contact support questions help assistance kimball"
    }
  ];

  /* ==========================================
     PAGE ELEMENTS
     ========================================== */

  const list = document.querySelector("#housing-resource-list");
  const searchInput = document.querySelector("#resource-search");
  const searchButton = document.querySelector("#search-button");
  const count = document.querySelector(".housing-resource-count");
  const noResults = document.querySelector("#no-results");

  if (!list || !searchInput) return;

  /* ==========================================
     CREATE RESOURCE GUIDES
     ========================================== */

  function createGuide(resource) {

    const steps = resource.steps
      .map(step => `<li>${step}</li>`)
      .join("");

    const resourceLinks = resource.links
      ? resource.links.map(link => `
          <a
            href="${link.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="guide-official-link"
          >
            ${link.name}
            <i data-lucide="external-link" aria-hidden="true"></i>
          </a>
        `).join("")
      : `
          <a
            href="${resource.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="guide-official-link"
          >
            ${resource.name}
            <i data-lucide="external-link" aria-hidden="true"></i>
          </a>
        `;

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
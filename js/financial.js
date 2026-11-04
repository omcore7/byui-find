/* ==========================================
   BYU-I FIND | PAYING FOR SCHOOL
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     FINANCIAL RESOURCES
     ========================================== */

  const resources = [
    {
      id: "financial-aid",
      icon: "landmark",
      title: "I need help paying for college",
      subtitle: "Explore financial aid options for school expenses.",
      name: "BYU-Idaho Financial Aid",
      description:
        "The Financial Aid Office helps students understand available aid, application steps, and requirements. Depending on eligibility, aid may include grants, scholarships, or loans.",
      eligibility:
        "Financial aid requirements depend on the type of aid and your student status. Not every student qualifies for federal aid.",
      steps: [
        "Open the BYU-Idaho Financial Aid website.",
        "Review the types of aid available.",
        "Check the requirements and deadlines for each option.",
        "Follow the application instructions or contact Financial Aid if you have questions."
      ],
      url: "https://www.byui.edu/financial-aid",
      keywords:
        "financial aid grants loans tuition money assistance college"
    },

    {
      id: "scholarships",
      icon: "graduation-cap",
      title: "I want to find scholarships",
      subtitle: "Look for ways to lower the cost of school.",
      name: "BYU-Idaho Scholarships",
      description:
        "BYU-Idaho offers different scholarship opportunities. Some are based on academic performance, financial need, or other requirements.",
      eligibility:
        "Requirements and application deadlines depend on the scholarship. Some scholarships require an application.",
      steps: [
        "Open the BYU-Idaho Scholarships page.",
        "Review the different scholarship opportunities.",
        "Check which scholarships you may qualify for.",
        "Complete any required applications before the deadline."
      ],
      url: "https://www.byui.edu/financial-aid/explore-byui-scholarships",
      keywords:
        "scholarship scholarships academic merit need based awards funding"
    },

    {
      id: "fafsa",
      icon: "file-text",
      title: "I don't know how to apply for FAFSA",
      subtitle: "Learn how to apply for federal student aid.",
      name: "Federal Student Aid (FAFSA)",
      description:
        "The FAFSA is an application used to determine eligibility for federal student aid, including certain grants, loans, and work-study opportunities.",
      eligibility:
        "Federal student aid has citizenship or eligible noncitizen requirements, along with other conditions. Most F-1 international students are not eligible.",
      steps: [
        "Visit the official Federal Student Aid website.",
        "Check whether you meet the eligibility requirements.",
        "Create or sign in to your StudentAid.gov account.",
        "Complete the FAFSA for the correct academic year.",
        "Review your submission and follow any requests from the university."
      ],
      url: "https://studentaid.gov/h/apply-for-aid/fafsa",
      keywords:
        "fafsa federal student aid application pell grant loans"
    },

    {
      id: "tuition",
      icon: "calculator",
      title: "I want to know how much school costs",
      subtitle: "Review tuition, fees, and other expenses.",
      name: "BYU-Idaho Cost and Aid",
      description:
        "The Cost and Aid page helps students understand tuition and other expenses that may come with attending BYU-Idaho.",
      eligibility:
        "Tuition rates can depend on enrollment, student category, and other factors. Review the current rates that apply to you.",
      steps: [
        "Open the Cost and Aid page.",
        "Find the tuition information that applies to your situation.",
        "Review additional expenses such as housing, books, and food.",
        "Use the information to estimate your semester budget."
      ],
      url: "https://www.byui.edu/cost-and-aid",
      keywords:
        "tuition fees cost school expenses semester estimate"
    },

    {
      id: "student-employment",
      icon: "briefcase-business",
      title: "I need a job while attending school",
      subtitle: "Find opportunities to earn money as a student.",
      name: "BYU-Idaho Student Employment",
      description:
        "Student Employment helps students explore job opportunities connected with the university. Campus jobs may help students earn income while attending classes.",
      eligibility:
        "Employment depends on available positions and work authorization. International students must follow the employment rules that apply to their immigration status.",
      steps: [
        "Open the Student Employment website.",
        "Review current job opportunities and application instructions.",
        "Choose positions that fit your schedule and eligibility.",
        "Apply using the instructions in the job posting."
      ],
      url: "https://web.byui.edu/studentemployment/",
      keywords:
        "student jobs employment work campus income part time"
    },

    {
      id: "food-assistance",
      icon: "shopping-basket",
      title: "I'm struggling to afford groceries",
      subtitle: "Find free food pantries and community support in Rexburg.",
      name: "Rexburg Food Assistance",
      description:
        "If you're having trouble paying for groceries, there are local organizations that provide food assistance. You can explore these resources and find out when and where food is available.",
      eligibility:
        "Each food pantry has its own requirements. Some services are limited to Madison County residents. Check schedules, locations, and eligibility before visiting.",
      steps: [
        "Explore the local food assistance options below.",
        "Check the latest distribution schedule and location.",
        "Review any residency or identification requirements.",
        "Contact the organization if you have questions.",
        "Visit during the confirmed distribution hours."
      ],
      links: [
        {
          name: "Rexburg Mobile Food Pantry — JustServe",
          url: "https://www.justserve.org/RexburgMobileFoodPantry"
        },
        {
          name: "Rexburg Mobile Food Pantry — Facebook",
          url: "https://www.facebook.com/groups/rmfpcommunity/?locale=es_LA"
        },
        {
          name: "Flourish Point — Local Food Pantries",
          url: "https://flourishpoint.org/local-food-pantries"
        },
        {
          name: "Family Crisis Center — Food Pantry",
          url: "https://healthandwelfare.idaho.gov/food-banks-food-sites-and-food-pantries/family-crisis-center"
        }
      ],
      keywords:
        "free food food pantry rexburg mobile food pantry groceries meals hunger food assistance family crisis center flourish point justserve"
    },

    {
      id: "budget",
      icon: "piggy-bank",
      title: "I have trouble managing my money",
      subtitle: "Learn how to plan for school expenses.",
      name: "BYU-Idaho Financial Aid Guide",
      description:
        "The Financial Aid Guide explains financial aid processes and important information that can help students plan for educational costs.",
      eligibility:
        "This guide is an information resource. Financial aid programs mentioned in it may have separate eligibility requirements.",
      steps: [
        "Open the Financial Aid Guide.",
        "Review the information about paying for school.",
        "Make a list of your expected income and expenses.",
        "Create a budget for tuition, housing, food, and personal needs."
      ],
      url: "https://www.byui.edu/financial-aid/financial-aid-guide",
      keywords:
        "budget budgeting money management savings financial planning expenses"
    },

    {
      id: "aid-questions",
      icon: "circle-help",
      title: "I'm confused about my financial aid",
      subtitle: "Find answers about requirements and next steps.",
      name: "BYU-Idaho Financial Aid Office",
      description:
        "Financial aid can be confusing, especially when you're waiting for an award, checking requirements, or trying to understand why your aid changed.",
      eligibility:
        "The Financial Aid Office can explain university processes and help you understand requirements for specific programs.",
      steps: [
        "Sign in to your student account and review your financial aid information.",
        "Write down the requirement or message you don't understand.",
        "Visit the Financial Aid website.",
        "Contact the Financial Aid Office using its official contact options."
      ],
      url: "https://www.byui.edu/financial-aid",
      keywords:
        "financial aid questions award status requirements missing documents help"
    },

    {
      id: "unexpected-expenses",
      icon: "hand-heart",
      title: "I'm dealing with unexpected financial problems",
      subtitle: "Find out where to ask for student support.",
      name: "BYU-Idaho Dean of Students",
      description:
        "Unexpected expenses or personal challenges can make school difficult. The Dean of Students is a starting point for asking about university support and possible referrals.",
      eligibility:
        "Available assistance depends on your circumstances and current university or community programs. Financial support is not guaranteed.",
      steps: [
        "Visit the Dean of Students website.",
        "Review the available student support information.",
        "Contact the office and explain what kind of help you need.",
        "Ask which university or community resources may fit your situation."
      ],
      url: "https://www.byui.edu/dean-of-students/student-faqs",
      keywords:
        "emergency money hardship unexpected expenses financial crisis assistance support"
    }
  ];

  /* ==========================================
     PAGE ELEMENTS
     ========================================== */

  const list = document.querySelector(
    "#financial-resource-list"
  );

  const searchInput = document.querySelector(
    "#resource-search"
  );

  const searchButton = document.querySelector(
    "#search-button"
  );

  const count = document.querySelector(
    ".financial-resource-count"
  );

  const noResults = document.querySelector(
    "#no-results"
  );

  if (!list || !searchInput) return;

  /* ==========================================
     CREATE RESOURCE GUIDES
     ========================================== */

  function createGuide(resource) {

    // Create the step-by-step instructions
    const steps = resource.steps
      .map(step => `<li>${step}</li>`)
      .join("");

    // Create one or multiple resource buttons
    const resourceLinks = resource.links
      ? resource.links.map(link => `
          <a
            href="${link.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="guide-official-link"
          >
            ${link.name}
            <i
              data-lucide="external-link"
              aria-hidden="true"
            ></i>
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
            <i
              data-lucide="external-link"
              aria-hidden="true"
            ></i>
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
            <i
              data-lucide="${resource.icon}"
              aria-hidden="true"
            ></i>
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

          <p class="guide-eligibility">
            <strong>Good to know:</strong>
            ${resource.eligibility}
          </p>

          <h4>How to get started</h4>

          <ol>
            ${steps}
          </ol>

          <div class="guide-resource-links">
            ${resourceLinks}
          </div>

        </div>

      </details>
    `;
  }

  /* ==========================================
     DISPLAY RESOURCE GUIDES
     ========================================== */

  list.innerHTML = resources
    .map(createGuide)
    .join("");

  // Initialize icons in the new cards
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* ==========================================
     SEARCH FUNCTIONALITY
     ========================================== */

  const guides = Array.from(
    list.querySelectorAll(".resource-guide")
  );

  function filterResources() {

    const query = searchInput.value
      .trim()
      .toLowerCase();

    let visible = 0;

    guides.forEach(guide => {

      const searchableText = (
        (guide.dataset.search || "") + " " +
        guide.textContent
      ).toLowerCase();

      const matches = searchableText.includes(query);

      guide.hidden = !matches;

      if (matches) {
        visible++;
      }

    });

    // Update resource count
    if (count) {
      count.textContent =
        `${visible} ${visible === 1 ? "resource" : "resources"}`;
    }

    // Show message if no resources match
    if (noResults) {
      noResults.hidden = visible !== 0;
    }

  }

  // Search while typing
  searchInput.addEventListener(
    "input",
    filterResources
  );

  // Search button
  searchButton?.addEventListener(
    "click",
    filterResources
  );

  // Show all resources when the page loads
  filterResources();

});
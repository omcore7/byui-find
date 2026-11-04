/* ==========================================================
   BYU-I Find | Main JavaScript
   Shared navigation, search, Discover, Finder, and Spotlight
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // ----------------------------------------------------------
  // 1. Lucide Icons
  // ----------------------------------------------------------

  function updateIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  updateIcons();

  // ----------------------------------------------------------
  // 2. Open Recommended Resource Guides
  // ----------------------------------------------------------

  const guideSearchTerms = {
    "food": ["food", "pantry"],
    "financial-aid": ["financial aid", "paying for school"],
    "scholarship": ["scholarship"],
    "fafsa": ["fafsa"],
    "job-on-campus": ["job on campus", "campus job"],
    "other-job-postings": ["other job postings", "job postings"],
    "career-choice": ["not sure what career", "career i want"],
    "internship": ["find an internship", "internship"],
    "resume": ["improve my resume", "resume"],
    "interview": ["practice for a job interview", "interview"],
    "employers": ["meet employers", "career fair"],
    "employment-preparation": ["prepared for employment", "employment preparation"],
    "tutoring": ["tutor", "struggling in a class"],
    "study": ["studying", "study"],
    "writing": ["writing", "essay"],
    "advising": ["advising", "planning my classes"],
    "library": ["library"],
    "study-skills": ["study skills", "study habits"],
    "counseling": ["counseling", "someone to talk"],
    "overwhelmed": ["overwhelmed", "stress"],
    "crisis": ["crisis", "urgent"],
    "medical": ["medical", "health center", "doctor"],
    "wellness": ["wellness", "wellbeing"],
    "fitness": ["fitness", "exercise", "gym"],
    "form-i": ["form i-20", "i-20"],
    "maintaining-f-1": ["maintaining f-1", "f-1 visa status", "f-1 status"],
    "travel": ["travel"],
    "employment": ["employment", "work"],
    "internships": ["internship", "cpt"],
    "opt": ["optional practical training", "opt"],
    "stem-opt": ["stem opt"],
    "housing": ["housing", "apartment"],
    "contract": ["contract", "lease"],
    "roommate": ["roommate"],
    "friends": ["friends", "societies", "clubs"],
    "activities": ["activities", "involved", "i-belong"],
    "events": ["events"],
    "sports": ["sports", "intramural"]
  };

  const requestedGuide = new URLSearchParams(
    window.location.search
  ).get("guide");

  if (requestedGuide) {
    let openedGuide = false;

    const terms = guideSearchTerms[requestedGuide] || [
      requestedGuide.replace(/-/g, " ")
    ];

    function openRequestedGuide() {
      if (openedGuide) return true;

      const guides = [
        ...document.querySelectorAll("details.resource-guide")
      ];

      if (guides.length === 0) return false;

      // Prefer an exact guide ID when available.
      let match = guides.find(
        (guide) => guide.id === requestedGuide
      );

      if (!match) {
        match = guides.find((guide) => {
          const title = (
            guide.querySelector("summary")?.textContent || ""
          ).toLowerCase().replace(/\s+/g, " ");

          return terms.some((term) => title.includes(term));
        });
      }

      if (!match) return false;

      openedGuide = true;
      match.hidden = false;
      match.open = true;

      requestAnimationFrame(() => {
        match.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });

      return true;
    }

    if (!openRequestedGuide()) {
      const observer = new MutationObserver(() => {
        if (openRequestedGuide()) {
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      window.addEventListener("load", () => {
        openRequestedGuide();

        setTimeout(() => {
          observer.disconnect();
        }, 3000);
      }, { once: true });
    }
  }

  // ----------------------------------------------------------
  // 3. Mobile Navigation
  // ----------------------------------------------------------

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(
    ".navigation, .main-nav"
  );

  function setMenuState(isOpen) {
    if (!menuToggle || !navigation) return;

    navigation.classList.toggle("open", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.innerHTML = isOpen
      ? '<i data-lucide="x"></i>'
      : '<i data-lucide="menu"></i>';

    updateIcons();
  }

  function closeMenu() {
    setMenuState(false);
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      setMenuState(!navigation.classList.contains("open"));
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  // ----------------------------------------------------------
  // 4. Active Navigation on Scroll
  // ----------------------------------------------------------

  const sectionLinks = document.querySelectorAll(
    '.navigation a[href^="#"], .main-nav a[href^="#"]'
  );

  const trackedSections = [...sectionLinks]
    .map((link) => document.querySelector(
      link.getAttribute("href")
    ))
    .filter(Boolean);

  function updateActiveNavigation() {
    if (!trackedSections.length) return;

    const scrollPosition = window.scrollY + 160;
    let activeSection = trackedSections[0];

    trackedSections.forEach((section) => {
      if (section.offsetTop <= scrollPosition) {
        activeSection = section;
      }
    });

    sectionLinks.forEach((link) => {
      const active = link.getAttribute("href") ===
        `#${activeSection.id}`;

      link.classList.toggle("active", active);

      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if (sectionLinks.length) {
    window.addEventListener(
      "scroll",
      updateActiveNavigation,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateActiveNavigation
    );

    updateActiveNavigation();
  }

  // ----------------------------------------------------------
  // 5. Reusable Resource Filtering
  // ----------------------------------------------------------

  function filterResources(resources, query) {
    let visibleCount = 0;

    resources.forEach((resource) => {
      const searchableText = (
        resource.textContent + " " +
        (resource.dataset.search || "")
      ).toLowerCase();

      const matches = searchableText.includes(query);

      resource.hidden = !matches;

      if (matches) visibleCount++;
    });

    return visibleCount;
  }

  // ----------------------------------------------------------
  // 6. Recommendation Resource Library
  // ----------------------------------------------------------

  /*
   * Each resource links to its category page.
   * The guide query parameter helps open the matching guide.
   */

  const resourceLibrary = {};

  function addResource(
    id, title, description, icon, color,
    page, guide, keywords
  ) {
    resourceLibrary[id] = {
      title,
      description,
      icon,
      color,
      url: `pages/${page}.html?guide=${guide}`,
      keywords
    };
  }

  // Paying for School

  addResource(
    "foodPantry",
    "I need help with food",
    "Find food assistance and support options.",
    "shopping-basket", "yellow",
    "financial", "food",
    "food hungry pantry groceries meals"
  );

  addResource(
    "financialAid",
    "I need help paying for school",
    "Explore financial aid and tuition support.",
    "coins", "yellow",
    "financial", "financial-aid",
    "financial money tuition grants aid"
  );

  addResource(
    "scholarships",
    "I want to apply for scholarships",
    "Learn where to find scholarship opportunities.",
    "award", "yellow",
    "financial", "scholarship",
    "scholarships money awards"
  );

  addResource(
    "fafsa",
    "I need help with FAFSA",
    "Find guidance for applying for federal student aid.",
    "clipboard-list", "yellow",
    "financial", "fafsa",
    "fafsa federal aid application"
  );

  // Career & Jobs

  addResource(
    "studentEmployment",
    "I need a job on campus",
    "Find student employment information.",
    "briefcase-business", "teal",
    "career", "job-on-campus",
    "job jobs student employment campus work"
  );

  addResource(
    "helpWanted",
    "I want to see other job postings",
    "Explore additional job listings.",
    "search", "teal",
    "career", "other-job-postings",
    "job postings hiring work"
  );

  addResource(
    "careerCenter",
    "I am not sure what career I want",
    "Find career guidance and next steps.",
    "target", "teal",
    "career", "career-choice",
    "career advice guidance"
  );

  addResource(
    "internships",
    "I want to find an internship",
    "Learn about internships and Handshake.",
    "file-user", "teal",
    "career", "internship",
    "internship intern handshake cpt"
  );

  addResource(
    "resumeHelp",
    "I want to improve my resume",
    "Explore resume support and VMock.",
    "file-text", "teal",
    "career", "resume",
    "resume vmock cv"
  );

  addResource(
    "interviews",
    "I want to practice for an interview",
    "Find interview preparation resources.",
    "messages-square", "teal",
    "career", "interview",
    "interview practice job"
  );

  addResource(
    "careerEvents",
    "I want to meet employers",
    "Find career fairs and networking events.",
    "handshake", "teal",
    "career", "employers",
    "career fair employers networking"
  );

  addResource(
    "employmentPrep",
    "I want to prepare for employment",
    "Explore job readiness and career preparation.",
    "badge-check", "teal",
    "career", "employment-preparation",
    "employment readiness preparation"
  );

  // My Classes

  addResource(
    "tutoring",
    "I am struggling in a class",
    "Find tutoring and help with coursework.",
    "graduation-cap", "blue",
    "classes", "tutoring",
    "tutor class homework academic"
  );

  addResource(
    "dropInLabs",
    "I need help studying",
    "Find labs and study support.",
    "book-open-check", "blue",
    "classes", "study",
    "study labs studying"
  );

  addResource(
    "writingCenter",
    "I need help with writing",
    "Find help with papers and assignments.",
    "file-pen-line", "blue",
    "classes", "writing",
    "writing essays papers"
  );

  addResource(
    "academicAdvising",
    "I need help planning my classes",
    "Explore academic advising and course planning.",
    "compass", "blue",
    "classes", "advising",
    "academic advisor classes planning"
  );

  addResource(
    "library",
    "I need research or library help",
    "Find library and research resources.",
    "library", "blue",
    "classes", "library",
    "library books research"
  );

  addResource(
    "studySkills",
    "I want better study habits",
    "Explore ways to study and manage time.",
    "lightbulb", "blue",
    "classes", "study-skills",
    "study time management habits"
  );

  // My Health

  addResource(
    "counseling",
    "I need someone to talk to",
    "Find counseling and emotional support.",
    "messages-square", "green",
    "health", "counseling",
    "counseling stress anxiety talk"
  );

  addResource(
    "getHelp",
    "I am feeling overwhelmed",
    "Explore emotional wellbeing support.",
    "heart-handshake", "green",
    "health", "overwhelmed",
    "overwhelmed stress support"
  );

  addResource(
    "crisisSupport",
    "I need urgent emotional support",
    "Find information about urgent support.",
    "heart-pulse", "green",
    "health", "crisis",
    "crisis emergency urgent 988"
  );

  addResource(
    "healthCenter",
    "I need medical care",
    "Explore the Student Health Center.",
    "stethoscope", "green",
    "health", "medical",
    "doctor sick medical health"
  );

  addResource(
    "wellness",
    "I want to improve my wellbeing",
    "Find wellness and healthy living resources.",
    "leaf", "green",
    "health", "wellness",
    "wellness sleep nutrition"
  );

  addResource(
    "fitness",
    "I want to exercise",
    "Find fitness and recreation opportunities.",
    "dumbbell", "green",
    "health", "fitness",
    "gym exercise fitness"
  );

  // International Support

  addResource(
    "internationalServices",
    "I need help with my Form I-20",
    "Find guidance for international student documents.",
    "globe", "purple",
    "international", "form-i",
    "international form i-20 sevis"
  );

  addResource(
    "visaImmigration",
    "I want to maintain my F-1 status",
    "Find guidance on maintaining student status.",
    "plane", "purple",
    "international", "maintaining-f-1",
    "visa immigration f1 status"
  );

  addResource(
    "travel",
    "I need to travel internationally",
    "Review travel guidance for F-1 students.",
    "plane-takeoff", "purple",
    "international", "travel",
    "travel visa passport signature"
  );

  addResource(
    "workRules",
    "I want to work as an international student",
    "Find guidance about F-1 employment rules.",
    "file-check", "purple",
    "international", "employment",
    "work employment authorization international"
  );

  addResource(
    "cpt",
    "I need an internship as an international student",
    "Find internship and CPT guidance.",
    "file-user", "purple",
    "international", "internships",
    "cpt internship international"
  );

  addResource(
    "opt",
    "I want to apply for OPT",
    "Explore post-graduation work guidance.",
    "graduation-cap", "purple",
    "international", "opt",
    "opt graduation employment international"
  );

  addResource(
    "stemOpt",
    "I want to learn about STEM OPT",
    "Explore STEM OPT guidance.",
    "flask-conical", "purple",
    "international", "stem-opt",
    "stem opt extension"
  );

  // Housing

  addResource(
    "housing",
    "I am looking for housing",
    "Find housing options and information.",
    "house", "peach",
    "housing", "housing",
    "housing apartment approved rent"
  );

  addResource(
    "housingContracts",
    "I need help with a housing contract",
    "Find guidance on contracts and leases.",
    "file-text", "peach",
    "housing", "contract",
    "contract lease housing"
  );

  addResource(
    "roommateSupport",
    "I am having roommate problems",
    "Explore guidance for roommate concerns.",
    "users", "peach",
    "housing", "roommate",
    "roommates conflict housing"
  );

  // Campus Life

  addResource(
    "studentSocieties",
    "I want to make friends",
    "Find student communities and groups.",
    "users-round", "pink",
    "campus", "friends",
    "friends society clubs groups"
  );

  addResource(
    "campusActivities",
    "I want to get involved",
    "Explore activities and I-Belong.",
    "calendar-days", "pink",
    "campus", "activities",
    "activities i-belong events"
  );

  addResource(
    "campusEvents",
    "I want to find campus events",
    "Discover events and activities.",
    "party-popper", "pink",
    "campus", "events",
    "events campus activities"
  );

  addResource(
    "sportsRecreation",
    "I want to join campus sports",
    "Explore sports and recreation opportunities.",
    "trophy", "pink",
    "campus", "sports",
    "sports intramurals recreation"
  );

  // ----------------------------------------------------------
  // 7. Student Needs and Recommendations
  // ----------------------------------------------------------

  const needRecommendations = {
    food: [
      "foodPantry",
      "financialAid"
    ],

    money: [
      "financialAid",
      "scholarships",
      "fafsa",
      "foodPantry"
    ],

    jobs: [
      "studentEmployment",
      "helpWanted",
      "resumeHelp",
      "interviews"
    ],

    classes: [
      "tutoring",
      "dropInLabs",
      "academicAdvising",
      "writingCenter"
    ],

    wellbeing: [
      "getHelp",
      "counseling",
      "wellness",
      "crisisSupport"
    ],

    international: [
      "internationalServices",
      "visaImmigration",
      "travel",
      "workRules",
      "opt"
    ],

    talk: [
      "counseling",
      "getHelp",
      "crisisSupport"
    ],

    studying: [
      "dropInLabs",
      "tutoring",
      "studySkills",
      "library"
    ],

    internship: [
      "internships",
      "resumeHelp",
      "careerCenter",
      "cpt"
    ],

    career: [
      "careerCenter",
      "employmentPrep",
      "careerEvents",
      "interviews"
    ],

    friends: [
      "studentSocieties",
      "campusActivities",
      "campusEvents"
    ],

    involved: [
      "campusActivities",
      "campusEvents",
      "sportsRecreation"
    ],

    housing: [
      "housing",
      "housingContracts",
      "roommateSupport"
    ],

    roommates: [
      "roommateSupport",
      "housing"
    ],

    new: [
      "campusActivities",
      "academicAdvising",
      "internationalServices",
      "housing"
    ]
  };

  // ----------------------------------------------------------
  // 8. Create Recommendation Cards
  // ----------------------------------------------------------

  function createRecommendationCard(resourceId) {
    const resource = resourceLibrary[resourceId];

    if (!resource) return null;

    const card = document.createElement("a");

    card.className = "recommendation-card";
    card.href = resource.url;

    if (resource.url.startsWith("https://")) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

    card.innerHTML = `
      <span class="resource-icon ${resource.color}">
        <i data-lucide="${resource.icon}"></i>
      </span>

      <strong>${resource.title}</strong>

      <span>${resource.description}</span>

      <span class="recommendation-link">
        Learn more
        <i data-lucide="arrow-up-right"></i>
      </span>
    `;

    return card;
  }

  function renderRecommendations(container, resourceIds) {
    if (!container) return;

    container.replaceChildren();

    const uniqueIds = [...new Set(resourceIds)];

    uniqueIds.forEach((resourceId) => {
      const card = createRecommendationCard(resourceId);

      if (card) {
        container.appendChild(card);
      }
    });

    updateIcons();
  }

  // ----------------------------------------------------------
  // 9. Homepage Search
  // ----------------------------------------------------------

  const homeSearchForm = document.querySelector("#search-form");

  const homeSearchInput = homeSearchForm?.querySelector(
    "#resource-search"
  );

  const searchFeedback = document.querySelector(
    "#search-feedback"
  );

  const categoryCards = document.querySelectorAll(
    "#categories .category-card"
  );

  const navSearch = document.querySelector("#nav-search");

  const searchResults = document.querySelector(
    "#search-results"
  );

  const searchResourceList = document.querySelector(
    "#search-resource-list"
  );

  const searchStopWords = new Set([
    "the", "and", "for", "with", "how", "can",
    "get", "need", "want", "help", "where",
    "what", "find", "free", "some", "about"
  ]);

  function findMatchingResources(query) {
    const stopWords = new Set([
      "i", "me", "my", "a", "an", "the",
      "is", "are", "am", "to", "for",
      "with", "in", "on", "at", "of",
      "and", "or", "can", "do", "how",
      "where", "what", "need", "want",
      "help", "find", "get", "some",
      "please", "would", "like"
    ]);

    const normalize = (text) =>
      String(text)
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    const words = normalize(query)
      .split(" ")
      .filter((word) =>
        word.length > 1 && !stopWords.has(word)
      );

    if (words.length === 0) {
      return [];
    }

    return Object.keys(resourceLibrary)
      .map((resourceId) => {
        const resource = resourceLibrary[resourceId];

        const searchableText = normalize([
          resource.title,
          resource.description,
          resource.keywords || ""
        ].join(" "));

        const score = words.filter((word) =>
          searchableText.split(" ").some((term) =>
            term === word ||
            term.startsWith(word) ||
            word.startsWith(term)
          )
        ).length;

        return {
          resourceId,
          score
        };
      })
      .filter((match) => match.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((match) => match.resourceId);
  }

  if (homeSearchForm && homeSearchInput) {

    function filterHomeResources() {
      const query = homeSearchInput.value
        .trim()
        .toLowerCase();

      const visibleCount = filterResources(
        categoryCards,
        query
      );

      const matchingResources = query
        ? findMatchingResources(query)
        : [];

      if (searchResults && searchResourceList) {
        renderRecommendations(
          searchResourceList,
          matchingResources
        );

        searchResults.hidden = matchingResources.length === 0;
      }

      if (searchFeedback) {
        const resourceCount = matchingResources.length;

        if (!query) {
          searchFeedback.textContent = "";
        } else if (
          visibleCount === 0 &&
          resourceCount === 0
        ) {
          searchFeedback.textContent =
            "No matching resources found. Try another word.";
        } else {
          searchFeedback.textContent =
            `${resourceCount} matching ` +
            `${resourceCount === 1 ? "resource" : "resources"} and ` +
            `${visibleCount} ` +
            `${visibleCount === 1 ? "category" : "categories"} found.`;
        }
      }
    }

    homeSearchInput.addEventListener(
      "input",
      filterHomeResources
    );

    homeSearchForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!homeSearchInput.value.trim()) {
        homeSearchInput.focus();
        return;
      }

      filterHomeResources();

      document.querySelector("#categories")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

    navSearch?.addEventListener("click", () => {
      document.querySelector(".hero")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      homeSearchInput.focus({ preventScroll: true });

      closeMenu();
    });
  }

  // ----------------------------------------------------------
  // 10. Category Page Search
  // ----------------------------------------------------------

  const categorySearchInput = document.querySelector(
    ".category-search #resource-search"
  );

  const categorySearchButton = document.querySelector(
    "#search-button"
  );

  if (categorySearchInput) {
    const resources = document.querySelectorAll(
      ".category-section .resource-card, " +
      ".category-section .resource-list-item"
    );

    const categoryNoResults = document.querySelector(
      ".category-section #no-results"
    );

    function filterCategoryResources() {
      // Dynamic resource guides have their own search logic.
      if (!resources.length) return;

      const query = categorySearchInput.value
        .trim()
        .toLowerCase();

      const visibleCount = filterResources(
        resources,
        query
      );

      if (categoryNoResults) {
        categoryNoResults.hidden = visibleCount > 0;
      }
    }

    categorySearchInput.addEventListener(
      "input",
      filterCategoryResources
    );

    categorySearchButton?.addEventListener(
      "click",
      filterCategoryResources
    );
  }

  // ----------------------------------------------------------
  // 11. Discover - Student Need Cards
  // ----------------------------------------------------------

  const needCards = document.querySelectorAll(".need-card");

  const showMoreButton = document.querySelector(
    "#show-more-needs"
  );

  const extraNeeds = document.querySelectorAll(
    ".extra-need"
  );

  const recommendationPanel = document.querySelector(
    "#need-recommendations"
  );

  const recommendationTitle = document.querySelector(
    "#recommendation-title"
  );

  const recommendationDescription = document.querySelector(
    "#recommendation-description"
  );

  const recommendationResults = document.querySelector(
    "#recommendation-results"
  );

  const closeRecommendations = document.querySelector(
    "#close-recommendations"
  );

  showMoreButton?.addEventListener("click", () => {
    const isExpanded =
      showMoreButton.getAttribute("aria-expanded") === "true";

    extraNeeds.forEach((card) => {
      card.hidden = isExpanded;
    });

    showMoreButton.setAttribute(
      "aria-expanded",
      String(!isExpanded)
    );

    showMoreButton.innerHTML = isExpanded
      ? 'See all options <i data-lucide="chevron-down"></i>'
      : 'Show fewer options <i data-lucide="chevron-down"></i>';

    updateIcons();
  });

  needCards.forEach((card) => {
    card.addEventListener("click", () => {
      const needId = card.dataset.need;

      const resources = needRecommendations[needId] || [];

      if (!recommendationPanel || !recommendationResults) {
        return;
      }

      needCards.forEach((item) => {
        item.classList.toggle("active", item === card);
      });

      if (recommendationTitle) {
        recommendationTitle.textContent =
          card.querySelector("strong")?.textContent ||
          "Resources that may help";
      }

      if (recommendationDescription) {
        recommendationDescription.textContent =
          "Here are some resources you can explore based on what you selected.";
      }

      renderRecommendations(
        recommendationResults,
        resources
      );

      recommendationPanel.hidden = false;

      recommendationPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  closeRecommendations?.addEventListener("click", () => {
    if (recommendationPanel) {
      recommendationPanel.hidden = true;
    }

    needCards.forEach((card) => {
      card.classList.remove("active");
    });
  });

  // ----------------------------------------------------------
  // 12. Personalized Resource Finder
  // ----------------------------------------------------------

  const finderForm = document.querySelector(
    "#resource-finder-form"
  );

  const finderFeedback = document.querySelector(
    "#finder-feedback"
  );

  const finderResults = document.querySelector(
    "#finder-results"
  );

  const finderResourceList = document.querySelector(
    "#finder-resource-list"
  );

  finderForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const selectedNeeds = [
      ...finderForm.querySelectorAll(
        'input[name="need"]:checked'
      )
    ].map((input) => input.value);

    if (selectedNeeds.length === 0) {
      if (finderFeedback) {
        finderFeedback.textContent =
          "Please select at least one option to see recommendations.";
      }

      if (finderResults) {
        finderResults.hidden = true;
      }

      return;
    }

    if (finderFeedback) {
      finderFeedback.textContent = "";
    }

    const recommendedIds = selectedNeeds.flatMap(
      (needId) => needRecommendations[needId] || []
    );

    renderRecommendations(
      finderResourceList,
      recommendedIds
    );

    if (finderResults) {
      finderResults.hidden = false;

      finderResults.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });

  // Clear selected options and hide recommendations
  const clearFinderButton = document.querySelector("#clear-finder");

  clearFinderButton?.addEventListener("click", () => {
    // Uncheck all selected options
    finderForm?.reset();

    // Hide the recommendation results
    if (finderResults) {
      finderResults.hidden = true;
    }

    // Remove previous recommendation cards
    if (finderResourceList) {
      finderResourceList.replaceChildren();
    }

    // Clear feedback messages
    if (finderFeedback) {
      finderFeedback.textContent = "";
    }

    // Scroll back to the finder
    document.querySelector("#finder")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  // ----------------------------------------------------------
  // 13. Did You Know? Resource Spotlight
  // ----------------------------------------------------------

  const spotlightResources = [
    "foodPantry",
    "counseling",
    "dropInLabs",
    "internationalServices",
    "studentEmployment"
  ].map((id) => resourceLibrary[id]);

  const spotlightTitle = document.querySelector(
    "#spotlight-title"
  );

  const spotlightDescription = document.querySelector(
    "#spotlight-description"
  );

  const spotlightIcon = document.querySelector(
    "#spotlight-icon"
  );

  const spotlightLink = document.querySelector(
    "#spotlight-link"
  );

  const spotlightCounter = document.querySelector(
    "#spotlight-counter"
  );

  const spotlightPrev = document.querySelector(
    "#spotlight-prev"
  );

  const spotlightNext = document.querySelector(
    "#spotlight-next"
  );

  let spotlightIndex = 0;

  function updateSpotlight() {
    const resource = spotlightResources[spotlightIndex];

    if (!resource || !spotlightTitle) return;

    spotlightTitle.textContent = resource.title;

    if (spotlightDescription) {
      spotlightDescription.textContent = resource.description;
    }

    if (spotlightLink) {
      spotlightLink.href = resource.url;
    }

    if (spotlightIcon) {
      spotlightIcon.innerHTML = `
        <i data-lucide="${resource.icon}"></i>
      `;
    }

    if (spotlightCounter) {
      spotlightCounter.textContent =
        `${spotlightIndex + 1} / ${spotlightResources.length}`;
    }

    updateIcons();
  }

  spotlightPrev?.addEventListener("click", () => {
    spotlightIndex = (
      spotlightIndex - 1 + spotlightResources.length
    ) % spotlightResources.length;

    updateSpotlight();
  });

  spotlightNext?.addEventListener("click", () => {
    spotlightIndex = (
      spotlightIndex + 1
    ) % spotlightResources.length;

    updateSpotlight();
  });

  updateSpotlight();

});
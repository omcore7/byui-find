/* ==========================================================
   BYU-I Find | Main JavaScript
   ----------------------------------------------------------
   Shared functionality:
   1. Lucide icons
   2. Mobile navigation
   3. Resource filtering
   4. Homepage search
   5. Category page search

   Homepage discovery features:
   6. Resource recommendation data
   7. Student needs and recommendations
   8. Personalized resource finder
   9. Did You Know? resource spotlight

   This file is used by the homepage and category pages.
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
  // 2. Mobile Navigation
  // ----------------------------------------------------------

  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".navigation, .main-nav");

  function setMenuState(isOpen) {
    if (!menuToggle || !navigation) return;

    navigation.classList.toggle("open", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));
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
      const isOpen = navigation.classList.contains("open");
      setMenuState(!isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }


  // ----------------------------------------------------------
  // Active Navigation on Scroll
  // ----------------------------------------------------------

  const sectionLinks = document.querySelectorAll(
    '.navigation a[href^="#"], .main-nav a[href^="#"]'
  );

  const trackedSections = [...sectionLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter((section) => section !== null);

  function updateActiveNavigation() {
    if (trackedSections.length === 0) return;

    const scrollPosition = window.scrollY + 160;

    let activeSection = trackedSections[0];

    trackedSections.forEach((section) => {
      if (section.offsetTop <= scrollPosition) {
        activeSection = section;
      }
    });

    sectionLinks.forEach((link) => {
      const isActive =
        link.getAttribute("href") === `#${activeSection.id}`;

      link.classList.toggle("active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  if (sectionLinks.length > 0) {
    window.addEventListener("scroll", updateActiveNavigation, {
      passive: true
    });

    window.addEventListener("resize", updateActiveNavigation);

    updateActiveNavigation();
  }


  // ----------------------------------------------------------
  // 3. Reusable Resource Filtering
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

      if (matches) {
        visibleCount++;
      }
    });

    return visibleCount;
  }


  // ----------------------------------------------------------
  // 4. Homepage Search
  // ----------------------------------------------------------

  const homeSearchForm = document.querySelector("#search-form");
  const homeSearchInput = homeSearchForm?.querySelector("#resource-search");
  const searchFeedback = document.querySelector("#search-feedback");
  const categoryCards = document.querySelectorAll("#categories .category-card");
  const navSearch = document.querySelector("#nav-search");
  const searchResults = document.querySelector("#search-results");
  const searchResourceList = document.querySelector("#search-resource-list");

  // Small words that shouldn't count as a match on their own.
  const searchStopWords = new Set([
    "the", "and", "for", "with", "how", "can", "get", "need",
    "want", "help", "where", "what", "find", "free", "some", "about"
  ]);

  // Resources whose name, description, or keywords match the search,
  // with the best matches first.
  function findMatchingResources(query) {
    const words = query
      .split(/\s+/)
      .filter((word) => word.length > 2 && !searchStopWords.has(word));

    const terms = words.length > 0 ? words : [query];

    return Object.keys(resourceLibrary)
      .map((resourceId) => {
        const resource = resourceLibrary[resourceId];
        const searchableText = [
          resource.title,
          resource.description,
          resource.keywords || ""
        ].join(" ").toLowerCase();

        const score = terms.filter((term) =>
          searchableText.includes(term)
        ).length;

        return { resourceId, score };
      })
      .filter((match) => match.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((match) => match.resourceId);
  }

  if (homeSearchForm && homeSearchInput) {
    function filterHomeResources() {
      const query = homeSearchInput.value.trim().toLowerCase();
      const visibleCount = filterResources(categoryCards, query);
      const matchingResources = query ? findMatchingResources(query) : [];

      if (searchResults && searchResourceList) {
        renderRecommendations(searchResourceList, matchingResources);
        searchResults.hidden = matchingResources.length === 0;
      }

      if (searchFeedback) {
        const resourceCount = matchingResources.length;

        if (!query) {
          searchFeedback.textContent = "";
        } else if (visibleCount === 0 && resourceCount === 0) {
          searchFeedback.textContent =
            "No matching resources found. Try another word.";
        } else {
          searchFeedback.textContent =
            `${resourceCount} matching ${resourceCount === 1 ? "resource" : "resources"} and ` +
            `${visibleCount} ${visibleCount === 1 ? "category" : "categories"} found.`;
        }
      }

      return visibleCount;
    }

    homeSearchInput.addEventListener("input", filterHomeResources);

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
  // 5. Category Page Search
  // ----------------------------------------------------------

  const categorySearchInput = document.querySelector(
    ".category-search #resource-search"
  );

  const categorySearchButton = document.querySelector("#search-button");

  if (categorySearchInput) {
    const resources = document.querySelectorAll(
      ".category-section .resource-card, " +
      ".category-section .resource-list-item"
    );

    const categoryNoResults = document.querySelector(
      ".category-section #no-results"
    );

    function filterCategoryResources() {
      const query = categorySearchInput.value.trim().toLowerCase();
      const visibleCount = filterResources(resources, query);

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
  // 6. Resource Recommendation Data
  // ----------------------------------------------------------

  /*
   * Resources are stored in one place so both the student
   * need cards and personalized finder can reuse them.
   *
   * Internal links point to existing category pages.
   * Verify that each category page contains the named
   * resource before publishing.
   */

  const resourceLibrary = {

    foodPantry: {
      title: "Food Pantry",
      description: "Explore food assistance and student support options.",
      icon: "shopping-basket",
      color: "yellow",
      url: "pages/financial.html#food-pantry",
      keywords: "food hungry groceries meals free food bank"
    },

    financialAid: {
      title: "Financial Aid & Scholarships",
      description: "Learn about financial aid, scholarships, and paying for school.",
      icon: "coins",
      color: "yellow",
      url: "pages/financial.html#financial-aid",
      keywords: "money pay tuition grants loans pell aid"
    },

    scholarships: {
      title: "Scholarships",
      description: "See which BYU-Idaho scholarships you may qualify for.",
      icon: "award",
      color: "yellow",
      url: "pages/financial.html#scholarships",
      keywords: "money scholarship academic need based talent returned missionary"
    },

    fafsa: {
      title: "FAFSA Application",
      description: "Apply for federal aid and need-based scholarships.",
      icon: "clipboard-list",
      color: "yellow",
      url: "pages/financial.html#fafsa-application",
      keywords: "money fafsa federal aid grant pell application deadline"
    },

    studentEmployment: {
      title: "Student Employment",
      description: "Explore employment opportunities for BYU-Idaho students.",
      icon: "briefcase-business",
      color: "teal",
      url: "pages/career.html#student-employment",
      keywords: "job jobs work campus job board hiring part time"
    },

    helpWanted: {
      title: "Help Wanted Postings",
      description: "Learn where to look for student job opportunities.",
      icon: "search",
      color: "teal",
      url: "pages/career.html#help-wanted",
      keywords: "job jobs work rexburg part time local off campus hiring"
    },

    careerCenter: {
      title: "Career Center",
      description: "Get help preparing for jobs, interviews, and your future career.",
      icon: "target",
      color: "teal",
      url: "pages/career.html#career-center",
      keywords: "career advisor handshake future job interview"
    },

    internships: {
      title: "Internship Resources",
      description: "Explore internship guidance and career preparation.",
      icon: "file-user",
      color: "teal",
      url: "pages/career.html#internships",
      keywords: "internship intern experience career"
    },

    resumeHelp: {
      title: "Resume & Cover Letter Help",
      description: "Get your resume and job applications ready.",
      icon: "file-text",
      color: "teal",
      url: "pages/career.html#resume-cover-letter",
      keywords: "resume cv cover letter application"
    },

    careerEvents: {
      title: "Career Fairs & Events",
      description: "Meet employers at career fairs and networking events.",
      icon: "handshake",
      color: "teal",
      url: "pages/career.html#networking-career-events",
      keywords: "career fair networking employers events"
    },

    tutoring: {
      title: "Tutoring",
      description: "Find academic support for your classes and courses.",
      icon: "graduation-cap",
      color: "blue",
      url: "pages/classes.html#tutoring",
      keywords: "tutor tutoring help class homework study"
    },

    dropInLabs: {
      title: "Free Drop-in Labs",
      description: "Explore academic labs and additional study support.",
      icon: "book-open-check",
      color: "blue",
      url: "pages/classes.html#drop-in-labs",
      keywords: "lab labs math chemistry biology physics language conversation"
    },

    writingCenter: {
      title: "Writing Center",
      description: "Get help with essays, assignments, and writing skills.",
      icon: "file-pen-line",
      color: "blue",
      url: "pages/classes.html#writing-center",
      keywords: "writing essay paper english resume"
    },

    academicAdvising: {
      title: "Academic Advising",
      description: "Plan your classes, choose a major, and stay on track to graduate.",
      icon: "compass",
      color: "blue",
      url: "pages/classes.html#academic-advising",
      keywords: "advisor advising major classes schedule graduation"
    },

    library: {
      title: "David O. McKay Library",
      description: "Find books, research help, and quiet study spaces.",
      icon: "library",
      color: "blue",
      url: "pages/classes.html#library",
      keywords: "library books research study room"
    },

    studySkills: {
      title: "Study Skills",
      description: "Build better study habits and time management.",
      icon: "lightbulb",
      color: "blue",
      url: "pages/classes.html#study-skills",
      keywords: "study habits time management focus"
    },

    counseling: {
      title: "Counseling Center",
      description: "Explore counseling and emotional wellbeing support.",
      icon: "messages-square",
      color: "green",
      url: "pages/health.html#counseling-center",
      keywords: "counseling therapy stress anxiety depression mental health talk"
    },

    getHelp: {
      title: "I Get Help Line",
      description: "Learn about additional support when you need someone to talk to.",
      icon: "message-circle-heart",
      color: "green",
      url: "pages/health.html#get-help-line",
      keywords: "talk support help line"
    },

    crisisSupport: {
      title: "Crisis Support",
      description: "Find information about urgent emotional support resources.",
      icon: "heart-handshake",
      color: "green",
      url: "pages/health.html#crisis-support",
      keywords: "crisis emergency 988 suicide urgent"
    },

    healthCenter: {
      title: "Student Health Center",
      description: "See a doctor, get prescriptions, and find health insurance info.",
      icon: "stethoscope",
      color: "green",
      url: "pages/health.html#student-health-center",
      keywords: "sick doctor medical health insurance pharmacy"
    },

    wellness: {
      title: "Wellness Center",
      description: "Free help with sleep, stress, nutrition, and healthy habits.",
      icon: "leaf",
      color: "green",
      url: "pages/health.html#wellness-resources",
      keywords: "wellness nutrition sleep stress healthy dietitian"
    },

    fitness: {
      title: "Fitness & Recreation",
      description: "Use the gym, pool, and free fitness classes.",
      icon: "dumbbell",
      color: "green",
      url: "pages/health.html#fitness-recreation",
      keywords: "gym fitness workout exercise pool"
    },

    internationalServices: {
      title: "International Services",
      description: "Find guidance and support for international students.",
      icon: "globe",
      color: "purple",
      url: "pages/international.html#international-services",
      keywords: "international i-20 f-1 sevis travel signature"
    },

    visaImmigration: {
      title: "Visa & Immigration",
      description: "Keep your student status, I-20, and travel documents in order.",
      icon: "plane",
      color: "purple",
      url: "pages/international.html#visa-immigration",
      keywords: "visa immigration i-20 status travel passport"
    },

    workRules: {
      title: "International Student Work Rules",
      description: "Learn where to find guidance about employment authorization.",
      icon: "file-check",
      color: "purple",
      url: "pages/international.html#employment-authorization",
      keywords: "work job international opt cpt employment authorization"
    },

    housing: {
      title: "Student Housing",
      description: "Explore housing information and apartment resources.",
      icon: "house",
      color: "peach",
      url: "pages/housing.html#approved-housing",
      keywords: "housing apartment rent approved housing live"
    },

    housingContracts: {
      title: "Housing Contracts",
      description: "Understand your contract before you sign, or sell it if you need to move.",
      icon: "file-text",
      color: "peach",
      url: "pages/housing.html#housing-contracts",
      keywords: "contract lease sell contract move"
    },

    roommateSupport: {
      title: "Roommate Resources",
      description: "Find guidance for shared living and roommate concerns.",
      icon: "users",
      color: "peach",
      url: "pages/housing.html#roommate-resources",
      keywords: "roommate roommates conflict apartment"
    },

    studentSocieties: {
      title: "Student Societies",
      description: "Discover groups and communities on campus.",
      icon: "users-round",
      color: "pink",
      url: "pages/campus.html#student-societies",
      keywords: "society societies club clubs major friends"
    },

    campusActivities: {
      title: "Campus Activities",
      description: "Explore campus events and opportunities to get involved.",
      icon: "calendar-days",
      color: "pink",
      url: "pages/campus.html#campus-activities",
      keywords: "activities events friends fun i-belong"
    },

    campusEvents: {
      title: "Campus Events",
      description: "See what's happening on campus this week.",
      icon: "party-popper",
      color: "pink",
      url: "pages/campus.html#campus-events",
      keywords: "events calendar dance concert devotional"
    },

    sportsRecreation: {
      title: "Sports & Recreation",
      description: "Join intramural sports and recreation activities.",
      icon: "trophy",
      color: "pink",
      url: "pages/campus.html#sports-recreation",
      keywords: "sports intramurals recreation team"
    }

  };


  // ----------------------------------------------------------
  // 7. Student Needs and Recommendations
  // ----------------------------------------------------------

  /*
   * Each student need maps to resource IDs.
   * Multiple needs can share the same resources.
   */

  const needRecommendations = {
    food: ["foodPantry", "financialAid"],
    money: ["financialAid", "scholarships", "fafsa", "foodPantry"],
    jobs: ["studentEmployment", "helpWanted", "careerCenter", "resumeHelp"],
    classes: ["tutoring", "dropInLabs", "writingCenter", "academicAdvising"],
    wellbeing: ["counseling", "getHelp", "crisisSupport", "wellness"],
    international: ["internationalServices", "visaImmigration", "workRules", "studentEmployment"],
    talk: ["counseling", "getHelp", "crisisSupport"],
    studying: ["dropInLabs", "tutoring", "studySkills", "library"],
    internship: ["internships", "careerCenter", "resumeHelp"],
    career: ["careerCenter", "internships", "careerEvents", "resumeHelp"],
    friends: ["studentSocieties", "campusActivities", "sportsRecreation"],
    involved: ["campusActivities", "studentSocieties", "campusEvents"],
    housing: ["housing", "housingContracts", "roommateSupport"],
    roommates: ["roommateSupport", "housing"],
    new: ["campusActivities", "studentSocieties", "internationalServices", "academicAdvising"]
  };


  // Creates a reusable recommendation card.
  function createRecommendationCard(resourceId) {
    const resource = resourceLibrary[resourceId];

    if (!resource) return null;

    const card = document.createElement("a");
    card.className = "recommendation-card";
    card.href = resource.url;

    // External links open in a new tab.
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


  // Displays a collection of recommended resources.
  function renderRecommendations(container, resourceIds) {
    if (!container) return;

    container.replaceChildren();

    // Remove duplicate resources while preserving their order.
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
  // 8. Student Need Cards
  // ----------------------------------------------------------

  const needCards = document.querySelectorAll(".need-card");
  const showMoreButton = document.querySelector("#show-more-needs");
  const extraNeeds = document.querySelectorAll(".extra-need");

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


  // Expand or collapse the additional student needs.
  showMoreButton?.addEventListener("click", () => {
    const isExpanded = showMoreButton.getAttribute(
      "aria-expanded"
    ) === "true";

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


  // Show recommendations when a student selects a need.
  needCards.forEach((card) => {
    card.addEventListener("click", () => {
      const needId = card.dataset.need;
      const resources = needRecommendations[needId] || [];

      if (!recommendationPanel || !recommendationResults) return;

      // Highlight the selected card.
      needCards.forEach((item) => {
        item.classList.toggle("active", item === card);
      });

      if (recommendationTitle) {
        recommendationTitle.textContent = card.querySelector("strong")
          ?.textContent || "Resources that may help";
      }

      if (recommendationDescription) {
        recommendationDescription.textContent =
          "Here are some resources you can explore based on what you selected.";
      }

      renderRecommendations(recommendationResults, resources);

      recommendationPanel.hidden = false;

      recommendationPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


  // Close the recommendation panel.
  closeRecommendations?.addEventListener("click", () => {
    if (recommendationPanel) {
      recommendationPanel.hidden = true;
    }

    needCards.forEach((card) => {
      card.classList.remove("active");
    });
  });


  // ----------------------------------------------------------
  // 9. Personalized Resource Finder
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

    // Ask the student to select at least one option.
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

    // Combine recommendations from every selected need.
    const recommendedIds = selectedNeeds.flatMap((needId) => {
      return needRecommendations[needId] || [];
    });

    renderRecommendations(finderResourceList, recommendedIds);

    if (finderResults) {
      finderResults.hidden = false;

      finderResults.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });


  // ----------------------------------------------------------
  // 10. Did You Know? Resource Spotlight
  // ----------------------------------------------------------

  const spotlightResources = [
    {
      title: "Food Pantry",
      description:
        "Did you know students can explore food assistance and support resources?",
      icon: "shopping-basket",
      url: "pages/financial.html#food-pantry"
    },
    {
      title: "I Get Help Line",
      description:
        "Discover additional support resources for students who need someone to talk to.",
      icon: "message-circle-heart",
      url: "pages/health.html#get-help-line"
    },
    {
      title: "Free Drop-in Labs",
      description:
        "Explore academic labs and support that can help you with challenging classes.",
      icon: "book-open-check",
      url: "pages/classes.html#drop-in-labs"
    },
    {
      title: "International Services",
      description:
        "Find support and guidance for international students at BYU-Idaho.",
      icon: "globe",
      url: "pages/international.html#international-services"
    },
    {
      title: "Help Wanted Postings",
      description:
        "Discover where to explore employment opportunities and job postings.",
      icon: "briefcase-business",
      url: "pages/career.html#help-wanted"
    }
  ];

  const spotlightTitle = document.querySelector("#spotlight-title");

  const spotlightDescription = document.querySelector(
    "#spotlight-description"
  );

  const spotlightIcon = document.querySelector("#spotlight-icon");
  const spotlightLink = document.querySelector("#spotlight-link");
  const spotlightCounter = document.querySelector("#spotlight-counter");

  const spotlightPrev = document.querySelector("#spotlight-prev");
  const spotlightNext = document.querySelector("#spotlight-next");

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
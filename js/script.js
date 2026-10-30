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

  if (homeSearchForm && homeSearchInput) {
    function filterHomeResources() {
      const query = homeSearchInput.value.trim().toLowerCase();
      const visibleCount = filterResources(categoryCards, query);

      if (searchFeedback) {
        if (!query) {
          searchFeedback.textContent = "";
        } else if (visibleCount === 0) {
          searchFeedback.textContent =
            "No matching categories found. Try another word.";
        } else {
          searchFeedback.textContent =
            `${visibleCount} matching ${visibleCount === 1 ? "category" : "categories"} found.`;
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
      url: "pages/financial.html#food-pantry"
    },

    financialAid: {
      title: "Financial Aid & Scholarships",
      description: "Learn about financial aid, scholarships, and paying for school.",
      icon: "coins",
      color: "yellow",
      url: "pages/financial.html"
    },

    studentEmployment: {
      title: "Student Employment",
      description: "Explore employment opportunities for BYU-Idaho students.",
      icon: "briefcase-business",
      color: "teal",
      url: "pages/career.html"
    },

    helpWanted: {
      title: "Help Wanted Postings",
      description: "Learn where to look for student job opportunities.",
      icon: "search",
      color: "teal",
      url: "pages/career.html#help-wanted"
    },

    careerCenter: {
      title: "Career Center",
      description: "Get help preparing for jobs, interviews, and your future career.",
      icon: "target",
      color: "teal",
      url: "pages/career.html"
    },

    internships: {
      title: "Internship Resources",
      description: "Explore internship guidance and career preparation.",
      icon: "file-user",
      color: "teal",
      url: "pages/career.html"
    },

    tutoring: {
      title: "Tutoring",
      description: "Find academic support for your classes and courses.",
      icon: "graduation-cap",
      color: "blue",
      url: "https://www.byui.edu/tutoring-center"
    },

    dropInLabs: {
      title: "Free Drop-in Labs",
      description: "Explore academic labs and additional study support.",
      icon: "book-open-check",
      color: "blue",
      url: "pages/classes.html#drop-in-labs"
    },

    writingCenter: {
      title: "Writing Center",
      description: "Get help with essays, assignments, and writing skills.",
      icon: "file-pen-line",
      color: "blue",
      url: "https://www.byui.edu/academic-support-centers/writing-center"
    },

    counseling: {
      title: "Counseling Center",
      description: "Explore counseling and emotional wellbeing support.",
      icon: "messages-square",
      color: "green",
      url: "https://www.byui.edu/counseling-center"
    },

    getHelp: {
      title: "I Get Help Line",
      description: "Learn about additional support when you need someone to talk to.",
      icon: "message-circle-heart",
      color: "green",
      url: "pages/health.html#get-help-line"
    },

    crisisSupport: {
      title: "Crisis Support",
      description: "Find information about urgent emotional support resources.",
      icon: "heart-handshake",
      color: "green",
      url: "pages/health.html#crisis-support"
    },

    internationalServices: {
      title: "International Services",
      description: "Find guidance and support for international students.",
      icon: "globe",
      color: "purple",
      url: "pages/international.html"
    },

    workRules: {
      title: "International Student Work Rules",
      description: "Learn where to find guidance about employment authorization.",
      icon: "file-check",
      color: "purple",
      url: "pages/international.html"
    },

    housing: {
      title: "Student Housing",
      description: "Explore housing information and apartment resources.",
      icon: "house",
      color: "peach",
      url: "pages/housing.html"
    },

    roommateSupport: {
      title: "Roommate Resources",
      description: "Find guidance for shared living and roommate concerns.",
      icon: "users",
      color: "peach",
      url: "pages/housing.html"
    },

    studentSocieties: {
      title: "Student Societies",
      description: "Discover groups and communities on campus.",
      icon: "users-round",
      color: "pink",
      url: "pages/campus.html"
    },

    campusActivities: {
      title: "Campus Activities",
      description: "Explore campus events and opportunities to get involved.",
      icon: "calendar-days",
      color: "pink",
      url: "pages/campus.html"
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
    money: ["financialAid", "foodPantry"],
    jobs: ["studentEmployment", "helpWanted", "careerCenter"],
    classes: ["tutoring", "dropInLabs", "writingCenter"],
    wellbeing: ["counseling", "getHelp", "crisisSupport"],
    international: ["internationalServices", "workRules", "studentEmployment"],
    talk: ["counseling", "getHelp", "crisisSupport"],
    studying: ["dropInLabs", "tutoring", "writingCenter"],
    internship: ["internships", "careerCenter"],
    career: ["careerCenter", "internships", "studentEmployment"],
    friends: ["studentSocieties", "campusActivities"],
    involved: ["campusActivities", "studentSocieties"],
    housing: ["housing", "roommateSupport"],
    roommates: ["roommateSupport", "housing"],
    new: ["campusActivities", "studentSocieties", "internationalServices"]
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
      url: "pages/financial.html"
    },
    {
      title: "I Get Help Line",
      description:
        "Discover additional support resources for students who need someone to talk to.",
      icon: "message-circle-heart",
      url: "pages/health.html"
    },
    {
      title: "Free Drop-in Labs",
      description:
        "Explore academic labs and support that can help you with challenging classes.",
      icon: "book-open-check",
      url: "pages/classes.html"
    },
    {
      title: "International Services",
      description:
        "Find support and guidance for international students at BYU-Idaho.",
      icon: "globe",
      url: "pages/international.html"
    },
    {
      title: "Help Wanted Postings",
      description:
        "Discover where to explore employment opportunities and job postings.",
      icon: "briefcase-business",
      url: "pages/career.html"
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
/* ==========================================
   BYU-I FIND | MY HEALTH
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const resources = [
    {
      id: "tao",
      icon: "brain",
      title: "I've been feeling stressed or anxious",
      subtitle: "Learn ways to manage stress at your own pace.",
      name: "Therapy Assistance Online (TAO)",
      description:
        "TAO is an online self-help program with videos, activities, and tools for managing stress, anxiety, depression, and other emotional challenges.",
      cost: "Free for eligible BYU-Idaho students.",
      steps: [
        "Open the official TAO page.",
        "Select the TAO registration link.",
        "Enter your name and BYU-Idaho email address.",
        "Leave the enrollment key blank.",
        "Confirm your email and explore the modules."
      ],
      url: "https://www.byui.edu/counseling-center/tao",
      keywords: "stress anxiety worry depression mental health self help online tao"
    },

    {
      id: "counseling",
      icon: "heart-handshake",
      title: "I need someone to talk to",
      subtitle: "Find professional mental health support.",
      name: "BYU-Idaho Counseling Center",
      description:
        "The Counseling Center provides professional support for emotional and mental health concerns. Services include individual, couples, and group counseling.",
      cost:
        "Counseling is free for currently enrolled students taking at least six credits and assigned to a track. Other services may have fees.",
      steps: [
        "Open the Counseling Center website.",
        "Review the services and eligibility requirements.",
        "Call 208-496-9370 or visit the office to ask about an appointment.",
        "Follow the instructions provided by the Counseling Center."
      ],
      url: "https://www.byui.edu/counseling-center/",
      keywords: "counseling therapy therapist depression sadness grief mental health relationships"
    },

    {
      id: "thrive",
      icon: "sprout",
      title: "I want to improve my emotional well-being",
      subtitle: "Build healthy habits and connect with others.",
      name: "THRIVE",
      description:
        "THRIVE is a Wellness Center program that helps students build coping skills and work on emotional wellness. Activities can include fitness, nature, nutrition, and relationships.",
      cost:
        "The official page lists a $25 program fee. Check the current registration information before signing up.",
      steps: [
        "Open the THRIVE program page.",
        "Read about the program and available sessions.",
        "Check current dates, fees, and registration.",
        "Register if the program fits your needs."
      ],
      url: "https://www.byui.edu/wellness-center/thrive",
      keywords: "thrive depression anxiety happiness emotional wellness belonging mental health"
    },

    {
      id: "health-center",
      icon: "stethoscope",
      title: "I'm sick and need medical care",
      subtitle: "Find medical services and appointment information.",
      name: "Student Health Center",
      description:
        "The Student Health Center provides information about campus medical care, appointments, and available health services.",
      cost:
        "Costs depend on the service and your health coverage. Check current fees with the Health Center.",
      steps: [
        "Open the Student Health Center website.",
        "Review the medical services available.",
        "Follow the instructions to contact the center or request an appointment.",
        "Ask about costs and insurance before your visit."
      ],
      url: "https://www.byui.edu/health-center",
      keywords: "sick illness doctor medical appointment physical health clinic healthcare"
    },

    {
      id: "wellness",
      icon: "leaf",
      title: "I want to build healthier habits",
      subtitle: "Explore wellness education and support.",
      name: "Wellness Center",
      description:
        "The Wellness Center offers education sessions, group classes, and workshops to help people develop healthy habits and improve their well-being.",
      cost:
        "The Wellness Center lists its education sessions and group workshops as free.",
      steps: [
        "Open the Wellness Center website.",
        "Explore wellness education, classes, and workshops.",
        "Check the current schedule and any registration instructions.",
        "Choose an activity that fits your goals."
      ],
      url: "https://www.byui.edu/wellness-center/",
      keywords: "wellness healthy habits nutrition health lifestyle emotional physical"
    },

    {
      id: "fitness",
      icon: "dumbbell",
      title: "I want to be more physically active",
      subtitle: "Find campus fitness and exercise options.",
      name: "Fitness Center",
      description:
        "The Fitness Center provides information about exercise facilities and fitness opportunities available through BYU-Idaho Recreational Services.",
      cost:
        "Check the official website for current access requirements and any fees.",
      steps: [
        "Open the Fitness Center page.",
        "Review available facilities and activities.",
        "Check current hours and access requirements.",
        "Choose an activity that works for you."
      ],
      url: "https://www.byui.edu/recreational-services/hart-building/fitness-center",
      keywords: "gym exercise fitness workout recreation physical activity sports"
    },

    {
      id: "workshops",
      icon: "users",
      title: "I want to learn how to manage stress",
      subtitle: "Find wellness workshops and group activities.",
      name: "Wellness Workshops",
      description:
        "The Wellness Center offers workshops and educational activities on topics related to mental, emotional, and physical wellness.",
      cost:
        "Wellness Center group workshops are listed as free. Check individual program details.",
      steps: [
        "Visit the Wellness Center website.",
        "Look for events, workshops, and group classes.",
        "Review the topics and current schedule.",
        "Follow the registration instructions if required."
      ],
      url: "https://www.byui.edu/wellness-center/",
      keywords: "workshops stress management resilience mental health classes group"
    },

    {
      id: "health-plan",
      icon: "shield-check",
      title: "I don't understand my health insurance",
      subtitle: "Learn about student coverage and waivers.",
      name: "BYU-Idaho Student Health Plan",
      description:
        "The Student Health Plan page explains university health insurance requirements, coverage, costs, and how to request a waiver if you have qualifying insurance.",
      cost:
        "Plan prices vary by coverage and semester. Check the official page for current rates.",
      steps: [
        "Open the Student Health Plan page.",
        "Review the insurance requirements.",
        "Compare the plan with any insurance you already have.",
        "If you qualify for a waiver, follow the official instructions before the deadline.",
        "Contact Health Center billing if you have questions."
      ],
      url: "https://www.byui.edu/health-center/student-health-plan",
      keywords: "health insurance medical coverage student health plan waiver billing cost"
    },

    {
      id: "hope",
      icon: "heart",
      title: "I want to support mental health on campus",
      subtitle: "Learn about mental health awareness and outreach.",
      name: "H.O.P.E. Council",
      description:
        "The H.O.P.E. Council helps raise awareness about mental health, reduce stigma, and connect students with support and education.",
      cost:
        "Contact the Wellness Center for current participation details.",
      steps: [
        "Open the H.O.P.E. Council page.",
        "Learn about its activities and goals.",
        "Review current meeting or volunteer information.",
        "Contact the council if you want to get involved."
      ],
      url: "https://www.byui.edu/wellness-center/hope-council",
      keywords: "hope council volunteer mental health awareness outreach community"
    },

    {
      id: "sleep",
      icon: "moon",
      title: "I've been having trouble sleeping",
      subtitle: "Find information about sleep and healthy routines.",
      name: "Sleep Resources and TAO",
      description:
        "The Counseling Center provides sleep education resources. TAO also includes mindfulness and sleep-related learning activities.",
      cost:
        "The university lists TAO as free for eligible students.",
      steps: [
        "Open the Counseling Center sleep resources page.",
        "Explore the sleep education materials.",
        "Consider TAO's mindfulness and sleep-related modules.",
        "Contact a healthcare professional if sleep problems continue."
      ],
      url: "https://www.byui.edu/counseling-center/sleep",
      keywords: "sleep insomnia tired fatigue rest nighttime mindfulness"
    }
  ];

  const list = document.querySelector("#health-resource-list");
  const searchInput = document.querySelector("#resource-search");
  const searchButton = document.querySelector("#search-button");
  const count = document.querySelector(".health-resource-count");
  const noResults = document.querySelector("#no-results");

  if (!list || !searchInput) return;

  /* ==========================================
     CREATE RESOURCE GUIDES
     ========================================== */

  function createGuide(resource) {

    const steps = resource.steps
      .map(step => `<li>${step}</li>`)
      .join("");

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

          <p class="guide-cost">
            <strong>Cost and eligibility:</strong>
            ${resource.cost}
          </p>

          <h4>How to get started</h4>

          <ol>${steps}</ol>

          <a
            href="${resource.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="guide-official-link"
            >
            ${resource.name}
            <i data-lucide="external-link" aria-hidden="true"></i>
            </a>

        </div>

      </details>
    `;
  }

  list.innerHTML = resources.map(createGuide).join("");

  // Initialize icons in newly added cards
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

    const query = searchInput.value
      .trim()
      .toLowerCase();

    let visible = 0;

    guides.forEach(guide => {

      const text = (
        (guide.dataset.search || "") + " " +
        guide.textContent
      ).toLowerCase();

      const matches = text.includes(query);

      guide.hidden = !matches;

      if (matches) {
        visible++;
      }

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
/* ==========================================
   BYU-I FIND | CAMPUS LIFE
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const resources = [
    {
      id: "campus-activities",
      icon: "calendar-days",
      title: "I want to find activities on campus",
      subtitle: "Explore events, activities, and ways to get involved.",
      name: "I-Belong",
      description:
        "I-Belong is BYU-Idaho's platform for finding campus activities, events, and opportunities to connect with other students.",
      steps: [
        "Open the I-Belong website.",
        "Sign in with your BYU-Idaho account if needed.",
        "Explore upcoming activities and events.",
        "Choose something that interests you.",
        "Check the details and register if required."
      ],
      url: "https://ibelong.byui.edu/",
      keywords:
        "ibelong i belong campus activities events calendar student life fun"
    },

    {
      id: "make-friends",
      icon: "users-round",
      title: "I want to meet new people",
      subtitle: "Find activities where you can make friends.",
      name: "BYU-Idaho Student Activities",
      description:
        "Student Activities offers social events and weekly activities where students can meet others, try something new, and have fun.",
      steps: [
        "Open the Student Activities website.",
        "Explore upcoming events and weekly activities.",
        "Find something you would enjoy.",
        "Open the activity details and check how to participate.",
        "Invite someone or attend and meet new people."
      ],
      links: [
        {
          name: "Student Activities",
          url: "https://www.byui.edu/student-activities/"
        },
        {
          name: "I-Belong",
          url: "https://ibelong.byui.edu/"
        }
      ],
      keywords:
        "friends meet people socialize belonging community social activities"
    },

    {
      id: "student-societies",
      icon: "users",
      title: "I want to join a student society",
      subtitle: "Meet students with similar academic interests.",
      name: "BYU-Idaho Academic Societies",
      description:
        "Academic societies help students connect with others in their field, learn new skills, and prepare for their future careers.",
      steps: [
        "Open the Academic Societies website.",
        "Find your college or an area that interests you.",
        "Explore the societies available.",
        "Check their meeting details and contact information.",
        "Follow the instructions to join or attend a meeting."
      ],
      url: "https://www.byui.edu/academic-societies/join-a-society",
      keywords:
        "clubs student societies academic groups major interests networking"
    },

    {
      id: "weekly-activities",
      icon: "music",
      title: "I want something fun to do this week",
      subtitle: "Find dancing, games, and other weekly activities.",
      name: "Weekly Student Activities",
      description:
        "BYU-Idaho offers weekly activities such as country dancing, Latin dancing, game nights, and other social events. Available activities can change each semester.",
      steps: [
        "Open the Weekly Activities page.",
        "Look through the upcoming events.",
        "Check the date, time, location, and any cost.",
        "Follow the event's registration instructions if needed.",
        "Attend an activity that interests you."
      ],
      links: [
        {
          name: "Weekly Activities",
          url: "https://www.byui.edu/student-activities/weekly"
        },
        {
          name: "I-Belong",
          url: "https://ibelong.byui.edu/"
        }
      ],
      keywords:
        "weekly dancing country dance latin dance games bowling skating fun"
    },

    {
      id: "sports",
      icon: "volleyball",
      title: "I want to play sports with other students",
      subtitle: "Explore recreational and competitive sports.",
      name: "BYU-Idaho Sports",
      description:
        "Student Activities offers sports opportunities for students who want to play, compete, stay active, or meet others through recreation.",
      steps: [
        "Open the BYU-Idaho Sports page.",
        "Explore the available sports and activities.",
        "Check participation requirements and schedules.",
        "Follow the instructions to join a team or activity."
      ],
      url: "https://www.byui.edu/student-activities/sports",
      keywords:
        "sports volleyball basketball soccer intramural recreation teams competition"
    },

    {
      id: "service",
      icon: "hand-heart",
      title: "I want to volunteer and serve others",
      subtitle: "Find service opportunities on and around campus.",
      name: "BYU-Idaho Service Activities",
      description:
        "BYU-Idaho provides service opportunities where students can help others, contribute to the community, and connect with fellow students.",
      steps: [
        "Open the Student Activities Service page.",
        "Explore the available service opportunities.",
        "Check the activity details and schedule.",
        "Register or follow the instructions to participate."
      ],
      links: [
        {
          name: "Service Activities",
          url: "https://www.byui.edu/student-activities/service"
        },
        {
          name: "I-Belong",
          url: "https://ibelong.byui.edu/"
        }
      ],
      keywords:
        "service volunteer volunteering charity help others community i serve"
    },

    {
      id: "outdoor",
      icon: "mountain",
      title: "I want to explore the outdoors",
      subtitle: "Discover outdoor adventures and recreation.",
      name: "BYU-Idaho Outdoor Activities",
      description:
        "Outdoor Activities offers opportunities such as hiking, climbing, kayaking, and other adventures. Available activities depend on the season.",
      steps: [
        "Open the Outdoor Activities page.",
        "Explore the activities currently offered.",
        "Review the dates, costs, and requirements.",
        "Follow the registration instructions.",
        "Prepare any equipment or clothing listed for the activity."
      ],
      url: "https://www.byui.edu/student-activities/outdoor",
      keywords:
        "outdoor hiking nature climbing kayaking rafting camping adventure mountains"
    },

    {
      id: "campus-events",
      icon: "party-popper",
      title: "I want to attend big campus events",
      subtitle: "Discover major events throughout the semester.",
      name: "Campus Main Events",
      description:
        "BYU-Idaho hosts major campus events such as I-Night, First Friday, Cultural Night, and other semester activities.",
      steps: [
        "Open the Campus Main Events page.",
        "Choose the current semester.",
        "Explore the upcoming events.",
        "Check the date, location, and ticket information.",
        "Register or purchase a ticket if required."
      ],
      links: [
        {
          name: "Campus Main Events",
          url: "https://www.byui.edu/student-activities/campus-events"
        },
        {
          name: "I-Belong",
          url: "https://ibelong.byui.edu/"
        }
      ],
      keywords:
        "big events i night first friday cultural night spirit week parties"
    },

    {
      id: "arts",
      icon: "ticket",
      title: "I want to attend concerts or performances",
      subtitle: "Explore music, theater, and entertainment.",
      name: "BYU-Idaho Center Stage",
      description:
        "Center Stage provides information about concerts, performances, and entertainment opportunities at BYU-Idaho.",
      steps: [
        "Open the Center Stage ticket page.",
        "Explore upcoming performances.",
        "Check dates, locations, and ticket prices.",
        "Follow the ticket instructions if you want to attend."
      ],
      url: "https://www.byui.edu/center-stage/tickets",
      keywords:
        "concerts theater theatre music performances arts tickets entertainment"
    },

    {
      id: "leadership",
      icon: "award",
      title: "I want to develop leadership skills",
      subtitle: "Learn how to get more involved with campus activities.",
      name: "BYU-Idaho Student Activities",
      description:
        "Participating in campus activities and service can help students practice teamwork, communication, planning, and leadership.",
      steps: [
        "Open the Student Activities website.",
        "Explore service and involvement opportunities.",
        "Look for information about helping organize activities.",
        "Contact Student Activities to ask about current leadership opportunities."
      ],
      url: "https://www.byui.edu/student-activities/",
      keywords:
        "leadership student leader planning organizing teamwork involvement"
    }
  ];

  /* ==========================================
     PAGE ELEMENTS
     ========================================== */

  const list = document.querySelector("#campus-resource-list");
  const searchInput = document.querySelector("#resource-search");
  const searchButton = document.querySelector("#search-button");
  const count = document.querySelector(".campus-resource-count");
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
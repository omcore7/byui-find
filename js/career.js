/* ==========================================
   BYU-I FIND | CAREER & JOBS
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     CAREER RESOURCES
     ========================================== */

  const resources = [
    {
      id: "career-guidance",
      icon: "compass",
      title: "I'm not sure what career I want",
      subtitle: "Explore career options and get help planning your future.",
      name: "BYU-Idaho Career Center",
      description:
        "The Career Center helps students explore career options, build professional skills, and prepare for opportunities after graduation.",
      note:
        "You don't need to have your future completely figured out before asking for help.",
      steps: [
        "Open the BYU-Idaho Career Center website.",
        "Explore the career resources available to students.",
        "Think about your interests, skills, and goals.",
        "Look for career advising or appointment options.",
        "Schedule an appointment if you need help choosing a career."
      ],
      links: [
        {
          name: "Career Center",
          url: "https://www.byui.edu/career/"
        },
        {
          name: "Schedule a Career Appointment",
          url: "https://www.byui.edu/career/students/appointment-scheduling-instructions"
        }
      ],
      keywords:
        "career guidance advising major goals future planning career center"
    },

    {
      id: "campus-jobs",
      icon: "briefcase-business",
      title: "I need a job on campus",
      subtitle: "Explore student employment opportunities at BYU-Idaho.",
      name: "BYU-Idaho Student Employment",
      description:
        "Student Employment helps students find campus jobs and understand how to apply for university positions.",
      note:
        "Check the requirements for each position. International students should confirm their employment eligibility before accepting a job.",
      steps: [
        "Open the Student Employment website.",
        "Find the current student job opportunities.",
        "Look for positions that match your skills and class schedule.",
        "Read the job description and requirements.",
        "Follow the instructions to submit your application."
      ],
      links: [
        {
          name: "Student Employment",
          url: "https://web.byui.edu/studentemployment/"
        },
        {
          name: "Help Wanted Postings",
          url: "https://www.byui.edu/help-wanted-postings/"
        }
      ],
      keywords:
        "student employment campus jobs work part time hiring help wanted"
    },

    {
      id: "internships",
      icon: "graduation-cap",
      title: "I want to find an internship",
      subtitle: "Search for opportunities related to your major.",
      name: "Handshake",
      description:
        "Handshake is a platform where BYU-Idaho students can search for internships, explore companies, and connect with employers.",
      note:
        "If your internship is for academic credit, check your department's requirements. International students should confirm any required work authorization before starting.",
      steps: [
        "Open Handshake using the link below.",
        "Sign in with your BYU-Idaho account.",
        "Complete your profile with your major, skills, and experience.",
        "Search for internships related to your interests.",
        "Use filters to find opportunities that match your goals.",
        "Read the requirements and apply for positions that interest you."
      ],
      links: [
        {
          name: "Handshake – Jobs & Internships",
          url: "https://byui.joinhandshake.com/login"
        },
        {
          name: "Finding an Internship",
          url: "https://www.byui.edu/internships/finding-an-internship"
        }
      ],
      keywords:
        "handshake internship internships experience career opportunities major"
    },

    {
      id: "resume",
      icon: "file-user",
      title: "I want to improve my resume",
      subtitle: "Get feedback and make your resume stronger.",
      name: "VMock",
      description:
        "VMock is a resume review tool that gives students feedback on their resumes and helps them improve how they present their skills and experience.",
      note:
        "You can update your resume based on the feedback and review it again.",
      steps: [
        "Open VMock using the link below.",
        "Sign in with your BYU-Idaho account or follow the login instructions.",
        "Upload your current resume.",
        "Review the feedback and suggestions.",
        "Make changes to improve your resume.",
        "Upload your updated resume to check your progress."
      ],
      links: [
        {
          name: "VMock – Resume Review",
          url: "https://www.vmock.com/byui"
        },
        {
          name: "BYU-Idaho Resume Resources",
          url: "https://www.byui.edu/career/students/resumes"
        }
      ],
      keywords:
        "vmock resume cv review feedback improve skills job application"
    },

    {
      id: "cover-letter",
      icon: "file-text",
      title: "I need help writing a cover letter",
      subtitle: "Learn how to introduce yourself to employers.",
      name: "BYU-Idaho Job Market Readiness",
      description:
        "Job Market Readiness provides resources to help students prepare job applications, including cover letters.",
      note:
        "Not every employer requires a cover letter. Check the application instructions before writing one.",
      steps: [
        "Open the Job Market Readiness website.",
        "Look for the cover letter resources.",
        "Review the examples and recommendations.",
        "Read the job description carefully.",
        "Write a letter explaining your interest and qualifications.",
        "Review your letter before submitting it."
      ],
      url: "https://www.byui.edu/career/students/job-market-readiness",
      keywords:
        "cover letter writing application job employment preparation"
    },

    {
      id: "interview",
      icon: "messages-square",
      title: "I want to practice for a job interview",
      subtitle: "Prepare your answers and build confidence.",
      name: "VMock Interview Practice",
      description:
        "VMock provides interview preparation tools that can help students practice answering questions and improve their interview skills.",
      note:
        "Use real examples from your classes, work, projects, or volunteer experiences when practicing your answers.",
      steps: [
        "Open VMock using the link below.",
        "Sign in with your BYU-Idaho account or follow the login instructions.",
        "Find the interview preparation tools available to you.",
        "Choose a practice interview.",
        "Answer the questions as if you were in a real interview.",
        "Review your feedback and practice again."
      ],
      links: [
        {
          name: "VMock – Interview Practice",
          url: "https://www.vmock.com/byui"
        },
        {
          name: "Interview Preparation Resources",
          url: "https://www.byui.edu/career/students/job-market-readiness"
        }
      ],
      keywords:
        "vmock interview mock interview practice questions preparation"
    },

    {
      id: "career-fair",
      icon: "network",
      title: "I want to meet employers",
      subtitle: "Explore career fairs and networking opportunities.",
      name: "BYU-Idaho Career Fairs",
      description:
        "Career fairs give students opportunities to meet employers, learn about companies, and explore jobs and internships.",
      note:
        "Check the event schedule and participating employers before attending.",
      steps: [
        "Open the BYU-Idaho Career Fair website.",
        "Find an upcoming career fair.",
        "Review the employers attending the event.",
        "Prepare your resume and a short introduction.",
        "Attend the event and ask employers questions.",
        "Follow up with employers when appropriate."
      ],
      links: [
        {
          name: "Career Fairs",
          url: "https://www.byui.edu/career/career-fair/"
        },
        {
          name: "Handshake",
          url: "https://byui.joinhandshake.com/login"
        }
      ],
      keywords:
        "career fair networking employers recruiting events companies"
    },

    {
      id: "job-search",
      icon: "search-check",
      title: "I want to find a job after graduation",
      subtitle: "Search for full-time and entry-level opportunities.",
      name: "Handshake",
      description:
        "Handshake helps BYU-Idaho students find job opportunities and connect with employers who are looking for students and graduates.",
      note:
        "Start searching before graduation so you have time to prepare your applications and interviews.",
      steps: [
        "Open Handshake using the link below.",
        "Sign in with your BYU-Idaho account.",
        "Complete your profile and upload your resume.",
        "Search for jobs related to your degree or interests.",
        "Use filters to narrow your search.",
        "Save opportunities and apply for positions that match your goals."
      ],
      links: [
        {
          name: "Handshake – Job Search",
          url: "https://byui.joinhandshake.com/login"
        },
        {
          name: "Job Search Resources",
          url: "https://www.byui.edu/career/students/job-search"
        }
      ],
      keywords:
        "handshake full time jobs graduate graduation entry level employment"
    },

    {
      id: "help-wanted",
      icon: "clipboard-list",
      title: "I want to see other job postings",
      subtitle: "Explore additional employment opportunities.",
      name: "BYU-Idaho Help Wanted Postings",
      description:
        "Help Wanted Postings provides another place for students to explore employment information and available job opportunities.",
      note:
        "Job openings and deadlines may change, so check each posting before applying.",
      steps: [
        "Open the Help Wanted Postings website.",
        "Explore the available employment information.",
        "Look for positions that interest you.",
        "Read the job requirements and qualifications.",
        "Follow the employer's application instructions."
      ],
      links: [
        {
          name: "Help Wanted Postings",
          url: "https://www.byui.edu/help-wanted-postings/"
        },
        {
          name: "Student Employment",
          url: "https://web.byui.edu/studentemployment/"
        }
      ],
      keywords:
        "help wanted job postings jobs hiring openings local employment"
    },

    {
      id: "employment-preparation",
      icon: "trending-up",
      title: "I want to be more prepared for employment",
      subtitle: "Build professional skills before graduation.",
      name: "Job Market Readiness & Career Success Certification",
      description:
        "BYU-Idaho offers employment preparation resources to help students develop resumes, practice interviews, improve networking skills, and prepare for their careers.",
      note:
        "You can start preparing while you're still taking classes. Small steps now can help you feel more ready when applying for jobs.",
      steps: [
        "Open the Job Market Readiness website.",
        "Explore the employment preparation activities.",
        "Identify the professional skills you want to improve.",
        "Review the Career Success Certification requirements.",
        "Use Handshake and VMock as part of your preparation.",
        "Track your progress as you complete activities."
      ],
      links: [
        {
          name: "Job Market Readiness",
          url: "https://www.byui.edu/career/students/job-market-readiness"
        },
        {
          name: "Career Success Certification",
          url: "https://www.byui.edu/career/career-success-certification"
        },
        {
          name: "Handshake",
          url: "https://byui.joinhandshake.com/login"
        },
        {
          name: "VMock",
          url: "https://www.vmock.com/byui"
        }
      ],
      keywords:
        "employment preparation career success certification job readiness skills"
    }
  ];

  /* ==========================================
     PAGE ELEMENTS
     ========================================== */

  const list = document.querySelector("#career-resource-list");
  const searchInput = document.querySelector("#resource-search");
  const searchButton = document.querySelector("#search-button");
  const count = document.querySelector(".career-resource-count");
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
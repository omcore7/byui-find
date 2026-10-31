/* ==========================================
   BYU-I Find | Feedback Form
   Supabase + Basic Spam Protection
   ========================================== */

// ==========================================
// 1. Supabase Configuration
// ==========================================

const SUPABASE_URL = "https://dasqxojjhbzuytqhbahd.supabase.co";
const SUPABASE_KEY = "sb_publishable_2j9ER8KzBq1BvE4XNrBeJw_S1efZgVt";


// ==========================================
// 2. Form Elements
// ==========================================

const feedbackForm = document.querySelector("#feedback-form");
const feedbackStatus = document.querySelector("#feedback-status");
const submitButton = feedbackForm?.querySelector(
  'button[type="submit"]'
);


// ==========================================
// 3. Basic Spam Protection
// ==========================================

// Prevent multiple requests while submitting.
let isSubmitting = false;

// Wait 30 seconds between successful submissions.
const SUBMISSION_COOLDOWN = 30000;

// Store the last submission time in the browser.
const STORAGE_KEY = "byuiFindFeedbackLastSubmission";

// Get the last successful submission time.
function getLastSubmissionTime() {
  try {
    return Number(localStorage.getItem(STORAGE_KEY)) || 0;
  } catch (error) {
    return 0;
  }
}

// Save the successful submission time.
function saveLastSubmissionTime() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      Date.now().toString()
    );
  } catch (error) {
    console.warn("Could not save feedback cooldown.", error);
  }
}


// ==========================================
// 4. Status Messages
// ==========================================

function showFeedbackStatus(message, type = "") {
  if (!feedbackStatus) return;

  feedbackStatus.textContent = message;
  feedbackStatus.className = type;
}


// ==========================================
// 5. Submit Feedback
// ==========================================

feedbackForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Stop duplicate clicks.
  if (isSubmitting) return;

  // Get form values.
  const subject = document
    .querySelector("#subject")
    .value.trim();

  const message = document
    .querySelector("#message")
    .value.trim();

  const email = document
    .querySelector("#email")
    .value.trim();

  // Hidden honeypot field.
  const website = document.querySelector(
    "#feedback-website"
  )?.value.trim() || "";


  // ========================================
  // 6. Honeypot Check
  // ========================================

  // Basic bots sometimes fill hidden fields.
  // Ignore those submissions.
  if (website) {
    showFeedbackStatus(
      "Thank you! Your feedback was sent successfully.",
      "success"
    );

    feedbackForm.reset();
    return;
  }


  // ========================================
  // 7. Cooldown Check
  // ========================================

  const now = Date.now();
  const lastSubmissionTime = getLastSubmissionTime();

  const remainingTime =
    SUBMISSION_COOLDOWN - (now - lastSubmissionTime);

  if (remainingTime > 0) {
    const seconds = Math.ceil(
      remainingTime / 1000
    );

    showFeedbackStatus(
      `Please wait ${seconds} seconds before sending another message.`,
      "error"
    );

    return;
  }


  // ========================================
  // 8. Form Validation
  // ========================================

  if (!subject || !message) {
    showFeedbackStatus(
      "Please enter a subject and message.",
      "error"
    );
    return;
  }

  if (
    subject.length > 150 ||
    message.length > 5000
  ) {
    showFeedbackStatus(
      "Your subject or message is too long.",
      "error"
    );
    return;
  }

  if (email.length > 254) {
    showFeedbackStatus(
      "Your email address is too long.",
      "error"
    );
    return;
  }


  // ========================================
  // 9. Disable Button While Sending
  // ========================================

  isSubmitting = true;
  submitButton.disabled = true;

  // Save original button content.
  const originalButtonHTML = submitButton.innerHTML;

  submitButton.textContent = "Sending...";
  showFeedbackStatus("Sending your feedback...");


  // ========================================
  // 10. Send Feedback to Supabase
  // ========================================

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/feedback`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_KEY,
          "Prefer": "return=minimal"
        },

        body: JSON.stringify({
          subject: subject,
          message: message,
          email: email || null
        })
      }
    );

    if (!response.ok) {
      throw new Error(
        `Feedback submission failed: ${response.status}`
      );
    }


    // ======================================
    // 11. Successful Submission
    // ======================================

    saveLastSubmissionTime();

    showFeedbackStatus(
      "Thank you! Your feedback was sent successfully.",
      "success"
    );

    // Clear the form.
    feedbackForm.reset();

  } catch (error) {

    console.error(
      "Feedback submission error:",
      error
    );

    showFeedbackStatus(
      "Sorry, we couldn't send your feedback. Please try again.",
      "error"
    );

  } finally {

    // ======================================
    // 12. Restore Submit Button
    // ======================================

    isSubmitting = false;
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonHTML;
  }
});
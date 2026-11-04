/* ==========================================
   BYU-I Find | My Classes Search
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.querySelector(
    ".classes-page #resource-search"
  );

  const searchButton = document.querySelector(
    ".classes-page #search-button"
  );

  const resources = Array.from(
    document.querySelectorAll(
      ".classes-page .resource-guide"
    )
  );

  const noResults = document.querySelector(
    ".classes-page #no-results"
  );

  const count = document.querySelector(
    ".classes-page .classes-resource-count"
  );

  if (!searchInput) return;

  function filterResources() {

    const query = searchInput.value.trim().toLowerCase();

    let visible = 0;

    resources.forEach((resource) => {

      const searchableText = (
        (resource.dataset.search || "") + " " +
        resource.textContent
      ).toLowerCase();

      const matches = searchableText.includes(query);

      resource.hidden = !matches;

      if (matches) {
        visible++;
      }

    });

    if (noResults) {
      noResults.hidden = visible !== 0;
    }

    if (count) {
      count.textContent =
        visible + (visible === 1 ? " resource" : " resources");
    }

  }

  // Search automatically while typing
  searchInput.addEventListener("input", filterResources);

  // Search when clicking the arrow button
  searchButton?.addEventListener("click", filterResources);

  // Show the initial number of resources
  filterResources();

});
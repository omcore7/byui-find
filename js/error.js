document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const retryButton = document.querySelector("#retry-button");

  retryButton?.addEventListener("click", () => {
    window.location.reload();
  });
});
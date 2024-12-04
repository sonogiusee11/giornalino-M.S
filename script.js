document.addEventListener("DOMContentLoaded", () => {
  const breakingNews = document.querySelector(".breaking-news");
  setInterval(() => {
    breakingNews.classList.toggle("highlight");
  }, 2000);
});

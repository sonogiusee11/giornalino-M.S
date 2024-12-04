document.addEventListener("DOMContentLoaded", () => {
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentSection = document.getElementById("comment-section");

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const commentText = commentInput.value.trim();
    if (commentText) {
      const commentElement = document.createElement("p");
      commentElement.textContent = commentText;
      commentSection.appendChild(commentElement);
      commentInput.value = "";
    }
  });
});

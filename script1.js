// login.js
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  if (email) {
    // Salva l'email dell'utente nel localStorage (puoi usare anche sessionStorage)
    localStorage.setItem("userEmail", email);
    window.location.href = "index.html"; // Reindirizza all'articolo
  } else {
    alert("Per favore inserisci una email valida.");
  }
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentSection = document.getElementById("comment-section");

  // Verifica se l'utente è loggato
  const userEmail = localStorage.getItem("userEmail");
  if (!userEmail) {
    alert("Per favore effettua il login per commentare.");
    window.location.href = "login.html"; // Reindirizza alla pagina di login
  }

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const commentText = commentInput.value.trim();
    if (commentText) {
      // Aggiungi il commento con l'email dell'utente
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");

      const commentHeader = document.createElement("p");
      commentHeader.classList.add("username");
      commentHeader.textContent = userEmail;

      const commentBody = document.createElement("p");
      commentBody.textContent = commentText;

      commentElement.appendChild(commentHeader);
      commentElement.appendChild(commentBody);

      commentSection.appendChild(commentElement);

      commentInput.value = "";
    }
  });
});

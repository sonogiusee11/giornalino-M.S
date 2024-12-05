* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

header {
  background-color: #007acc;
  padding: 10px 0;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
}

.container {
  display: flex;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  max-width: 900px;
  width: 100%;
}

.immagine {
  width: 40%;
  border-radius: 45px;
  object-fit: cover;
}

.testo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

h1 {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-weight: 600;
  font-size: 16px;
}

footer {
  background-color: #007acc;
  color: white;
  text-align: center;
  padding: 10px 0;
}

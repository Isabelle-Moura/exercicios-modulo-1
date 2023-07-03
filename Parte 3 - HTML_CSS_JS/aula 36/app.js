const modal = document.getElementById("modal");
const url = 'https://tasty.p.rapidapi.com/recipes'
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4958d24a48mshb7b7eaf0871c99ep1c78a0jsnb6e40b9bb83c",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const showData = (recipes) => {
  const content = document.getElementById("content");
  recipes.forEach((recipe) => {
    content.innerHTML +=
      `
      <div class="recipe">
        <div class="recipe-title">${recipe.name}</div>
        <img src="${recipe.thumbnail_url}">
        <button class="recipe-button" onclick="loadDescription('${recipe.id}')">Ver descrição</button>
      </div>
    `;
  });
};

const showDescription = (recipe) => {
  const title = document.querySelector(".modal-title");
  const text = document.querySelector(".modal-text");
  title.innerHTML = recipe.name;
  text.innerHTML = recipe.description;
  openModal();
};

const loadData = async () => {
  const response = await fetch(`${url}/list`, options);
  const data = await response.json();
  console.log(data);
  showData(data.results);
};

const loadDescription = async (id) => {
  const response = await fetch(`${url}/get-more-info?id=${id}`, options);
  const recipe = await response.json();
  console.log(recipe);
  showDescription(recipe);
};

loadData();

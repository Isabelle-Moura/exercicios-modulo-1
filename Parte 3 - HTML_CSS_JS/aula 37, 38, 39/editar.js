//Armazena o endpoint da API de "Reports".
const url = "http://localhost:3000/reports";

const form = document.getElementById("form");

let reportId = "";

const backToIndexPage = () => {
  window.location = "index.html";
};

const getIdFromUrl = async () => {
  const parametersString = window.location.search;
  const parameters = new URLSearchParams(parametersString);
  reportId = parameters.get("id");
};

const getReports = async () => {
  const apiResponse = await fetch(`${url}`);
  const report = await apiResponse.json();
  return report;
};

const getReport = async (id) => {
  const apiResponse = await fetch(`${url}/${id}`);
  const report = await apiResponse.json();
  const result = report.find(item => item.id === id);
  return result;
}

// const getEmpty = async () => {
//   const apiResponse = await fetch(`${url}`);
//   const report = await apiResponse.json();
//   const result = report.filter(item => item.text === "undefined");
//   return result;
// }

// ;(async function() {
//   const res = await getReport(1)
//   return console.log(res)
// })();

// ;(async function() {
//   const res = await getEmpty()
//   return console.log("Quais items estão com os textos undefined?", res)
// })();


//UPDATE:
const editReport = async (id) => {

  await fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
  });

  window.location = "editar.html";
};

const loadDataFromForm = async (id) => {
  const report = await getReport(id)
  
  document.getElementById("title").value = report.title;
  document.getElementById("writer").value = report.writer;
  document.getElementById("image").value = report.image;
  document.getElementById("text").value = report.text;
};

const loadData = async (id) => {
  getIdFromUrl();
  loadDataFromForm(id);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const title = form.elements["title"].value;
  const writer = form.elements["writer"].value;
  const image = form.elements["image"].value;
  const text = form.elements["text"].value;


  const report = {
    title,
    writer,
    image,
    text,
  };
  editReport(report);

});

loadData(id);
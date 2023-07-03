//Armazena o endpoint da API de "Reports".
const url1 = "http://localhost:3000/reports";
const url2 = "http://localhost:3000/writers"

//READ:
const loadReport = (reports) => {
  const content = document.getElementById("content");
  let subject = ""; 

  reports.map( (report) => {
    subject =
      subject +
      `
         <div class="card">
           <div class="image">
             <img src="${report.image}">
           </div>
           <div class="card-content">
             <div class="card-subject">
               <div class="card-title">
                ${report.title}
               </div>
               <div class="card-text">
                ${report.text}
               </div>
               <div>
               <div class="edit-button">
                 <button id="editButton" onclick="editReport(${report.id})">Editar</button>
               </div>
               <div class="delete-button">
                 <button id="deleteButton" onclick="deleteReport(${report.id})">Deletar</button>
               </div>
               </div>
             </div>
           </div>
         </div>
        `;
  });

  content.innerHTML = subject;
};

const getReports = async () => {
  const apiResponse = await fetch(`${url1}`);
  const reports = await apiResponse.json();
  console.log(reports); 
  loadReport(reports);
};

const newReport = () => {
  window.location = "cadastro.html";
};

getReports();


// const getWriters = async () => {
//   const apiResponse = await fetch (`${url2}`)
//   const writers = await apiResponse.json()
//   console.log(writers)
// }
// getWriters()


//UPDATE:
const editReport = (id) => {
  window.location = `editar.html?id=${id}`;
};


//DELETE:
const deleteReport = async (id) => {
  try {
    await fetch(`${url1}/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      }
    });
    getReports(); 

  } catch (error) {
    console.error(error)
}
};
getReports(); 

const writerSelect = document.getElementById("writer");

const getWriters = async () => {
  const apiResponse = await fetch("http://localhost:3000/writers");
  const writers = await apiResponse.json();

  writers.forEach((writer) => {
    const option = document.createElement("option");
    option.value = writer.id;
    option.text = writer.nome;
    writerSelect.appendChild(option);
  });
};

getWriters();

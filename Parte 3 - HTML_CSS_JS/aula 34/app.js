const publicKey = "b1e51adbfef553cdae1fe930cb75f64b";
const privateKey = "be1396415a3c9f6d29ec5c7dbce1eb02fa6e409f";
const timestamp = new Date().getTime();
const hash = timestamp + privateKey + publicKey;
const hashMd5 = MD5.generate(hash);

const promise = fetch(
  `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hashMd5}`
);

promise
  .then((response) => {
    response
      .json()
      .then((jsonResponse) => {
        const selected = [];
        const characters = jsonResponse.data.results;

        selected.push(characters[7])
        selected.push(characters[10])
        selected.push(characters[6])
        selected.push(characters[17])
        console.log(characters);

        const content = document.getElementById("content");

        selected.forEach((character) => {
          const comics = character.comics.items.slice(0, 2);
          const series = character.series.items.slice(0, 2);

          const boxCharacter = `
          <div class="display">
            <div class="card">
              
            <div>
            <img class="image" src="${character.thumbnail.path}.${
            character.thumbnail.extension
          }">
            </div>

            <div>
            <div class="name">${character.name}</div>   
            <div class="description">Comics: 
              <ul>
                ${comics.map((comic) => `<li>${comic.name}</li>`).join("")}
              </ul>
            </div>
            
            <div class="description">Series:
              <ul>
                ${series.map((serie) => `<li>${serie.name}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>           
      `;

          content.innerHTML += boxCharacter;
        });
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  })
  .catch((error) => {
    console.log("Error " + error);
  });

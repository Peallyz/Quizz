const form = document.querySelector("#quizz");
const emojis = ["✔️", "✨", "👀", "😭", "👎"];
const reponses = ["c", "a", "b", "a", "c"];
const titreResultat = document.querySelector(".info__result h3");
const texteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");

const allQuestions = document.querySelectorAll(".container");

let verifTableau = [];

let tableauResultats = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  for (let i = 1; i < 6; i++) {
    tableauResultats.push(
      document.querySelector(`input[name="q${i}"]:checked`).value
    );
  }
  verifFunc(tableauResultats);
  tableauResultats = [];
});

function verifFunc(arrResults) {
  for (let a = 0; a < 5; a++) {
    if (arrResults[a] === reponses[a]) {
      allQuestions[a].classList.add("succeed");
      verifTableau.push(true);
    } else {
      allQuestions[a].classList.add("echec");
      verifTableau.push(false);
    }
  }
  afficherResultat(verifTableau);
  verifTableau = [];
}

function afficherResultat(tab) {
  const nbDeFautes = tab.filter((el) => el !== true).length;

  switch (nbDeFautes) {
    case 0:
      titreResultat.innerText = `✔️ Bravo c'est un sans faute ! ✔️`;
      aideResultat.innerText = ``;
      texteResultat.innerText = `5/5`;
      break;
    case 1:
      titreResultat.innerText = `✨ Vous y êtes presque ! ✨`;
      aideResultat.innerText =
        "Retentez une autre réponse dans la case rouge, puis re-validez !";
      texteResultat.innerText = "4/5";
      break;

    case 2:
      titreResultat.innerText = `✨ Encore un effort ... 👀`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      texteResultat.innerText = "3/5";

      break;
    case 3:
      titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      texteResultat.innerText = "2/5";

      break;
    case 4:
      titreResultat.innerText = `😭 Peux mieux faire ! 😭`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      texteResultat.innerText = "1/5";

    case 5:
      titreResultat.innerText = `👎 Peux mieux faire ! 👎`;
      aideResultat.innerText =
        "Retentez une autre réponse dans les cases rouges, puis re-validez !";
      texteResultat.innerText = "0/5";
      break;
    default:
      `Wops, cas innatendu`;
  }
}

allQuestions.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.remove("echec");
  });
});

async function fetchQuizz(url) {
  try {
    let response = await fetch(url);
    if (response.status === 200) {
      let data = await response.json();
      return data;
    }
  } catch (e) {
    console.log(e);
  }
}

// let urlF = "./json/fourmis.json";
// let urlA = "./json/automobile.json";
let dataQuizz = fetchQuizz((url = "./json/automobile.json"));
let dataQuizzf = fetchQuizz((url = "./json/fourmis.json"));

dataQuizz.then((data) => {
  display(data);
});
dataQuizzf.then((data) => {
  // console.log(data);
});

console.log(dataQuizz);

function display(data) {
  console.log(data);

  for (i = 0; i <= data["catégorie-nom-slogan"].fr.length; i++) {
    data[i].querySelector(".card-header").textContent =
      data["catégorie-nom-slogan"].fr["catégorie"];
  }
}

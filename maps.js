/*
const mapaSaur = new Map;

// MAP METHODS
mapaSaur.clear(); //remove all key-value
mapaSaur.delete(); //Validates if an element existed and was removed.
mapaSaur.entries(); //
//mapaSaur.forEach(); // does something for each pair in the map.
mapaSaur.get(); // returns a value associated to a key.
mapaSaur.has(); // Validates if a key has an associated value.
mapaSaur.keys(); // returns all the keys from the object
mapaSaur.values(); // returns all the values from the object


mapaSaur.set("0", "foo");
mapaSaur.set(1, "bar");
mapaSaur.set({}, "baz");

console.log(mapaSaur.size);
console.log(mapaSaur)

for (const entry of mapaSaur) {
  console.log(entry);
};

*/

// *****************************************************

const cards = [];
const $cards = document.querySelector(".cards-row");
// form elements

const $form = document.getElementById("movieForm")
const $createButton = document.getElementById("create");
console.log($createButton)


$createButton.addEventListener("click", function (){
  const $formTitle = $form.title.value;
  const $formGenre = $form.genre.value;
  const $formDuration = $form.duration.value;
  const $formDirector = $form.director.value;
  const $formMovieImg = $form.moviePic.value;

  const pelicula = new Map;
  pelicula.set("title",$formTitle);
  pelicula.set("genre",$formGenre);
  pelicula.set("duration",$formDuration);
  pelicula.set("director",$formDirector);
  pelicula.set("moviePic",$formMovieImg);

  console.log(pelicula);
  cards.push(pelicula)

  const id = (cards.length)-1
  console.log(id);
  cards[id].set("id",id)
  console.log(cards)

  const $movieCard = document.createElement("div");
  const $cardImg = document.createElement("img");
  const $cardUl = document.createElement("ul");

  $cardUl.innerHTML = 
  `<li class="list-group-item">Title: ${$formTitle}</li>
  <li class="list-group-item">Genre: ${$formGenre}</li>
  <li class="list-group-item">Duration: ${$formDuration}</li>
  <li class="list-group-item">Director: ${$formDirector}</li>`

  $movieCard.setAttribute("class","card col-4");
  $movieCard.setAttribute("id",`${id}`);
  $movieCard.setAttribute("style","width: 18rem");

  $cardImg.setAttribute("src",`${$formMovieImg}`);
  $cardImg.setAttribute("class","card-img-top");

  $cardUl.setAttribute("class","list-group list-group-flush")

  $movieCard.appendChild($cardImg);
  $movieCard.appendChild($cardUl);

  $cards.appendChild($movieCard);
});
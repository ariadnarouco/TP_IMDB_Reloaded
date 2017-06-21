document.getElementById("submitForm").addEventListener("click", function () {
  onFormSubmit();
});


function onFormSubmit(){
  var tituloVal = document.getElementById("tituloPelicula").value;
  var generoVal = document.getElementById("generoSelector").value;
  var sinopsisVal = document.getElementById("sinopsis").value;

  var section =document.getElementsByTagName("section")[1];

  var article = document.createElement("article");

  var h1Titlulo = document.createElement("h1");
  h1Titlulo.appendChild(document.createTextNode(tituloVal));
  article.appendChild(h1Titlulo);

  var smallGenero = document.createElement("small");
  smallGenero.appendChild(document.createTextNode(generoVal));
  article.appendChild(smallGenero);

  var img = document.createElement("img");
  img.setAttribute("src", "img/placeholder.png");
  img.style = "    display: block;";
  article.appendChild(img);

  var pSinopsis = document.createElement("p");
  pSinopsis.appendChild(document.createTextNode(sinopsisVal));
  article.appendChild(pSinopsis);

  section.appendChild(article);

  document.getElementById("form").reset();

}

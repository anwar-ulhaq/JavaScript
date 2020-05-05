// Create function 'showImages' which
// loads images.json which has links to images as an array.

const showImages = (jsonObj) => {
  const ul = document.querySelector('.primary-color ul');

  jsonObj.map( (imageList) => {

    ul.innerHTML += "<li>\n" +
        "    <figure>\n" +
        "        <a href=\"img/original/" + imageList.mediaUrl +
        "\"><img src=\"img/thumbs/" + imageList.mediaUrl + "\"></a>\n" +
        "        <figcaption>\n" +
        "            <h3>" + imageList.mediaTitle + "</h3>\n" +
        "        </figcaption>\n" +
        "    </figure>\n" +
        "</li>"

  })
};

fetch('images.json')
//whatever we get from fetch(urlToFetch), it is send to next .then as parameter.
    .then( (response) => {
      console.log(response);
      //whatever fatched is called 'response' here, get its json object and return it to next .then.
      return response.json();
    } )
    .then( (jsonObj) => {
  //Send json object to showImages function.
  showImages(jsonObj);
} );
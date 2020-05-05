// Create function 'showImages' which
// loads images.json which has links to images as an array.

const showImages = (jsonObj) => {
  const ul = document.querySelector('.primary-color ul');

  jsonObj.map( (image) => {
      let li = createNode('li'),
          figure = createNode('figure'),
          a= createNode('a'),
          img = createNode('img'),
          figcaption = createNode('figcaption'),
          h3 = createNode('h3');
      img.src = "img/thumbs/"+ image.mediaUrl;
      a.href = "img/original/"+ image.mediaUrl;
      h3.innerText = `${image.mediaTitle}`;
      append(figcaption, h3);
      append(a , img);
      append(figure, a);
      append(figure, figcaption);
      append(li, figure);
      append(ul, li);


    })
};

fetch('images.json')
//whatever we get from fetch(urlToFetch), it is send to next .then as parameter.
    .then( (response) => {
      //whatever fatched is called 'response' here, get its json object and return it to next .then.
      return response.json();
    } )
    .then( (jsonObj) => {
  //Send json object to showImages function.
  showImages(jsonObj);
} );

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parentElement, childElement) {
  return parentElement.appendChild(childElement); // Append the second parameter(element) to the first one
}
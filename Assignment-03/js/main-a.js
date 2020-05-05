// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

'strict use'

const showImages = (htmlContent) => {
  const ul = document.querySelector('.primary-color ul');
  ul.innerHTML = htmlContent;
};

fetch('images.html')
//whatever we get from fetch(urlToFetch), it is send to next .then as parameter.
    .then( (response) => {
      //whatever fetched is called 'response' here, get its text and return it to next .then.
      return response.text();
    })
    .then( (html) => {
  //text is send as 'html' to showImages
  showImages(html);
} );
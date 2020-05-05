'use strict';

// HTML contains element 'message'. This is used to show the server's response
// Select it and save it as a variable/object
const serverResponse = document.querySelector('p');

// make function 'upload' which
const upload = (event) => {
  event.preventDefault();
  // - prevents the form from sending
  // - writes 'Upload in progress...' into 'message' element
  serverResponse.innerText = "Upload in progress...";
  // - selects the file input field
  const input = document.querySelector('input[type="file"]');
  // - makes FormData -object and adds the file selected byt the user into the object
  const data = new FormData();
  data.append('fileToUpload', input.files[0]);// first is name, file second  and path third.
  const settings = {
    method: 'POST',
    // credentials: 'same-origin', // this might be needed for some servers
    body: data
  };
  // - send the file to the same url as in task a by using fetch -method
  fetch('/node/upload', settings).then((response) => {
    return response.json();
  }).then((json) => {
    serverResponse.innerText = `Uploaded to ${json.success}`;
    console.log(json);
  });
  fetch(req).then((response) => {
    return response.json();
  }).then((json) => {
    //serverResponse.innerText = `Uploaded to ${json.success}`;
    console.log(json);
  }).catch((err) => {
    console.log('ERROR:', err.message);
  });

  //    MAKE RESPONSE IN NODE APP   //
  // - when file upload is complete, writes server response to 'message' element
  // function ends
};
// make an event listener which calls upload function when the form is submitted

document.querySelector('form').addEventListener('submit', upload);

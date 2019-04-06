var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dachshundNose.jpeg') {
      myImage.setAttribute ('src','images/dachshund.png');
    } else {
      myImage.setAttribute ('src','images/dachshundNose.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ' Loves Dachshunds';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = storedName + ' Loves Dachshunds';
}

myButton.onclick = function() {
  setUserName();
}
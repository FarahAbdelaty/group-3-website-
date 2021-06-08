var saveUserInput = prompt("hello! who are you ? please introduce yourself (:");

console.log(saveUserInput);

document.getElementById("username").innerText = saveUserInput 

// tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
$(document).ready(function () {
  
  $('#woods').hide();
  $('#submit-button').click(function(e){
    e.preventDefault();
    let btnLink = document.getElementById('enterWoods');
    let userInput = document.getElementById('userAge').value;
    if (userInput >= 13){
    $('#woods').show();
    $('#woods').text("ENTER THE WOODS");
    btnLink.href = "./html/cards.html";
    } else {
      $('#woods').show();
      $('#woods').text("Oh honey, no.");
      btnLink.href = "#";
    }
    })
  })        

  
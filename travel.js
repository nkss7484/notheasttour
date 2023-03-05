function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
function submit(){
  var fname = $('fname').val();
  var num = $('num').val();
  var ruppes = $('ruppes').val();
  var day = $('day').val();
  var state = $('state').val();
  var subject = $('subject').val();
  var Body='fname';  '+fname+' <br>num; '+num+'<br>ruppes; '+ruppes+'<br>day; '+day'<br>'state';  '+state+' <br>subject; '+subject+';
}
  Email.send({
    Host : "smtp.gmail.com",
    Username : "nkss8789@gmail.com",
    Password : "Nitish8789@",
    To : 'nkss00740@gmail.com',
    From : "nkss8789@gmail.com",
    Subject : "Message from Justice travel",
    Body : Body
}).then(
  message => {
    if(message== 'ok'){
      alert('Form Submitted');
    }
      else {
        console.error(message);
        alert('error.')
      }
    }
);
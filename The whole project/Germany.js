function down() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  function changeColorsr() { 
  var x = document.getElementsByClassName("A");
  for (i = 0; i < x.length; i++){
      x[i].style.borderColor="red";}
  var y = document.getElementsByClassName("FH2");
  var j;
  for (j=0; j<y.length; j++){
    y[j].style.color="red";}
    }
  
  function changeColorso() { 
  var x = document.getElementsByClassName("A");
  var i;
  for (i = 0; i < x.length; i++){
      x[i].style.borderColor="orange"; }
  var y = document.getElementsByClassName("FH2");
  var j;
  for (j=0; j<y.length; j++){
    y[j].style.color="orange";  }
}
   function changeColorsy() { 
   var x = document.getElementsByClassName("A");
   for (i = 0; i < x.length; i++){
       x[i].style.borderColor="yellow";   }
   var y = document.getElementsByClassName("FH2");
   var j;
   for (j=0; j<y.length; j++){
     y[j].style.color="yellow"; }
  }
   function changeColorsg() { 
   var x = document.getElementsByClassName("A");
   for (i = 0; i < x.length; i++){
       x[i].style.borderColor="green";}
   var y = document.getElementsByClassName("FH2");
   var j;
   for (j=0; j<y.length; j++){
     y[j].style.color="green"; }
  }
   function changeColorsb() { 
   var x = document.getElementsByClassName("A");
   for (i = 0; i < x.length; i++){
       x[i].style.borderColor="blue"; }
   var y = document.getElementsByClassName("FH2");
   var j;
   for (j=0; j<y.length; j++){
     y[j].style.color="blue"; }
  }
   function changeColorsl() { 
   var x = document.getElementsByClassName("A");
   for (i = 0; i < x.length; i++){
       x[i].style.borderColor="lightblue"; }
   var y = document.getElementsByClassName("FH2");
   var j;
   for (j=0; j<y.length; j++){
     y[j].style.color="lightblue"; }
  }
   function changeColorsp() { 
   var x = document.getElementsByClassName("A");
   for (i = 0; i < x.length; i++){
       x[i].style.borderColor="purple"; }
   var y = document.getElementsByClassName("FH2");
   var j;
   for (j=0; j<y.length; j++){
     y[j].style.color="purple"; }
  }
  //  function changeColorsr() { 
  //  var x = document.getElementsByClassName("A");
  //  for (i = 0; i < x.length; i++){
  //      x[i].style.borderColor="red";
  //  }}
  //  function changeColors() { 
  //    document.getElementById("A1").style.border="1.5px solid red";      
  //  }

   var btnContainer = document.getElementById("colors");
   var btns = header.getElementsByClassName("col");
   for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function() {
     var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
     });
   }
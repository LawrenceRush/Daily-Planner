
//global vars && setup
 var hour = parseInt(moment().format('HH'))
 
 updateColors();
 
 
 //intervals
 var timerInterval = setInterval(timeSet, 1000);
 var updateHourInterval = setInterval(updateHour, 60000);
 
 //functions
 function timeSet () {
 $("#timer").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
 }

 function updateHour () {
     hour = parseInt(moment().format('HH'))
     updateColors ()

 }

 function updateColors (){
    var inputs = $(".inputs")   
    for (var i = 0; i<inputs.length; i++){
     var time = parseInt(inputs[i].getAttribute("time"));
      if  (time == hour){
          inputs[i].style.backgroundColor = "orange"
          
      } else if (time < hour ){
        inputs[i].style.backgroundColor = "red"
      } else if (time > hour){
        inputs[i].style.backgroundColor = "green"
        
      }
    }
 }

 //event listners
//  $( ".fas" ).click(function() {
//     alert( "Handler for .click() called." );
//   });





 
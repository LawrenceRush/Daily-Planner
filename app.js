
//global vars && setup
 var hour = parseInt(moment().format('HH'))
 var inputsArr=[]
 
 $("#timer").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
 upDateInputs();
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
          inputs[i].style.backgroundColor = " rgb(223, 111, 6)"
          
      } else if (time < hour ){
        inputs[i].style.backgroundColor = "red"
      } else if (time > hour){
        inputs[i].style.backgroundColor = "green"
        
      }
    }
 }

 function upDateInputs(){
     for(var i =0; i < inputsArr.length; i++){
         let input = $("#"+i);
         input.val(inputsArr[i]);
     }
 }

 function checkStorage(){
    inputsArr = JSON.parse(localStorage.getItem("savedArr")) 
    if (inputsArr == null){ 
        inputsArr = ["", "","", "","", "","", "","", "" ] 
    }
 }

 //event listners
 $( ".save-div" ).click(function() {
    var value = ($(this).attr("value"));
    var textBox = $("#" + value);
    
    inputsArr[value] = textBox.val();
    localStorage.setItem('savedArr', JSON.stringify(inputsArr));
  });







 
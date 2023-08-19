var buttonsContainer = document.getElementById("buttons-container");
var buttons = buttonsContainer.querySelectorAll(".button");
var display = document.getElementById("display");
var number1 =0;
var number2 = 0;
var answer;
var operation;
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var text = this.getAttribute("data-value");
        if(text=="+" || text == "-" || text == "/" || text == "%"  || text == "*" ){
            operation = this.getAttribute("data-value");
            console.log(operation);
         number1 = parseInt(display.innerHTML);
         display.innerHTML=operation;
         display.innerHTML="";
        }
        else if(text == "="){
             number2 = parseFloat(display.innerHTML);
             display.innerHTML="";
             if(operation=="+") answer = number1+number2;
             else if(operation=="-") answer = number1 - number2;
             else if(operation=="/") answer = number1/number2;
             else if(operation=="%") answer = number1/100;
             else if(operation=="*") answer = number1*number2;
             else if(operation=="cos") answer = Math.cos(number1);
             else if (operation === "cos") answer = Math.cos(number1 * (Math.PI / 180)); 
             else if (operation === "sin") answer = Math.sin(number1 * (Math.PI / 180));  
             else if (operation === "tan") answer = Math.tan(number1 * (Math.PI / 180));
             else if (operation === "root") answer = Math.sqrt(number1);
            display.innerHTML+= answer.toString();
        }
        else if(text=="cos" || text=="tan" || text=="sin" || text =="root"){
            operation = this.getAttribute("data-value");
            display.innerHTML = operation;
            number1 = parseInt(display.innerHTML);
        }
        else if(text == "ac") display.innerHTML="";
        else{
            display.innerHTML+=text;
        }
        
    });
}


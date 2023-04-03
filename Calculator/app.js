var button = document.getElementsByClassName("buttons")
var display = document.getElementById("display")
var operand1 = 0
var operand2= null 
var operator = null

for (var i =0;i< button.length ; i++){
    button[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value')

        if(value=='reset') {
            display.innerText = null;
        }
        else if(value=='+'|| value == '-' || value== '*' || value == '/' || value == '%'){
            operator = value;
            operand1 = parseFloat(display.innerText)
            // console.log("operand 1 = " , operand1)
            display.innerText = null;

           
        } else if(value=="="){ 
            if(operator != null){
                operand2 = parseFloat(display.innerText)
                // console.log("Operand 2 = " , operand2)
                display.innerText = eval(operand1 + " " + operator + " " + operand2)
            } else {
                display.innerText = "Infinity"
            }
            
        } else if(value=='sign'){
            display.innerText =eval(parseFloat(display.innerText) * (-1))
        } else if(value=='.'){

          //
        }else {
            display.innerText += value;
        }
    })
}

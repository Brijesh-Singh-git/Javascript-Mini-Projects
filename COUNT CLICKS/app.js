// var count = 0;

// var update = document.getElementsByTagName("div")

// update[1].addEventListener('click',function(){

// }) 

var box = document.getElementById("box1");

var clickCount = document.getElementById("clickCount");

count =0; 

box.addEventListener('click', function(){
    count++;
    console.log(count);
    clickCount.innerText = "Box Clicked : " + count + " Times " ;
})

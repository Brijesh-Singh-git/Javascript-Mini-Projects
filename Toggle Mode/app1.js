// import "./styles.css"; 

var count =0;
document.getElementById('toggler').addEventListener('click',function(){
    var checked = document.getElementById("toggler").checked
    if(checked){
        document.getElementsByTagName('input')[0].style.backgroundColor ="black"
        document.getElementsByTagName('input')[0].style.border ="2px solid white"
        document.getElementsByTagName('h1')[0].style.color ="white"
        document.body.style.backgroundColor ="black" 
        

    } else{
        
        document.getElementsByTagName('input')[0].style.backgroundColor ="white"
        document.getElementsByTagName('input')[0].style.border ="2px solid black"
        document.getElementsByTagName('h1')[0].style.color ="black"
        document.getElementsByTagName('body')[0].style.backgroundColor ="white" 
       
    }
})

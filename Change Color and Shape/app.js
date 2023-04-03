var count = 0;

document.getElementsByClassName('btn1')[0].addEventListener('click',function(){ 
    
    // var checked = document.getElementsByClassName('btn1').checked 

     var colors = ["red", "green" ,"yellow"] 

     var index= Math.floor(Math.random()*colors.length); 

    //  console.log(in)

    document.getElementsByClassName('inner')[0].style.backgroundColor =colors[index];
})

document.getElementsByClassName('btn2')[0].addEventListener('click',function(){

    var shapes = ["square" ,"circle" ,"triangle"]  
    
    var index= Math.floor(Math.random()*shapes.length); 
    
    var prevShape=  document.getElementById('box').className

    console.log("Previous SHape" ,prevShape )

    document.getElementById('box').classList.remove(prevShape)
    
    document.getElementById('box').classList.add(shapes[index])
    // document.getElementsByClassName('inner')[0].style.borderRadius ="0px" 
    // document.getElementsByClassName('box')[0].style.borderRadius ="50px"
})



window.addEventListener('scroll', function () {

    let headerOne = document.getElementById("header__one");
    let headerTwo = document.getElementById("header__two");
    let posicionObj1 = headerOne.getBoundingClientRect().top;
    let tamanoPantallaTextos = window.pageYOffset;

    
    
    
    if (posicionObj1 = tamanoPantallaTextos) {
        headerTwo.style.transition = "all 1s"
       headerTwo.style.transform = 'translateY(0)'
  
        
    }
  
   
    if(tamanoPantallaTextos == 0){
        headerTwo.style.transform = 'translateY(-100%)'
           headerTwo.style.transition = "all 1s"
   
    }
   

    
 
})

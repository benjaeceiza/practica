 const categoriaOne = document.getElementById("categoria-1")
 const categoriaTwo = document.getElementById("categoria-2")
 const categoriaThree = document.getElementById("categoria-3")
 const dataOne = document.getElementById("contenedor-data-categoria-1")
 const dataTwo = document.getElementById("contenedor-data-categoria-2")
 const dataThree = document.getElementById("contenedor-data-categoria-3")



 const agrandar = (variable,data) => {
    variable.style.width = "80%"
    variable.style.transition = "all 1s"

        data.style.display = "flex";

 
 }


 const achicar = (variable,data) => {

     variable.style.width = "35%";
      data.style.display = "none";
 }

 categoriaOne.onmouseenter = () => agrandar(categoriaOne,dataOne)
 categoriaOne.onmouseleave = () => achicar(categoriaOne,dataOne)
 categoriaTwo.onmouseenter = () => agrandar(categoriaTwo,dataTwo)
 categoriaTwo.onmouseleave = () => achicar(categoriaTwo,dataTwo)
 categoriaThree.onmouseenter = () => agrandar(categoriaThree,dataThree)
 categoriaThree.onmouseleave = () => achicar(categoriaThree,dataThree)
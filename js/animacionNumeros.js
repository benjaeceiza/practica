
window.addEventListener('scroll', function () {
    const cardOne = this.document.getElementById("card-1")
    const cardTwo = this.document.getElementById("card-2")
    const cardThree = this.document.getElementById("card-3")
    const cardFour = this.document.getElementById("card-4")


    const numeroOne = document.getElementById("numero-1")
    const numeroTwo = document.getElementById("numero-2")
    const numeroThree = document.getElementById("numero-3")
    const numeroFour = document.getElementById("numero-4")
    const contenedor = document.getElementById("container-numeros")
    const numbers = [numeroOne, numeroTwo, numeroThree, numeroFour];






    let posicionObj1 = cardOne.getBoundingClientRect().top;
    let posicionObj2 = cardTwo.getBoundingClientRect().top;
    let posicionObj3 = cardThree.getBoundingClientRect().top;
    let posicionObj4 = cardFour.getBoundingClientRect().top;
    let tamanoPantallaTextos = window.pageYOffset;


    if (posicionObj1 = tamanoPantallaTextos) {





        numbers.forEach(numberElement => {

            const finalNumber = numberElement.textContent.replace(/,/g, '');
            const numericValue = parseInt(finalNumber);
            let currentNumber = 0;
            const increment = numericValue / 50;

            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= numericValue) {
                    currentNumber = numericValue;
                    clearInterval(timer);
                }
                numberElement.textContent = Math.floor(currentNumber).toLocaleString();
            }, 30);
        });

    }


})


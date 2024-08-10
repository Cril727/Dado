let btnDado = document.getElementById('Dado');
let btnP1 = document.getElementById('P1');
let btnP2 = document.getElementById('P2');

let intentos = 0;

btnDado.addEventListener("click", () => {
    if (intentos < 6) {
        let dado = new Dado();
        let num1 = dado.Dado1();
        let num2 = dado.Dado2();

        let tabla = new TablaResultados();
        tabla.agregarDadoTabla(num1, num2);

        document.getElementById('rD').textContent = num1 + " " + num2;

        intentos++;
    }

    if (intentos === 6) {
        btnDado.disabled = true;
        alert("Se han realizado los 6 intentos permitidos.");

    }

    if (intentos >= 5) {
        let Rtabla = new TablaResultados();
        Rtabla.ResultadoTabla(num1, num2);
    }
});



let turnoJugador2 = false;

btnP1.addEventListener("click", () => {
    if (intentos < 6 && !turnoJugador2) {
        let numA = new Dado().Dado1();
        document.getElementById('rD').textContent = numA;

        let player1 = new TablaResultados();
        player1.agregarDadoJ1(numA);

        intentos++;
        turnoJugador2 = true;
    }

    if (intentos === 6) {
        btnP1.disabled = true;
        alert("Se han realizado los 6 intentos permitidos.");
    }
});

btnP2.addEventListener("click", () => {
    if (intentos < 6 && turnoJugador2) {
        let numB = new Dado().Dado2();
        document.getElementById('rD').textContent = numB;

        let player2 = new TablaResultados();
        player2.agregarDadoJ2(numB);

        intentos++;
        turnoJugador2 = false; 
    }

    if (intentos === 6) {
        btnP2.disabled = true;
        alert("Se han realizado los 6 intentos permitidos.");
    }
});

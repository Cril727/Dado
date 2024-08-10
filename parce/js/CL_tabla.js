let partida = 1
let ultimoValorJ1 = null;
let ultimoValorJ2 = null;
let suma = 0;
let suma2 = 0;
class TablaResultados {

    constructor(num1, num2) {
        this._num1 = num1
        this._num2 = num2
    }

    agregarDadoTabla(num1, num2) {
        let fila = document.createElement('tr');

        let col1 = document.createElement('td');
        col1.textContent = partida ++;

        let col2 = document.createElement('td');
        col2.textContent = num1;

        let col3 = document.createElement('td');
        col3.textContent = num2;

        fila.append(col1, col2, col3);

        let nodoTablaDado = document.getElementById("ResultadoDados");
        nodoTablaDado.append(fila);
        
    }

    ResultadoTabla(num1, num2) {
        let fila = document.createElement('tr');

        let col1 = document.createElement('td');
        col1.textContent = suma +=num1;
        num1 = suma +suma

        let col2 = document.createElement('td');
        col2.textContent = suma2 +=num2;
        num2 = suma2 + suma

        fila.append(col1,col2)

        let nodoTablaDado2 = document.getElementById("ResultadoDados");
        nodoTablaDado2.append(fila);
    }

    agregarDadoJ1(num1){
        let fila = document.createElement('tr');

        let col1 = document.createElement('td');
        col1.textContent = partida ++;
    
        let col2 = document.createElement('td');
        col2.textContent = num1;
        
        let col3 = document.createElement('td');
        col3.textContent = ' '; 

        fila.append(col1, col2, col3);
        
        let nodoTablaJ1 = document.getElementById("ResultadoDados");
        nodoTablaJ1.append(fila);
    }

    agregarDadoJ2(num2){
        let fila = document.createElement('tr');

        let col1 = document.createElement('td');
        col1.textContent = partida ++;

        let col2 = document.createElement('td');
        col2.textContent = ' ';  

        let col3 = document.createElement('td');
        col3.textContent = num2;
    
        fila.append(col1,col2,col3);
        
        let nodoTablaJ2 = document.getElementById("ResultadoDados");
        nodoTablaJ2.append(fila);
    }
}
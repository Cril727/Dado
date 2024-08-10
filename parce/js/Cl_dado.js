class Dado {
    constructor() {
        this.player1 = document.getElementById('P1');
        this.player2 = document.getElementById('P2');
    }

    Aleatorio() {
        return Math.floor(Math.random() * 6) + 1;
    }

    Dado1() {
        
        return Math.floor(Math.random() * 6) + 1;
        
    }
    
    Dado2() {
        return Math.floor(Math.random() * 6) + 1;
    }

    
}

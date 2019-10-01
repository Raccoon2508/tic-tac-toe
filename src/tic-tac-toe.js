class TicTacToe {
    constructor() {
    this.counter=2;
    this.playField=[[,,],[,,],[,,]];
    this.currentSymbol="o";
    }

    getCurrentPlayerSymbol() {
      return this.currentSymbol;

    }

    nextTurn(rowIndex, columnIndex) {
        if(this.counter%2==0){
        this.playFild[rowIndex][columnIndex]="x";
        this.currentSymbol="x";
        }else{
        this.playFild[rowIndex][columnIndex]="o"; 
        this.currentSymbol="o";
        }
        this.counter++;
        console.log(this.playFild);
        

    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {
      let arr=this.playField;
      arr.forEach(function(item)){
        
        }
      

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}



module.exports = TicTacToe;

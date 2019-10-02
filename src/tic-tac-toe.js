class TicTacToe {
    constructor() {
    this.playField=[[null,null,null],
    [null,null,null],
    [null,null,null]];
    this.counter=1;
    this.playerSymbol='x';
    this.winner='';
    
    }

    getCurrentPlayerSymbol() {
      return this.playerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
      let count=this.counter;
      
      if((count+2)%2==0){
        this.playField[rowIndex][columnIndex]='x';
        this.playerSymbol='x';
        }else{
        this.playField[rowIndex][columnIndex]='o';
        this.playerSymbol='o';
        }
        
      this.counter++;
    }

    isFinished() {
      let field=this.playField;
      
      for(let i=0; i<=2;i++){
        for(let j=0; j<=2; j++){
          if(field[i][j]==undefined){
            return false;
            }
          }
        }
      return true;

    }

    getWinner() {
      let char;
      let fld=this.playField;
        if(fld[0][0]==fld[0][1]&&fld[0][1]==fld[0][2]){
        this.winner=fld[0][0];
       }
        else if(fld[1][0]==fld[1][1]&&fld[1][1]==fld[1][2]){
        this.winner=fld[1][0];}
        else if(fld[2][0]==fld[2][1]&&fld[2][1]==fld[2][2]){
        this.winner=fld[2][0];}
        else if(fld[0][0]==fld[1][0]&&fld[1][0]==fld[2][0]){
        this.winner=fld[0][0];}
        else if(fld[0][1]==fld[1][1]&&fld[1][1]==fld[2][1]){
        this.winner=fld[0][1];}
        else if(fld[0][2]==fld[1][2]&&fld[1][2]==fld[2][2]){
        this.winner=fld[0][2];}
        else if(fld[0][0]==fld[1][1]&&fld[1][1]==fld[2][2]){
        this.winner=fld[0][0];}
        else if(fld[0][2]==fld[1][1]&&fld[1][1]==fld[2][0]){
        this.winner=fld[0][2];}
        
          if(this.winner!=null){
            
            return this.winner;
            }else{
              
            return null;}
            
}
      

    

    noMoreTurns() {
      
      let field=this.playField;
      
      for(let i=0; i<=2;i++){
        for(let j=0; j<=2; j++){
          if(field[i][j]==undefined){
            return false;
            }
          }
        }
      return true;

    }

    isDraw() {
      if(this.getWinner()==null&&this.noMoreTurns()==true){
        return true;
        }else{return false;}
    }

    getFieldValue(rowIndex, colIndex) {
      return this.playField[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;

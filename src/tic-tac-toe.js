class TicTacToe {
  constructor() {
  this.playField=[[null,null,null],
  [null,null,null],
  [null,null,null]];
  this.steps=0;
  this.playerSymbol='x';
  this.winner=null;
  
  }

  getCurrentPlayerSymbol() {
    return this.playerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    
    let field=this.playField;
    
    if(field[rowIndex][columnIndex]==null){
      if((this.steps+2)%2==0){
        field[rowIndex][columnIndex]="x";
        this.playerSymbol='o';
        }else{
        field[rowIndex][columnIndex]="o";
        this.playerSymbol='x';  
        }
        this.steps++;
      }  
      
  }

  isFinished() {
    if(this.getWinner()!=null||this.steps==9){
      return true;
      }
      return false;

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
    
   if(this.steps==9){
      return true;
      }
      return false;

  

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

window.operators = {

  add: (firstNumbers, secondNumbers) => {
    /* Acá va tu código */ 
    if(firstNumbers === undefined || secondNumbers === undefined){
      return "Error"
    }
    return firstNumbers + secondNumbers;
  },

  multiply: (firstNumbers, secondNumbers) => {
    /* Acá va tu código */
    return firstNumbers * secondNumbers;
  }
  
};

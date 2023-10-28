import React from "react";

const Hyphens = (previousValue: string) => {
    // variable declarations
    let currentValue = '';
    
    for(let i=0; previousValue.length>i ;i++){
      currentValue += previousValue[ i ];
      if (i !== previousValue.length -1){
        currentValue += '-';
      }
      // possibly implement a join in the future
      // currentValue.join('-');
    }
    return(
        <p>
            ${currentValue}
        </p>
        
    );
}
export default Hyphens;

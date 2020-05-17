console.log("Your Code here .... ")



function add(n1: number,n2: number){
    return n1+n2 ;
}

// Making a Strict typing ... 
// We Compile/ transpile the code to js at last.
const number1 = 5 ; 
const number2 = 2.8 ; 

const result = add(number1,number2) ;

console.log(result) ; 

// Now this is the case where JavaScript has a Demerit 
// output for this is 52.8 
// this is not at all is correct 


// Now the Type Script comes into picture.


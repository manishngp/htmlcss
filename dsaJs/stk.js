let s = "[[[[{{{{(((())))}}}}]]]]" ;

let stk = [];

for(let i =0; i<s.length; i++){
    if(s[i]==="(" || s[i]==="[" || s[i]==="{"){
        stk.push(s[i]);
    }
    else{
        if(stk.length===0){

         console.log("false"); 
        return;
        }
       const top =  stk.pop();
       if((top === "(" && s[i] !== ")" ) || ( top === "{" && s[i] !== "}" )  || ( top === "[" && s[i] !== "]" )){
               console.log("false");
       }
 
         
        
    }

}
    console.log(stk.length === 0);

    // run first then give the input
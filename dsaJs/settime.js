let x  = 0;
 let id = setInterval(() => {
    console.log(x++);

     if(x==10){
    clearInterval(id)
 }
 }, 500);


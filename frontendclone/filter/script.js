
let root = document.getElementById("root");

let prdarr=[];

fetch("https://fakestoreapi.com/products")
.then((res)=> res.json())
.then((data)=>{

    prdarr = [...data];
    display(data);
});
    
   



function display(data){
   
    let listData = ``;

    data.forEach(ele => {

        listData +=`

             <div>
               <img src="${ele.image}"/>
               <h2> ${ele.title}</h2>
               <p> ${ele.description.slice(0, 102)}
             </div>   
        ` 
        root.innerHTML=listData;
    });
    
}
    let searchterm = document.getElementById("search");
    
    searchterm.addEventListener("input", filteritem);

    function filteritem(){

        const searchval =  searchterm.value;
        const searchf = searchval.toLowerCase();

        const filteredprod = prdarr.filter((pro)=>pro.title.toLowerCase().includes(searchf));
        // console.log(searchterm.value);

        display(filteredprod);
    }






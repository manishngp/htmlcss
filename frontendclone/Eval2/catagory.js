const files = [
    'document1.txt', 'presentation1.pdf', 'song1.mp3', 'installer1.exe', 'archive1.rar',
    'report1.docx', 'image1.jpg', 'graphic1.png', 'animation1.gif', 'compressed1.zip',
    'document2.txt', 'presentation2.pdf', 'song2.mp3', 'installer2.exe', 'archive2.rar',
    'report2.docx', 'image2.jpg', 'graphic2.png', 'animation2.gif', 'compressed2.zip',
     'presentation3.pdf', '', 'installer3.exe', 'archive3.rar',
    'report3.docx', 'image3.jpg', 'graphic3.png', 'animation3.gif', 'compressed3.zip',
    'document4.txt', 'presentation4.pdf', 'song4.mp3', 'installer4.exe', 'archive4.rar',
    'report4.docx', 'image4.jpg', 'graphic4.png', 'animation4.gif', 'compressed4.zip',
    'document5.txt', 'presentation5.pdf', 'song5.mp3', 'installer5.exe', 'archive5.rar',
    'report5.docx', 'image5.jpg', 'graphic5.png', 'animation5.gif', 'compressed5.zip',
    'document6.txt', 'presentation6.pdf', 'song6.mp3', 'installer6.exe', 'archive6.rar',
    'report6.docx', 'image6.jpg',  'animation6.gif', 'compressed6.zip',
    'document7.txt', 'presentation7.pdf', 'song7.mp3', 'installer7.exe', 'archive7.rar',
    'report7.docx', 'image7.jpg', 'graphic7.png', 'animation7.gif', 'compressed7.zip',
    'document8.txt', 'presentation8.pdf', 'song8.mp3', 'installer8.exe', 'archive8.rar',
    'report8.docx', 'image8.jpg', '', 'animation8.gif', 'compressed8.zip',
    'document9.txt', 'presentation9.pdf', 'song9.mp3', 'installer9.exe', 'archive9.rar',
    'report9.docx', 'image9.jpg', '', 'animation9.gif', 'compressed9.zip',
    'document10.txt', 'presentation10.pdf', 'song10.mp3', 'installer10.exe', 'archive10.rar',
    'report10.docx', 'image10.jpg', 'graphic10.png', 'animation10.gif', 'compressed10.zip',
  ];



var file = {};

catagory(files)
function catagory(arr){

     arr.forEach(elem =>{
             
         if(typeof elem !="string"  || elem.trim()=='') return;
        const extension = elem.split(".").pop();
        if(!file[extension]){
            file[extension]=[];
        }
        else{
            file[extension].push(elem)
        }


     })
}

//  console.log(file);

const keys = Object.keys(file);

let maindiv=document.querySelector("div");
// Print each key
displaymaindiv(keys)
function displaymaindiv(keys) {

    var conatainer =``;

// keys.forEach(key => {
//   console.log(key);
// });

keys.forEach(eleme =>{
    //     conatainer +=`
    // <div>

    //     <h1>${eleme}</h1>
        // </div>
        // `;
     let h = document.createElement("h1");
     let div = document.createElement("div");
     h.textContent= `${eleme}`
    div.innerHTML = '';
      h.addEventListener("click", function(){file[eleme].forEach(e =>{
            //  let tag =document.createElement("h1").innerText=`${e}`;
            //  console.log(tag);
            
            // div.innerHTML=tag;
            const fileItem = document.createElement('p');
        fileItem.textContent = e;
        div.appendChild(fileItem);
        console.log(e)
        })})
    // })
    
      maindiv.appendChild(h)
      maindiv.appendChild(div)
   // maindiv.innerHTML=conatainer;
}
)

}

    // console.log(file.eleme)
    // console.log(file)
    // console.log(eleme);
    
    //  })
    // }
//   console.log(file.keys);   // }


//
 
// 
//  function displaymaindiv(file) {

//  
//  
    
    
    


    


let allImage=Array.from(document.querySelectorAll(".img_nav"));
let popUp=document.querySelector(".pop_up")
let cross=document.querySelector(".cross")
let preview=document.querySelector(".preview")
let right=document.querySelector(".right")
let left=document.querySelector(".left")
let currentPostion=0;

allImage.map((e,index)=>{
      e.addEventListener("click",function(){
        popUp.classList.add("active")
        let currentPostion=index;
       preview.src= allImage[index].src;
      right.addEventListener("click",function(){
           if(currentPostion==(allImage.length)-1){
            currentPostion=0;
           }else{
            currentPostion+=1;
        }
        preview.src=allImage[currentPostion].src;
      })
      left.addEventListener("click",function(){
    
        if(currentPostion==(allImage.length)-1){
            currentPostion=0;
         }else{
              currentPostion-=1;
            }
            preview.src=allImage[currentPostion].src
      })

      })
      cross.addEventListener("click",function(e){
        popUp.classList.remove("active");
        
      })
      popUp.addEventListener("click",function(e){
        if(e.target.classList.contains("active")){
            popUp.classList.remove("active")
        }
      })

}) 
var add=document.querySelector("#add");
var remove=document.querySelector("#remove");
var h5=document.querySelector("h5");

add.addEventListener("click",function(){
    h5.textContent="Friend";
    h5.style.color="#0084ff";
})

remove.addEventListener("click",function(){
    h5.textContent="Stranger";
    h5.style.color="red";
})
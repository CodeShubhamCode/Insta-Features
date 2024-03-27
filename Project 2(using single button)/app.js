var h5=document.querySelector("h5");
var btn=document.querySelector("#add");

let flag=0;
btn.addEventListener("click",function(){
    if(flag==0){
        h5.textContent="Friend";
        h5.style.color="#0084ff";
        btn.textContent="Remove";
        btn.style.backgroundColor="red";
        btn.style.color="black";
        flag=1;
    }
    else{
        h5.textContent="Stranger";
        h5.style.color="red";
        btn.textContent="Add Friend";
        btn.style.backgroundColor="#0084ff";
        btn.style.color="white";
        flag=0;
    }
});


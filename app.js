let thumbUp = document.getElementById("buttonUp");          //Binder knappen buttonUp till variablen thumbUp
let thumbDown = document.getElementById("buttonDown");      //Binder knappen buttonDown till variablen thumbDown
let upIndex = 0;                                            //Likeräknare, behövs ej fler för en hemsida för en person : )
let downIndex = 0;                                          //Dislikeräknare, behövs ej fler för en hemsida för en person : )
let sendBtn = document.getElementById("send");


thumbUp.addEventListener("click", function(){               // Ändrar färg på "like" vid knapptryck samt texten på knappen
    upIndex++;
    if(upIndex===1){
        if(downIndex===1){                                  // Sätter dislike-knappen till startvärdet (0) om man likear
            thumbDown.style.backgroundColor="green";
            downIndex=0;
            thumbDown.innerHTML = downIndex + " dislikes";}
    thumbUp.style.backgroundColor="blue";
    thumbUp.innerHTML = upIndex + " like"}
    else if(upIndex===2){
        thumbUp.style.backgroundColor="green";
        upIndex=0;
        thumbUp.innerHTML = upIndex + " likes"}
    }
) 

thumbDown.addEventListener("click", function(){             // Ändrar färg på "dislike" vid knapptryck samt texten på knappen
    downIndex++;
    if(downIndex===1){
        if(upIndex===1){                                    // Sätter like-knappen till startvärdet (0) om man dislikear
            thumbUp.style.backgroundColor="green";
            upIndex=0;
            thumbUp.innerHTML = upIndex + " likes"}
    thumbDown.style.backgroundColor="red";
    thumbDown.innerHTML = downIndex + " dislike"}
    else if(downIndex===2){
        thumbDown.style.backgroundColor="green";
        downIndex=0;
        thumbDown.innerHTML = downIndex + " dislikes";}
    }
)

let slideIndex = 1;

function slideshow(){
    if (slideIndex===1){
        document.querySelectorAll("img")[1].style.display = "block";
    }
}

function saveRecipe() {
    // document.forms[0].children[0].value is the value
    console.log(document.forms[0].children[0].value)
    return false;
}


//let myObj = [{img: "https://ksjkjsdhf", likes: 0}, {img: "https://jhgjhg", likes: 1}]
myObj = JSON.parse(localStorage.getItem('recipes'))
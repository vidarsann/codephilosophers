//Nedan är all kod för likefunktionen

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

//Nedan är all kod för slideshowfunktionen

let slideIndex = 1;
let slidePics = document.getElementsByClassName("slides");

slideShow();                                                //Kallar funktionen "slideshow" från nedan när sidan körs

function slideShow(){                                       //Gör så man kan bläddra igenom flera bilder på samma plats på hemsidan
    if(slideIndex<1){slideIndex=slidePics.length}
    if(slideIndex>slidePics.length){slideIndex=1}
    for(let i=0; i<slidePics.length;i++){
        slidePics[i].style.display="none";
    }
    slidePics[slideIndex-1].style.display = "inline";
}

document.getElementById("nextPic").addEventListener("click", function (){       //Gör så det blir nästa bild i slideshowen vid knapptryck på "nextPic"
    slideIndex++;
    slideShow();
}
)

document.getElementById("previousPic").addEventListener("click",function(){     //Gör så det blir förra bilden i slideshowen vid knapptryck på "previousPic"
    slideIndex--;
    slideShow();
}
)

//Nedan är all kod för receptfunktionen

let nameInput = document.getElementById("nameText");                                                    //Binder värdet från textlådan "nameText", alltså där man skriver in sitt namn
let commentInput = document.getElementById("commentText");                                              //Binder till värdet från textlådan "commentText", alltså där man skriver in sin kommentar
let submitButton = document.getElementById("submit");                                                   //Binder variabeln till knappen "submit" i HTML
let nameArray = [];                                                                                     //Skapar en array att lagra alla namn i
let commentArray = [];                                                                                  //Skapar en array att lagra alla kommentarer i
let arrayCounter = 0;                                                                                   //En variabel för att räkna vilket nummer man är på i samtliga arrays. Behövs för att spara varje namn och kommentar till en egen, unik plats i arraysen

submitButton.addEventListener("click", writeComment)                                                    //Gör att funktionen nedan körs när submit blir klickad

function writeComment(){                                                                                //Skapar ett kommentarsfält med plats för namn och kommentar
    if(commentInput.value === "" || nameInput.value ===""){                                             //if-statementet gör att båda fält måste ha något värde för att kunna posta en kommentar
        window.alert("You must enter a name and a comment before submitting!");
    }
    else{
        nameArray.push(nameInput.value);                                                                //Pushar värdet från namn-textlådan in i nameArray
        commentArray.push(commentInput.value);                                                          //Pushar värdet från comment-textlådan in i commentArray

        let commenterName = document.createTextNode("Name: " + nameArray[arrayCounter]);                //Skapar en text med innehållet "Name: >inskrivet namn<"
        let createNamePara = document.createElement("P");                                               //Binder en variabel till att skapa en p-tag i HTML
        let commenterText = document.createTextNode("Comment: " + commentArray[arrayCounter]);          //Skapar en text med innehållet "Comment: >inskriven kommentar<"
        let createCommentPara = document.createElement("P");                                            //Binder en variabel till att skapa ytterligare en p-tag i HTML
        let createDiv = document.createElement("div");                                                  //Binder en variabel att skapa en div-tag i html

        createDiv.setAttribute("class", "commentFieldDiv");                                             //Ger diven klassen "commentFieldDiv" när den skapas (för att särskilja kommentarerna och kunna styleas i CSS)
        
        document.body.appendChild(createDiv);                                                           //Lägger in den skapade diven under body i HTML
        let divClassName = document.getElementsByClassName("commentFieldDiv");
        createNamePara.appendChild(commenterName);                                                      //Skapar p-tagen från createNamePara och ger den värdet från commenterName
        divClassName[arrayCounter].appendChild(createNamePara);                                         //Lägger in p-tagen under body i HTML
        createCommentPara.appendChild(commenterText);                                                   //Skapar p-tagen från createCommentPara och ger den värdet från commenterText
        divClassName[arrayCounter].appendChild(createCommentPara);                                      //Lägger in p-tagen under body i HTML

        nameInput.value = "";                                                                           //Tömmer input-rutan i HTML för "Name"
        commentInput.value = "";                                                                        //Tömmer input-rutan i HTML för "Comment"
        arrayCounter++;                                                                                 //Lägger till +1 på arrayCounter varje gång en kommentar postas
    }
}

/*function saveRecipe() {
    document.forms[0].children[0].value is the value
    console.log(document.forms[0].children[0].value)
    return false;
}


let myObj = [{img: "https://ksjkjsdhf", likes: 0}, {img: "https://jhgjhg", likes: 1}]
myObj = JSON.parse(localStorage.getItem('recipes'))

myObj.forEach(function (recept) {console.log(recept.likes)})*/
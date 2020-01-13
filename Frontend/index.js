// Code your solution here

const shoeList = document.querySelector("#shoe-list");

getShoes();


function getShoes(){

    const mainShoe = document.getElementById("main-shoe");
    const formContainer = document.getElementById("form-container");
//console.log(formContainer)

    fetch("http://localhost:3000/shoes")
    .then(r => r.json())
     .then(shoes => {
         shoes.forEach(shoe => {
            //each shoe: name, company, price, image 
            createLI(shoeList, shoe);
         });//FOREACH
          
        createForm(formContainer);

        //const shoeForm = document.getElementById("form-group")
        //console.log(shoeForm)

    
        formContainer.addEventListener('submit', (e) => {
            
       
        fetch("")
        })//SUBMIT EVENT
     })//FETCH
     
     console.log(mainShoe)

    //CREATE FORM

     

}//getShoes

//Creates LI element for each shoe
function createLI(shoeList, shoe)
{
    //<li class="list-group-item">Crocs Classic Clogs</li>
    const shoeLI = document.createElement("li");
    shoeLI.className = "list-group-item";
    shoeLI.innerText = shoe.name;
    shoeList.append(shoeLI);
    renderMainShoe(shoe)
    //click on a shoe
    shoeLI.addEventListener('click', (e) => {

    renderMainShoe(shoe)

    //const shoeReviews = document.getElementById("reviews-list");
    //shoeReviews.innerText=shoe.reviews;

    })//EventListener

}

//render mainshoe
function renderMainShoe(shoe){
    
    const shoeImg = document.getElementById("shoe-image");
    shoeImg.src=shoe.image;   
    const shoeName = document.getElementById("shoe-name");
    shoeName.innerText=shoe.name;         
    const shoeDesc = document.getElementById("shoe-description");
    shoeDesc.innerText=shoe.description;
    const shoePrice = document.getElementById("shoe-price");
    shoePrice.innerText=shoe.price;

    // <li class="list-group-item">All my friends are jealous of me because of this shoe!</li>
     const reviewLI = document.getElementById("list-group-item");
    // reviewLI.innerText = shoe.content;

}


function createForm(formContainer)
{
//     <div class="form-group">
//     <textarea class="form-control" id="review-content" rows="3"></textarea>
//     <input type="submit" class="btn btn-primary"></input>
//   </div>
//     </form>
    const formDiv = document.createElement("div");
        formDiv.className = "form-group";
    const formText = document.createElement("textarea");
        formText.className = "form-control";
        formText.id = "review-content";
        formText.rows = "3";
    const inputTag = document.createElement("input");
    inputTag.type = "submit";
    inputTag.className = "btn btn-primary";

    formContainer.append(formDiv, formText, inputTag)



}
document.body.innerHTML= `

<div class="search-bar">
    <input class="search-tag" placeholder ="Enter a tag"/>
    <a onclick="filter()" class="waves-effect waves-light btn">Filter</a>
</div>
<section class ="cat-list">
</section>`;

async function getAllCats(){

    const data = await fetch(
        "https://cataas.com/api/cats",
        {method: "GET"}
    ); 
    const cataas = await data.json();
    
    const catContainer = document.querySelector(".cat-list");

    cataas.forEach((cat) => {

        catContainer.innerHTML += `
        <div id="cat-details" class = "cat-container">
                    
                    <p class ="id">${cat.id}</p><br>
                    <img  class= "cat-pic" src="https://cataas.com/cat/${cat.id}">
                    <p id="cTags" class="tags">${cat.tags}</p>
                
        </div>   
        
        
                
                

        `;
        
    });
    console.log(cataas);
}
getAllCats();








async function filter(){
    
    const data = await fetch(
        "https://cataas.com/api/cats",
        {method: "GET"}
    ); 
    const cataas = await data.json();

    console.log(cataas);

    const filteredTag = cataas.filter(s => s.tags == "cute");
    console.log(filteredTag);

    document.getElementById("cat-details").innerHTML = JSON.stringify(filteredTag);

        

    
    
   

}
filter();
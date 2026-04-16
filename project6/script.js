document.getElementById("getbtn").addEventListener("click", getData);
async function getData(){
    try{
       let response = await fetch("https://api.exchangerate-api.com/v4/latest/EUR");
       let data = await response.json();
       document.getElementById("status").innerText = data.rates.INR;
    }catch(error){
        console.log(error);
    } 
}               
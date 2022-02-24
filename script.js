var formule = document.getElementById("formule");
var cache1 = document.getElementById("cache1");
var cache2 = document.getElementById("cache2");

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function commetasenvie(){
    console.log("bite")
    if (formule.value == "phare"){
        console.log("2")
        sleep(1000).then(() => {
            cache1.style.visibility = "visible";
        }) 
        sleep(2000).then(() => {
            cache2.style.visibility = "visible";
        }) 
    }
}
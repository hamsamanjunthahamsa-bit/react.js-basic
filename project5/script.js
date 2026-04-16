document.getElementById("load-btn").addEventListener("click", () => {
    document.getElementById("status").innerText = "loading...";
        let promise = new Promise((resolve, reject) => {
            if(Math.random() > 0.5){
                setTimeout(() => {
                    resolve("Data loaded");
                }, 2000);
            }else{
                setTimeout(() => {
                    reject("Data not loaded");
                }, 2000);
            }
        }); 
        promise.then((Data) => {
            document.getElementById("status").innerText = Data;
        });
        promise.catch((error) => {
            document.getElementById("status").innerText = error;    
        }); 
        promise.finally(() => {
            document.getElementById("status").innerText = "loading completed";
        }); 
    }); 
    

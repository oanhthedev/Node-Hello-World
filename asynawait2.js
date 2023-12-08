console.time("test");
const getURLPromiseA = async (url) =>{
    console.log("getURLPromiseA");
    const axios1 = require("axios");   
    let resp = await axios1.get(url);
        console.log("getURLPromiseA1");
        let entries = resp.data.entries ;
        let categories= entries.map((entry) =>{
            return entry.Category; 
            }); 
         Categos=[...new Set(categories)];          
        Categos.forEach( async(cate)=>{
              let url=encodeURI("https://api.publicapis.org/entries?Category="+ cate); 
             try{let resp = await axios1.get(url); 
    
                console.log(cate +"-" + resp.data.count); 
                //console.log("getURLPromiseA2");
                }
            catch(error) { return;} 

            });
        

}

getURLPromiseA('https://api.publicapis.org/entries'); 
console.timeEnd("test");

console.time("test");
const getURLPromise =(url) =>{
    console.log("getURLPromise");
    const axios = require("axios");   
    const request = axios.get(url);
     request.then(response => {
        console.log("getURLPromise1");
        let entries = response.data.entries ;
        let categories= entries.map((entry) =>{
            return entry.Category; 
            }); 
         let Categos= categories.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;      
            } ); 
          

        Categos.forEach((cate)=>{
            let url=encodeURI("https://api.publicapis.org/entries?Category="+ cate); 
            const req = axios.get(url); 
            req.then(res => {
                console.log(cate +"-" + res.data.count); 
               // console.log("getURLPromise2");
                }).catch(error=>{ return;}); 

            });
        }).catch(err =>{console.log(err.toString()); return;}) ; 

}

getURLPromise('https://api.publicapis.org/entries'); 
console.timeEnd("test");

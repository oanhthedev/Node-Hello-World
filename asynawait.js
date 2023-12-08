const { error } = require("console");

console.time("test");
const getURL =(opt) =>{
    console.log("getURL" ); 
     
    const https = require("https");
     https.request(opt, function(response)
    {   
        var data="";
        response.on("data", function(chunk){
             data +=chunk ; 
            });

         response.on("end", function(){ 
             let entryList =JSON.parse(data).entries;  
             let categories =[]; 
             console.log("getURL1" ); 
             categories= entryList.map((entry) => {
             return entry.Category; 
             }); 
           
            let Cates= categories.filter(function(item, pos, self) {
            return self.indexOf(item) == pos;      
            } ); 
             
            Cates.forEach((cate) =>  { 
                options1= { host:"api.publicapis.org", path: encodeURI("/entries?Category="+ cate) }; 
                try { https.request(options1, function(res){
                    let buff=""; 
                    res.on("data", function(piece){
                        buff += piece;    
                    });
                    res.on("end", function(){
                        let catEntries = JSON.parse(buff);
                        console.log(cate +"-"+ catEntries.count ); 
                        //console.log("getURL2" ); 
                        });
                        }).end(); }
                catch(erro){return;}
             });
           });
        
     }).end(); 

}

const options= { host:"api.publicapis.org", path:"/entries" }; 
getURL(options); 
console.timeEnd("test");







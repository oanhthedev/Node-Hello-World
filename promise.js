const { log } = require('console');
let fs = require('fs'); 
const { resolve } = require('path');
 


console.time("test");
 const fileReadPromiseA  = new Promise( async  (resolve,reject) => 
{
    try {  data= await fs.readFileSync("./weather/weather.js", encoding="utf8", flag="r");
     data1 = await fs.readFileSync("./weather/callback.js", encoding="utf8", flag="r");
     data2 = await fs.readFileSync("../../FrontEnd/hi/Hi.html", encoding="utf8", flag="r");
      resolve(data+data1+data2); }
    catch (err) { reject(err); }
}); 


fileReadPromiseA.then(
    (data) => console.log(data),
    (err) => console.log(err)
); 
console.timeEnd("test");

console.time("test");
const fileReadPromise  =  new Promise( (resolve,reject) => 
{
    try { data= fs.readFileSync("./weather/weather.js", encoding="utf8", flag="r");
    data1= fs.readFileSync("./weather/callback.js", encoding="utf8", flag="r");
    data2= fs.readFileSync("../../FrontEnd/hi/Hi.html", encoding="utf8", flag="r");
      resolve(data+data1+data2); }
    catch (err) { reject(err); }
}); 


fileReadPromise.then(
    (data) => console.log(data),
    (err) => console.log(err)
); 
console.timeEnd("test");


console.time("test");
const fileRead = () => 
{   
    try { data= fs.readFileSync("./weather/weather.js", encoding="utf8", flag="r"); 
          data1= fs.readFileSync("./weather/callback.js", encoding="utf8", flag="r"); 
          data2= fs.readFileSync("../../FrontEnd/hi/Hi.html", encoding="utf8", flag="r"); 
          return data+data1+data2; 
        }
    catch (err) { return err; }
}

// file1 =fileRead("./weather/weather.js");
// file2 =fileRead("./weather/callback.js");
// file3 =fileRead("../../FrontEnd/hi/Hi.html");


console.log(fileRead()); 
console.timeEnd("test");















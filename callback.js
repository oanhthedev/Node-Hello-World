let weather = require("./weather.js"); 

location ="KSFO";  
weather.current(location,function(temp_f){
    console.log(temp_f); 
}); 
       

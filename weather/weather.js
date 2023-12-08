

exports.current = function (location, resultCallback) {
    let options= { host:"w1.weather.gov", 
            path: "/xml/current_obs/" + location + ".xml"
            };
    const http = require("node:http");
    http.request(options, function(response){
        let buffer =""; 
        const result=""; 
        response.on('data', function(piece){
            buffer += piece ;  
            console.log("data");
            console.log(buffer);
        });
        response.on('end', function(){
            console.log("Hello, on, end!");
            const xml2js = require('xml2js');   
            xml2js.parseString(buffer, function(er,result){
                if (er) {
                     resultCallback(er); 
                    console.log("Hello, erro!");
                     console.error(er); 
                    return; 
                }; 
                console.log("Hello, no error");
                resultCallback(null,result.current_obs.temp_f[0]);
            });
           
        }); 

    }).end(); 
}
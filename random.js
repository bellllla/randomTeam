const fs = require('fs');
 
fs.readFile('./example.txt',(err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

fs.writeFile('./writeme.txt','글을 입력합니다.',(err)=>{
    if(err){
        throw err;
    }
    fs.readFile('./writeme.txt',(err, data)=>{
       if(err){
           throw err;
       }
       console.log(data.toString());
    });
 });
 
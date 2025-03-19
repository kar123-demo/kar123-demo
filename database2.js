
const fs = require("fs");
const s = require("./index2.js");
let f=s.c;
const g=fs.readFileSync("myfile.txt","utf-8");

if(f>g){
fs.writeFile("myfile.txt", f.toString(), (err) => {
    if (err) throw err;
  
});
}

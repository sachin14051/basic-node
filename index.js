
const app = require("fs"); //create file system

app.writeFileSync("app/sachin.txt","i am full stack deveolper"); //write a text

app.appendFileSync("app/sachin.txt", "mongo  express angular node"); //update the text

let a = app.readFileSync("app/sachin.txt"); //this is buffer 

let b = app.readFileSync("app/sachin.txt", "utf-8") //buffer encrypt
console.log(b)

//  app.unlinkSync("app/sachin.txt")  //delete the file

 app.renameSync("app/sachin.txt", "app/sush.txt")  //rename the folder structure
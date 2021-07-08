const readline =require("readline");
const rl = readline.createInterface({input :process.stdin,
                                    output:process.stdout});

//let num1=Math.floor((Math.random()*10)+1);
//let num2=Math.floor((Math.random()*10)+1);

//let res= num1+num2;

//rl.question(`what is ${num1} + ${num2}?`,(userinput)=>{
  //  if(userinput.trim()==res){
    //    rl.close();
    //}
    //else{
      //  rl.setPrompt('incorrect plz try again');
        //rl.prompt();
        //rl.on('line',(userinput)=>{
          //  if(userinput.trim()==res){
            //    rl.close();
            //}
            //else{
              //  rl.setPrompt('incorrect try again');
                //rl.prompt()
            //}
        //})
    //}
//})

rl.on('close',()=>{
    console.log("correct")
})
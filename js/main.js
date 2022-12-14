let num=parseInt(prompt("enter the a value"));
let sum=0;
for (i=1;i<=num;i++){
   let  b=parseInt(prompt("enter the b value"));
   
    if(b>0){
        sum+=b;
    }
}
document.write(sum);
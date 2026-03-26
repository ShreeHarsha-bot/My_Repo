var n=Number(prompt("Est numberganta add madbeku?"))
if(isNaN(n)){
    console.log("Invalid input");   
}
else{
    if (n>0) {
       var sum=0;
        for(var i=1;i<=n;i++){
            sum=sum+i;
        }
        console.log(sum);
    }
    else{
        console.log("The number is a not a natural number");
    }
}
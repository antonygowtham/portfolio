var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var img=document.querySelector(".img1");
var randomImage1="./images/dice"+randomNumber1+".png"
img.setAttribute("src",randomImage1)

var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
var img2=document.querySelector(".img2");
var randomImage2="./images/dice"+randomNumber2+".png"
img2.setAttribute("src",randomImage2)


console.log(randomNumber1,randomNumber2)




var result=document.querySelector(".result");
if(randomNumber1 > randomNumber2){
    result.innerHTML="Player 1 is Winner";
}
else if(randomNumber1 < randomNumber2){
    result.innerHTML="Player 2 is Winner";
}
else{
    result.innerHTML="Tie";
}
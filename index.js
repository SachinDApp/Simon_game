var arr=[];

$(document).keydown(function(){
    if(arr.length==0) {
      var a=arr.length+1;
      a=a.toString();
      count(a); 
   }
})



function count(a){
   $("h1").text("level "+a);
   var num=Math.floor(Math.random()*4)+1;
   
   if(num==1){
      beep("#green");
      arr.push("#green");
   }
   else if(num==2){
       beep("#red");
       arr.push("#red");

   }
   else if(num==3){
       beep("#yellow");
       arr.push("#yellow");
   }
   else {
       beep("#blue");
       arr.push("#blue");
   }

}
function beep(a){
    $(a).addClass("pressed");
    
    var len=a.length;
    var text=a.slice(1,a.length);
    var audio=new Audio("./sounds/"+text+".mp3");
    audio.play();
    setTimeout(() => {
        $(a).removeClass("pressed");
    }, 500);
}
var arr2=[];

$(".btn").click(function(){
    var a="#"+$(this).attr("id");
    beep(a);
    arr2.push(a);
    check(arr2.length);
});

function check(len){
    var i=len-1;
    while(i<len){
    if(arr[i]===arr2[i]){

            if(arr.length===arr2.length){
                var t=(arr.length+1).toString();
                arr2=[];
                count(t);
            }
        }
    else{
           $("#wrong").addClass("game-over");
           var audio=new Audio("./sounds/wrong.mp3");
           audio.play();
           setTimeout(() => {
               $("#wrong").removeClass("game-over");
           }, 500);
           arr=[];
           arr2=[];
           $("h1").text("Ops, you lose the game Press any key to continue");
           break;
        }

        
        i++;
    }
}


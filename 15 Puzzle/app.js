var count=0;
var check=0;
var flag=1;
var bestTap=0;
var bTapCheck=0;
var flip=true;

var one 	    = 	document.getElementById("one");
var two 	    = 	document.getElementById("two");
var three 	    = 	document.getElementById("three");
var four 	    =	document.getElementById("four");
var five        = 	document.getElementById("five");
var six         = 	document.getElementById("six");
var seven       = 	document.getElementById("seven");
var eight       = 	document.getElementById("eight");
var nine        = 	document.getElementById("nine");
var ten         = 	document.getElementById("ten");
var eleven      = 	document.getElementById("eleven");
var twelve      = 	document.getElementById("twelve");
var thirteen    = 	document.getElementById("thirteen");
var fourteen    = 	document.getElementById("fourteen");
var fifteen     = 	document.getElementById("fifteen");
var space       = 	document.getElementById("space");
var moves       =   document.getElementById("moves");
var bTap        =   document.getElementById("bestTap");
var puz         =   document.getElementById("puzzle");
var heading2    =   document.getElementsByTagName("h2");
var moon1        =   document.getElementById("moon1");


var i,j,n,k,l,set=1,row,col;
var arr=[
[one,two,three,four],
[five,six,seven,eight],
[nine,ten,eleven,twelve],
[thirteen,fourteen,fifteen,space]
];


var arrCopy = arr.map(function(arr) {
return arr.slice();
});
var backForth=[-1,1];


window.onload=function(){
    //Flip ADD
   
    //  for(i=0;i<4;i++){
    //      for(j=0;j<4;j++){
    //     arr[i][j].classList.toggle('flipper',true);
    //     arr[i][j].classList.toggle('flipAgain',false);
    //         arr[i][j].classList.add('flipAgain');
    //     }
    // } 
    //End       

let num=1;
for(i=0;i<4;i++){
for(j=0;j<4;j++){
    if(i==3 && j==3){
        break;
    }
    arr[i][j].innerHTML=num++;
}
}
}



// Event Listeners

///////////////////////////////////////////////////////

function scrambler(){
check=1;
count=0;
moves.innerHTML=count;
for(n=1;n<=100;n++){

for(i=0;i<4;i++){
for(j=0;j<4;j++){
if(arr[i][j]==space){
var k=backForth[Math.floor(Math.random() * (2 - 0)) + 0];
var l=Math.floor(Math.random() * (2 - 0)) + 0;
if(l==0 && (i+k)<4 && (i+k)>=0){


swap(i+k,j,i,j);

}else if( l==1 && (j+k)<4 && (j+k)>=0){
    

swap(i,j+k,i,j);
    

}


}
}
}
}

}
function winCondition() {
for(i=0;i<4;i++){
for(j=0;j<4;j++){
    if(arr[i][j]==arrCopy[i][j]){
        continue;
    }
    else{
        return;
    }
}

}

console.log(i,j);
if(i==4 && j==4){
/*alert("Congratulatios. You Win.");*/
// if(bTapCheck==0 ){
    if(localStorage.getItem('bestTapResult') <= 0){
        bestTap=count;
        localStorage.setItem('bestTapResult',(bestTap-1));
         // bTap.innerHTML=bestTap-1;
        bTap.innerHTML=localStorage.getItem('bestTapResult');
    }
    else if(count<=localStorage.getItem('bestTapResult')){
        bestTap=count;
        localStorage.setItem('bestTapResult',(bestTap-1));
        // bTap.innerHTML=bestTap-1;
        bTap.innerHTML=localStorage.getItem('bestTapResult');
    }
    else{

    }
// bTapCheck=1;

// }
// else{
// let BMove=count;

// if(BMove<=bestTap){  
// bestTap=BMove;
// localStorage.setItem('bestTapResult',(bestTap-1));
// // bTap.innerHTML=bestTap-1;
// bTap.innerHTML=localStorage.getItem('bestTapResult');
// }
// }
Swal.fire(
'Congratulatios!',
'You Won!'

)

/*if(flag==1){
flag=0;
console.log("Recursion");
winCondition();

}*/
count=0;
check=0;

}

}

// function flipper(){
//     this.classList.add('flipper');
//     this.classList.reload('flipper');
    
// }
function swapp(id){


/*: document.querySelector('#puzzle div').classList.remove('rot');*/
/*console.log(arr[0][0]);
console.log(arrCopy[0][0]);*/
console.log(id);
count++;
if(check==1){
winCondition();
}

moves.innerHTML=count;
for(i=0;i<4;i++){
for(j=0;j<4;j++){


if(arr[i][j].id==id)
{
    /*Flip Part*/
   

    // if(arr[i][j].classList.toggle('flipper')){
    //     arr[i][j].classList.toggle('flipper');  
        
    //     console.log( arr[i][j].classList.toggle('flipper'));
    //     console.log('if part');
    // }
    //  else{
       
         
    //      arr[i][j].classList.toggle('flipAgain');
    //      console.log(arr[i][j].classList.toggle('flipper'));
    //      console.log('else part');
        
    //  }
   //FLip End 
row=i;
col=j;
console.log(i+" "+j+" "+arr[i][j].innerHTML);
}	

}


}

if(row-1>=0&&row-1<4){
    if (arr[row-1][col] == space){
        swap(row,col,row-1,col);
    }
     
console.log("h");
}
if(row+1>=0&&row+1<4){
    if (arr[row+1][col] == space) {
        swap(row, col, row+ 1, col);
        
    }console.log("e");
   
}

if(col-1>=0&&col-1<4){
    if (arr[row][col-1] ==space){
        swap(row,col,row,col-1);
        
    }console.log("l");
    
}
if(col+1>=0&&col+1<4){
    if (arr[row][col+1] == space) {
        swap(row, col, row, col+1);
        
    }console.log("o");

}


}
function swap (i,j,k,l){


var temp=arr[i][j].id;
arr[i][j].id=arr[k][l].id;
arr[k][l].id=temp;

 

var temp1=arr[i][j];
arr[i][j]=arr[k][l];
arr[k][l]=temp1;


  
    

}
function solve(){
check=0;
localStorage.setItem('bestTapResult',0);
window.location.reload("15puzzle.html");

}
document.addEventListener('DOMContentLoaded', (event) => {
// console.log(localStorage);
bTap.innerHTML=localStorage.getItem('bestTapResult');
((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark');
((localStorage.getItem('mode') || 'dark') === 'light') ? document.querySelector('body').classList.add('light') : document.querySelector('body').classList.remove('light');
((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('#puzzle').classList.add('dark') : document.querySelector('#puzzle').classList.remove('dark');
((localStorage.getItem('mode') || 'dark') === 'light') ? document.querySelector('#puzzle').classList.add('light') : document.querySelector('#puzzle').classList.remove('light');
((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('h2').classList.add('dark') : document.querySelector('h2').classList.remove('dark');
((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('footer').classList.add('dark') : document.querySelector('footer').classList.remove('dark');
((localStorage.getItem('mode') || 'dark') === 'light') ? document.querySelector('h1').classList.add('light') : document.querySelector('h1').classList.remove('light');
((localStorage.getItem('mode') || 'dark') === 'light') ? document.querySelector('.h1').classList.add('light') : document.querySelector('.h1').classList.remove('light');
((localStorage.getItem('mode') || 'dark') === 'light') ? document.querySelector('#moves').classList.add('light') : document.querySelector('#moves').classList.remove('light');
((localStorage.getItem('mode') || 'dark') === 'light') ? document.querySelector('#bestTap').classList.add('light') : document.querySelector('#bestTap').classList.remove('light');
((localStorage.getItem('mode') || 'dark') === 'dark') ? moon1.innerHTML="☀️" : moon1.innerHTML="🌙";
})
function changeTheme(){
/*console.log("hi");*/
localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); 
localStorage.getItem('mode') === 'dark' ?   document.querySelector('body').classList.add('dark') :  document.querySelector('body').classList.remove('dark');
localStorage.getItem('mode') === 'light' ?   document.querySelector('body').classList.add('light') :  document.querySelector('body').classList.remove('light');
localStorage.getItem('mode') === 'dark' ?  document.querySelector('#puzzle').classList.add('dark') : document.querySelector('#puzzle').classList.remove('dark');
localStorage.getItem('mode') === 'light' ?  document.querySelector('#puzzle').classList.add('light') : document.querySelector('#puzzle').classList.remove('light');
localStorage.getItem('mode') === 'dark' ?  document.querySelector('h2').classList.add('dark') : document.querySelector('h2').classList.remove('dark');
localStorage.getItem('mode') === 'dark' ?  document.querySelector('footer').classList.add('dark') : document.querySelector('footer').classList.remove('dark');
localStorage.getItem('mode') === 'light' ?   document.querySelector('h1').classList.add('light') :  document.querySelector('h1').classList.remove('light');
localStorage.getItem('mode') === 'light' ?   document.querySelector('.h1').classList.add('light') :  document.querySelector('.h1').classList.remove('light');
localStorage.getItem('mode') === 'light' ?   document.querySelector('#bestTap').classList.add('light') :  document.querySelector('#bestTap').classList.remove('light');
localStorage.getItem('mode') === 'light' ?   document.querySelector('#moves').classList.add('light') :  document.querySelector('#moves').classList.remove('light');
//localStorage.getItem('mode') === 'dark' ?  document.getElementById('#moonChange').classList.add('round') : document.getElementById('#moonChange').classList.remove('round');
localStorage.getItem('mode') === 'dark' ?  moon1.innerHTML="☀️" : moon1.innerHTML="🌙";

}
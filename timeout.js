function doSomething(){
    console.log(3333);
}

console.log(2222); 
setTimeout(doSomething, 10000);
setTimeout(function(){
    console.log('lazy and waiting'); 
}, 4000);
setTimeout(()=>{
    console.log("see you later"); 
}, 4000); 

setInterval(() => {
    console.log('doing it'); 
}, 1000);
console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);
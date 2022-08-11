
function toggler(...args){
    var arr=args;
    var index=-1;
    return function(){
        index=index+1;
        if(index>=arr.length){
            index=0;
        }
        return arr[index];
    }
}
const toggle=toggler("on","off");
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
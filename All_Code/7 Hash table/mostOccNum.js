
function mostOccNum(array) {
   let Ob = {};
   array.map( (el,i) => {
       if(!Ob[el]){
           Ob[el] = 1;
       }
       else
       {
           Ob[el]++;
       }
   });
   let maxKey = 0;
   let maxItem = 0;
   
   for( key in Ob){
       if(Ob[key] > maxItem){
        maxKey = key;   
        maxItem = Ob[key];
       }
   }
   return maxKey;
  
}

let array = [2,5,1,2,3,5,1,2,4];

console.log(mostOccNum(array));
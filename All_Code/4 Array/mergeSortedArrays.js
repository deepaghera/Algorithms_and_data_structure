
function mergeSortArray(array1,array2) {
    const sortedArray = [];
    let i = 1;
    let j = 1;

    let array1Item = array1[0];
    let array2Item = array2[0];
    
    if(array1.length == 0){
        return array2;
    }
    if(array2.length == 0){
        return array1;
    }

    while( array1Item || array2Item ){
        console.log("Here",array1Item || array2Item);
        if(!array2Item || array1Item < array2Item){

            sortedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else
        {
            sortedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    return sortedArray;
}


console.log(mergeSortArray([0,3,4,31] ,[4,6,30]));
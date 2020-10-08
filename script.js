

let container = document.getElementById("container");
let newDiv = document.createElement('p');
newDiv.innerHTML = `numberArr = [3, 6, 87, 12, 9, 10, 1, 66]` + "<br>" 
+"Find the Min Number"+"<br>"
+"Find the Max Number" +"<br>"
+"Sort with Higher Numbers";
container.appendChild(newDiv);

let numberArr = [3, 6, 87, 12, 9, 10, 1, 66]

function findMinNum(){
    let minNum = numberArr[0];
    for(i = 0; i < numberArr.length; i++){
        if(numberArr[i] < minNum){
            minNum = numberArr[i]
        }
    }
    return minNum;
}

console.log("The Min Number is:",findMinNum(numberArr));

//

function findMaxNum(){
    let maxNum = numberArr[0];
    for(i = 0; i < numberArr.length; i++){
        if(numberArr[i] > maxNum){
            maxNum = numberArr[i]
        }
    }
    return maxNum;
}

console.log("The Max Number is:",findMaxNum(numberArr))

//
function sortMaxFirst(){

    for(let j = 0; j < numberArr.length - 1; j++){

        let maxNum = numberArr[j];
        let maxIndex = j;

        for(let i = j; i < numberArr.length; i++){
            if(numberArr[i] > maxNum){
                maxNum = numberArr[i]
                maxIndex = i;
            }
        }
        numberArr[maxIndex] = numberArr[j];  
        numberArr[j] = maxNum;
    }
    return numberArr;
}

console.log("higher value sorting:",sortMaxFirst(numberArr));


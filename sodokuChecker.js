//true Puzzle
let puzzle = [[ 8,9,5,  7,4,2,  1,3,6 ],
              [ 2,7,1,  9,6,3,  4,8,5 ],
              [ 4,6,3,  5,8,1,  7,9,2 ],
              [ 9,3,4,  6,1,7,  2,5,8 ],
              [ 5,1,7,  2,3,8,  9,6,4 ],
              [ 6,8,2,  4,5,9,  3,7,1 ],
              [ 1,5,9,  8,7,4,  6,2,3 ],
              [ 7,4,6,  3,2,5,  8,1,9 ],
              [ 3,2,8,  1,9,6,  5,4,7 ]];

//false Puzzle
let puzzle2 = [[ 9,8,5,  7,4,2,  1,3,6 ],
               [ 2,7,1,  9,6,3,  4,8,5 ],
               [ 4,6,3,  5,8,1,  7,9,2 ],
               [ 8,3,4,  6,1,7,  2,5,8 ],
               [ 5,1,7,  2,3,8,  9,6,4 ],
               [ 6,8,2,  4,5,9,  3,7,1 ],
               [ 1,5,9,  8,7,4,  6,2,3 ],
               [ 7,4,6,  3,2,5,  8,1,9 ],
               [ 3,2,8,  1,9,6,  5,4,7 ]];

//--------------------------------------------------
checkSudoku(puzzle)

//below is the code, starting the with sodoku checker function, followed by the functions used within.

function checkSudoku(sudokuBoard){
    let elemCount = 1;
    let isBoardGood = false;
  
    //checking each row;
    for (let i = 0; i < sudokuBoard.length; i++){
        let currentRow = getRow(sudokuBoard, i);
        elemCount = 1;

        for (let j = 0; j < currentRow.length; j++){
            elemCount *= currentRow[j];
        }
        
        if(elemCount !== 362880) {
            console.log("returned " + isBoardGood + " at a row Section");
            return isBoardGood;
        }
    }

    //Checking the columns
    for(let i = 0; i < sudokuBoard.length; i++){
        let currentColArray = getColumn(sudokuBoard, i);
        elemCount = 1;
      
        for (let j = 0; j < currentColArray.length; j++){
            elemCount *= currentColArray[j];
        }
     
        if (elemCount !== 362880) {
            console.log("returned " + isBoardGood + " at a column Section");
            return isBoardGood;
        }
    }
  
    //checking each grid section
    //first getting the x vertices for looping. Looping 3 times (0-2).
    for(let i = 0; i < 3; i++){
        //getting the y vertices for looping inside our getSection function. Looping 3 times (0-2).
        for (let j = 0; j < 3; j++){
            elemCount = 1;
            //console.log("should be 1", elemCount);
            let currentGridArr = getSection(sudokuBoard, i, j);
            //this now loops through the array from gridSection and gets elemCounter back up to the "checking threshold"
            for(let k = 0; k < currentGridArr.length; k++){
                elemCount *= currentGridArr[k];
            }
        }
    }

     //console.log("should be 362880", elemCount);
     if (elemCount !== 362880){
        console.log("returned " + isBoardGood + " at a grid Section");
        return isBoardGood;
    } else {
        isBoardGood = true;
    }

    console.log("Your board is " + isBoardGood)
    return isBoardGood;
}



 // Functions to get row array
function getRow(sudokuBoard, rowNeeded){
    //console.log(array[rowNeeded])
    return sudokuBoard[rowNeeded];
}

//function to get a col array
function getColumn(sudokuBoard, colNeeded){
    let colArray = [];

    for (let i = 0; i < sudokuBoard.length; i++){
        colArray.push(sudokuBoard[i][colNeeded])
    }
    //console.log(colArray);
    return colArray;
}

//Function to get a grid section array
function getSection(sudokuBoard, x = 0, y = 0){
    let gridArray = [];
    x *= 3;
    y *= 3;

    for (let i = y; i < y + 3; i++){
        for (let j = x; j < x + 3; j++){
           gridArray.push(sudokuBoard[i][j]);
        }
    }
    //console.log(gridArray);
    return gridArray;
}

var inputPrompt= prompt("Enter any sentence here");

function spinWords(inputString){
    let stringArray = [];
    let tempWord= "";
    //THE LONG METHOD HERE
    //manual split
    //loop through input string, add each letter to a temp word and stop when a space is found
    // for(let i=0; i < inputString.length; i++) {
    //     if (inputString[i] != " ") {
    //         tempWord = tempWord + inputString[i];
    //     }
    //     else{
    //         stringArray.push(tempWord);
    //         tempWord="";
    //     }
    // }
    // stringArray.push(tempWord);
    // console.log(stringArray);

    //THE SHORTER METHOD HERE
    stringArray=inputString.split(" ");
    stringArray.push(tempWord);
    console.log(stringArray);

    //loop to go through words and check if it is greater or equal to 5
    for(let i=0; i<stringArray.length; i++){
        if(stringArray[i].length >= 5){
            //THE LONG METHOD HERE
            //reverse the string here
            // let word = stringArray[i]
            // tempWord="";
            // for(let j=word.length-1; j >= 0; j--){
            //     tempWord+=word[j];
            // }
            // stringArray[i]=tempWord

            //THE SHORT METHOD HERE
            // let wordArray= stringArray[i].split("");
            // wordArray=wordArray.reverse();
            // stringArray[i] = wordArray.join("");

            //THE EVEN SHORTER METHOD!!!
            stringArray[i] = stringArray[i].split("").reverse().join("");
            console.log(stringArray[i]);
        }
    }
    // console.log(stringArray);
    
    tempWord="";
    //THE LONG METHOD HERE
    //combine words back into a sentence
    // for(let i=0; i<stringArray.length; i++){
    //     tempWord += stringArray[i];
    //     if(i<stringArray.length-1){
    //         tempWord += " ";
    //     }

    // }
    // console.log(tempWord)

    //THE SHORT METHOD HERE
    tempWord=stringArray.join(" ");
    console.log(tempWord);

    alert(tempWord);
}

spinWords(inputPrompt);
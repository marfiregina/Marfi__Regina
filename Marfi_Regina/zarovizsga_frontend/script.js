function osszesOszto(number) {
    var numberDevisors = [];
    for (var i = 1; i <= number; i++) {
        if (number % i == 0) {
            numberDevisors.push(i);
        }
    }
    return numberDevisors;
}
function parosDarab(numberArray) {
    var evenNumbersInTheNumberArray = 0;
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 == 0) {
            evenNumbersInTheNumberArray++;
        }
    }
    return evenNumbersInTheNumberArray;
}
function fuggvenyhivasPalindrom(getFunction) {
    var functionText = getFunction();
    var isFunctionTextPalindrome = false;
    var functionTextBackwards = "";
    for (var i = functionText.length - 1; i >= 0; i--) {
        functionTextBackwards += functionText[i];
    }
    if (functionText == functionTextBackwards) {
        isFunctionTextPalindrome = true;
    }
    return isFunctionTextPalindrome;
}

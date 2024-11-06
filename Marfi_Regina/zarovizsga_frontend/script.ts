function osszesOszto(number: number): number[] {
  var numberDevisors: number[] = [];

  for (var i: number = 1; i <= number; i++) {
    if (number % i == 0) {
      numberDevisors.push(i);
    };
  };
  return numberDevisors;
}

function parosDarab(numberArray: number[]): number {
  var evenNumbersInTheNumberArray: number = 0;
  for (var i: number = 0; i < numberArray.length; i++) {
    if (numberArray[i] % 2 == 0) {
      evenNumbersInTheNumberArray++;
    };
  };
  return evenNumbersInTheNumberArray;
}

function fuggvenyhivasPalindrom(getFunction: Function) {
  var functionText: string = getFunction();
  var isFunctionTextPalindrome: boolean = false;
  var functionTextBackwards: string = "";

  for (var i: number = functionText.length - 1; i >= 0; i--) {
    if (functionText[i] !== " ") {
      functionTextBackwards += functionText[i];
    };
  };

  if (functionText == functionTextBackwards) {
    isFunctionTextPalindrome = true;
  };
  return isFunctionTextPalindrome;
}

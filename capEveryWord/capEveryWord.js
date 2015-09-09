// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
function LetterCapitalize(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// The charAt() method returns the specified character from a string.
// The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.

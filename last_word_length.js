/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var totalLength = s.length;
    var phrase = s.trim();
    var lastSpace = phrase.lastIndexOf(" ", totalLength);
    if (lastSpace < 0){
        lastSpace = 0;
    }
    var lastWord = phrase.slice(lastSpace);
    lastWord = lastWord.trim();
    return lastWord.length;
};

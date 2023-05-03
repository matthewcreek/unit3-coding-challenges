// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love

function LongestWord(sen) { 
    const allowed = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
    
    const senArr = [];
  
    sen.split('').map(char => {
      if (allowed.includes(char)) {
        senArr.push(char)
      }
    });
  
    sen = senArr.join('').split(' ')
  
    function sortArr(a, b) {
      return b.length-a.length;
    }
  
    sen = sen.sort(sortArr)[0];
  
    // code goes here  
    return sen; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));
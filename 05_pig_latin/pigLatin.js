function translate(string) {
  var result = '';
  var vowels = 'aeiou'.split('');

  if (string.indexOf(' ') < 0) {
    result = translateWord(string);
  } else {
    words = string.split(' ');
    words = words.map(translateWord);
    result = words.join(' ');
  }

  function translateWord(word) {
    //setup initial capital switch
    var capital = false;

    //setup initial punctuation switch and ending punctuation variable
    var punctuation = false;
    var endPunc = '';

    var consonants = [];
    var letters = word.split('');

    //check for initial capital
    if (letters[0] == letters[0].toUpperCase()) {capital = true};

    //check for word ending with punctuation
    if (letters[letters.length - 1] < 'A') {punctuation = true};

    while (vowels.indexOf(letters[0]) < 0) {
      if (letters[0] == 'q') {specialQCase(word, consonants, letters)};
      consonants.push(letters.shift());
    }

    //if capital is true, capitalize new initial letter
    //and lowercase the old initial letter
    if (capital == true) {
      letters[0] = letters[0].toUpperCase();
      consonants[0] = consonants[0].toLowerCase();
    };

    //if punctuation is true, remove punctuation mark
    //and change ending punctuation variable to the punctuation mark
    if (punctuation == true) {
      letters.forEach(function(l) {
        if (l < 'A') {
          letters.splice(letters.indexOf(l), 1);
          endPunc = l;
        }
      })
    }

    letters = letters.join('');
    consonants = consonants.join('');

    return letters + consonants + 'ay' + endPunc;
  }


  function specialQCase(word, consonants, letters) {
    
    consonants.push(letters.shift());
    letters = letters.join('');
    consonants = consonants.join('');
    
    return letters + consonants + 'ay';
  }

  return result;

}

/*
  it("keeps capitalized words capitalized but with a different initial capital", function() {
    var s = translate("Capital Words");
    expect(s).toEqual("Apitalcay Ordsway");
  });

  it("retains punctuation from the original phrase"), function() {
    var s = translate("lions, tigers, and bears!");
    expect(s).toEqual("ionslay, igerstay, anday earsbay!");
  });

*/

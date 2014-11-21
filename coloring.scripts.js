function ColorTheText(text) {
      var colouredText = "";

      for (var x = 0; x < text.length; x++)
      {
        var letter = text[x];

        if (letter == " ") {
          colouredText = colouredText.concat("&nbsp;");
        } else if (letter == "\n") {
          colouredText = colouredText.concat( "<br>\n");
        } else if (letter != "\r\n") {
            var isNumeric = /[0-9]/.test(letter);
            var isSmallLetter = letter.match(/[a-ząćęłńóśżź]/);

            if (letter.match(/[A-Za-zĄĆĘŁŃÓŚŻŹąćęłńóśżź0-9]/)) {
              colouredText = colouredText.concat("<span class=" + (isNumeric ? "n" + letter : letter + (isSmallLetter ? "l" : "u")) + ">" + letter +"</span>");
            }
            else{
              colouredText += letter;
            }
        }
      }
     return colouredText;
}
  function readFileContent() {

    var files = document.getElementById('files').files;
    if (!files.length) {
      alert('Please select a file!');
      return;
    }

    var file = files[0];

    var reader = new FileReader();
    var blob = file.slice(0, file.size);
    reader.readAsBinaryString(blob);

    reader.onloadend = function(evt) {
      if (evt.target.readyState == FileReader.DONE) { // DONE == 2
          var colouredText = ColorTheText(evt.target.result);
          $("#byte_content").html(colouredText);
      }
    };
  }
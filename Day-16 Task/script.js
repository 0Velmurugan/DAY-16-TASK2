function countdownFrom(start, callback) {
    setTimeout(function () {
      if (start > 0) {
        console.log(start);
        countdownFrom(start - 1, callback);
      } else {
        callback();
      }
    }, 1000);
  }
  
  countdownFrom(10, function () {
    setTimeout(function () {
      console.log("Happy Independence Day");
    }, 1000);
  });

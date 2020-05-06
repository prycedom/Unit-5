
    lightbox.option({
      'alwaysShowNavOnTouchDevices':true
    })
document.getElementById("searchhere").addEventListener("keyup", myFunction);
  function myFunction() {
    var x = document.getElementById("searchhere");
    x.value = x.value.toLowerCase();
    console.log(x.value);
  }

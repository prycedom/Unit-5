
    lightbox.option({
      'alwaysShowNavOnTouchDevices':true
    })
document.getElementById("searchhere").addEventListener("keyup", myFunction);
  function myFunction() {
    var x = document.getElementById("searchhere");
    x.value = x.value.toLowerCase();
    console.log(x.value);
  }
  let anchors = document.querySelectorAll('a[data-title]');
  for (i = 0; i < anchors.length; i++) {
    let captions = anchors[i].getAttribute('data-title');
    console.log(captions);
  }

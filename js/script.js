// 
//     lightbox.option({
//       'alwaysShowNavOnTouchDevices':true
//     })
// document.getElementById("searchhere").addEventListener("keyup", myFunction);
//   function myFunction() {
//     var x = document.getElementById("searchhere");
//     x.value = x.value.toLowerCase();
//     console.log(x.value);
//   }
//   let anchors = document.querySelectorAll('a[data-title]');
//   for (i = 0; i < anchors.length; i++) {
//     let captions = anchors[i].getAttribute('data-title');
//     console.log(captions);
//   }
//   let match = captions[i].includes(x.value);
//    if (match) {
//    show
//   } else {
//    hide
//   }
  lightbox.option({
    'alwaysShowNavOnTouchDevices':true
  });
  const input = document.getElementById("searchhere");
  input.addEventListener("keyup", search);
  function search() {
    const thumbnailDiv = document.querySelectorAll('.thumbnails');
    const anchors = document.querySelectorAll('a[data-title]');
    const inputText = input.value.toLowerCase();
    for (i = 0; i < anchors.length; i++) {
      let captions = anchors[i].getAttribute('data-title');
      let match = captions.toLowerCase().includes(inputText);
      if(match) {
        thumbnailDiv[i].style.display = '';
      } else {
        thumbnailDiv[i].style.display = 'none';
      }
    }
  }

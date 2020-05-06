<script>
    lightbox.option({
      'alwaysShowNavOnTouchDevices':true
    })
</script>
document.getElementById("searchhere").addEventListener("keyup", myFunction);
  function myFunction() {
    var x = document.getElementById("searchhere");
    x.value = x.value.toLowerCase();
    console.log(x.value);
  }
<script>
  $(document).ready(function(){
    $("#sticker").sticky({topSpacing:0});
  });
</script>

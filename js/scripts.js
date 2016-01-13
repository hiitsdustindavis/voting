$(document).ready(function() {
  var vote = parseInt(prompt("How old are you (years)?"));
    if (vote >= 18) {
      $('#adults').show ();
    }
    else {
      $('#minors').show();
    }

    $("#olink").click(function() {
      $("#oregon").show();
      $("#national").hide();
  });

    $("#slink").click(function() {
      $("#national").show();
      $("#oregon").hide();
  });
});

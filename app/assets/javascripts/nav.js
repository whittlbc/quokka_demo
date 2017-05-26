$(document).ready(function() {
  var demoImagesDir = 'http://quokkadev.s3-website-us-west-1.amazonaws.com/demo/';
  var images = ['challenge', 'habit'];
  var index = 0;
  var $img = $('.pic');

  function nav () {
    $img.attr('src', demoImagesDir + images[index] + '.png');
    $(window).scrollTop(0);
  }

  function back () {
    if (index == 0) {
      index = images.length - 1;
    } else {
      index--;
    }

    nav();
  }

  function forward () {
    if (index == images.length - 1) {
      index = 0;
    } else {
      index++;
    }

    nav();
  }

  $img.click(forward);

  $(document).keydown(function(e) {
    switch (e.which) {
      case 37:
        back();
        break;
      case 39:
        forward();
        break;
    }
  });
});
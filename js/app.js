window.jQuery && (($) => {

  'use strict';

  const RECIPE = [
    'https://cookpad.com/recipe/1283656',
    'https://cookpad.com/recipe/1498992',
    'https://cookpad.com/recipe/2008455',
    'https://cookpad.com/recipe/425935',
    'https://cookpad.com/recipe/450372',
    'https://cookpad.com/recipe/362623',
    'https://cookpad.com/recipe/617469',
    'https://cookpad.com/recipe/26402',
    'https://cookpad.com/recipe/571850',
    'https://cookpad.com/recipe/1063771',
    'https://cookpad.com/recipe/200979',
    'https://cookpad.com/recipe/1675266',
    'https://cookpad.com/recipe/174662',
    'https://cookpad.com/recipe/302563',
    'https://cookpad.com/recipe/1627588',
    'https://cookpad.com/recipe/1496516',
    'https://cookpad.com/recipe/1252740',
    'https://cookpad.com/recipe/293345'
  ];

  function random () {
    return RECIPE[Math.floor(Math.random() * RECIPE.length)];
  }

  $(() => {
    var btn = $('.gacha-btn');
    $(btn).on('click', () => {
      var url = random();
      $(btn).addClass('hidden');
      $('.gacha-url').removeClass('hidden').addClass('zoomIn').html(
        $('<a>').attr({
          'href' : url,
          'target' : '_blank'
        }).text('Get Your Recipe').on('click', () => {
          location.reload();
        })
      );
      setTimeout(function () {
        $('.gacha-url').removeClass('zoomIn');
      }, 4000);
    });
  });

  $(() => {
    $('.gacha').sparkle({
      count: 300,
      color: ["#f1f4ff","#02225b","#749bfa"],
      speed: 1
    }).trigger('start.sparkle');
  });

})(window.jQuery);

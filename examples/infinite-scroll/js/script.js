(function($){

  //$('.post').inViewport({});

  $('.post').fixedRelative({

    fixedEl      : '.share-wrapper-inner',
    wrapperEl    : '.share-wrapper',

    fixedClass   : 'share-wrapper-inner-fixed',
    wrapperClass : 'share-wrapper-bottom'

  }).scrollHistory();

  $(document).on($.scrollHistory.EVENT_NAME, function(evt){

    var url = evt.post.find('h1').text();

    history.pushState(
      {},
      url,
      url.replace(/ /ig, '-').toLowerCase()
    );

    document.title = url;

  });

  var postTemplate = $.trim($('#js-tpl').html());

  var adTemplate = $.trim($('#ad-tpl').html());

  $('.posts').neverender({

    callback: function(next){

      $.getJSON('/data/load.json', function(data){

        var post = data[Math.floor(Math.random() * data.length)];

        if (Math.random() < 0.5) {

          $('.posts').append(adTemplate);

        }

        var html = $(

          postTemplate
            .replace('{{title}}', post.title)
            .replace('{{author}}', post.author)
            .replace('{{content}}', post.content)

        );

        html.find('.post').fixedRelative({

          fixedEl      : '.share-wrapper-inner',
          wrapperEl    : '.share-wrapper',

          fixedClass   : 'share-wrapper-inner-fixed',
          wrapperClass : 'share-wrapper-bottom'

        }).scrollHistory();

        $('.posts').append(html);

        next();

      });

    }

  });

})(jQuery);
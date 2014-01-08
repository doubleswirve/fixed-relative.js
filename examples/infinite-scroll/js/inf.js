
(function($, window, document, undefined){

  var win = $(window)
    , doc = $(document);

  var defaults = {

    delay: 250

  };

  var queue = []
    , data
    , elementRect
    , index
    , length;

  var initialized = false;

  var timerHandle = null;

  function init() {

    win.on('scroll resize load', checkTokens);

  }

  function checkTokens() {

    if (timerHandle) {

      return;

    }

    index  = 0;
    length = queue.length;

    timerHandle = setTimeout(main, defaults.delay);

  }


  function main() {

    if (index < queue.length) {

      data = queue[index++];

      if (!data.callback) {

        return main();

      }

      elementRect = data.el.getBoundingClientRect();

      if (elementRect.top > win.height()) {

        return main();

      }

      return data.callback(main);

    } else {

      timerHandle = null;

    }

  }


  $.fn.neverender = function(options){

    if (!initialized) {

      initialized = true;

      init();
    }

    var createToken = function(){

      var div = document.createElement('div');

      div.className = 'neverender-token';

      $(this).append(div);

      queue.push({

        el : div,
        callback : options.callback

      });

    };

    return this.each(createToken);

  };


})(jQuery, window, document);

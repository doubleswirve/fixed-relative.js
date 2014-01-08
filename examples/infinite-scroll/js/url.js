
(function($, window, document, undefined){

  /**
   * Add pushstate to the jQuery `support`
   * property
   */

  $.support.pushState = !!(window.history && history.pushState);


  /**
   * Constants
   */

  var EVENT_NAME = 'articleinviewport';


  /**
   * jQ elements
   */

  var win = $(window)
    , doc = $(document);


  /**
   * Cache for articles
   */

  var posts = []
    , data
    , rect
    , options;

  var optionsCache = [];

  var index
    , length;


  /**
   * Scroll handling
   */

  var initialized = false
    , timeout     = 300
    , handle      = null;

  function initialize() {

    win.on('scroll', handler);

  }

  function handler() {

    if (handle) {

      clearTimeout(handle);

      handle = null;

    }

    handle = setTimeout(iteratePosts, timeout);

  }

  function iteratePosts() {

    for (
      index = 0, length = posts.length;
      index < length;
    ) {

      data    = posts[index++];
      rect    = data.el.getBoundingClientRect();
      options = optionsCache[data.optionsId];

      if (
        rect.top < options.top && 
        rect.bottom > options.bottom
      ) {

        return $.event.trigger({

          type: EVENT_NAME,
          post: data.jQ

        });

      }

    }

  }


  /**
   * Plugin
   */

  var defaults = {

    top    : 200,
    bottom : 400

  };

  $.fn.scrollHistory = function(options){

    if (!$.support.pushState) {

      return;

    }

    if (!initialized) {

      initialized = true;

      initialize();

    }

    options = options || {};

    options = $.extend({}, defaults, options);

    optionsCache.push(options);

    var _this;

    function addToPosts() {

      _this = $(this);

      posts.push({

        el        : this,
        jQ        : _this,
        optionsId : optionsCache.length - 1

      });

    }

    return this.each(addToPosts);

  };


  /**
   * Static methods/properties
   */

  $.scrollHistory = {

    EVENT_NAME : EVENT_NAME,

    setTimer: function(n){

      timeout = n;

    },


    off: function(){

      win.off('scroll', handler);

    }

  };


})(jQuery, window, document);

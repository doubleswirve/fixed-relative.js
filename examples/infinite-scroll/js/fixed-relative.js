
(function($, window, undefined){

  /**
   * jQuery elements
   */

  var win = $(window);


  /**
   * Cache for elements and their
   * respective data
   *
   * Objects in cache:
   *   (1) el        : raw HTML element
   *   (2) optionsId : delay options, class names, etc.
   *   (3) wrapperEl : jQ element for fixed element wrapper
   *   (4) fixedEl   : jQ element for fixed element
   */

  var cache = []
    , data
    , options
    , rect;

  var optionsCache = [];

  var index
    , length;


  /**
   * Scroll handling
   */

  var initialized = false
    , timeout     = 0
    , handle      = null;

  function initialize() {

    win.on('scroll', handler);

  }

  function handler() {

    if (handle) {

      clearTimeout(handle);

      handle = null;

    }

    if (timeout > 0) {

      handle = setTimeout(iterateCache, timeout);

    } else {

      iterateCache();

    }

  }


  /**
   * Main function iterating cache
   */

  function iterateCache() {

    for (
      index = 0, length = cache.length;
      index < length;
    ) {

      data    = cache[index++];
      rect    = data.el.getBoundingClientRect();
      options = optionsCache[data.optionsId];

      /**
       * If the top of the parent element is within
       * a certain distance of the top of the window
       * and the bottom is beneath that certain distance
       * then fixed the element
       */

      if (
        rect.top < options.top && 
        rect.bottom > options.bottom
      ) {

        data.fixedEl.addClass(options.fixedClass);
        data.wrapperEl.removeClass(options.wrapperClass);

        continue;

      }

      /**
       * Unfix the element
       */

      data.fixedEl.removeClass(options.fixedClass);

      /**
       * If the parent is above the window, pin the
       * the wrapping element to the bottom of the
       * parent
       */

      if (rect.top < 0) {

        data.wrapperEl.addClass(options.wrapperClass);

      }

    }

  }


  /**
   * Actual plugin
   */

  var defaults = {

    fixedEl      : '.fixed-relative',
    wrapperEl    : '.fixed-relative-wrapper',

    fixedClass   : 'fixed-relative-fixed',
    wrapperClass : 'fixed-relative-wrapper-bottom',

    top          : 58,
    bottom       : 215

  };

  $.fn.fixedRelative = function(options){

    if (!initialized) {

      initialized = true;

      initialize();

    }

    options = options || {};

    options = $.extend({}, defaults, options);

    optionsCache.push(options);

    var _this;

    function addElementToCache() {

      _this = $(this);

      cache.push({

        el        : this,
        fixedEl   : _this.find(options.fixedEl),
        wrapperEl : _this.find(options.wrapperEl),
        optionsId : optionsCache.length - 1

      });

    }

    return this.each(addElementToCache);

  };


  /**
   * Static methods
   */

  $.fixedRelative = {

    setTimer: function(n){

      timeout = n;

    },

    off: function(){

      win.off('scroll', handler);

    }

  };

})(jQuery, window);
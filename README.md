Fixed Relative
==============

Goal: a simple, efficient jQuery plugin to simulate having a child element "fixed" relative to an ancestor


Example Usage
-------------

Using the following markup:

```html
<!-- relatively positioned container -->
<article class="post">

  <h1>Some Title</h1>
  <p>Some long... content</p>

  <!-- element simulated as fixed relative to the parent ARTICLE -->
  <div class="fixed-relative-wrapper">
    <div class="fixed-relative">
      
      <a href="javascript:facebook()">Facebook</a>
      <a href="javascript:twitter()">Twitter</a>
      <a href="javascript:google()">Google+</a>

    </div>
  </div>

</article>
```

Provide the following styles:

```css
.post {
    position: relative;
}

.fixed-relative-wrapper {
    position: absolute;
    top: 20px;
    right: 40px;
    width: 90px; /* this is important! */
}

.fixed-relative-wrapper-bottom {
    top: auto;
    bottom: 20px;
}

.fixed-relative {
    /* your styles */
}

.fixed-relative-fixed {
    position: fixed;
}
```

The JavaScript:

```javascript
(function($){

  $('.post').fixedRelative();

})(jQuery);
```

This will place the "fixed" element in the upper right-hand corner of the `article.post` element. 

Once the *top* of the `article.post` element has gotten close enough to the top of the browser window, the `div.fixed-relative` element will add the `fixed-relative-fixed` class and follow as the user scrolls.

Once the *bottom* of the `article.post` element has gotten close enough to the top of the browser window, the `div.fixed-relative` element will lose the `fixed-relative-fixed` class and the `div.fixed-relative-wrapper` element will obtain the `fixed-relative-wrapper-bottom` class, forcing the element to stick to the bottom of `article.post` element.


Options
-------

### `fixedEl`

**Default value:** `.fixed-relative`

The element that will have the fixed positioning applied to it

### `wrapperEl`

**Default value:** `.fixed-relative-wrapper`

The element that will have absolute positioning applied to it

### `fixedClass`

**Default value:** `fixed-relative-fixed`

The class applying fixed position

### `wrapperClass`

**Default value:** `fixed-relative-wrapper-bottom`

The class applying the bottom CSS value

### `top`

**Default value:** `58`

Trigger changes when the relatively positioned element's *top* is this distance from the top of the window

### `bottom`

**Default value:** `215`

Trigger changes when the relatively positioned element's *bottom* is this distance from the top of the window


Configuration
-------------

### `$.fixedRelative.setTimer(/*{Number}*/ n)`

The timeout value is by default set to `0`. If you pass in a number greater than `0` to this static function there will be a delay between the scroll event and the actual changes triggered.

### `$.fixedRelative.off()`

Unbinds the scroll event. The functionality is removed.


Live Example
------------

You can see the PHP infinite scroll example [here](http://scrolly-poly.eu1.frbit.net/ "Live Example"). The app might be frozen as it's on a free tier at *[fortrabbit](http://fortrabbit.com/ "fortrabbit.com")*. Just bug me if it is.


Browser Support
---------------

Desktop OS X:

* Chrome 31
* Firefox 26
* Safari 7

Windows 7:

* Chrome 31
* Firefox 25
* IE 9

Windows XP:

* IE 8


Todo
----

* Clean up all the applied classes when calling the static `off` method.
* Browser test.
* Probably some other stuff...

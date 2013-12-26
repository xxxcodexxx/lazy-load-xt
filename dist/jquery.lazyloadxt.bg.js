/*! Lazy Load XT v0.8.7 2013-12-26
 * http://ressio.github.io/lazy-load-xt
 * (C) 2013 RESS.io
 * Licensed under MIT */

(function ($) {
    var options = $.lazyLoadXT,
        bgAttr = options.bgAttr || 'data-bg';

    options.selector += ',[' + bgAttr + ']';

    $(document).on('lazyshow', function (e) {
        var $this = $(e.target);
        $this
            .css('background-image', "url('" + $this.attr(bgAttr) + "')")
            .removeAttr(bgAttr);
    });

})(window.jQuery || window.Zepto);

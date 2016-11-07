/*
 * 高さ揃えプラグイン
 */
;(function($){
    'use strict';
    
    $.fn.bbFlatHeight = function(options) {
        var settings = $.extend({
            xxx: false
        }, options);
        
        this.css('height', 'auto');
        var h = 0;
        
        this.each(function() {
            var thisHeight = $(this).outerHeight();
            if (thisHeight > h) {
                h = thisHeight;
            }
        });
        this.css('height', h);
    };
}(jQuery));

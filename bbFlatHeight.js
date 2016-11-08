/*
 * 高さ揃えプラグイン
 */
;(function($){
    'use strict';
    
    $.fn.bbFlatHeight = function(options) {
        var settings = $.extend({
            col: false
        }, options);
        
        var $this = this;
        $this.css('height', 'auto');
        var h = 0;
        var col = settings.col || $this.length;
        var row = 0;
        
        $this.each(function(i) {
            if ($(this).outerHeight() > h) {
                h = $(this).outerHeight();
            }
            if ((i+1) % col === 0) {
                var lt = row * col;
                var gt = lt + (col-1);
                for (var j=lt; j<=gt; j++) {
                    $($this[j]).css('height', h);
                }
                h = 0;
                row++;
            }
        });
        for (var i=$this.length-($this.length % col); i<$this.length; i++) {
            $($this[i]).css('height', h);
        }
        
        return this;
    };
}(jQuery));

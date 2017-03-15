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

        var init = function() {
            setup();
        }

        var setup = function() {
            $this.css('height', 'auto');
            var max = 0;
            var col = settings.col || $this.length;
            var row = 0;
            $this.each(function(i) {
                var h = ($(this).css('box-sizing') == 'border-box') ? $(this).outerHeight() : $(this).height();
                if (h > max) max = h;
                if ((i+1) % col === 0) {
                    var lt = row * col;
                    var gt = lt + (col-1);
                    for (var j=lt; j<=gt; j++) {
                        $($this[j]).css('height', max);
                    }
                    max = 0;
                    row++;
                }
            });
            for (var i=$this.length-($this.length % col); i<$this.length; i++) {
                $($this[i]).css('height', max);
            }
        }

        $(window).on('orientationchange', function() {
            setup();
        });

        init();

        return this;
    };
}(jQuery));

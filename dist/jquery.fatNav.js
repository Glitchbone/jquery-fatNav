(function($, window, document) {
    
    var pluginName = 'fatNav',
    defaults = {};
    
    function Plugin(options) {
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    
    $.extend(Plugin.prototype, {
        
        init: function() {

            var self = this;
            var $nav = this.$nav = $('.fat-nav');
            var $hamburger = this.$hamburger = $('<a href="javascript:void(0)" class="hamburger"><div class="hamburger__icon"></div></a>');
            
            this._bodyOverflow = $('body').css('overflow');
            
            // Hack to prevent mobile safari scrolling the whole body when nav is open
            if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
                
                $nav.children().css({
                    'height': '110%'
                });
                
            }
            
            $('body').append($hamburger);
            
            $().add($hamburger).add($nav.find('a')).on('click', function(e) {
                self.toggleNav();
            });
            
        },
        
        toggleNav: function() {
            
            var self = this;

            this.$nav.fadeToggle(400);
            
            self.toggleBodyOverflow();
            
            $().add(this.$hamburger).add(this.$nav).toggleClass('active');
        },
        
        toggleBodyOverflow: function() {
            
            var self = this;
            
            $('body').toggleClass('no-scroll');

            $('body').css({
                'overflow': $('body').hasClass('no-scroll') ? 'hidden' : self._bodyOverflow
            });
            
        },
        
        preventBodyScroll: function(e) {
            e.preventDefault();
        }
        
    });
    
    if (typeof $[pluginName] === 'undefined') {
        
        $[pluginName] = function(options) {
            return new Plugin(this, options);
        };
        
    }

}(jQuery, window, document));
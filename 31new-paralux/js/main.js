(function ($) {
    "use strict";
    $(document).ready(function() {
	var s = skrollr.init({
		edgeStrategy: 'set',
		easing: {
			WTF: Math.random,
			inverted: function(p) {
				return 1-p;
			}
		}
	});
	
     
    });


        
})(jQuery);
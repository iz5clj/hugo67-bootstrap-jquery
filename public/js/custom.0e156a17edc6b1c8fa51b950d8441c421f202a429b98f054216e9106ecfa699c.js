(function ($) {
    'use strict';

    if (typeof jQuery != 'undefined') {  
        // jQuery is loaded => print the version
        var version = jQuery.fn.jquery;

        $("#jquery-text").attr('class', 'text-success');
        $("#jquery-text").html("Jquery version is: " + version);

    }

    $('[data-toggle="tooltip"]').tooltip();

    $(window).on('load',function(){
        
    });

})(jQuery);
 //D�finie la taille des sections 
        $(document).ready(function () {
            jQuery('document').ready(function () {
                //On d�finie notre variable min_height � la hateur de notre fen�tre
                var min_height = jQuery(window).height();
                //Si notre section  est inf�rieur � min_height alors on lui donne comme propri�t� css une hauteur minimal �gal � min_height
                if (jQuery('section').height() < min_height) {
                    jQuery('section').css({
                        'min-height': +min_height + 'px'
                    });
                }
            });
        });
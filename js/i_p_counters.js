(function ($) {
  'use strict';

  Drupal.behaviors.i_p_counters = {
    attach: function (context, settings) {
      $(document).ready(function () {
        var cnt = 0;
        var options = {
          useEasing: true,
          useGrouping: true,
          separator: ' ',
          decimal: ',',
        };

        // Find all counters.
        $('.paragraph--type--i-p-group-of-counters .field--name-field-d-number').each(function(){
          // Trigger if in viewport.
          inViewport(this, function(el) {
            var id = 'upcnt' + cnt++;
            $(el).attr('id', id);

            // Count up.
            var numAnim = new CountUp(id, 0, $(el).attr('data-count'), 0, 2, options);
            numAnim.start();
          });
        });
      });
    }
  };
})(jQuery);

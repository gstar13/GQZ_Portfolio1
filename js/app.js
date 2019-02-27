$(document).ready(function () {
    $('#grouploop-example').grouploop({

        // animation speed
        velocity: 2,
      
        // false = from left to right
        forward: true,
      
        // default selectors
        childNode: ".item",
        childWrapper: ".item-wrap",
      
        // enable pause on hover
        pauseOnHover: true,
      
        // stick the first item
        stickFirstItem: false,
      
        // callback
        complete: null
        
      });

})
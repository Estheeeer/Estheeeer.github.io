// based on menu at http://mic.com. only works in chrome

(function($){

	var Menu = function(){
    this.$nav = $('.nav');
    this.$stories = $('.stories');
  }
  
  Menu.prototype.init = function(){
    this.initialState();
    this.ui();
  }
  
  Menu.prototype.initialState = function(){
    var i = 0,
    $img = $('.category').eq(0).find('iframe');      
    $img.on('load', function(){
      i++;
      //wait for all images to load
      if (i === $img.length) {
	      $(this).parent().parent().addClass('show');
      }
    }); 
  }
  
  Menu.prototype.ui = function(){
    var self = this;

    //show recent articles on hover
    self.$nav.on('mouseenter', 'li', function(){
      var $this = $(this);		

      $('.category')
        .removeClass('show')
        .eq($this.index())
        .css('left', 0)
        .stop(true, true)
        .addClass('show');

      self.$stories
        .find('span')
        .text(
          $this.attr('data-menu')
        );
     });
  }
  

  var menu = new Menu().init();
  
  }(jQuery));
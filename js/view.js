/*ChartApp.menuStub = Ember.View.extend({
  tagName: 'div',
  classNames: ['menu_stub'],
  // classNames: [],
  didInsertElement: function() {
    var menu = $('.menu_main');
    var nav = $('.menu_stub');
    var main = $('.main');
    var summary = $('.summary');
    var chart = $('.chart');
    var contact = $('.contact');

    menu.hide();

    	nav.css({ 'margin-left': '53px' });
        main.css({ 'margin-left': '0px' });
        chart.css({ 'margin-left': '0px' });
        summary.css({ 'margin-left': '0px' });
        contact.css({ 'margin-left': '0px' });


    nav.click(function() {
       if (menu.is(':hidden')) {
    	menu.animate({ opacity: 'toggle', 'left': '291px', 'z-index': '999' }, 'slow');
    	$(this).animate({ 'margin-left': '-47px' }, 'slow');
    	main.animate({ 'margin-left': '100px' }, '100');
    	chart.animate({ 'margin-left': '100px' });
    	summary.animate({ 'margin-left': '100px' });
    	contact.animate({ 'margin-left': '100px' });
    	} else {
        menu.animate({ opacity: 'toggle', 'left': '28.6%', 'z-index': '-999' }, 'slow');
        $(this).animate({ 'margin-left': '53px' }, 'slow');
        main.animate({ 'margin-left': '0px' });
        chart.animate({ 'margin-left': '0px' });
        summary.animate({ 'margin-left': '0px' });
        contact.animate({ 'margin-left': '0px' });
    	}
    	return false;
    }); 


  }
});
    */


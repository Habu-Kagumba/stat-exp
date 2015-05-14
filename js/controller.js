ChartApp.ApplicationController = Ember.ObjectController.extend({
	mainclass: 'closed',
  actions: {
  	open: function(opend){
  		this.set('mainclass', 'opend');
  	},
  	close: function(closed){
  		this.set('mainclass', 'closed');
  	}
  }
});


ChartApp.MenuStubComponent = Ember.Component.extend({
	classNames: ['menu_stub'],
	classNameBindings: ['isOpen:open:closed'],
	isOpen: true,

   actions: {
   	opend: function() {
   		this.toggleProperty('isOpen');
   		this.sendAction('opend', 'open');
   	},
   	closed: function() {
   		this.toggleProperty('isOpen');
   		this.sendAction('closed', 'closed');
   	}
   }
});
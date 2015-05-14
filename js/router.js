ChartApp.Router.map(function() {
  currentPath: '';
  this.resource('chartapp', { path: '/' });
  this.resource('summary');
  this.resource('charts');
  this.resource('contacts');
});

//App.Router.reopen({
  // location: 'none'
//});

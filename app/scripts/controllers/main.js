'use strict';

angular.module('angnodeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
angular.module('angnodeApp')
   .controller('myController', function ($scope){
  $scope.author=[{
    'name':'Neil Ajodah',
    'title': 'Sales',
    'company': 'Crystal Studios.net'
  },
  {
  	'name':'John Ajodah',
  	'title':'Art Director',
  	'company':'Crystal Studios.net'

  }];
});

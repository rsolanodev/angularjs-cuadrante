myApp.factory('myOperations', function() {
   return {
       suma: function(x, y) {
           return x+y;
       },
       resta: function (x, y) {
           return x-y;
       },
       multi: function (x, y) {
           return x*y;
       },
       division: function (x, y) {
           return x/y;
       }
   }
});
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$interval){
	$scope.teams = [
					{'name':"Bob",'img':'img/bob.png'},
					{'name':"Kevin",'img':'img/kevin.png'},
					{'name':"Stuart",'img':'img/stuart.png'}
				   ];

    $scope.getPerson = function(){
        random = $interval(function(){
            $scope.person = Math.floor(Math.random() * $scope.teams.length);
        },10);
        
    }

    $scope.pause = function(){
         $interval.cancel(random);
    }
});
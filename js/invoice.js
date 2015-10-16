/*

* Author: Vannakpanha MAO
* Date: 17-Oct-2015
I mad this for workshop angularjs at SmallWorld

*/

var i = 1;
var app = angular.module('invoice',[]);
app.controller('calculateInvoice',function($scope){

//initialize data
    $scope.invoices = {
    	items:[{
	    	'no':i,
	    	'item_name':'CocaCola',
	    	'quantity':3,
	    	'unitPrice':2000
    	}]
	};

//add new rows
	$scope.addItem = function(){
		i+=1;
		$scope.invoices.items.push({
			'no':i,
			'item_name':'',
	    	'quantity':1,
	    	'unitPrice':0
		});
	}

//remove item from lists
	$scope.removeItem = function(index){
		$scope.invoices.items.splice(index,1);
	}

//calculate total price
	$scope.toTal = function(){
		var total = 0;
		angular.forEach($scope.invoices.items,function(item){
			total += item.quantity*item.unitPrice;
		});
		return total;
	}

//disable add button when user didn't fill the data
	$scope.checkForm = function(){
		var check = 0; 
		angular.forEach($scope.invoices.items,function(item){
			if(item.item_name=='' || item.quantity=='' || item.unitPrice==''){
				check = 1;
			}else{
				check = 0;
			}
		});
		return check;
	}

});
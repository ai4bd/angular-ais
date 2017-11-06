angular.module('aisTable', []).directive('aisTable', function() {
	return {
		require: 'ngModel',
		restrict: 'AE',
		replace: true,
		scope: true,
		transclude: true,
		templateUrl: "app/components/angular-ais-table/ais-table-view.html",
		link: function(scope, elem, attrs) {
			scope.buttonsHeader = "Actions";
			scope.$watch(attrs['ngModel'], function(value) {
				scope.headers = value.headers;
				scope.data = value.data;
				scope.buttons = value.buttons;
			});
		}
	}
});

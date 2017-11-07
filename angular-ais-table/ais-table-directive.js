angular.module('aisTable', ['aisCommon']).directive('aisTable', function() {
	return {
		require: 'ngModel',
		restrict: 'AE',
		replace: true,
		scope: true,
		transclude: true,
		templateUrl: "assets/ai4bd-angular-ais/angular-ais-table/ais-table-view.html",
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

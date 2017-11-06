angular.module('aisButton', []).directive('aisButton', function() {
	return {
		require: 'ngModel',
		restrict: 'AE',
		replace: true,
		scope: true,
		transclude: true,
		templateUrl: "app/components/angular-ais-button/ais-button-view.html",
		link: function(scope, elem, attrs) {
			scope.$watch(attrs['ngModel'], function(value) {
				scope.label = value.label;
				scope.faIcon = value.faIcon;
				scope.onClick = value.onClick;
			});
		}
	}
});

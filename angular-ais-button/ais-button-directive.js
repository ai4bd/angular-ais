angular.module('aisButton', ['aisCommon']).directive('aisButton', function() {
	return {
		require: 'ngModel',
		restrict: 'AE',
		replace: true,
		scope: true,
		transclude: true,
		templateUrl: "assets/ai4bd-angular-ais/angular-ais-button/ais-button-view.html",
		link: function(scope, elem, attrs) {
			scope.$watch(attrs['ngModel'], function(value) {
				scope.label = value.label;
				scope.faIcon = value.faIcon;
				scope.onClick = value.onClick;
			});
			scope.$watch(attrs['ngDisabled'], function(value) {
				scope.disabled = value;
			});
		}
	}
});

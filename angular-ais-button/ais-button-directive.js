angular.module('aisButton', ['aisCommon']).directive('aisButton', function() {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			label: '@?label',
			faIcon: '@?faIcon',
			onClick: '=onClick'
		},
		transclude: true,
		templateUrl: "assets/ai4bd-angular-ais/angular-ais-button/ais-button-view.html",
		link: function(scope, elem, attrs) {
			scope.$watch(attrs['ngDisabled'], function(value) {
				scope.disabled = value;
			});
		}
	}
});

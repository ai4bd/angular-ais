angular.module('aisButton', ['aisCommon']).directive('aisButton', function() {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			label: '@?label',
			faIcon: '@?faIcon',
			onClick: '=onClick',
			disabled: '&?disabled'
		},
		transclude: true,
		templateUrl: "assets/ai4bd-angular-ais/angular-ais-button/ais-button-view.html",
		link: function(scope, elem, attrs) {
			scope.$watch('label', function(value) {
				scope.ariaLabel = (!!value && value.length > 0) ? value : "Button";
			});
		}
	}
});

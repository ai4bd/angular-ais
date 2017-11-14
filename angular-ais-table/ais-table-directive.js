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
				scope.getButtons = value.getButtons;
				scope.getCollapsible = value.getCollapsible;
				scope.collapsibleScope = value.collapsibleScope;
			});
		}
	}
}).directive('collapsibleContent', function ($compile) {
	return {
		link: function(scope, element, attrs) {
			var c = $compile(scope.collapsible)(scope.collapsibleScope || scope);
			$(c).appendTo(element);
		}
	}
});

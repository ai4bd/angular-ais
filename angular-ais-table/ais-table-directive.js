angular.module('aisTable', ['aisCommon']).directive('aisTable', function() {
	return {
		require: 'ngModel',
		restrict: 'AE',
		replace: true,
		scope: true,
		transclude: true,
		templateUrl: "assets/ai4bd-angular-ais/angular-ais-table/ais-table-view.html",
		link: function(scope, elem, attrs) {
			scope.$watch(attrs['ngModel'], function(value) {
				scope.columns = value.columns;
				scope.data = value.data;
				scope.getButtons = value.getButtons;
				scope.getCollapsible = value.getCollapsible;
				scope.collapsibleScope = value.collapsibleScope;
			});
			scope.flipCollapseIcon = function(event) {
				if($(event.target).hasClass("closed")) {
					$(event.target).removeClass("closed");
					$(event.target).addClass("opened");
				}
				else {
					$(event.target).removeClass("opened");
					$(event.target).addClass("closed");
				}
			}
		}
	}
}).directive('collapsibleContent', function ($compile) {
	return {
		link: function(scope, element, attrs) {
			var c = $compile(scope.collapsible)(scope.collapsibleScope || scope);
			$(c).appendTo(element);

			$(element).parent().on('show.bs.collapse', function(event) {
				window.dispatchEvent(new Event('resize'));
			});
		}
	}
});

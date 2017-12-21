angular.module('aisPager', ['aisCommon', 'aisButton']).directive('aisPager', function() {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			minPage: '=?minPage',
			page: '=page',
			maxPage: '=maxPage'
		},
		transclude: true,
		templateUrl: "assets/ai4bd-angular-ais/angular-ais-pager/ais-pager-view.html",
		link: function(scope, elem, attrs) {
			scope.minPage = scope.minPage ? scope.minPage : 1;
			scope.prevPage = function(event) { scope.page--; };
			scope.nextPage = function(event) { scope.page++; };
		}
	}
});

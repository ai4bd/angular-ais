angular.module('aisTextfield', ['aisCommon', 'aisButton', 'gg.editableText']).directive('aisTextfield', function() {
	return {
		restrict: 'AE',
		replace: true,
		scope: {
			editableText: '=editableText',
			isEditing: '=?isEditing',
			showEllipsis: '=?showEllipsis',
			placeholder: '@?',
			autocomplete: '@?'
		},
		transclude: true,
		templateUrl: "assets/ai4bd-angular-ais/angular-ais-textfield/ais-textfield-view.html",
		link: function(scope, elem, attrs) {
			scope.isEditing = (typeof scope.isEditing === 'undefined' || scope.isEditing === null) ?  false : scope.isEditing;
			scope.showEllipsis = (typeof scope.showEllipsis === 'undefined' || scope.showEllipsis === null) ? false : scope.showEllipsis;

			scope.discardChanges = function(event) {
				console.log("discard");
			};
			scope.confirmChanges = function(event) {
				console.log("confirm");
			};
		}
	}
});

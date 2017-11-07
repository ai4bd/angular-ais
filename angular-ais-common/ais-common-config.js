angular.module('aisCommon', ['ngMaterial']).config(function($mdThemingProvider) {

	$mdThemingProvider.definePalette('aisBlue', {
		'50': 'e2ecf3',
		'100': 'b6cee2',
		'200': '85aecf',
		'300': '548ebb',
		'400': '3075ad',
		'500': '0b5d9e',
		'600': '0a5596',
		'700': '084b8c',
		'800': '064182',
		'900': '033070',
		'A100': '9fc0ff',
		'A200': '6c9eff',
		'A400': '397cff',
		'A700': '1f6bff',
		'contrastDefaultColor': 'light',
		'contrastDarkColors': [
			'50',
			'100',
			'200',
			'300',
			'A100',
			'A200'
		],
		'contrastLightColors': [
			'400',
			'500',
			'600',
			'700',
			'800',
			'900',
			'A400',
			'A700'
		]
	});

	$mdThemingProvider.theme('default')
		.primaryPalette('aisBlue');
});

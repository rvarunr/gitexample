'use strict';
require
		.config({
			baseUrl : 'extResources/require',
			paths : {
				angular : '../../extResources/angular/js/angular-1.0.7',
				text : './text',
				jqueryProp : '../../extResources/jquery/js/jquery.i18n.properties-min-1.0.9',
				ngResource : '../../extResources/angular/js/angular-resource-1.0.7',
				services : '../../appResources/js/angular/services/service',
				directives : '../../appResources/js/angular/directives/directives',
				application : '../../appResources/js/angular/application/application',
				Controller : '../../appResources/js/angular/controller/index/Controller',
				bootstrap : '../../extResources/bootstrap/js/bootstrap',
				bootstrapDP : '../../extResources/bootstrap/js/bootstrap-datepicker',
				//bootstrapTP : '../../extResources/bootstrap/js/bootstrap-timepicker.min',
				//Modernizr : '../../extResources/modernizr/modernizr-2.0.6.min',
				uibootstrap : '../../extResources/angular/js/ui-bootstrap-tpls-0.4.0',
				$strapdirectives :'../../extResources/angular/js/angular-strap.min',
				goup: '../../extResources/goup/jquery.goup.min',
				d3Charts: '../../extResources/D3/d3.v3.min' 
			},
			waitSeconds:0,
			shim : {
				'angular' : {exports : 'angular'},
				'ngResource': {deps: ['angular']},
		        'services': {deps: ['angular']},
		        'application': {deps: ['angular']},
		        'Controller': {deps: ['angular']},
		        'directives': {deps: ['angular']},			        
		        '$strapdirectives': {deps: ['angular']},
		        'uibootstrap': {deps: ['angular']}
			},
			priority : [ 'angular' ]
		});
require([ 'angular', 'text', 'ngResource', 'jqueryProp', 'services',
		'directives', 'application','Controller', 'bootstrap', 'uibootstrap', '$strapdirectives','goup', 'bootstrapDP','d3Charts'//, 'Modernizr', 'bootstrapTP',  
		],
		function(angular) {
			// This function will be called when all the dependencies
			// listed above are loaded. Note that this function could
			// be called before the page is loaded.
			// This callback is optional.
			angular.element(document).ready(function() {
				angular.bootstrap(document, [ 'myApp' ]);
			});
		});
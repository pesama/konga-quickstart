'use strict';

/**
 * @ngdoc overview
 * @name kongaQuickStartApp
 * @description
 * # kongaQuickStartApp
 *
 * Main module of the application.
 */
angular
  .module('kongaQuickStartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'konga'
  ])
  .run(['$location', function($location) {
    $location.path('/');
  }])
  .run(['konga', 'metadata', function(konga, metadata) {

    // Configure API endpoint
    // Using demo REST API by JsonPlaceholder
    konga.config('apiEndpoint', 'http://jsonplaceholder.typicode.com');

    // Load the grid view mapping 
    konga.viewMapper('GRID_RESULTS_VIEW', 'views/grid-results.html');

    // And the GOOGLE_MAPS_FIELDTYPE
    konga.viewMapper('GOOGLE_MAPS_FIELDTYPE', 'views/raw-google-maps-input.html');

    // Inject metadata
    konga.init(metadata);

    /*
     * We are done here.
     * Next is to engage KongaController.
     * See it on index.html
     */
  }]);

var myApp = angular.module('myApp', [
    'ngRoute', 
    'ui.bootstrap',
    //'ngAnimate',
    
    //Third party modules
    'firebase',
    
    //custom modules
    'myApp.main',
    'myApp.proximosPartidos',
    'myApp.equipos',
    'myApp.entrenadores',
    'myApp.club',
    'myApp.cronicas',
    //'myApp.nextgames',
    'myApp.noticias',
    'myApp.socios',
    //'myApp.formulario'
    'myApp.auth',
    'myApp.core'

    
    
    ]);


myApp.config(function ($routeProvider) {
    
    $routeProvider

    
    .when('/collapseOne', {
        templateUrl:'collapseOne',
        controller:'collapseController'
    })
    
    .when('/socios', {
        templateUrl:'socios/socios.html',
        controller:'sociosController'
    })
    
});


myApp.controller('collapseController', function($scope) {
    
    
});

myApp.controller('sociosController', function($scope) {
    
});


myApp.controller('CollapseDemoCtrl', function ($scope, $http) {
           
    $scope.equipos = [];
    
    function mostrarPartidos() {
        $http.get("api/consulta.php")
            .success(function(data) {
            
            $scope.equipos = data;
            
        //console.log(data);
            
        });
    }
    
    mostrarPartidos();
       
    $scope.isCollapsed = true;
    $scope.isCollapsed1 = true;
    $scope.isCollapsed2 = true;
      
});

myApp.controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  
  var slides = $scope.slides = [
      {image: 'images/galeria/mayo2016/01.jpg'},
      {image: 'images/galeria/mayo2016/02.jpg'},
      {image: 'images/galeria/mayo2016/03.jpg'},
      {image: 'images/galeria/mayo2016/04.jpg'},
      {image: 'images/galeria/mayo2016/05.jpg'},
      {image: 'images/galeria/mayo2016/06.jpg'},
      {image: 'images/galeria/mayo2016/07.jpg'},
      {image: 'images/galeria/mayo2016/08.jpg'},
      {image: 'images/galeria/mayo2016/09.jpg'},
      {image: 'images/galeria/mayo2016/10.jpg'},
      {image: 'images/galeria/mayo2016/11.jpg'},
      {image: 'images/galeria/mayo2016/12.jpg'},
      {image: 'images/galeria/mayo2016/13.jpg'},
      {image: 'images/galeria/mayo2016/14.jpg'},
      {image: 'images/galeria/mayo2016/15.jpg'},
      {image: 'images/galeria/mayo2016/16.jpg'},
      {image: 'images/galeria/mayo2016/18.jpg'},
      {image: 'images/galeria/mayo2016/19.jpg'},
      {image: 'images/galeria/mayo2016/20.jpg'},
      {image: 'images/galeria/mayo2016/21.jpg'},
      {image: 'images/galeria/mayo2016/22.jpg'},
      {image: 'images/galeria/mayo2016/23.jpg'},
      {image: 'images/galeria/mayo2016/24.jpg'},
      {image: 'images/galeria/mayo2016/25.jpg'},
      {image: 'images/galeria/mayo2016/26.jpg'},
      {image: 'images/galeria/mayo2016/27.jpg'},
      {image: 'images/galeria/mayo2016/28.jpg'},
      {image: 'images/galeria/mayo2016/29.jpg'},
      {image: 'images/galeria/mayo2016/30.jpg'},
      {image: 'images/galeria/mayo2016/31.jpg'},
      {image: 'images/galeria/mayo2016/32.jpg'},
      {image: 'images/galeria/mayo2016/33.jpg'},
      {image: 'images/galeria/mayo2016/34.jpg'},
      {image: 'images/galeria/mayo2016/35.jpg'},
      {image: 'images/galeria/mayo2016/36.jpg'},
      {image: 'images/galeria/mayo2016/37.jpg'},
      {image: 'images/galeria/mayo2016/38.jpg'},
      {image: 'images/galeria/mayo2016/39.jpg'},
      {image: 'images/galeria/mayo2016/40.jpg'},
      {image: 'images/galeria/mayo2016/41.jpg'},
      {image: 'images/galeria/mayo2016/42.jpg'},
      {image: 'images/galeria/mayo2016/43.jpg'},
      {image: 'images/galeria/mayo2016/44.jpg'},
      {image: 'images/galeria/mayo2016/45.jpg'},
      {image: 'images/galeria/mayo2016/46.jpg'},
      {image: 'images/galeria/mayo2016/47.jpg'},
      {image: 'images/galeria/mayo2016/48.jpg'},
      {image: 'images/galeria/mayo2016/49.jpg'},
      {image: 'images/galeria/mayo2016/50.jpg'},
      {image: 'images/galeria/mayo2016/51.jpg'},
      {image: 'images/galeria/mayo2016/52.jpg'},
      {image: 'images/galeria/mayo2016/53.jpg'},
      {image: 'images/galeria/mayo2016/54.jpg'},
      {image: 'images/galeria/mayo2016/55.jpg'},
      {image: 'images/galeria/mayo2016/56.jpg'},
      {image: 'images/galeria/mayo2016/57.jpg'},
      {image: 'images/galeria/mayo2016/58.jpg'},
      {image: 'images/galeria/mayo2016/59.jpg'},
      {image: 'images/galeria/mayo2016/60.jpg'},
      {image: 'images/galeria/mayo2016/61.jpg'},
      {image: 'images/galeria/mayo2016/62.jpg'},
      {image: 'images/galeria/mayo2016/63.jpg'},
      {image: 'images/galeria/mayo2016/64.jpg'},
      {image: 'images/galeria/mayo2016/65.jpg'},
      {image: 'images/galeria/mayo2016/66.jpg'},
      {image: 'images/galeria/mayo2016/67.jpg'},
      {image: 'images/galeria/mayo2016/68.jpg'},
      {image: 'images/galeria/mayo2016/69.jpg'},
      {image: 'images/galeria/mayo2016/70.jpg'},
      {image: 'images/galeria/mayo2016/71.jpg'},
      {image: 'images/galeria/mayo2016/72.jpg'},
      {image: 'images/galeria/mayo2016/73.jpg'},
      {image: 'images/galeria/mayo2016/74.jpg'},
      {image: 'images/galeria/mayo2016/75.jpg'},
      {image: 'images/galeria/mayo2016/76.jpg'},
      {image: 'images/galeria/mayo2016/77.jpg'},
      {image: 'images/galeria/mayo2016/78.jpg'},
      {image: 'images/galeria/mayo2016/79.jpg'},
      {image: 'images/galeria/mayo2016/80.jpg'},
      {image: 'images/galeria/mayo2016/81.jpg'},
      {image: 'images/galeria/mayo2016/82.jpg'},
      {image: 'images/galeria/mayo2016/83.jpg'},
      {image: 'images/galeria/mayo2016/84.jpg'},
      {image: 'images/galeria/mayo2016/85.jpg'},
      {image: 'images/galeria/mayo2016/86.jpg'},
      {image: 'images/galeria/mayo2016/87.jpg'},
      {image: 'images/galeria/mayo2016/88.jpg'},
      {image: 'images/galeria/mayo2016/89.jpg'},
      {image: 'images/galeria/mayo2016/90.jpg'},
      {image: 'images/galeria/mayo2016/91.jpg'},
      {image: 'images/galeria/mayo2016/92.jpg'},
      {image: 'images/galeria/mayo2016/93.jpg'},
      {image: 'images/galeria/mayo2016/94.jpg'},
      {image: 'images/galeria/mayo2016/95.jpg'},
      {image: 'images/galeria/mayo2016/96.jpg'},
      {image: 'images/galeria/mayo2016/97.jpg'},
      {image: 'images/galeria/mayo2016/98.jpg'},
      {image: 'images/galeria/mayo2016/99.jpg'},
      {image: 'images/galeria/mayo2016/100.jpg'},
      {image: 'images/galeria/mayo2016/101.jpg'},
      {image: 'images/galeria/mayo2016/102.jpg'},
      {image: 'images/galeria/mayo2016/103.jpg'},
      {image: 'images/galeria/mayo2016/104.jpg'},
      {image: 'images/galeria/mayo2016/105.jpg'},
      {image: 'images/galeria/mayo2016/106.jpg'},
      {image: 'images/galeria/mayo2016/107.jpg'},
      {image: 'images/galeria/mayo2016/108.jpg'},
      {image: 'images/galeria/mayo2016/109.jpg'},
      {image: 'images/galeria/mayo2016/110.jpg'},
      {image: 'images/galeria/mayo2016/111.jpg'},
      {image: 'images/galeria/mayo2016/112.jpg'},
      {image: 'images/galeria/mayo2016/113.jpg'},
      {image: 'images/galeria/mayo2016/114.jpg'},
      {image: 'images/galeria/mayo2016/115.jpg'},
      {image: 'images/galeria/mayo2016/116.jpg'},
      {image: 'images/galeria/mayo2016/117.jpg'},
      {image: 'images/galeria/mayo2016/118.jpg'},
      {image: 'images/galeria/mayo2016/119.jpg'},
      {image: 'images/galeria/mayo2016/120.jpg'},
      {image: 'images/galeria/mayo2016/121.jpg'},
      {image: 'images/galeria/mayo2016/122.jpg'},
      {image: 'images/galeria/mayo2016/123.jpg'},
      {image: 'images/galeria/mayo2016/124.jpg'},
      {image: 'images/galeria/mayo2016/125.jpg'},
      {image: 'images/galeria/mayo2016/126.jpg'},
      {image: 'images/galeria/mayo2016/127.jpg'},
      {image: 'images/galeria/mayo2016/128.jpg'},
      {image: 'images/galeria/mayo2016/129.jpg'},
      {image: 'images/galeria/mayo2016/130.jpg'},
      {image: 'images/galeria/mayo2016/131.jpg'},
      {image: 'images/galeria/mayo2016/132.jpg'},
      {image: 'images/galeria/mayo2016/133.jpg'},
      {image: 'images/galeria/mayo2016/134.jpg'},
      {image: 'images/galeria/mayo2016/135.jpg'},
      {image: 'images/galeria/mayo2016/136.jpg'},
      {image: 'images/galeria/mayo2016/137.jpg'},
      {image: 'images/galeria/mayo2016/138.jpg'},
      {image: 'images/galeria/mayo2016/139.jpg'},
      {image: 'images/galeria/mayo2016/140.jpg'},
      {image: 'images/galeria/mayo2016/141.jpg'},
      {image: 'images/galeria/mayo2016/142.jpg'},
      {image: 'images/galeria/mayo2016/143.jpg'},
      {image: 'images/galeria/mayo2016/144.jpg'},
      {image: 'images/galeria/mayo2016/145.jpg'},
      {image: 'images/galeria/mayo2016/146.jpg'},
      {image: 'images/galeria/mayo2016/147.jpg'},
      {image: 'images/galeria/mayo2016/148.jpg'},
      {image: 'images/galeria/mayo2016/149.jpg'},
      {image: 'images/galeria/mayo2016/150.jpg'},
      {image: 'images/galeria/mayo2016/151.jpg'},
      {image: 'images/galeria/mayo2016/152.jpg'},
      {image: 'images/galeria/mayo2016/153.jpg'},
      {image: 'images/galeria/mayo2016/154.jpg'},
      {image: 'images/galeria/mayo2016/155.jpg'},
      {image: 'images/galeria/mayo2016/156.jpg'},
      {image: 'images/galeria/mayo2016/157.jpg'},
      {image: 'images/galeria/mayo2016/158.jpg'},
      {image: 'images/galeria/mayo2016/159.jpg'},
      {image: 'images/galeria/mayo2016/160.jpg'},
      {image: 'images/galeria/mayo2016/161.jpg'},
      {image: 'images/galeria/mayo2016/162.jpg'},
      {image: 'images/galeria/mayo2016/163.jpg'},
      {image: 'images/galeria/mayo2016/164.jpg'},
      {image: 'images/galeria/mayo2016/165.jpg'},
      {image: 'images/galeria/mayo2016/166.jpg'},
      {image: 'images/galeria/mayo2016/167.jpg'},
      {image: 'images/galeria/mayo2016/168.jpg'},
      {image: 'images/galeria/mayo2016/169.jpg'},
      {image: 'images/galeria/mayo2016/170.jpg'},
      {image: 'images/galeria/mayo2016/171.jpg'},
      {image: 'images/galeria/mayo2016/172.jpg'},
      {image: 'images/galeria/mayo2016/173.jpg'},
      {image: 'images/galeria/mayo2016/174.jpg'}
  ];
  
    $scope.isCollapsed = true;
    $scope.isCollapsed1 = true;
    $scope.isCollapsed2 = true;
  
});


myApp.controller('tomasFalsasDemoCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [
      {image: 'images/galeria/tomasfalsas/01.jpg'},
      {image: 'images/galeria/tomasfalsas/02.jpg'},
      {image: 'images/galeria/tomasfalsas/03.jpg'},
      {image: 'images/galeria/tomasfalsas/04.jpg'},
      {image: 'images/galeria/tomasfalsas/05.jpg'},
      {image: 'images/galeria/tomasfalsas/06.jpg'},
      {image: 'images/galeria/tomasfalsas/07.jpg'},
      {image: 'images/galeria/tomasfalsas/08.jpg'},
      {image: 'images/galeria/tomasfalsas/09.jpg'},
      {image: 'images/galeria/tomasfalsas/10.jpg'},
      {image: 'images/galeria/tomasfalsas/11.jpg'},
      {image: 'images/galeria/tomasfalsas/12.jpg'},
      {image: 'images/galeria/tomasfalsas/13.jpg'},
      {image: 'images/galeria/tomasfalsas/14.jpg'},
      {image: 'images/galeria/tomasfalsas/15.jpg'},
      {image: 'images/galeria/tomasfalsas/16.jpg'},
      {image: 'images/galeria/tomasfalsas/17.jpg'},
      {image: 'images/galeria/tomasfalsas/18.jpg'},
      {image: 'images/galeria/tomasfalsas/19.jpg'},
      {image: 'images/galeria/tomasfalsas/20.jpg'},
      {image: 'images/galeria/tomasfalsas/21.jpg'},
      {image: 'images/galeria/tomasfalsas/22.jpg'},
      {image: 'images/galeria/tomasfalsas/23.jpg'},
      {image: 'images/galeria/tomasfalsas/24.jpg'},
      {image: 'images/galeria/tomasfalsas/25.jpg'},
      {image: 'images/galeria/tomasfalsas/26.jpg'},
      {image: 'images/galeria/tomasfalsas/27.jpg'},
      {image: 'images/galeria/tomasfalsas/28.jpg'},
      {image: 'images/galeria/tomasfalsas/30.jpg'},
      {image: 'images/galeria/tomasfalsas/31.jpg'},
      {image: 'images/galeria/tomasfalsas/32.jpg'},
      {image: 'images/galeria/tomasfalsas/33.jpg'},
      {image: 'images/galeria/tomasfalsas/34.jpg'},
      {image: 'images/galeria/tomasfalsas/35.jpg'},
      {image: 'images/galeria/tomasfalsas/36.jpg'},
      {image: 'images/galeria/tomasfalsas/37.jpg'},
      {image: 'images/galeria/tomasfalsas/38.jpg'},
      {image: 'images/galeria/tomasfalsas/39.jpg'},
      {image: 'images/galeria/tomasfalsas/40.jpg'},
      {image: 'images/galeria/tomasfalsas/41.jpg'},
      {image: 'images/galeria/tomasfalsas/42.jpg'},
      {image: 'images/galeria/tomasfalsas/43.jpg'},
      {image: 'images/galeria/tomasfalsas/44.jpg'}   
      
  ];
  
});









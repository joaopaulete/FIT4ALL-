var artigosApp = angular.module('artigosApp', ["ui.router", 'artigosApp', 'ngRoute']);

artigosApp.factory('artigos', function($http){
    
    var cachedData;
    
    function getData(callback){
        if(cachedData) {
            callback(cachedData);
        } else {
            $http.get('artigos.json').success(function(data){
                cachedData = data;
                callback(data);
            });
        }
    }
    
    return {
        list: getData,
    };
});


artigosApp.config(function($stateProvider, $urlRouterProvider, $uiViewScrollProvider, $routeProvider){
    
    $uiViewScrollProvider.useAnchorScroll();
    
    
      // For any unmatched url
      $urlRouterProvider.otherwise("/home")
      
      $stateProvider
          .state('home', {
            url: "/home",
            templateUrl: "indexView.html"
          })
          .state('missao', {
            url: "/missao",
            templateUrl: "fit4all_missao.html"
          })
          .state('carolinapaulete', {
            url: "/carolinapaulete",
            templateUrl: "fit4all_carolinapaulete.html"
          })
          .state('areaintervencao', {
            url: "/areaintervencao",
            templateUrl: "fit4all_areaintervencao.html"
          })
          .state('treinopersonalizado', {
            url: "/treinopersonalizado",
            templateUrl: "servicos_treinopers.html"
          })
          .state('sgt', {
            url: "/sgt",
            templateUrl: "servicos_sgt.html"
          })
          .state('fit4alloutdoor', {
            url: "/fit4alloutdoor",
            templateUrl: "servicos_fit4alloutdoor.html"
          })
          .state('duvidas', {
            url: "/duvidas",
            templateUrl: "duvidas.html"
          })
          .state('avaliacaogratuita', {
            url: "/avaliacaogratuita",
            templateUrl: "avaliacaogratuita.html"
          })
          .state('desafio', {
            url: "/desafio",
            templateUrl: "desafia_te.html"
          })
          .state('galeria', {
            url: "/galeria",
            templateUrl: "galeria_recente.html"
          })
          .state('galeriafit4all', {
            url: "/galeriafit4all",
            templateUrl: "galeria_fit4all.html"
          })
          .state('galeriafitcamp1', {
            url: "/galeriafitcamp1",
            templateUrl: "galeria_fitcamp1.html"
          })
          .state('galeriafitcamp2', {
            url: "/galeriafitcamp2",
            templateUrl: "galeria_fitcamp2.html"
          })
          .state('artigos', {
            url: "/artigos",
            templateUrl: "artigos.html"
          })
          .state('artigos.artigosview1', {
            url: "/view1",
            templateUrl: "artigosview1.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigosview2', {
            url: "/view2",
            templateUrl: "artigosview2.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigosview3', {
            url: "/view3",
            templateUrl: "artigosview3.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo1', {
            url: "/artigo1",
            templateUrl: "artigo01.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo2', {
            url: "/artigo2",
            templateUrl: "artigo02.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo3', {
            url: "/artigo3",
            templateUrl: "artigo03.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo4', {
            url: "/artigo4",
            templateUrl: "artigo04.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo5', {
            url: "/artigo5",
            templateUrl: "artigo05.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo6', {
            url: "/artigo6",
            templateUrl: "artigo06.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo7', {
            url: "/artigo7",
            templateUrl: "artigo07.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo8', {
            url: "/artigo8",
            templateUrl: "artigo08.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo9', {
            url: "/artigo9",
            templateUrl: "artigo09.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo10', {
            url: "/artigo10",
            templateUrl: "artigo10.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo11', {
            url: "/artigo11",
            templateUrl: "artigo11.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo12', {
            url: "/artigo12",
            templateUrl: "artigo12.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo13', {
            url: "/artigo13",
            templateUrl: "artigo13.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo14', {
            url: "/artigo14",
            templateUrl: "artigo14.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo15', {
            url: "/artigo15",
            templateUrl: "artigo15.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo16', {
            url: "/artigo16",
            templateUrl: "artigo16.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo17', {
            url: "/artigo17",
            templateUrl: "artigo17.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo18', {
            url: "/artigo18",
            templateUrl: "artigo18.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo19', {
            url: "/artigo19",
            templateUrl: "artigo19.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo20', {
            url: "/artigo20",
            templateUrl: "artigo20.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo21', {
            url: "/artigo21",
            templateUrl: "artigo21.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo22', {
            url: "/artigo22",
            templateUrl: "artigo22.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo23', {
            url: "/artigo23",
            templateUrl: "artigo23.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo24', {
            url: "/artigo24",
            templateUrl: "artigo24.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo25', {
            url: "/artigo25",
            templateUrl: "artigo25.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo26', {
            url: "/artigo26",
            templateUrl: "artigo26.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo27', {
            url: "/artigo27",
            templateUrl: "artigo27.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo28', {
            url: "/artigo28",
            templateUrl: "artigo28.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo29', {
            url: "/artigo29",
            templateUrl: "artigo29.html",
            controller: 'artigosViewCtrl'
          })
          .state('artigos.artigo30', {
            url: "/artigo30",
            templateUrl: "artigo30.html",
            controller: 'artigosViewCtrl'
          });
 
      
    });





      


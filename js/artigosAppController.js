artigosApp.controller('artigosViewCtrl', function ($scope, $route, artigos){
    artigos.list(function(artigos){
        $scope.artigos = artigos;
    });
});

artigosApp.controller('ViewCtrl', function ($scope, $http){
    artigos.list(function(artigos){
        $scope.artigos = artigos;
    });
});


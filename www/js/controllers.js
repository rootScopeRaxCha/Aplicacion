angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$rootScope,$http) {
  $rootScope.datas = [];
  for ( let i =1; i < 51; i++ ) {
    $http({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/'+i+'/'
    }).then((snapshot) => {
      $rootScope.datas.push(snapshot);
      if ( i >= 1 && i < 10 ) {
        snapshot.data.sprites.front_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00'+i+'.png';          
      } if ( i > 9 && i < 100 ) {
        snapshot.data.sprites.front_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/0'+i+'.png';         
      } if (i > 99 && i < 808) {
        snapshot.data.sprites.front_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'+i+'.png';          
      }
    });
  };
});

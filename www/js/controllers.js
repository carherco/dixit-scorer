angular.module('starter.controllers', [])

.controller('PlayersCtrl', function($scope, sharedService) {
    $scope.players = [];
    sharedService.players = $scope.players;
    
    $scope.newPlayer = {};
    
    $scope.addPlayer = function () {
        $scope.newPlayer.score = 0;
        $scope.players.push($scope.newPlayer);
        $scope.newPlayer = {};
    };
    
    $scope.deletePlayer = function (index) {
        $scope.players.splice(index, 1);
    };

})

.controller('ScoreCtrl', function ($scope, sharedService) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.sharedService = sharedService;
    $scope.players = sharedService.players;

    $scope.settings = sharedService.settings;

    $scope.scoreUpStoryTeller = function (index) {
        $scope.players[index].score = $scope.players[index].score + parseInt($scope.settings.storyTellerBonus, 10);
    };

    $scope.scoreDownStoryTeller = function (index) {
        $scope.players[index].score = $scope.players[index].score - parseInt($scope.settings.storyTellerBonus, 10);
    };
    
    $scope.scoreUpCorrectVote = function (index) {
        $scope.players[index].score = $scope.players[index].score + parseInt($scope.settings.correctVoteBonus, 10);
    };

    $scope.scoreDownCorrectVote = function (index) {
        $scope.players[index].score = $scope.players[index].score - parseInt($scope.settings.correctVoteBonus, 10);
    };
    
    $scope.scoreUpVoted = function (index) {
        $scope.players[index].score = $scope.players[index].score + parseInt($scope.settings.votedBonus, 10);
    };

    $scope.scoreDownVoted = function (index) {
        $scope.players[index].score = $scope.players[index].score - parseInt($scope.settings.votedBonus, 10);
    };

})

.controller('ConfigCtrl', function($scope, sharedService) {
  $scope.settings = {
    storyTellerBonus: 3,
    correctVoteBonus: 3,
    votedBonus: 1
  };
  
  sharedService.settings = $scope.settings;
});

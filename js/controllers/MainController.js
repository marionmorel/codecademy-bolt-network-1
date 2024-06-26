app.controller('MainController', ['$scope', function($scope) {
  $scope.programs = [
    {
      series: "Sherlock",
      series_img: "img/sherlock.png",
      genre: "Crime drama",
      season: 3,
      episode: "The Empty Hearse",
      description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
      datetime: new Date('2014', '11', '31', '21', '00', '00', '00')
    },
    {
      series: 'Bridgerton',
      series_img: 'img/bridgerton.png',
      genre: 'Romance drama',
      season: 2,
      episode: 'The Viscount Who Loved Me',
      description: "Anthony lashes out as he awaits news of Kate, while Eloise turns to Theo for help in her Lady Whistledown hunt and Lady Featherington plans a grand ball.",
      datetime: new Date('2022', '03', '25', '10', '00', '00', '00')
    }
  ];
}]);
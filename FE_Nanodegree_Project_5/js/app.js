function loadData() {

  var $body = $('body');
  var $wikiElem = $('#wikipedia-links');
  var $greeting = $('#greeting');

  // Clear out the old data before the new request
  $wikiElem.text("");

  // Load street view
  var poiStr = $('#poi').val();

  $greeting.text('So, you want to live at ' + poiStr + '?');

  // Wikipedia stuff

  var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + poiStr + '&format=json&callback=wikiCallback';

  var wikiRequestTimeout = setTimeout(function() {
    $wikiElem.text("failed to get wikipedia resources");
  }, 8000);

  $.ajax({
    url: wikiUrl,
    dataType: "jsonp",
    success: function(response) {
      var articleList = response[1];

      for (var i = 0; i < articleList.length; i++) {
        articleStr = articleList[i];
        var url = 'http://en.wikipedia.org/wiki/' + articleStr;
        $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
      };
      clearTimeout(wikiRequestTimeout);
    }
  })
  return false;
};

$('#form-container').submit(loadData);

var places = [
{
  name: 'Buckingham Palace',
  latLang: new google.maps.LatLng(52.5072, 0.1275)
},
{
  name: 'Kensington Palace',
  latLang: new google.maps.LatLng(53.5072, 0.1275)
},
{
  name: 'Picaddily Circus',
  latLang: new google.maps.LatLng(56.5072, 0.1275)
},
{
  name: 'Royal Albert Hall',
  latLang: new google.maps.LatLng(55.5072, 0.1275)
},
{
  name: 'The British Museum',
  latLang: new google.maps.LatLng(54.5072, 0.1275)
}];

var Place = function(data) {
  this.name = ko.observable(data.name);
};

var ViewModel = function(data) {
  var self = this;
  this.placeList = ko.observableArray([]);

  places.forEach(function(aplace){
    self.placeList.push(new Place(aplace));
  });

  this.currentPlace = ko.observable(this.placeList()[0]);

  this.setPlace = function(clickedPlace) {
    self.currentPlace(clickedPlace);
  };
}

ko.applyBindings(new ViewModel());

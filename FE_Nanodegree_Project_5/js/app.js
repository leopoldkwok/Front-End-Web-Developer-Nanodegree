// Points of interest saved in an array

var places = [
  {
    name: 'Big Ben',
    latLang: new google.maps.LatLng(51.500956, -0.124582)
  },
  {
    name: 'Tower Bridge',
    latLang: new google.maps.LatLng(51.505650, -0.075389)

  },
  {
    name: 'Tower of London',
    latLang: new google.maps.LatLng(51.508286, -0.075949)
  },
  {
    name: 'Westminister Abbey',
    latLang: new google.maps.LatLng(51.499492, -0.127342)
  },
  {
    name: 'London Eye',
    latLang: new google.maps.LatLng(51.503511, -0.119564)
  }];

// This is the model
var Place = function(data) {
  this.name = ko.observable(data.name);
  this.latLang = ko.observable(data.latLang);
};

var ViewModel = function(data) {
  var self = this;
  this.placeList = ko.observableArray([]);

  places.forEach(function(aplace){
    self.placeList.push(new Place(aplace));
  });

  this.currentPlace = ko.observable('London');

  this.setPlace = function(chosenPlace) {
    self.currentPlace(chosenPlace);
  };

  this.loadData = function() {
    var $wikiElem = $('#wikipedia-links');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");

    var poiStr = $('#poi').val();
    $greeting.text('So, you want to explore at ' + poiStr + '?');

  // Wikipedia stuff
  var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + poiStr + '&format=json&callback=wikiCallback';

  var wikiRequestTimeout = setTimeout(function() {
    $wikiElem.text("failed to get wikipedia resources");
  }, 5000);


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


$('#form-container').submit(this.loadData);

// This initializes the Google Maps section, and puts markers for all the places
this.initialize = function() {
  var mapCanvas = document.getElementById('map-canvas');
  // Co-ordinates of Central London
  var myLatLng = new google.maps.LatLng(51.5072, -0.1276);
  var mapOptions = {
    center: myLatLng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(mapCanvas,mapOptions);

  var contentString = 'You clicked this';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var numPlaces = places.length;
  for (i = 0; i < numPlaces; i++) {
    var marker = new google.maps.Marker({
      position: places[i].latLang,
      map: map,
      title: places[i].name
    });

    google.maps.event.addListener(marker,'click',(function(markerCopy){
      return function(){
        infowindow.open(map, markerCopy);
      };
    })(marker));
  };
};
  google.maps.event.addDomListener(window, 'load', this.initialize);
}

ko.applyBindings(new ViewModel());

// This is the Data Model, each data point has a name and latlong co-ordinates

var Place = function(data) {
  var self = this;
  self.name = data.name;
  self.lat = data.lat;
  self.lon = data.lon;
};

// This is the ViewModel

var PlacePageModel = function(data) {
  var self = this;
  this.placeList = ko.observableArray([]);

  places.forEach(function(aplace){
    self.placeList.push(new Place(aplace));
  });

  this.currentPlace = ko.observable('');

  this.setPlace = function(chosenPlace) {
    self.currentPlace(chosenPlace);
  };

// Load the Wikipedia articles when user searches for a place
this.loadData = function(place) {
  var $wikiElem = $('#wikipedia-links');
  var $greeting = $('#greeting');

  // clear out old data before new request
  $wikiElem.text("");

  var poiStr=String(place.name);
  var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + poiStr + '&format=json&callback=wikiCallback';

  // Error Handling, this will show a text message if articles fail to load
  var wikiRequestTimeout = setTimeout(function() {
  $wikiElem.text("failed to get wikipedia resources");
  }, 5000);

  // Make an ajax call to wikiURL and append results to DOM wiki element
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
  });
  return false;
};

// Create filters for the place list
var filters = [
  {
    Type: "text",
    Name: "Name",
    Value: ko.observable(""),
    RecordValue: function(record) { return record.name;}
  }];

  self.filter = new Filter(filters, this.placeList);
  self.pager = new PagerModel(self.filter.filteredRecords);
};

// Model that represents the returned records from filtering

var PagerModel = function(records) {
  var self = this;
  self.records = GetObservableArray(records);

  self.currentPageRecords = ko.computed(function() {
    return self.records();
  }).extend({ throttle: 5});
};

// Compare values of search and place names and only return the matching ones as filtered

var Filter = function(filters, records) {
  var self = this;
  self.records = GetObservableArray(records);
  self.filters = ko.observableArray(filters);
  // Compare the name of each place to the user input text string
  // If they match, mark the place as having passed the filter
  self.activeFilters = ko.computed(function() {
    var filters = self.filters();
    var activeFilters = [];
    for (var index = 0; index < filters.length; index++) {
      var filter = filters[index];
      if(filter.Value) {
        var filterValue = filter.Value();
        if(filterValue && filterValue !="") {
          var activeFilter = {
            Filter: filter,
            IsFiltered: function(filter, record)
            {
              var filterValue = filter.Value();
              filterValue = filterValue.toUpperCase();

              var recordValue = filter.RecordValue(record);
              recordValue = recordValue.toUpperCase();
              return recordValue.indexOf(filterValue) == -1;
            }
          };
          activeFilters.push(activeFilter);
        };
      };
    };
    return activeFilters;
  });

  // Go through each record in the list and find whether it was filtered from the previous step
  // If it is filtered, do not include in the new list that gets returned to the view

  self.filteredRecords = ko.computed(function() {
    var records = self.records();
    var filters = self.activeFilters();
    var filteredRecords = [];
    for (var rIndex = 0; rIndex < records.length; rIndex++) {
      var isIncluded = true;
      var record = records[rIndex];
      for(var fIndex = 0; fIndex < filters.length; fIndex++) {
        var filter = filters[fIndex];
        var isFiltered = filter.IsFiltered(filter.Filter, record);
        if(isFiltered) {
          isIncluded = false;
          break;
        };
    };
    if(isIncluded) {
      filteredRecords.push(record);
    };
  };
  return filteredRecords;
  }).extend({throttle: 200});

};

// Method to create ko.observableArray even if original input is not an array
var GetObservableArray = function(array) {
  if(typeof(array) == 'function'); {
    return array;
  };
  return ko.observableArray(array);
};

// Save all the points of interest

var places = [
  {
    name: 'Big Ben',
    lat: 51.500956,
    lon: -0.124582
  },
  {
    name: 'Tower Bridge',
    lat: 51.505650,
    lon: -0.075389
  },
  {
    name: 'Tower of London',
    lat: 51.508286,
    lon: -0.075949
  },
  {
    name: 'Westminister Abbey',
    lat: 51.499492,
    lon: -0.127342
  },
  {
    name: 'London Eye',
    lat: 51.503511,
    lon: -0.119564
}];

ko.applyBindings(new PlacePageModel(places));


// This initializes the Google Maps section, and puts markers for all the places
var initialize = function() {
  var mapCanvas = document.getElementById('map-canvas');
  // Co-ordinates of Central London on google map
  var myLatLng = new google.maps.LatLng(51.5067, -0.1428);
  var mapOptions = {
    center: myLatLng,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(mapCanvas,mapOptions);

  var contentString = 'You clicked this';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  // Place a marker on each point of interest
  var numPlaces = places.length;
  for (i = 0; i < numPlaces; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(places[i].lat, places[i].lon),
      map: map,
      title: places[i].name
    });
    // Add functionality to differentiate clicked vs unclicked markers
    google.maps.event.addListener(marker,'click',(function(markerCopy){
      return function(){
        infowindow.open(map, markerCopy);
      };
    })(marker));
  };
};

// When google maps fails to load, user will see this error message
try {
  google.maps.event.addDomListener(window,'load', initialize);
} catch(err) {
  document.getElementById("map-canvas").innerHTML = 'Sorry, cannot load google map';
};

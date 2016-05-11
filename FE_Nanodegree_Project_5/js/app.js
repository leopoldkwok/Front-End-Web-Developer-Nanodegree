// This is the Data Model, each data point has a name and latlong co-ordinates
"use strict";

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
  },
  {
    name: 'Imperial War Museum',
    lat: 51.495736,
    lon: -0.108609
  },
  {
    name: 'London Zoo',
    lat: 51.535501,
    lon: -0.153441
  },
  {
    name: 'The British Museum',
    lat: 51.519627,
    lon: -0.126946
  },
  {
    name: 'Royal Albert Hall',
    lat: 51.501243,
    lon: -0.177448
  },
  {
    name: 'Harrods',
    lat: 51.499434,
    lon: -0.163228
  },
  {
    name: 'Science Museum',
    lat: 51.497838,
    lon: -0.174536
  },
  {
    name: 'The Sherlocks Holmes Museum',
    lat: 51.523798,
    lon: -0.158559
  },
  {
    name: 'Madame Tussauds',
    lat: 51.522884,
    lon: -0.154935
  },
  {
    name: 'Natural History Museum',
    lat: 51.496761,
    lon: -0.176360},
  {
    name: 'Hyde Park',
    lat: 51.507233,
    lon: -0.166232
  },
  {
    name: 'Abbey Roads Studios',
    lat: 51.532008,
    lon: -0.178306
  },
  {
    name: 'St. Pauls Cathedral',
    lat: 51.514026,
    lon: -0.098372},
  {
    name: 'Tate Modern',
    lat: 51.507628,
    lon: -0.099272},
  {
    name: 'National Gallery',
    lat: 51.508953,
    lon: -0.128339
}];

var Place = function(data) {
  var self = this;
  self.name = data.name;
  self.lat = data.lat;
  self.lon = data.lon;
};

// This is the ViewModel

var PlacePageModel = function(data) {
  var self = this;
  this.placeList = ko.observableArray();

  data.forEach(function(aplace){
    self.placeList.push(new Place(aplace));
  });

// Load the Wikipedia articles when user searches for a place
this.loadData = function(place) {
  var $wikiElem = $('#wikipedia-links');

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
        var articleStr = articleList[i];
        var url = 'http://en.wikipedia.org/wiki/' + articleStr;
        $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
      }
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
  self.records = new GetObservableArray(records);

  self.currentPageRecords = ko.computed(function() {
    var records = self.records();
    var places = {};
    records.forEach(function(p) {
      places[p.name] = true;
    });
    updateMarkers(places);
    return self.records();
  }).extend({ throttle: 5});
};

// Compare values of search and place names and only return the matching ones as filtered

var Filter = function(filters, records) {
  var self = this;
  self.records = new GetObservableArray(records);
  self.filters = ko.observableArray(filters);
  // Compare the name of each place to the user input text string
  // If they match, mark the place as having passed the filter
  self.activeFilters = ko.computed(function() {
    var filters = self.filters();
    var activeFilters = [];
    var len = filters.length;
    for (var index = 0; index < len; index++) {
      var filter = filters[index];
      if(filter.Value) {
        var filterValue = filter.Value();
        if(filterValue && filterValue !== "") {
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
        }
      }
    }
    return activeFilters;
  });

  // Go through each record in the list and find whether it was filtered from the previous step
  // If it is filtered, do not include in the new list that gets returned to the view

  self.filteredRecords = ko.computed(function() {
    var records = self.records();
    var filters = self.activeFilters();
    var filteredRecords = [];
    var rlen = records.length;
    for (var rIndex = 0; rIndex < rlen; rIndex++) {
      var isIncluded = true;
      var record = records[rIndex];
      var flen = filters.length;
      for(var fIndex = 0; fIndex < flen; fIndex++) {
        var filter = filters[fIndex];
        var isFiltered = filter.IsFiltered(filter.Filter, record);
        if(isFiltered) {
          isIncluded = false;
          break;
        }
    }
    if(isIncluded) {
      filteredRecords.push(record);
    }
  }
  return filteredRecords;
  }).extend({throttle: 200});

};

// Method to create ko.observableArray even if original input is not an array
var GetObservableArray = function(array) {
  if(typeof(array) == 'function'); {
    return array;
  }
  return ko.observableArray(array);
};

// function to update markers with the places names
// If name is true, then setMap. If name is not in the set, then delete marker off the map

var updateMarkers = function(nameSet) {
  if(markers == null) {
    return;
  }
  var plen = places.length;
  for (var i = 0; i < plen; i++) {
    if(nameSet[places[i].name]) {
      if (markers[i].map == null) {
        markers[i].setMap(map);
      }
    } else {
      markers[i].setMap(null);
    }
  }
};

ko.applyBindings(new PlacePageModel(places));


// This initializes the Google Maps section, and puts markers for all the places
var map;
var markers = [];

var initialize = function() {
  var mapCanvas = document.getElementById('map-canvas');
  // Co-ordinates of Central London on google map
  var myLatLng = new google.maps.LatLng(51.5067, -0.1428);

  var mapOptions = {
    center: myLatLng,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(mapCanvas,mapOptions);

  var infowindow = new google.maps.InfoWindow({
    content: ''
  });

  // Place a marker on each point of interest
  var plen = places.length;
  for (var i = 0; i < plen; i++) {
    markers[i] = new google.maps.Marker({
      position: new google.maps.LatLng(places[i].lat, places[i].lon),
      map: map,
      animation: google.maps.Animation.DROP,
      title: places[i].name
    });

    // Add functionality to differentiate clicked vs unclicked markers
    google.maps.event.addListener(markers[i],'click',(function(markerCopy){

      return function(){

        infowindow.setContent(markerCopy.title);
        infowindow.open(map, markerCopy);
        markerCopy.setAnimation(google.maps.Animation.BOUNCE);

      };
    })(markers[i]));
  }
};

// plen.addListener('click', toggleBounce);

// function toggleBounce() {
//   if (marker.getAnimation() !== null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }



function initMap() {
  // this function will be called when the google maps api is loaded
  google.maps.event.addDomListener(window,'load', initialize);
}

function errorHandling() {
  // this function will be called when the google maps api is failed to load
  document.getElementById("map-canvas").innerHTML = 'Sorry, cannot load google map';
}


// List of places annd wikipedia articles collapsible so it is easier to view on mobile devices
$('#allPlaces').collapsible('default-open');
$('#allWikis').collapsible('default-open');
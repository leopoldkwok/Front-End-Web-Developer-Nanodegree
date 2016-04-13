// MODEL

var model = {
	currentCat: null,
	cats: [
		{
			clickCount : 0,
			name : 'Tabby',
			imgSrc : 'img/cat1.jpg'
		},
		{
			clickCount : 0,
			name : 'Tiger',
			imgSrc : 'img/cat2.jpg'
		},
		{
			clickCount : 0,
			name : 'Shadow',
			imgSrc : 'img/cat3.jpg'
		},
		{
			clickCount : 0,
			name : 'Sleepy',
			imgSrc : 'img/cat4.jpg'
		},
		{
			clickCount : 0,
			name : 'Scaredy',
			imgSrc : 'img/cat5.jpg'
		}
	]
};

// 	adminMode: false,
// 	adminPanelForm : {
// 		inputs : [
// 					{
// 						label : "Name",
// 						type : 'text',
// 						id : 'name-input',
// 					},
// 					{
// 						label : 'Image URL',
// 						type : 'text',
// 						id : 'image-input'
// 					},
// 					{
// 						label : 'Click Count',
// 						type : 'text',
// 						id : 'click-count-input'
// 					}
// 				],
// 		buttons : [
// 					{
// 						type : 'submit',
// 						value : 'Cancel',
// 						id : 'admin-submit'
// 					}
// 				]
// 	}
// };

// Octopus

var octopus = {

	init: function() {
		// Set our current cat to the first one in the list
		model.currentCat = model.cats[0];

		// Initialize our views
		catListView.init();
		catView.init();
		adminView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	// Set the currently-selected cat to the object passed in
	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	// increments the counter for the currently-selected cat
	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();
	},

	changeCatDetails: function(newCatData) {
		var cats = octopus.getCats();
		var currCat = octopus.getCurrentCat();
		console.log(currCat);
		for(var i = 0; i < cats.length; i++) {
			if(cats[i].name === currCat.name) {
				cats[i].clickCount = newCatData.clickCount;
				cats[i].name = newCatData.name;
				cats[i].imgSrc = newCatData.imgSrc;
				octopus.setCurrentCat(newCatData);
				catListView.render();
				catView.render();
				adminView.render(false);
			}
		}
	},

	hideAdminForm: function() {
		adminView.render(false);
	}
};

// VIEW

var catView = {

	init: function() {
		// store pointers to our DOM elements for easy access later
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');

		// on click, increment the current cat's counter
		this.catImageElem.addEventListener('click', function() {
			octopus.incrementCounter();
			octopus.hideAdminForm();
		});

		// render this view (update the DOM elements with the right values)
		this.render();

	},

	render: function() {
		// update the DOM elements with values from the current cat
		var currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
	}
};

var catListView = {

	init: function() {
		// Store the DOM element for easy access later
		this.catListElem = document.getElementById('cat-list');

		// render this view(update the DOM elements with the right values)
		this.render();
	},

	render: function() {
		var cat, elem, i;
		// get the cats we'll be rendering from the octopus
		var cats = octopus.getCats();

		// empty the cat list
		this.catListElem.innerHTML = '';

		// loop over the cats
		for (i = 0; i < cats.length; i++) {
			// this is the cat we're currently looping over
			cat = cats[i];

			// make a new cat list item and set its text
			elem = document.createElement('li');
			elem.textContent = cat.name;

			// on click, setCurrentCat and render the catView
			// (this uses our closure-in-a-loop trick to connect the value
			// of the cat variable to the click event function)
			elem.addEventListener('click', (function(catCopy) {
				return function() {
					octopus.setCurrentCat(catCopy);
					catView.render();
					octopus.hideAdminForm();
				};
			})(cat));

			// finally, add the element to the list
			this.catListElem.appendChild(elem);
		}
	}
};

var adminView = {
		init : function() {
			this.adminDiv = document.getElementById('admin');
			this.adminBtn = document.getElementById("admin-btn");
			this.adminForm = document.getElementById("admin-form");
			this.adminFormName = this.adminForm.name;
			this.adminFormImgUrl = this.adminForm.imgUrl;
			this.adminFormClicks = this.adminForm.clicks;
			console.log(this.adminBtn);
			this.adminBtn.addEventListener('click', function() {
				adminView.render(true);
			});
		},

		render : function(displayForm) {
			var currentCat = octopus.getCurrentCat();
			if(displayForm == false) {
				this.adminForm.className = 'hidden';
			}
			else {
				this.adminForm.className = 'display';
				this.adminFormName.value = currentCat.name;
				this.adminFormImgUrl.value = currentCat.imgSrc;
				this.adminFormClicks.value = currentCat.clickCount;
				this.submitBtn = document.getElementById("submit");
				this.cancelBtn = document.getElementById("cancel");
				console.log(this.submitBtn);
				this.submitBtn.addEventListener('click', function(event){
					event.preventDefault();
					var newName = document.getElementById("admin-form").name.value;
					var newUrl = document.getElementById("admin-form").imgUrl.value;
					var newClicks = document.getElementById("admin-form").clicks.value;
					var newCatData = {
						clickCount : newClicks,
						imgSrc : newUrl,
						name : newName
					};
					console.log(newCatData);
					octopus.changeCatDetails(newCatData);
				});

			}
		}

};

// make it go!
octopus.init();
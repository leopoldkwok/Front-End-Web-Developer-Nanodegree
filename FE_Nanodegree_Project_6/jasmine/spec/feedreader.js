/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO#1: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it ('should have a URL defined for each feed', function() {
          allFeeds.forEach(function(feed) {
            // Check that a URL for each feed is defined
            expect(feed.url).toBeDefined();
            // Check that the URL is not empty
            expect(feed.url.length).not.toBe(0);
          });
        });




        /* TODO#2: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('should have a name defined and not be empty', function() {
          allFeeds.forEach(function(feed) {
            // Check that a name is defined for each feed
            expect(feed.name).toBeDefined();
            // Check that the name is not empty
            expect(feed.name.length).not.toBe(0);
          });
         });
    });


        /* TODO#3: Write a new test suite named "The menu" */
        describe('The menu', function() {
        // declare variables
        var body;
        beforeEach(function() {
          body = $('body');
        });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('should be hiddeny by default', function() {
          // Ensure the menu is hiddent by defauly
          expect(body.hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

        it('changes visibility when menu icon is clicked', function() {
          var menuIcon = $('.menu-icon-link');
          // Check if triggering click displays the menu
          menuIcon.trigger('click');
          expect(body.hasClass('menu-hidden')).toBe(false);
          // Check if triggering click hides the menu
          menuIcon.trigger('click');
          expect(body.hasClass('menu-hidden')).toBe(true);
        })

    });
    /* TODO#4: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
          // load the initial feed with call back
          loadFeed(0, function() {
            // call done() to trigger the spec
            done();
          });
        });

        it('should have at least a single feed entry element after load', function(done) {
          // Check that length of entries is more than 0
          expect($('.feed .entry').length).toBeGreaterThan(0);
          // Call done() to finsh the spec
          done();
        });

    });

    /* TODO#5: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {
      // Declare two variables to contain the content of the first and second feed
      var firstFeed,
          secondFeed;

      beforeEach(function(done) {
        // Load the first feed
        loadFeed(0, function() {
          // Get the content of the first h2 element
          firstFeed = $('.feed').find('h2').text();
          done();
        });
      });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it ('changes the content inside .feed container', function(done) {
          // Load the first second feeds
          loadFeed(1, function() {
            // Get the content of the first h2 element
            secondFeed = $('.feed').find('h2').text();

            // Compare firstFeed with secondFeed
            expect(firstFeed).not.toEqual(secondFeed);
            done();
          });
        });
    });
}());

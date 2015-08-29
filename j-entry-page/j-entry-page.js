if (Meteor.isClient) {
/*  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });*/

// Trying to fix top nav behavior
/*  Template.topnav.events({
    "click .nav a":function(event, template){
      console.log("clicked a thing");
      template.$(".active").removeClass(active);                // Does not work from here
      event.currentTarget.addClass("active");
    }
  });*/
}

if (Meteor.isServer) {
/*  Meteor.startup(function () {
    // code to run on server at startup
  });*/
}

Router.route("/", {
    template: "about"
});
Router.route("/about");
Router.route("/photos");

// $(".nav a").on("click", function(){
//    $(".nav").find(".active").removeClass("active");
//    $(this).parent().addClass("active");
// });
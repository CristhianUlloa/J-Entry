if (Meteor.isClient) {

  Template.topnav.events({
    "click .nav a":function(event, template){
      $(".nav").find(".active").removeClass("active");
      $(event.currentTarget).parent().addClass("active");
      $('.navbar-collapse').collapse('hide');
    },

    "click .navbar-brand":function(event, template){
      //console.log("clicked main");
      $(".nav").find(".active").removeClass("active");
      //$(".nav li")[0].addClass("active");                    // Does not work; should highlight about tab b/c is same.
      $('.navbar-collapse').collapse('hide');
    },
  })

  // Template.residents.events({
  //   "click .resident_photo img":function(event, template) {
  //     var parent = $(event.currentTarget).parent("div").parent("div");
  //     var index = parent.parent("li").index();
  //     var children = parent.children();
  //     var resInfo = children[3];
  //     var htmlCode = $(resInfo).html();
  //     var html = "";
  //     html += htmlCode;
  //     html += '<div style="display:none;">';
  //     html += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';
  //     html += '<a class="controls next" href="'+ (index+2) + '">next &raquo;</a>';
  //     html += '</div>';
  //     $('#resident-modal').modal();
  //     $("#resident-modal").on("shown.bs.modal", function(){
  //       $("#resident-modal .modal-body").html(html);
  //     });
  //     $("#resident-modal").on("hidden.bs.modal", function(){
  //       $("#resident-modal .modal-body").html("");
  //     });
  //   }

    // "keydown":function(event, template){
    //   if (event.keyCode == 37){ /*left arrow */
    //     var something = $(".previous");
    //     console.log('.previous');
    //     console.log(something);

    //     var doc = $(".previous")[0].ownerDocument; //this is undefind the second time around...
    //     console.log('doc');
    //     console.log(doc);

    //     var residentGallery = doc.getElementById("bio-gallery");
    //     console.log('residentGallery');
    //     console.log(residentGallery);

    //     var href = $(".previous")[0].href;
    //     var index = href.substr(href.lastIndexOf('/') + 1);
    //     console.log('index: ' + index);

    //     console.log(residentGallery.children);
    //     var prevResident = residentGallery.children[index-1].children[0].children[3];
    //     console.log('prevResident');
    //     console.log(prevResident);

    //     var src = $("ul.row li:nth-child("+ index +") img")[0].src;
    //     $(".modal-body img").attr("src", src);

    //     console.log('setting new html');
    //     $(".modal-body").html(prevResident.innerHTML); //this works!

    //     var newPrevIndex = Math.max(1, parseInt(index) - 1);
    //     var newNextIndex = Math.min($("#bio-gallery li").length, parseInt(newPrevIndex) + 2);
    //     console.log('index: ' + index + ', prev: ' + newPrevIndex + ', next: ' + newNextIndex); 

    //     $(".previous").attr('href', newPrevIndex);
    //     $('.next').attr('href', newNextIndex);
    //   }
    //   else if (event.keyCode == 39){ /*right arrow */
    //     var something = $(".next");
    //     console.log('.next');
    //     console.log(something);


    //     var doc = $(".next")[0].ownerDocument;
    //     console.log('doc');
    //     console.log(doc);

    //     var residentGallery = doc.getElementById("bio-gallery");
    //     console.log('residentGallery');
    //     console.log(residentGallery);

    //     var href = $(".next")[0].href;
    //     var index = href.substr(href.lastIndexOf('/') + 1);
    //     console.log('index: ' + index);

    //     console.log(residentGallery.children);
    //     console.log(residentGallery.children[index+1]);
    //     console.log(residentGallery.children[index+1].children);
    //     console.log(residentGallery.children[index+1].children[0].children);

    //     var nextResident = residentGallery.children[index+1].children[0].children[3];
    //     console.log('nextResident');
    //     console.log(nextResident);

    //     var src = $("ul.row li:nth-child("+ index +") img")[0].src;
    //     $(".modal-body img").attr("src", src);

    //     $(".modal-body").html(nextResident.innerHTML); //this works!

    //     var newPrevIndex = Math.max(1, parseInt(index) - 1);
    //     var newNextIndex = Math.min($("#bio-gallery li").length, parseInt(newPrevIndex) + 2);

    //     $(".previous").attr('href', newPrevIndex);
    //     $('.next').attr('href', newNextIndex);
    //   }
    // }
    // 
  // })
  
  Template.photos.events({
    "click .gallery-list li img":function(event, template){
      var src = event.currentTarget.src;
      var img = '<img src="' + src + '" class="img-responsive"/>';

      var index = $(event.currentTarget).parent("li").index();
      var html = "";
      html += img;
      html += '<div style="display:none;">';
      html += '<a class="controls previous" href="' + (index) + '">&laquo; prev</a>';
      html += '<a class="controls next" href="'+ (index+2) + '">next &raquo;</a>';
      html += '</div>';

      $("#photo-modal").modal();
      $("#photo-modal").on("shown.bs.modal", function(){
        $("#photo-modal .modal-body").html(html);
      });
      $("#photo-modal").on("hidden.bs.modal", function(){
        $("#photo-modal .modal-body").html("");
      });
    },

    "keydown":function(event, template){
      if (event.keyCode == 37){ /*left arrow */
        var href = $(".previous")[0].href;
        var index = href.substr(href.lastIndexOf('/') + 1);
        var src = $("ul.row li:nth-child("+ index +") img")[0].src;
        $(".modal-body img").attr("src", src);

        var newPrevIndex = Math.max(1, parseInt(index) - 1);
        var newNextIndex = Math.min($("#main-gallery li").length, parseInt(newPrevIndex) + 2);

        $(".previous").attr('href', newPrevIndex);
        $('.next').attr('href', newNextIndex);
      }
      else if (event.keyCode == 39){ /*right arrow */
        var href = $(".next")[0].href;
        var index = href.substr(href.lastIndexOf('/') + 1);
        var src = $("ul.row li:nth-child("+ index +") img")[0].src;
        $(".modal-body img").attr("src", src);

        var newPrevIndex = Math.max(1, parseInt(index) - 1);
        var newNextIndex = Math.min($("#main-gallery li").length, parseInt(newPrevIndex) + 2);

        $(".previous").attr('href', newPrevIndex);
        $('.next').attr('href', newNextIndex);
      }
    }
  })
}

if (Meteor.isServer) {
/*  Meteor.startup(function () {
    // code to run on server at startup
  });*/
}



// Routes for site navigation
// This is how routing works with Iron Router: http://meteortips.com/second-meteor-tutorial/iron-router-part-1/
Router.route("/", {
    template: "about"
});
Router.route("/about");
Router.route("/residents");
Router.route("/traditions");
Router.route("/photos");
// Router.route("/videos");

// Hooks to execute before loading content when a new route is used.
// To learn, see: http://www.manuel-schoebel.com/blog/meteorjs-iron-router-filters-before-and-after-hooks
var IR_BeforeHooks = {
  // Scroll to the top of the page
  // Use: global
  scrollUp: function() {
      $('body,html').scrollTop(0);
      this.next();
  },
}
// Scroll to the top any time a new route is used.
Router.onBeforeAction(IR_BeforeHooks.scrollUp);



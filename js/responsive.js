(function($) {
	"use strict";

	if($("html").hasClass("ie")){
		return true;
	}else{
		$(document).ready(function(e) { mediaQuery(); });
		$(window).resize(function(e) { mediaQuery(); });
	}

})(jQuery);

function mediaQuery(){
	function mobileView(){
		if($("html").hasClass("mobile-v")){
			if($("#home-page #mobile-clock *").length == 0){
				$("#regular-clock #countdown_dashboard").prependTo( $("#home-page #mobile-clock") );
			}
			else{
				return true;
			}

			if($("#home-page #mobile-box *").length == 0){
				$("#reguar-box > *").prependTo( $("#home-page #mobile-box") );
			}
			else{
				return true;
			}
		}
		else{
			$("#home-page #mobile-clock #countdown_dashboard").prependTo( $("#regular-clock") );
			$("#home-page #mobile-box > *").prependTo( $("#reguar-box") );
		}
	}
	enquire.register("only screen and (min-width: 1200px)", {
		match : function() {
			
		},
		unmatch : function() {
			
		}
	}).register("only screen and (min-width: 980px) and (max-width: 1199px)", {
		match : function() {
			
		},
		unmatch : function() {
			
		}
	}).register("only screen and (min-width: 768px) and (max-width: 979px)", {
		match : function() {
			$("html").addClass("mobile-v");
			mobileView();
		},
		unmatch : function() {
			$("html").removeClass("mobile-v");
			mobileView();
		}
	}).register("only screen and (min-width: 600px) and (max-width: 767px)", {
		match : function() {
			$("html").addClass("mobile-v");
			mobileView();
		},
		unmatch : function() {
			$("html").removeClass("mobile-v");
			mobileView();
		}
	}).register("only screen and (min-width: 480px) and (max-width: 599px)", {
		match : function() {
			$("html").addClass("mobile-v");
			mobileView();
		},
		unmatch : function() {
			$("html").removeClass("mobile-v");
			mobileView();
		}
	}).register("only screen and (min-width: 320px) and (max-width: 479px)", {
		match : function() {
			$("html").addClass("mobile-v");
			mobileView();
		},
		unmatch : function() {
			$("html").removeClass("mobile-v");
			mobileView();
		}
	});
}

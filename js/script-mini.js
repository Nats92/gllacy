"use strict";function addHandler(e,o){e.addEventListener("mouseenter",function(){o.classList.remove("hidden"),indicator.classList.add("leave-indicate"),indicator.addEventListener("mouseover",function e(){o.classList.add("hidden"),indicator.classList.remove("leave-indicate"),indicator.removeEventListener("mouseover",e)})})}function slideSwitch(e,o,t,n,r,i,d){e.addEventListener("click",function(){t.classList.remove("active"),n.classList.remove("active"),e.classList.add("active"),o.classList.remove("hidden"),r.classList.add("hidden"),i.classList.add("hidden"),body.style.backgroundColor=d})}var browString=navigator.appVersion,ie=browString.indexOf("Trident"),userInterface=document.querySelector(".user-interface"),indicator=document.querySelector(".hover-indicator"),body=document.querySelector("body");if(ie>0){var searchIcon=userInterface.querySelector(".link-icon-container.search"),modalSearch=userInterface.querySelector(".modal-search"),logInIcon=userInterface.querySelector(".link-icon-container.login"),modalLogIn=userInterface.querySelector(".modal-log-in"),cartIcon=userInterface.querySelector(".link-icon-container.cart"),modalOrder=userInterface.querySelector(".modal-order");addHandler(searchIcon,modalSearch),addHandler(logInIcon,modalLogIn),addHandler(cartIcon,modalOrder);var menuCatalog=document.querySelector(".drop-down-contains"),dropDown=menuCatalog.querySelector(".drop-down-menu-wrap");menuCatalog.addEventListener("mouseenter",function(){dropDown.classList.remove("hidden"),menuCatalog.addEventListener("mouseleave",function(){dropDown.classList.add("hidden")})});var controlButton1=document.querySelector(".slider-controls button:first-child"),controlButton2=document.querySelector(".slider-controls button:nth-child(2)"),controlButton3=document.querySelector(".slider-controls button:nth-child(3)"),slide1=document.querySelector(".slider-item:first-child"),slide2=document.querySelector(".slider-item:nth-child(2)"),slide3=document.querySelector(".slider-item:nth-child(3)");slideSwitch(controlButton1,slide1,controlButton2,controlButton3,slide2,slide3,"#849d8f"),slideSwitch(controlButton2,slide2,controlButton1,controlButton3,slide1,slide3,"#8996a6"),slideSwitch(controlButton3,slide3,controlButton1,controlButton2,slide1,slide2,"#9d8b84")}else{var modalCollection=userInterface.querySelectorAll(".modal"),modals=Array.from(modalCollection),linkIconCollection=userInterface.querySelectorAll(".link-icon-container"),linkIcons=Array.from(linkIconCollection);linkIcons.forEach(function(e){e.addEventListener("mouseenter",function(e){var o=e.target.nextElementSibling;modals.forEach(function(e){e.classList.add("hidden")}),o.classList.remove("hidden"),indicator.classList.add("leave-indicate"),indicator.addEventListener("mouseover",function e(){o.classList.add("hidden"),indicator.classList.remove("leave-indicate"),indicator.removeEventListener("mouseover",e)})})});var siteMenuItemCollection=document.querySelectorAll(".site-menu-item"),siteMenuItems=Array.from(siteMenuItemCollection);siteMenuItems.forEach(function(e){e.addEventListener("mouseenter",function(){var o=e.querySelector(".drop-down-menu-wrap");o&&(o.classList.remove("hidden"),e.addEventListener("mouseleave",function t(){o.classList.add("hidden"),e.removeEventListener("mouseleave",t)}))})});var sliderSection=document.querySelector(".slider"),slideCollection=sliderSection.querySelectorAll(".slider-item"),slides=Array.from(slideCollection),sliderControlsCollection=sliderSection.querySelectorAll("button"),sliderControls=Array.from(sliderControlsCollection);sliderControls[0].addEventListener("click",function(){sliderControls.forEach(function(e){e.classList.remove("active")}),sliderControls[0].classList.add("active"),body.style.backgroundColor="#849d8f",slides.forEach(function(e){e.classList.add("hidden")}),slides[0].classList.remove("hidden")}),sliderControls[1].addEventListener("click",function(){sliderControls.forEach(function(e){e.classList.remove("active")}),sliderControls[1].classList.add("active"),body.style.backgroundColor="#8996a6",slides.forEach(function(e){e.classList.add("hidden")}),slides[1].classList.remove("hidden")}),sliderControls[2].addEventListener("click",function(){sliderControls.forEach(function(e){e.classList.remove("active")}),sliderControls[2].classList.add("active"),body.style.backgroundColor="#9d8b84",slides.forEach(function(e){e.classList.add("hidden")}),slides[2].classList.remove("hidden")})}var showFeedbackForm=document.querySelector(".show-feedback-form"),feedbackFormOverlay=document.querySelector(".feedback-form-overlay"),feedbackForm=document.querySelector(".feedback-form"),closeFeedback=document.querySelector(".close-form");showFeedbackForm.addEventListener("click",function(e){e.preventDefault(),feedbackFormOverlay.classList.remove("hidden"),feedbackForm.classList.add("animation-grow"),feedbackFormOverlay.classList.add("animation-appear"),closeFeedback.addEventListener("click",function e(o){o.preventDefault(),feedbackFormOverlay.classList.add("hidden"),closeFeedback.removeEventListener("click",e)})});

function fusionInitStickyContainers(){"function"==typeof jQuery.fn.stick_in_parent&&jQuery(".fusion-sticky-container").each(function(){fusionInitSticky(jQuery(this))})}function fusionInitSticky(e){var t=void 0===e.attr("data-transition-offset")?0:parseFloat(e.attr("data-transition-offset")),i=void 0===e.attr("data-sticky-offset")?0:e.attr("data-sticky-offset"),n=void 0!==e.attr("data-scroll-offset")&&parseFloat(e.attr("data-scroll-offset")),o={sticky_class:"fusion-container-stuck",bottoming:!0,offset_top:i,transition_offset:t,clone:!1},s="data-sticky-medium-visibility";jQuery("body").hasClass("fusion-disable-sticky")||jQuery("body").hasClass("fusion-builder-ui-wireframe")?e.data("sticky_kit")&&e.trigger("sticky_kit:detach"):"object"!=typeof fusion||"function"!=typeof fusion.isLarge||(fusion.isLarge()?s="data-sticky-large-visibility":fusion.isSmall()&&(s="data-sticky-small-visibility"),void 0!==e.attr(s)&&e.attr(s))?e.data("sticky_kit")||(n&&(o.scroll_transition=n),e.closest(".fusion-tb-header").length||e.closest(".fusion-tb-page-title-bar").length?(o.parent="#wrapper",o.bottoming=!1):e.closest(".fusion-content-tb").length?o.parent=".fusion-content-tb":e.closest(".fusion-builder-live-editor").length?o.parent="#fusion_builder_container":e.parent().parent(".post-content").length&&(o.parent=".post-content"),"string"==typeof e.attr("data-sticky-parent")&&(o.parent=e.attr("data-sticky-parent")),"string"==typeof e.attr("data-sticky-bottoming")&&(o.bottoming=e.attr("data-sticky-bottoming")),jQuery("body").hasClass("fusion-builder-live")||void 0===e.attr("data-sticky-height-transition")||(o.clone=!0),e.stick_in_parent(o)):e.data("sticky_kit")&&e.trigger("sticky_kit:detach")}function fusionGetStickyOffset(){var e=0,t=jQuery(".fusion-container-stuck");return!!t.length&&(t.each(function(){var t=jQuery(this),i=t.position().top+t.outerHeight(!0);i>e&&(e=i)}),e)}function initScrollingSections(){var e,t,i=jQuery("#content").find(".fusion-scroll-section"),n=(Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0))+fusion.getAdminbarHeight();window.lastYPosition=0,window.scrollDisabled=!1,i.length&&(jQuery("#content").find(".non-hundred-percent-height-scrolling").length||1!==i.length||jQuery.trim(jQuery("#sliders-container").html())||(i.addClass("active"),i.find(".fusion-scroll-section-nav li:first a").addClass("active"),e=!0),i.each(function(){1<jQuery(this).children("div").length&&(t=n?"calc("+(100*jQuery(this).children("div").length+50)+"vh - "+n+"px)":100*jQuery(this).children("div").length+50+"vh",jQuery(this).css("height",t),n&&(jQuery(this).find(".hundred-percent-height-scrolling").css("height","calc(100vh - "+n+"px)"),jQuery(this).find(".fusion-scroll-section-nav").css("top","calc(50% + "+n/2+"px)")))}),window.lastYPosition=jQuery(window).scrollTop(),jQuery(window).on("scroll",function(){var t=jQuery(window).scrollTop(),i=window.lastYPosition;window.scrollDisabled||jQuery(".fusion-scroll-section").each(function(){1<jQuery(this).children("div").length&&!jQuery(this).hasClass("fusion-scroll-section-mobile-disabled")&&jQuery(this).fusionPositionScrollSectionElements(t,e,i)})}),jQuery(".fusion-scroll-section-link").on("click",function(e){var t=jQuery(this).parents(".fusion-scroll-section"),i=getScrollSectionPositionValues(t),n=t.find(".fusion-scroll-section-element"),o=n.length,s=parseInt(jQuery(this).parents(".fusion-scroll-section-nav").find(".fusion-scroll-section-link.active").data("element"),10),c=parseInt(jQuery(this).data("element"),10),r=Math.abs(c-s);e.preventDefault(),0<r&&(t.data("clicked",c),"fixed"!==n.last().css("position")&&n.css({position:"fixed",top:i.sectionTopOffset,left:i.sectionLeftOffset,padding:"0",width:i.sectionWidth}),1===c?jQuery(window).scrollTop(i.sectionTop+1):o===c?jQuery(window).scrollTop(i.sectionBottom-i.viewportHeight-1):c>s?jQuery(window).scrollTop(i.sectionTop+i.viewportHeight*c-1):jQuery(window).scrollTop(i.sectionTop+i.viewportHeight*(c-1)+1))})),jQuery(".hundred-percent-height").length&&(setCorrectResizeValuesForScrollSections(),jQuery(window).on("resize",function(){setCorrectResizeValuesForScrollSections()}))}function setCorrectResizeValuesForScrollSections(){var e=jQuery("#content").find(".fusion-scroll-section"),t=0,i=0,n=fusion.getAdminbarHeight();e.length&&(jQuery(".fusion-scroll-section.active").find(".fusion-scroll-section-element").css({left:jQuery("#content").offset().left}),jQuery(".fusion-scroll-section").find(".fusion-scroll-section-element").css({width:jQuery("#content").width()}),0==fusionContainerVars.container_hundred_percent_height_mobile&&(Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")?(jQuery(".fusion-scroll-section").removeClass("active").addClass("fusion-scroll-section-mobile-disabled"),jQuery(".fusion-scroll-section").attr("style",""),jQuery(".fusion-scroll-section").find(".fusion-scroll-section-element").attr("style",""),jQuery(".fusion-scroll-section").find(".hundred-percent-height-scrolling").css("height","auto"),jQuery(".fusion-scroll-section").find(".fusion-fullwidth-center-content").css("height","auto")):jQuery(".fusion-scroll-section").hasClass("fusion-scroll-section-mobile-disabled")&&(jQuery(".fusion-scroll-section").find(".fusion-fullwidth-center-content").css("height",""),Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight||(t=getStickyHeaderHeight(!0)),i=t+n,e.each(function(){1<jQuery(this).children("div").length&&(jQuery(this).css("height",100*jQuery(this).children("div").length+50+"vh"),jQuery(this).find(".hundred-percent-height-scrolling").css("height","calc(100vh - "+i+"px)"))}),scrollToCurrentScrollSection()))),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").length&&(Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight||(t=getStickyHeaderHeight(!0)),i=t+n,0==fusionContainerVars.container_hundred_percent_height_mobile&&(Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")?(jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").css("height","auto"),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").find(".fusion-fullwidth-center-content").css("height","auto")):(jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").css("height","calc(100vh - "+i+"px)"),jQuery(".hundred-percent-height.non-hundred-percent-height-scrolling").find(".fusion-fullwidth-center-content").css("height",""))))}function scrollToCurrentScrollSection(){var e=Math.ceil(jQuery(window).scrollTop()),t=jQuery(window).height(),i=Math.floor(e+t),n=Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),o=fusion.getAdminbarHeight();e+=n+o,jQuery(".fusion-page-load-link").hasClass("fusion-page.load-scroll-section-link")||jQuery(".fusion-scroll-section").each(function(){var t=jQuery(this),n=Math.ceil(t.offset().top),o=Math.ceil(t.outerHeight()),s=Math.floor(n+o),c=jQuery("html").hasClass("ua-edge")||jQuery("html").hasClass("ua-ie")?"body":"html";n<=e&&s>=i?(t.addClass("active"),jQuery(c).animate({scrollTop:n-50},{duration:50,easing:"easeInExpo",complete:function(){jQuery(c).animate({scrollTop:n},{duration:50,easing:"easeOutExpo",complete:function(){Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")||jQuery(".fusion-scroll-section").removeClass("fusion-scroll-section-mobile-disabled")}})}})):Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")||jQuery(".fusion-scroll-section").removeClass("fusion-scroll-section-mobile-disabled")})}function getScrollSectionPositionValues(e){var t={};return t.sectionTop=Math.ceil(e.offset().top),t.sectionHeight=Math.ceil(e.outerHeight()),t.sectionBottom=Math.floor(t.sectionTop+t.sectionHeight),t.viewportTop=Math.ceil(jQuery(window).scrollTop()),t.viewportHeight=jQuery(window).height(),t.viewportBottom=Math.floor(t.viewportTop+t.viewportHeight),t.sectionWidth=jQuery("#content").width(),t.sectionTopOffset=fusion.getAdminbarHeight(),t.sectionLeftOffset=jQuery("#content").offset().left,t.sectionTopOffset+=Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),t.viewportTop+=t.sectionTopOffset,t}jQuery(window).on("load fusion-element-render-fusion_builder_container resize",function(e,t){var i=void 0!==t?jQuery('div[data-cid="'+t+'"]').find(".fullwidth-faded"):jQuery(".fullwidth-faded"),n=void 0!==t?jQuery('div[data-cid="'+t+'"]').find(".hundred-percent-height"):jQuery(".hundred-percent-height"),o=Number(fusionContainerVars.is_sticky_header_transparent)||"function"!=typeof getStickyHeaderHeight?0:getStickyHeaderHeight(!0),s=fusion.getAdminbarHeight(),c=jQuery("body").hasClass("fusion-builder-live")&&!jQuery("body").hasClass("fusion-builder-preview-mode"),r=o+s;i.fusionScroller({type:"fading_blur"}),n.css("min-height","").css("height",""),n.find(".fusion-fullwidth-center-content").css("min-height",""),0==fusionContainerVars.container_hundred_percent_height_mobile&&Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")?(n.css("height","auto"),c&&(n.css("min-height","0"),n.find(".fusion-fullwidth-center-content").css("min-height","0"))):(n.css("height","calc(100vh - "+r+"px)"),c&&(n.css("min-height","calc(100vh - "+r+"px)"),n.find(".fusion-fullwidth-center-content").css("min-height","calc(100vh - "+r+"px)")))}),jQuery(document).ready(function(){initScrollingSections(),fusionInitStickyContainers(),Modernizr.mq("only screen and (max-width: "+fusionContainerVars.content_break_point+"px)")&&jQuery(".fullwidth-faded").each(function(){var e=jQuery(this).css("background-image"),t=jQuery(this).css("background-color");jQuery(this).parent().css("background-image",e),jQuery(this).parent().css("background-color",t),jQuery(this).remove()})}),jQuery(window).on("load",function(){jQuery("#content").find(".fusion-scroll-section").length&&void 0===jQuery(".fusion-page-load-link").attr("href")&&setTimeout(function(){scrollToCurrentScrollSection()},400)}),jQuery(window).on("fusion-reinit-sticky",function(e,t){var i=void 0!==t&&jQuery('div[data-cid="'+t+'"] .fusion-fullwidth');i&&i.length&&(i.trigger("sticky_kit:detach"),fusionInitSticky(i))}),jQuery(window).on("fusion-sticky-header-reinit fusion-resize-horizontal fusion-wireframe-toggle",function(){fusionInitStickyContainers()}),function(e){"use strict";var t="down";function i(){var e=window.pageYOffset||document.documentElement.scrollTop,t=window.pageXOffset||document.documentElement.scrollLeft;window.onscroll=function(){window.scrollTo(t,e)},window.scrollDisabled=!0}function n(){window.onscroll=function(){},window.scrollDisabled=!1}e.fn.fusionPositionScrollSectionElements=function(o,s,c){var r=e(this),l=r.find(".fusion-scroll-section-element").length,a=0,d=getScrollSectionPositionValues(r);(s=s||!1)||(d.sectionTop<=d.viewportTop&&d.sectionBottom>=d.viewportBottom?r.addClass("active"):r.removeClass("active")),c<o?(r.data("clicked")?(a=r.data("clicked"),r.removeData("clicked"),r.removeAttr("data-clicked")):a=(a=r.find(".fusion-scroll-section-element.active")).length?(a=a.data("element")+1)>l?l:a:1,d.sectionTop<=d.viewportTop&&d.sectionTop+d.viewportHeight>d.viewportTop?(r.find(".fusion-scroll-section-element").removeClass("active"),r.children(":nth-child(1)").addClass("active"),r.find(".fusion-scroll-section-nav a").removeClass("active"),r.find('.fusion-scroll-section-nav a[data-element="'+r.children(":nth-child(1)").data("element")+'"] ').addClass("active"),r.find(".fusion-scroll-section-element").css({position:"fixed",top:d.sectionTopOffset,left:d.sectionLeftOffset,padding:"0",width:d.sectionWidth}),r.children(":nth-child(1)").css("display","block"),window.scrollDisabled=!0,e(window).scrollTop(d.sectionTop+d.viewportHeight-1),i(),setTimeout(function(){n()},fusionContainerVars.hundred_percent_scroll_sensitivity)):d.sectionBottom<=d.viewportBottom&&"absolute"!==r.find(".fusion-scroll-section-element").last().css("position")?(r.find(".fusion-scroll-section-element").removeClass("active"),r.find(".fusion-scroll-section-element").last().addClass("active"),r.find(".fusion-scroll-section-element").css("position","absolute"),r.find(".fusion-scroll-section-element").last().css({top:"auto",left:"0",bottom:"0",padding:""}),r.find(".fusion-scroll-section-nav a").removeClass("active"),r.find(".fusion-scroll-section-nav a").last().addClass("active")):1<a&&"fixed"===r.find(".fusion-scroll-section-element").last().css("position")&&(!r.children(":nth-child("+a+")").hasClass("active")||"up"===t)&&(r.find(".fusion-scroll-section-element").removeClass("active"),r.children(":nth-child("+a+")").addClass("active"),r.find(".fusion-scroll-section-nav a").removeClass("active"),r.find('.fusion-scroll-section-nav a[data-element="'+r.children(":nth-child("+a+")").data("element")+'"] ').addClass("active"),window.scrollDisabled=!0,a<l?e(window).scrollTop(d.sectionTop+d.viewportHeight*a-1):e(window).scrollTop(d.sectionBottom-d.viewportHeight),i(),setTimeout(function(){n()},fusionContainerVars.hundred_percent_scroll_sensitivity)),t="down"):c>o&&(r.data("clicked")?(a=r.data("clicked"),r.removeData("clicked"),r.removeAttr("data-clicked")):a=(a=r.find(".fusion-scroll-section-element.active")).length?1>(a=a.data("element")-1)?1:a:0,d.sectionBottom>=d.viewportBottom&&"absolute"===r.find(".fusion-scroll-section-element").last().css("position")?(r.find(".fusion-scroll-section-element").removeClass("active"),r.find(".fusion-scroll-section-element").last().addClass("active"),r.find(".fusion-scroll-section-nav a").removeClass("active"),r.find('.fusion-scroll-section-nav a[data-element="'+r.find(".fusion-scroll-section-element").last().data("element")+'"] ').addClass("active"),r.find(".fusion-scroll-section-element").css({position:"fixed",top:d.sectionTopOffset,left:d.sectionLeftOffset,padding:"0",width:d.sectionWidth}),r.find(".fusion-scroll-section-element").last().css("display","block"),window.scrollDisabled=!0,e(window).scrollTop(d.sectionTop+d.viewportHeight*(l-1)),i(),setTimeout(function(){n()},fusionContainerVars.hundred_percent_scroll_sensitivity)):(d.sectionTop>=d.viewportTop||0===e(window).scrollTop()&&r.find(".fusion-scroll-section-element").first().hasClass("active"))&&""!==r.find(".fusion-scroll-section-element").first().css("position")?(r.find(".fusion-scroll-section-element").removeClass("active"),r.find(".fusion-scroll-section-element").first().addClass("active"),r.find(".fusion-scroll-section-element").css("position",""),r.find(".fusion-scroll-section-element").first().css("padding",""),r.find(".fusion-scroll-section-nav a").removeClass("active"),r.find(".fusion-scroll-section-nav a").first().addClass("active")):0<a&&"fixed"===r.find(".fusion-scroll-section-element").last().css("position")&&(!r.children(":nth-child("+a+")").hasClass("active")||"down"===t)&&(r.find(".fusion-scroll-section-element").removeClass("active"),r.children(":nth-child("+a+")").addClass("active"),r.find(".fusion-scroll-section-nav a").removeClass("active"),r.find('.fusion-scroll-section-nav a[data-element="'+r.children(":nth-child("+a+")").data("element")+'"] ').addClass("active"),window.scrollDisabled=!0,e(window).scrollTop(d.sectionTop+d.viewportHeight*(a-1)),i(),setTimeout(function(){n()},fusionContainerVars.hundred_percent_scroll_sensitivity)),t="up"),window.lastYPosition=e(window).scrollTop()}}(jQuery)
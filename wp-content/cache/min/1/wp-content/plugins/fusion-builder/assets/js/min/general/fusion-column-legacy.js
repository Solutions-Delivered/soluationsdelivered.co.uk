function fusionCalcColumnEqualHeights(){var n=".fusion-fullwidth:not(.fusion-equal-height-columns)",u=".fusion-fullwidth.fusion-equal-height-columns";jQuery(".fusion-fullwidth.fusion-equal-height-columns .fusion-builder-row-inner").each(function(){jQuery(this).find(".fusion-layout-column > .fusion-column-wrapper").not(function(n,u){return jQuery(u).parent(".fusion-column-wrapper").length||jQuery(u).parents(".fusion-events-shortcode").length?1:0}).equalHeights()}),jQuery(".fusion-fullwidth.fusion-equal-height-columns").each(function(){jQuery(this).find(".fusion-layout-column:not(.fusion-builder-row-inner .fusion-layout-column) > .fusion-column-wrapper").not(function(n,u){return jQuery(u).parentsUntil(".fusion-content-tb",".fusion-column-wrapper").length?1:0}).equalHeights()}),jQuery(n+" .fusion-recent-posts "+u+", "+n+" .fusion-posts-container "+u+", "+n+" .fusion-portfolio "+u).each(function(){jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").not(function(n,u){return jQuery(u).parent(".fusion-column-wrapper").length?1:0}).equalHeights()})}jQuery(window).on("load",function(){setTimeout(function(){fusionCalcColumnEqualHeights()},100),jQuery(window).on("fusion-resize-horizontal fusion-live-editor-updated",function(){setTimeout(function(){fusionCalcColumnEqualHeights()},500)})}),jQuery(window).on("fusion-dynamic-content-render",function(n,u){var o=jQuery(u).find(".fusion-fullwidth.fusion-equal-height-columns");0<o.length&&o.each(function(){jQuery(this).find(".fusion-layout-column .fusion-column-wrapper").equalHeights()})})
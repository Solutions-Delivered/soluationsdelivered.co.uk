var cssua=function(e,o,i){"use strict";var s=" ua-",r=/\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,n=/([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,a=/\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,b=/\bsilk-accelerated=true\b/,t=/\bfluidapp\b/,l=/(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,p=/(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,c=/(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,d={parse:function(e,o){var i={};if(o&&(i.standalone=o),!(e=(""+e).toLowerCase()))return i;for(var s,d,m=e.split(/[()]/),w=0,_=m.length;w<_;w++)if(w%2){var u=m[w].split(";");for(s=0,d=u.length;s<d;s++)if(r.exec(u[s])){var f=RegExp.$1.split(" ").join("_"),v=RegExp.$2;(!i[f]||parseFloat(i[f])<parseFloat(v))&&(i[f]=v)}}else{var x=m[w].match(n);if(x)for(s=0,d=x.length;s<d;s++){var g=x[s].split(/[\/\s]+/);g.length&&"mozilla"!==g[0]&&(i[g[0].split(" ").join("_")]=g.slice(1).join("-"))}}if(p.exec(e))i.mobile=RegExp.$1,a.exec(e)&&(delete i[i.mobile],i.blackberry=i.version||RegExp.$3||RegExp.$2||RegExp.$1,RegExp.$1?i.mobile="blackberry":"0.0.1"===i.version&&(i.blackberry="7.1.0.0"));else if(l.exec(e))i.desktop=RegExp.$1;else if(c.exec(e)){i.game=RegExp.$1;var h=i.game.split(" ").join("_");i.version&&!i[h]&&(i[h]=i.version)}return i.intel_mac_os_x?(i.mac_os_x=i.intel_mac_os_x.split("_").join("."),delete i.intel_mac_os_x):i.cpu_iphone_os?(i.ios=i.cpu_iphone_os.split("_").join("."),delete i.cpu_iphone_os):i.cpu_os?(i.ios=i.cpu_os.split("_").join("."),delete i.cpu_os):"iphone"!==i.mobile||i.ios||(i.ios="1"),i.opera&&i.version?(i.opera=i.version,delete i.blackberry):b.exec(e)?i.silk_accelerated=!0:t.exec(e)&&(i.fluidapp=i.version),i.applewebkit?(i.webkit=i.applewebkit,delete i.applewebkit,i.opr&&(i.opera=i.opr,delete i.opr,delete i.chrome),i.safari&&(i.chrome||i.crios||i.opera||i.silk||i.fluidapp||i.phantomjs||i.mobile&&!i.ios?delete i.safari:i.version&&!i.rim_tablet_os?i.safari=i.version:i.safari={419:"2.0.4",417:"2.0.3",416:"2.0.2",412:"2.0",312:"1.3",125:"1.2",85:"1.0"}[parseInt(i.safari,10)]||i.safari)):i.msie||i.trident?(i.opera||(i.ie=i.msie||i.rv),delete i.msie,i.windows_phone_os?(i.windows_phone=i.windows_phone_os,delete i.windows_phone_os):"wpdesktop"!==i.mobile&&"xblwp7"!==i.mobile&&"zunewp7"!==i.mobile||(i.mobile="windows desktop",i.windows_phone=+i.ie<9?"7.0":+i.ie<10?"7.5":"8.0",delete i.windows_nt)):(i.gecko||i.firefox)&&(i.gecko=i.rv),i.rv&&delete i.rv,i.version&&delete i.version,i},format:function(e){function o(e,o){e=e.split(".").join("-");var i=s+e;if("string"==typeof o){for(var r=(o=o.split(" ").join("_").split(".").join("-")).indexOf("-");r>0;)i+=s+e+"-"+o.substring(0,r),r=o.indexOf("-",r+1);i+=s+e+"-"+o}return i}var i="";for(var r in e)r&&e.hasOwnProperty(r)&&(i+=o(r,e[r]));return i},encode:function(e){var o="";for(var i in e)i&&e.hasOwnProperty(i)&&(o&&(o+="&"),o+=encodeURIComponent(i)+"="+encodeURIComponent(e[i]));return o}};d.userAgent=d.ua=d.parse(o,i);var m=d.format(d.ua)+" js";return e.className?e.className=e.className.replace(/\bno-js\b/g,"")+m:e.className=m.substr(1),d}(document.documentElement,navigator.userAgent,navigator.standalone)
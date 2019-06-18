/**
 * Spotlight.js v0.5.5 (Bundle)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/spotlight
 */
(function(){'use strict';var aa={};function ba(a){for(var b=a.classList,c={},d=0;d<b.length;d++)c[b[d]]=1;a.a=c}function f(a,b){a=ca(a);"string"===typeof b&&(b=[b]);for(var c=0;c<a.length;c++)for(var d=a[c],e=0;e<b.length;e++){var g=b[e];d.a||ba(d);d.a[g]||(d.a[g]=1,d.classList.add(g))}}function h(a,b){a=ca(a);"string"===typeof b&&(b=[b]);for(var c=0;c<a.length;c++)for(var d=a[c],e=0;e<b.length;e++){var g=b[e];d.a||ba(d);d.a[g]&&(d.a[g]=0,d.classList.remove(g))}}
function k(a,b,c,d){a=ca(a);if("string"===typeof b)for(var e=0;e<a.length;e++){var g=a[e],m=g.b;m||(g.b=m={});m[b]!==c&&(m[b]=c,g.style.setProperty(aa[b]||(aa[b]=b.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),c,d?"important":""))}else for(c=Object.keys(b),e=0;e<c.length;e++)g=c[e],k(a,g,b[g],d)}var da=0;function l(a,b,c){k(a,"transition","none");k(a,b,c);da||(da=a.clientTop&&0);k(a,"transition","")}
function ca(a){if(a.constructor===Array){for(var b=0;b<a.length;b++){var c=a[b];a[b]="string"===typeof c?document.querySelector(c):c}return a}return"string"===typeof a?document.querySelectorAll(a):[a]}function n(a,b){return(b||document).getElementsByClassName(a)};function ea(a,b,c,d){fa("add",a,b,c,d)}function ha(a,b,c,d){fa("remove",a,b,c,d)}function fa(a,b,c,d,e){b[a+"EventListener"](c||"click",d,"undefined"===typeof e?!0:e)}function p(a,b){a||(a=window.event);a&&(b||a.preventDefault(),a.stopImmediatePropagation(),a.returnValue=!1);return!1};var ia=document.createElement("style");ia.innerHTML="@-webkit-keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}@keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}#spotlight,#spotlight .preloader,#spotlight .scene{top:0;width:100%;height:100%}#spotlight .arrow,#spotlight .icon{cursor:pointer;background-repeat:no-repeat}#spotlight,#spotlight .scene img{pointer-events:none;visibility:hidden}#spotlight{z-index:99999;color:#fff;background-color:#000;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:visibility .25s ease,opacity .25s ease;transition:visibility .25s ease,opacity .25s ease;font-family:Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;touch-action:none;-webkit-tap-highlight-color:transparent;position:fixed;opacity:0;contain:layout size paint style}#spotlight.show{opacity:1;visibility:visible;pointer-events:auto;-webkit-transition:none;transition:none}#spotlight.show .pane,#spotlight.show .scene{will-change:transform}#spotlight.show .scene img{will-change:transform,opacity}#spotlight .preloader{visibility:hidden;position:absolute;opacity:0;background-position:center center;background-repeat:no-repeat;background-size:42px 42px}#spotlight.loading .preloader{-webkit-transition:opacity .25s cubic-bezier(1,0,1,0);transition:opacity .25s cubic-bezier(1,0,1,0);visibility:visible;opacity:1}#spotlight .scene{position:absolute;-webkit-transition:-webkit-transform 1s cubic-bezier(.1,1,.1,1);transition:transform 1s cubic-bezier(.1,1,.1,1);transition:transform 1s cubic-bezier(.1,1,.1,1),-webkit-transform 1s cubic-bezier(.1,1,.1,1);contain:layout size style}#spotlight .scene img{display:inline-block;position:absolute;width:auto;height:auto;max-width:100%;max-height:100%;left:50%;top:50%;opacity:1;margin:0;padding:0;border:0;-webkit-transform:translate(-50%,-50%) scale(1) perspective(100vw);transform:translate(-50%,-50%) scale(1) perspective(100vw);-webkit-transform-origin:50% 50% 0;-ms-transform-origin:50% 50% 0;transform-origin:50% 50% 0;transform-box:fill-box;-webkit-transition:opacity 1s cubic-bezier(.3,1,.3,1),-webkit-transform 1s cubic-bezier(.1,1,.1,1);transition:transform 1s cubic-bezier(.1,1,.1,1),opacity 1s cubic-bezier(.3,1,.3,1);transition:transform 1s cubic-bezier(.1,1,.1,1),opacity 1s cubic-bezier(.3,1,.3,1),-webkit-transform 1s cubic-bezier(.1,1,.1,1);-webkit-transform-style:preserve-3d;transform-style:preserve-3d;contain:layout paint style}#spotlight .header,#spotlight .pane{position:absolute;top:0;width:100%;height:100%;contain:layout size style}#spotlight .header{height:50px;text-align:right;background-color:rgba(0,0,0,.45);-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);-webkit-transition:-webkit-transform .35s ease-out;transition:transform .35s ease-out;transition:transform .35s ease-out,-webkit-transform .35s ease-out;contain:layout size paint style}#spotlight .header:hover,#spotlight.menu .header{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}#spotlight .header div{display:inline-block;vertical-align:middle;white-space:nowrap;width:30px;height:50px;padding-right:20px;opacity:.5}#spotlight .progress{position:absolute;top:0;width:100%;height:3px;background-color:rgba(255,255,255,.45);-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:-webkit-transform 1s linear;transition:transform 1s linear;transition:transform 1s linear,-webkit-transform 1s linear}#spotlight .arrow,#spotlight .footer{position:absolute;background-color:rgba(0,0,0,.45)}#spotlight .footer{bottom:0;line-height:1.35em;padding:20px 25px;text-align:left;pointer-events:none;contain:layout paint style}#spotlight .footer .title{font-size:125%;padding-bottom:10px}#spotlight .page{float:left;width:auto;padding-left:20px;line-height:50px}#spotlight .icon{background-position:left center;background-size:21px 21px;-webkit-transition:opacity .2s ease-out;transition:opacity .2s ease-out}#spotlight .fullscreen{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9Ii0xIC0xIDI2IDI2IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzIi8+PC9zdmc+)}#spotlight .fullscreen.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2MyIvPjwvc3ZnPg==)}#spotlight .autofit{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9Ijk2cHgiIHZpZXdCb3g9IjAgMCA5NiA5NiIgd2lkdGg9Ijk2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTAgNTApIiBmaWxsPSIjZmZmIiBkPSJNNzEuMzExLDgwQzY5LjY3LDg0LjY2LDY1LjIzLDg4LDYwLDg4SDIwYy02LjYzLDAtMTItNS4zNy0xMi0xMlYzNmMwLTUuMjMsMy4zNC05LjY3LDgtMTEuMzExVjc2YzAsMi4yMSwxLjc5LDQsNCw0SDcxLjMxMSAgeiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSIgZmlsbD0iI2ZmZiIgZD0iTTc2LDhIMzZjLTYuNjMsMC0xMiw1LjM3LTEyLDEydjQwYzAsNi42Myw1LjM3LDEyLDEyLDEyaDQwYzYuNjMsMCwxMi01LjM3LDEyLTEyVjIwQzg4LDEzLjM3LDgyLjYzLDgsNzYsOHogTTgwLDYwICBjMCwyLjIxLTEuNzksNC00LDRIMzZjLTIuMjEsMC00LTEuNzktNC00VjIwYzAtMi4yMSwxLjc5LTQsNC00aDQwYzIuMjEsMCw0LDEuNzksNCw0VjYweiIvPjwvc3ZnPg==)}#spotlight .zoom-out{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz48L3N2Zz4=)}#spotlight .zoom-in{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjExIiB4Mj0iMTEiIHkxPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxMSIvPjwvc3ZnPg==)}#spotlight .theme{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMiAyIDIwIDIwIiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIsNGMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOFMxNi40MTgsNCwxMiw0eiBNMTIsMThjLTMuMzE0LDAtNi0yLjY4Ni02LTZzMi42ODYtNiw2LTZzNiwyLjY4Niw2LDYgUzE1LjMxNCwxOCwxMiwxOHoiLz48cGF0aCBkPSJNMTIsN3YxMGMyLjc1NywwLDUtMi4yNDMsNS01UzE0Ljc1Nyw3LDEyLDd6Ii8+PC9nPjwvc3ZnPg==)}#spotlight .player{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMTAgOCAxNiAxMiAxMCAxNiAxMCA4Ii8+PC9zdmc+)}#spotlight .player.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTUiIHkyPSI5Ii8+PGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxNSIgeTI9IjkiLz48L3N2Zz4=);-webkit-animation:pulsate 1s ease infinite;animation:pulsate 1s ease infinite}#spotlight .close{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIyIDIgMjAgMjAiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZSB4MT0iMTgiIHgyPSI2IiB5MT0iNiIgeTI9IjE4Ii8+PGxpbmUgeDE9IjYiIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIvPjwvc3ZnPg==)}#spotlight .preloader{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iLjY1Ij48Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMTUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTggMTgiIHRvPSIzNjAgMTggMTgiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvZz48L2c+PC9zdmc+)}#spotlight .arrow{top:50%;left:20px;width:50px;height:50px;border-radius:100%;margin-top:-25px;padding:10px;-webkit-transform:translateX(-100px);-ms-transform:translateX(-100px);transform:translateX(-100px);-webkit-transition:opacity .2s ease-out,-webkit-transform .35s ease-out;transition:transform .35s ease-out,opacity .2s ease-out;transition:transform .35s ease-out,opacity .2s ease-out,-webkit-transform .35s ease-out;box-sizing:border-box;background-position:center center;background-size:30px 30px;opacity:.65;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIxNSAxOCA5IDEyIDE1IDYiLz48L3N2Zz4=)}#spotlight .arrow-right{left:auto;right:20px;-webkit-transform:translateX(100px) scaleX(-1);-ms-transform:translateX(100px) scaleX(-1);transform:translateX(100px) scaleX(-1)}#spotlight.menu .arrow-left{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}#spotlight.menu .arrow-right{-webkit-transform:translateX(0) scaleX(-1);-ms-transform:translateX(0) scaleX(-1);transform:translateX(0) scaleX(-1)}#spotlight .arrow-left:hover,#spotlight .arrow-right:hover,#spotlight .icon:hover{opacity:1}#spotlight.white{color:#fff;background-color:#fff}#spotlight.white .arrow,#spotlight.white .footer,#spotlight.white .header,#spotlight.white .preloader,#spotlight.white .progress{-webkit-filter:invert(1);filter:invert(1)}.hide-scrollbars{overflow:-moz-hidden-unscrollable;-ms-overflow-style:none}.hide-scrollbars::-webkit-scrollbar{width:0}@media (max-width:800px){#spotlight .header div{width:20px}#spotlight .footer{font-size:12px}#spotlight .arrow{width:35px;height:35px;margin-top:-17.5px;background-size:15px 15px}#spotlight .preloader{background-size:30px 30px}}@media (max-width:400px),(max-height:400px){#spotlight .fullscreen{display:none!important}}";
document.getElementsByTagName("head")[0].appendChild(ia);var q="theme fullscreen autofit zoom-in zoom-out page title description player progress".split(" "),r,t,ja,ka,u,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,la,ma,M,N,O,P,Q,na,oa,pa,qa,ra,R,sa,ta,ua,S,va,T,U,W,wa;function xa(a,b,c){this.src=a;this.title=b;this.description=c}
function ya(a,b){if(J=a.length){O||(O=n("pane",Q));var c=O.length,d=K.title,e=K.description;W=Array(J);for(var g=0;g<J;g++){var m=a[g],v=m.dataset;if(g>=c){var w=O[0].cloneNode(!1);k(w,"left",100*g+"%");O[0].parentNode.appendChild(w)}w=void 0;W[g]=new xa(v&&(v.href||v.src)||m.src||m.href,v&&v.title||m.title||(w=(m||document).getElementsByTagName("img")).length&&w[0].alt||d||"",v&&v.description||m.description||e||"")}I=b||1;l(M,"transform","translateX(-"+100*(I-1)+"%)");za()}}
function Aa(a,b,c,d){if(d||a[c])K[c]=b&&b[c]||d}
function Ba(a,b){K={};b&&Ca(b);Ca(a);Aa(a,b,"description");Aa(a,b,"title");Aa(a,b,"prefetch",!0);Aa(a,b,"preloader",!0);L=K.infinite;L="undefined"!==typeof L&&"false"!==L;la="false"!==K.progress;ma=1*K.player||7E3;if((a=K.zoom)||""===a)K["zoom-in"]=K["zoom-out"]=a,delete K.zoom;if((a=K.control)||""===a){a="string"===typeof a?a.split(","):a;for(b=0;b<q.length;b++)K[q[b]]="false";for(b=0;b<a.length;b++){var c=a[b].trim();"zoom"===c?K["zoom-in"]=K["zoom-out"]="true":K[c]="true"}}for(a=0;a<q.length;a++)b=
q[a],k(n(b,Q)[0],"display","false"===K[b]?"none":"");(H=K.theme)?Da():H="white"}function Ca(a){for(var b=K,c=Object.keys(a),d=0;d<c.length;d++){var e=c[d];b[e]=""+a[e]}}
function Ea(){var a=I;N=O[a-1];P=N.firstElementChild;I=a;if(!P){var b="false"!==K.preloader;P=new Image;P.onload=function(){b&&h(Q,"loading");k(this,{visibility:"visible",opacity:1,transform:""});"false"!==K.prefetch&&a<J&&((new Image).src=W[a].src)};P.onerror=function(){N.removeChild(this)};N.appendChild(P);P.src=W[a-1].src;b&&f(Q,"loading");return!b}return!0}ea(document,"",Fa);
ea(document,"DOMContentLoaded",function(){Q=document.createElement("div");Q.id="spotlight";Q.innerHTML='<div class=preloader></div><div class=scene><div class=pane></div></div><div class=header><div class=page></div><div class="icon fullscreen"></div><div class="icon autofit"></div><div class="icon zoom-out"></div><div class="icon zoom-in"></div><div class="icon theme"></div><div class="icon player"></div><div class="icon close"></div></div><div class=progress></div><div class="arrow arrow-left"></div><div class="arrow arrow-right"></div><div class=footer><div class=title></div><div class=description></div></div>';k(Q,
"transition","none");document.body.appendChild(Q);M=n("scene",Q)[0];na=n("footer",Q)[0];oa=n("title",na)[0];pa=n("description",na)[0];qa=n("arrow-left",Q)[0];ra=n("arrow-right",Q)[0];R=n("fullscreen",Q)[0];sa=n("page",Q)[0];ta=n("player",Q)[0];ua=n("progress",Q)[0];U=document.documentElement||document.body;document.cancelFullScreen||(document.cancelFullScreen=document.exitFullscreen||document.webkitCancelFullScreen||document.webkitExitFullscreen||document.mozCancelFullScreen||function(){});U.requestFullScreen||
(U.requestFullScreen=U.webkitRequestFullScreen||U.msRequestFullScreen||U.mozRequestFullScreen||k(R,"display","none")||function(){});wa=[[window,"keydown",Ga],[window,"wheel",Ha],[window,"hashchange",Ia],[M,"mousedown",Ja],[M,"mouseleave",Ka],[M,"mouseup",Ka],[M,"mousemove",La],[M,"touchstart",Ja,{passive:!1}],[M,"touchcancel",Ka],[M,"touchend",Ka],[M,"touchmove",La,{passive:!0}],[R,"",Ma],[qa,"",Na],[ra,"",X],[ta,"",Oa],[n("autofit",Q)[0],"",Pa],[n("zoom-in",Q)[0],"",Qa],[n("zoom-out",Q)[0],"",Ra],
[n("close",Q)[0],"",Sa],[n("theme",Q)[0],"",Da]]},{once:!0});function Ta(a){for(var b=0;b<wa.length;b++){var c=wa[b];(a?ea:ha)(c[0],c[1],c[2],c[3])}}function Fa(a){var b=Ua.call(a.target,".spotlight");if(b){var c=Ua.call(b,".spotlight-group"),d=n("spotlight",c);Ba(b.dataset,c&&c.dataset);for(c=0;c<d.length;c++)if(d[c]===b){ya(d,c+1);break}Va();return p(a)}}
function Ga(a){if(N)switch(a.keyCode){case 8:Pa();break;case 27:Sa();break;case 32:"false"!==K.player&&Oa();break;case 37:Na();break;case 39:X();break;case 38:case 107:case 187:Qa();break;case 40:case 109:case 189:Ra()}}function Ha(a){N&&(a=a.deltaY,0>.5*(0>a?1:a?-1:0)?Ra():Qa())}function Ia(){N&&"#spotlight"===location.hash&&Sa(!0)}function Oa(a){("boolean"===typeof a?a:!S)?S||(S=setInterval(X,ma),f(ta,"on"),la&&Wa()):S&&(S=clearInterval(S),h(ta,"on"),la&&l(ua,"transform",""));return S}
function Y(){T?clearTimeout(T):f(Q,"menu");var a=K.autohide;T="false"!==a?setTimeout(function(){h(Q,"menu");T=null},1*a||3E3):1}function Xa(a){"boolean"===typeof a&&(T=a?T:0);T?(T=clearTimeout(T),h(Q,"menu")):Y();return p(a)}function Ja(a){B=!0;C=!1;var b=Ya(a);u=document.body.clientWidth;x=document.body.clientHeight;y=P.width*A;z=P.height*A;D=y<=u;ja=b.x;ka=b.y;return p(a,!0)}
function Ka(a){if(B&&!C)return B=!1,Xa(a);D&&C&&(l(M,"transform","translateX("+-(100*(I-1)-r/u*100)+"%)"),r<-(x/10)&&X()||r>x/10&&Na()||k(M,"transform","translateX(-"+100*(I-1)+"%)"),r=0,D=!1,k(N,"transform",""));B=!1;return p(a)}function La(a){if(B){va||(va=requestAnimationFrame(Za));var b=Ya(a),c=(y-u)/2;C=!0;D=y<=u;r-=ja-(ja=b.x);D?E=!0:r>c?r=c:0<u-r-y+c?r=u-y+c:E=!0;z>x&&(c=(z-x)/2,t-=ka-(ka=b.y),t>c?t=c:0<x-t-z+c?t=x-z+c:E=!0)}else Y();return p(a,!0)}
function Ya(a){var b=a.touches;b&&(b=b[0]);return{x:b?b.clientX:a.pageX,y:b?b.clientY:a.pageY}}function Za(a){E?(a&&(va=requestAnimationFrame(Za)),k(N,"transform","translate("+r+"px, "+t+"px)")):va=null;E=!1}function Ma(a){("boolean"===typeof a?a:document.isFullScreen||document.webkitIsFullScreen||document.mozFullScreen)?(document.cancelFullScreen(),h(R,"on")):(U.requestFullScreen(),f(R,"on"))}
function Pa(a){"boolean"===typeof a&&(F=!a);F=1===A&&!F;k(P,{maxHeight:F?"none":"",maxWidth:F?"none":"",transform:""});A=1;t=r=0;E=!0;Za();Y()}function Qa(a){var b=A/.65;5>=b&&$a(A=b);a||Y()}function $a(a){k(P,"transform","translate(-50%, -50%) scale("+(a||1)+")")}function Ra(a){var b=.65*A;1<=b&&($a(A=b),t=r=0,E=!0,Za());a||Y()}function Va(){location.hash="spotlight";location.hash="show";Ta(!0);k(Q,"transition","");f(U,"hide-scrollbars");f(Q,"show");Y()}
function Sa(a){Ta(!1);history.go(!0===a?-1:-2);h(U,"hide-scrollbars");h(Q,"show");S&&Oa(!1);P.parentNode.removeChild(P);N=P=W=null}function Na(){if(1<I)return Z(I-1);if(S||L)return Z(J)}function X(){if(I<J)return Z(I+1);if(S||L)return Z(1)}function Z(a){if(!(S&&B||a===I)){S||Y();S&&la&&Wa();var b=a>I;I=a;za(b);return!0}}function Wa(){l(ua,{transitionDuration:"",transform:""});k(ua,{transitionDuration:ma+"ms",transform:"translateX(0)"})}
function Da(a){"boolean"===typeof a?G=a:(G=!G,Y());G?f(Q,H):h(Q,H)}
function za(a){t=r=0;A=1;var b=K.animation,c=!0,d=!0,e=!0;if(b||""===b){c=d=e=!1;b="string"===typeof b?b.split(","):b;for(var g=0;g<b.length;g++){var m=b[g].trim();if("scale"===m)c=!0;else if("fade"===m)d=!0;else if("slide"===m)e=!0;else if("flip"===m)var v=!0;else if("false"!==m){c=d=e=v=!1;var w=m;break}}}k(M,"transition",e?"":"none");k(M,"transform","translateX(-"+100*(I-1)+"%)");N&&k(N,"transform","");if(P){k(P,{opacity:d?0:1,transform:""});var V=P;setTimeout(function(){V&&P!==V&&V.parentNode&&
V.parentNode.removeChild(V)},800)}e=Ea();w&&f(P,w);l(P,{opacity:d?0:1,transform:"translate(-50%, -50%)"+(c?" scale(0.8)":"")+(v&&"undefined"!==typeof a?" rotateY("+(a?"":"-")+"90deg)":""),maxHeight:"",maxWidth:""});e&&k(P,{visibility:"visible",opacity:1,transform:""});w&&h(P,w);k(N,"transform","");k(qa,"visibility",L||1!==I?"":"hidden");k(ra,"visibility",L||I!==J?"":"hidden");a=W[I-1];if(c=a.title||a.description)oa.textContent=a.title||"",pa.textContent=a.description||"";k(na,"visibility",c?"visible":
"hidden");sa.textContent=I+" / "+J}var Ua=Element.prototype.closest||function(a){var b=this;for(a=a.substring(1);b&&1===b.nodeType;){if(b.classList.contains(a))return b;b=b.parentElement||b.parentNode}};window.Spotlight={theme:Da,fullscreen:Ma,autofit:Pa,next:X,prev:Na,"goto":Z,close:Sa,zoom:$a,menu:Xa,show:function(a,b){setTimeout(function(){a?(b?Ba(b):b={},ya(a,b.index)):K={};Va()})},play:Oa};}).call(this);

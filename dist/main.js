!function(n){var t={};function i(o){if(t[o])return t[o].exports;var e=t[o]={i:o,l:!1,exports:{}};return n[o].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=t,i.d=function(n,t,o){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)i.d(o,e,function(t){return n[t]}.bind(null,e));return o},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="",i(i.s=0)}([function(n,t,i){"use strict";i(1);var o={init:function(){this.$tab=$("footer>div"),this.$panels=$("section"),this.bind(),e.init(),a.init(),s.init()},bind:function(){var n=this;this.$tab.on("click",function(){$(this).addClass("active").siblings().removeClass("active"),n.$panels.eq($(this).index()).show().siblings().hide()})}},e={init:function(){this.$container=$("#top250"),this.moveIndex=0,this.inFinish=!1,this.loading=!1,this.start(),this.bind()},bind:function(){console.log("bind");var n=this;n.start(),n.$container.scroll(function(){n._throttle(n.isToBottom(),300)})},getData:function(n){console.log("getData");var t=this;this.loading||(this.loading=!0,this.$container.find(".loading").show(),$.ajax({url:"https://api.douban.com/v2/movie/top250",type:"GET",dataType:"jsonp",data:{start:this.moveIndex,count:20}}).done(function(i){t.moveIndex+=20,t.moveIndex>=i.total&&(t.inFinish=!0),n(i)}).fail(function(){console.log("失败")}).always(function(){t.loading=!1,t.$container.find(".loading").hide()}))},start:function(){console.log("start");var n=this;this.getData(function(t){n.render(t)})},render:function(n){var t=this;console.log("render"),n.subjects.forEach(function(n,i){console.log(n);var o='<div class="item">\n                                    <a href="#">\n                                        <div class="cover">\n                                            <img src='+n.images.medium+' alt="">\n                                        </div>\n                                        <div class="detail">\n                                            <h2 class="title">'+n.title+'</h2>\n                                            <div class="extra"><span class="score">'+n.rating.average+"分</span> / "+n.collect_count+'收藏</div>\n                                            <div class="extra">'+n.year+" / "+n.genres.join("/")+'</div>\n                                            <div class="extra">导演: '+function(n){var t=[];return n.directors.forEach(function(n,i){t[i]=n.name}),t.join(" 丶 ")}(n)+'</div>\n                                            <div class="extra">主演: '+function(n){var t=[];return n.casts.forEach(function(n,i){t[i]=n.name}),t.join(" 丶 ")}(n)+"</div>\n                                        </div>\n                                    </a>\n                                </div>";t.$container.find(".container").append(o)})},isToBottom:function(){console.log("isToBottom");this.$container.height()+this.$container.scrollTop()>=this.$container.find(".container").height()-100&&this.start()},_throttle:function(n,t){var i=null;return function(){clearTimeout(i),i=setTimeout(function(){i&&clearTimeout(i),n()},t)}}},a={init:function(){this.$container=$("#beimei"),this.moveIndex=0,this.inFinish=!1,this.loading=!1,this.start(),this.bind()},bind:function(){console.log("bind");var n=this;n.start(),n.$container.scroll(function(){n._throttle(n.isToBottom(),300)})},getData:function(n){console.log("getData");var t=this;this.loading||(this.loading=!0,this.$container.find(".loading").show(),$.ajax({url:"https://api.douban.com/v2/movie/us_box",type:"GET",dataType:"jsonp"}).done(function(i){console.log(i,"beimei"),t.moveIndex+=20,t.moveIndex>=i.total&&(t.inFinish=!0),n(i)}).fail(function(){console.log("失败")}).always(function(){t.loading=!1,t.$container.find(".loading").hide()}))},start:function(){console.log("start");var n=this;this.getData(function(t){n.render(t)})},render:function(n){var t=this;console.log("render"),n.subjects.forEach(function(n,i){var o=n.subject;console.log(o);var e='<div class="item">\n                                    <a href="#">\n                                        <div class="cover">\n                                            <img src='+o.images.medium+' alt="">\n                                        </div>\n                                        <div class="detail">\n                                            <h2 class="title">'+o.title+'</h2>\n                                            <div class="extra"><span class="score">'+o.rating.average+"分</span> / "+o.collect_count+'收藏</div>\n                                            <div class="extra">'+o.year+" / "+o.genres.join("/")+'</div>\n                                            <div class="extra">导演: '+function(n){var t=[];return n.directors.forEach(function(n,i){t[i]=n.name}),t.join(" 丶 ")}(o)+'</div>\n                                            <div class="extra">主演: '+function(n){var t=[];return n.casts.forEach(function(n,i){t[i]=n.name}),t.join(" 丶 ")}(o)+"</div>\n                                        </div>\n                                    </a>\n                                </div>";t.$container.find(".container").append(e)})},isToBottom:function(){console.log("isToBottom");this.$container.height()+this.$container.scrollTop()>=this.$container.find(".container").height()-100&&this.start()},_throttle:function(n,t){var i=null;return function(){clearTimeout(i),i=setTimeout(function(){i&&clearTimeout(i),n()},t)}}},s={init:function(){this.$container=$("#search"),this.keyword="",this.bind()},bind:function(){var n=this;this.$container.find(".button").on("click",function(){n.keyword=n.$container.find("input").val(),n.start()})},getData:function(n){console.log("getData");var t=this;this.loading||(this.loading=!0,this.$container.find(".loading").show(),$.ajax({url:"https://api.douban.com/v2/movie/search",type:"GET",dataType:"jsonp",data:{q:this.keyword}}).done(function(t){console.log(t,"search"),n(t)}).fail(function(){console.log("失败")}).always(function(){t.$container.find(".loading").hide()}))},start:function(){console.log("start");var n=this;this.getData(function(t){n.render(t)})},render:function(n){var t=this;console.log("render"),n.subjects.forEach(function(n,i){console.log(n);var o='<div class="item">\n                                    <a href="#">\n                                        <div class="cover">\n                                            <img src='+n.images.medium+' alt="">\n                                        </div>\n                                        <div class="detail">\n                                            <h2 class="title">'+n.title+'</h2>\n                                            <div class="extra"><span class="score">'+n.rating.average+"分</span> / "+n.collect_count+'收藏</div>\n                                            <div class="extra">'+n.year+" / "+n.genres.join("/")+'</div>\n                                            <div class="extra">导演: '+function(n){var t=[];return n.directors.forEach(function(n,i){t[i]=n.name}),t.join(" 丶 ")}(n)+'</div>\n                                            <div class="extra">主演: '+function(n){var t=[];return n.casts.forEach(function(n,i){t[i]=n.name}),t.join(" 丶 ")}(n)+"</div>\n                                        </div>\n                                    </a>\n                                </div>";t.$container.find(".search-area").append(o)})},isToBottom:function(){console.log("isToBottom");this.$container.height()+this.$container.scrollTop()>=this.$container.find(".container").height()-100&&this.start()},_throttle:function(n,t){var i=null;return function(){clearTimeout(i),i=setTimeout(function(){i&&clearTimeout(i),n()},t)}}};o.init()},function(n,t){}]);
(function(m){var window=this;var c7=function(){d7=(0,m.S)(window.document.body,"keypress",oga)};var oga=function(a){var b=a.target.nodeName;"INPUT"!=b&&"TEXTAREA"!=b&&(a=String.fromCharCode(a.keyCode)," "!=a&&(a=e7+a,-1<a.indexOf("1980")?(e7="",f7()):-1<a.indexOf("2600")?(e7="",f7({auto_fire:1,level_length:5E3,turret_rof:100})):(a.length>g7&&(a=a.slice(a.length-g7)),e7=a)))};var pga=function(){if(!(0,m.p)("yt.player.getPlayerByElement"))return!1;try{var a=(0,m.vs)();if(!a.isReady()||a.getPlaylist()||1>a.getPlayerState())return!1}catch(b){return!1}return!0};
var f7=function(a){if(pga()){(0,m.T)(d7);var b=(0,m.p)("yt.www.watch.missilecommand.Game");h7=!1;a=(0,m.s)(qga,a);b?a():((0,m.ge)(i7),(0,m.ge)("//fonts.googleapis.com/css?family=Press+Start+2P"),(0,m.rc)(j7,k7),k7=a,(0,m.pc)(j7,k7))}};var qga=function(a){h7||(l7=a=new ((0,m.p)("yt.www.watch.missilecommand.Game"))(window.document.getElementById("player"),a),a.init(),a.start(),a.onEndCallback=rga)};var rga=function(){var a=(0,m.C)("PLAYER_REFERENCE");a&&a.playVideo&&a.playVideo();(0,m.rc)(j7,k7);c7()};
var j7,i7,k7,l7=null,h7=!1,d7="",e7="",g7=Math.max(4,4);(0,m.Ub)((0,m.Vk)({name:"www/watch_missile",deps:["www/watch"],page:"watch",init:function(){j7=(0,m.C)("WATCH_MISSILECOMMAND_JS");i7=(0,m.C)("WATCH_MISSILECOMMAND_CSS");c7()},dispose:function(){l7&&(l7.dispose(),l7=null);(0,m.T)(d7);(0,m.rc)(j7,k7);h7=!0}}));})(_yt_www);

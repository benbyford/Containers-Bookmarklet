javascript:(function(){var g=/./g;function c(i){var k=document.getElementsByTagName(i);for(var m=0,l=k.length;m<l;m++){var n=k[m].innerHTML.replace(g,"&nbsp;");document.getElementsByTagName(i)[m].innerHTML=(n)}}var j=new Array("p","a","h1","h2","h3","h4","h5","cite","blockquote","span","em","li","font","div","b","i","code","strong","s","td","textarea");for(var d=0,b=j.length;d<b;d++){c(j[d])}function f(o){var i=document.getElementsByTagName(o);for(var k=0,l=i.length;k<l;k++){var n=i[k].width;var m=i[k].height;document.getElementsByTagName(o)[k].parentNode.innerHTML=('<div style="width:'+n+"px;height:"+m+'px;"></div>')}}var a=new Array("iframe","img","object","embed");for(var e=0,h=a.length;e<h;e++){f(a[e])}})();
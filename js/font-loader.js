function loadFont(t,e,o,n){function a(){if(!window.FontFace)return!1;var t=new FontFace("t",'url("data:application/font-woff2,") format("woff2")',{}),e=t.load();try{e.then(null,function(){})}catch(t){}return"loading"===t.status}var s=navigator.userAgent;if(window.addEventListener&&(!s.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/)||s.match(/Chrome/))){var l={};try{l=localStorage||{}}catch(t){}var d="x-font-"+t,r=d+"url",c=d+"css",i=l[r],u=l[c],f=document.createElement("style");if(f.rel="stylesheet",document.head.appendChild(f),!u||i!==e&&i!==o){var w=o&&a()?o:e,m=new XMLHttpRequest;m.open("GET",w),m.onload=function(){m.status>=200&&m.status<400&&(l[r]=w,l[c]=m.responseText,n||(f.textContent=m.responseText))},m.send()}else f.textContent=u}}
loadFont("clearsans-bold","css/clearsans-bold.css");
var dds=document.querySelectorAll(".xxk .left dd"),left=document.getElementsByClassName("left")[0],rrs=document.getElementsByClassName("rr"),span=document.querySelector(".bt p span:nth-of-type(2)");left.onclick=function(e){var t=(e=e||window.event).target||e.srcElement;if("DD"==t.nodeName){var r=t.innerHTML;span.innerHTML=r;for(var a=0;a<rrs.length;a++)rrs[a].className="rr animated zoomOutLeft",dds[a].className="";var s=t.getAttribute("cl");rrs[s].className="rr active animated rotateIn slow",dds[s].className="jt"}};
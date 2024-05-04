const cpsvg=`<svg
class="icon-copy"
viewBox="0 0 1024 1024"
xmlns="http://www.w3.org/2000/svg">
<path
  d="M731.428571 292.571429v658.285714H73.142857V292.571429h658.285714z m-73.142857 73.142857H146.285714v512h512V365.714286z m292.571429-292.571429v585.142857h-146.285714v-73.142857h73.142857V146.285714H438.857143v73.142857h-73.142857V73.142857h585.142857z"></path>
</svg>`,cpiedsvg=`<svg
class="icon-copied"
viewBox="0 0 1024 1024"
version="1.1"
fill="#16a34a"
xmlns="http://www.w3.org/2000/svg">
<path
  d="M863.5 265.499a8 8 0 0 0-11.314 0L439.274 678.411 263.912 503.049a8 8 0 0 0-11.314 0l-45.255 45.255a8 8 0 0 0 0 11.314l181.019 181.019 16.971 16.97 0.078 0.078 11.236 11.236c12.496 12.497 32.758 12.497 45.254 0l446.853-446.853a7.999 7.999 0 0 0 0-11.314L863.5 265.499z"></path>
</svg>`;document.querySelectorAll("pre > code").forEach(e=>{const n=e.parentNode.parentNode,t=document.createElement("button");t.classList.add("codeblock-copy"),t.innerHTML=cpsvg;function s(){t.innerHTML=cpiedsvg,setTimeout(()=>{t.innerHTML=cpsvg},2e3)}t.addEventListener("click",t=>{if("clipboard"in navigator){navigator.clipboard.writeText(e.textContent),s();return}const n=document.createRange();n.selectNodeContents(e);const o=window.getSelection();o.removeAllRanges(),o.addRange(n);try{document.execCommand("copy"),s()}catch{}o.removeRange(n)}),n.classList.contains("highlight")?n.appendChild(t):n.parentNode.firstChild==n||(e.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName=="TABLE"?e.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(t):e.parentNode.appendChild(t))})
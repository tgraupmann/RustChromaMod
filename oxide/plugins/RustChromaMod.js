/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

// JavaScript source code

function ChromaSDK() {
    var uri = undefined;
    var timerId = undefined;
    var initialized = false;
}

function onTimer() {
    if (this.uri == undefined) {
      return;
    }

    if (!initialized) {
      return;
    }

    var request = new XMLHttpRequest();

    request.open("PUT", uri + "/heartbeat", true);

    request.setRequestHeader("content-type", "application/json");

    request.onerror = function () {
      console.log('request onerror', request.status);
    };

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status != 200){
            console.log('request onreadystatechange', request.status);
            /*
            setTimeout(function() {
              chromaSDK.uninit();
            }, 0);
            setTimeout(function() {
              chromaSDK.init();
            }, 100);
            */
        }
    }

    request.send(null);
}

ChromaSDK.prototype = {
	uri: undefined,
    init: function () {
		setTimeout(function() {

      if (this.timerId != undefined) {
        clearInterval(this.timerId);
        this.timerId = undefined;
      }

      var request = new XMLHttpRequest();

      request.open("POST", "https://chromasdk.io:54236/razer/chromasdk", true);

      request.setRequestHeader("content-type", "application/json");

      var data = JSON.stringify({
          "title": "RUST Chroma RGB MOD",
          "description": "Play RGB lighting from RUST game events.",
          "author": {
              "name": "Razer, Inc.",
              "contact": "https://github.com/tgraupmann/RustChromaMod"
          },
          "device_supported": [
              "keyboard",
              "mouse",
              "headset",
              "mousepad",
              "keypad",
              "chromalink"],
          "category": "application"
      });

      request.send(data);

      request.onreadystatechange = function () {
          if (request.readyState == 4 && request.responseText != undefined && request.responseText != "") {
              uri = JSON.parse(request.responseText)["uri"];
              //console.log(uri);
              timerId = setInterval(onTimer, 1000);
              initialized = true;
          }
      }
		}, 0);
    },
    uninit: function () {
      setTimeout(function() {

        initialized = false;

        if (this.uri == undefined) {
          return;
        }

        var request = new XMLHttpRequest();

        request.open("DELETE", uri, true);

        request.setRequestHeader("content-type", "application/json");

        request.send(null);

        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                //console.log(request.responseText);
            }
        }
        uri = undefined;
		}, 0);
    },
    createKeyboardEffect: function (effect, data) {
		setTimeout(function() {

		if (this.uri == undefined) {
			return;
		}

        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        } else if (effect == "CHROMA_CUSTOM_KEY") {
            var color = { "color": data, "key": data };
            jsonObj = JSON.stringify({ effect: effect, param: color });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("PUT", uri + "/keyboard", true);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('createKeyboardEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);
		}, 0);
    },
    preCreateKeyboardEffect: function (effect, data) {
        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        } else if (effect == "CHROMA_CUSTOM_KEY") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("POST", uri + "/keyboard", false);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log(request.responseText);

        //console.log('preCreateKeyboardEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);

        return JSON.parse(request.responseText)['id'];
    },
    createMousematEffect: function (effect, data) {
		setTimeout(function() {

		if (this.uri == undefined) {
			return;
		}

        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("PUT", uri + "/mousepad", true);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('createMousematEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);
		}, 0);
    },
    preCreateMousematEffect: function (effect, data) {
        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("POST", uri + "/mousepad", false);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('preCreateMousematEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);

        return JSON.parse(request.responseText)['id'];
    },
    createMouseEffect: function (effect, data) {
		setTimeout(function() {

		if (this.uri == undefined) {
			return;
		}

        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM2") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("PUT", uri + "/mouse", true);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('createMouseEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);
		}, 0);
    },
    preCreateMouseEffect: function (effect, data) {
        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM2") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("POST", uri + "/mouse", false);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('preCreateMouseEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);

        return JSON.parse(request.responseText)['id'];
    },
    createHeadsetEffect: function (effect, data) {
		setTimeout(function() {

		if (this.uri == undefined) {
			return;
		}

        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("PUT", uri + "/headset", true);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('createHeadsetEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);
		}, 0);
    },
    preCreateHeadsetEffect: function (effect, data) {
        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("POST", uri + "/headset", false);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('preCreateHeadsetEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);

        return JSON.parse(request.responseText)['id'];
    },
    createKeypadEffect: function (effect, data) {
		setTimeout(function() {

		if (this.uri == undefined) {
			return;
		}

        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("PUT", uri + "/keypad", true);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('createKeypadEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);
		}, 0);
    },
    preCreateKeypadEffect: function (effect, data) {
        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("POST", uri + "/keypad", false);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('preCreateKeypadEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);

        return JSON.parse(request.responseText)['id'];
    },
    createChromaLinkEffect: function (effect, data) {
		setTimeout(function() {

		if (this.uri == undefined) {
			return;
		}

        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("PUT", uri + "/chromalink", true);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('createChromaLinkEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);
		}, 0);
    },
    preCreateChromaLinkEffect: function (effect, data) {
        var jsonObj;

        if (effect == "CHROMA_NONE") {
            jsonObj = JSON.stringify({ "effect": effect });
        } else if (effect == "CHROMA_CUSTOM") {
            jsonObj = JSON.stringify({ "effect": effect, "param": data });
        } else if (effect == "CHROMA_STATIC") {
            var color = { "color": data };
            jsonObj = JSON.stringify({ "effect": effect, "param": color });
        }

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("POST", uri + "/chromalink", false);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('preCreateChromaLinkEffect(' + effect + ', ' + data + ') returns ' + JSON.parse(request.responseText)['result']);

        return JSON.parse(request.responseText)['id'];
    },
    setEffect: function (id) {
		setTimeout(function() {

		if (this.uri == undefined) {
			return;
		}

        var jsonObj = JSON.stringify({ "id": id });

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("PUT", uri + "/effect", true);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('setEffect(' + id + ') returns ' + JSON.parse(request.responseText)['result']);
		}, 0);
    },
    deleteEffect: function (id) {
		setTimeout(function() {

		if (this.uri == undefined) {
			return;
		}

        var jsonObj = JSON.stringify({ "id": id });

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("DELETE", uri + "/effect", true);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('deleteEffect(' + id + ') returns ' + JSON.parse(request.responseText)['result']);
		}, 0);
    },
    deleteEffectGroup: function (ids) {
		setTimeout(function() {

		if (this.uri == undefined) {
			return;
		}

        var jsonObj = ids;

        //console.log(jsonObj);

        var request = new XMLHttpRequest();

        request.open("DELETE", uri + "/effect", true);

        request.setRequestHeader("content-type", "application/json");

        request.send(jsonObj);

        //console.log('deleteEffectGroup() returns ' + JSON.parse(request.responseText));
		}, 0);
    }
}

// keyboard keys
var RZKEY = {
	RZKEY_ESC: 0x0001,                 /*!< Esc (VK_ESCAPE) */
	RZKEY_F1: 0x0003,                  /*!< F1 (VK_F1) */
	RZKEY_F2: 0x0004,                  /*!< F2 (VK_F2) */
	RZKEY_F3: 0x0005,                  /*!< F3 (VK_F3) */
	RZKEY_F4: 0x0006,                  /*!< F4 (VK_F4) */
	RZKEY_F5: 0x0007,                  /*!< F5 (VK_F5) */
	RZKEY_F6: 0x0008,                  /*!< F6 (VK_F6) */
	RZKEY_F7: 0x0009,                  /*!< F7 (VK_F7) */
	RZKEY_F8: 0x000A,                  /*!< F8 (VK_F8) */
	RZKEY_F9: 0x000B,                  /*!< F9 (VK_F9) */
	RZKEY_F10: 0x000C,                 /*!< F10 (VK_F10) */
	RZKEY_F11: 0x000D,                 /*!< F11 (VK_F11) */
	RZKEY_F12: 0x000E,                 /*!< F12 (VK_F12) */
	RZKEY_1: 0x0102,                   /*!< 1 (VK_1) */
	RZKEY_2: 0x0103,                   /*!< 2 (VK_2) */
	RZKEY_3: 0x0104,                   /*!< 3 (VK_3) */
	RZKEY_4: 0x0105,                   /*!< 4 (VK_4) */
	RZKEY_5: 0x0106,                   /*!< 5 (VK_5) */
	RZKEY_6: 0x0107,                   /*!< 6 (VK_6) */
	RZKEY_7: 0x0108,                   /*!< 7 (VK_7) */
	RZKEY_8: 0x0109,                   /*!< 8 (VK_8) */
	RZKEY_9: 0x010A,                   /*!< 9 (VK_9) */
	RZKEY_0: 0x010B,                   /*!< 0 (VK_0) */
	RZKEY_A: 0x0302,                   /*!< A (VK_A) */
	RZKEY_B: 0x0407,                   /*!< B (VK_B) */
	RZKEY_C: 0x0405,                   /*!< C (VK_C) */
	RZKEY_D: 0x0304,                   /*!< D (VK_D) */
	RZKEY_E: 0x0204,                   /*!< E (VK_E) */
	RZKEY_F: 0x0305,                   /*!< F (VK_F) */
	RZKEY_G: 0x0306,                   /*!< G (VK_G) */
	RZKEY_H: 0x0307,                   /*!< H (VK_H) */
	RZKEY_I: 0x0209,                   /*!< I (VK_I) */
	RZKEY_J: 0x0308,                   /*!< J (VK_J) */
	RZKEY_K: 0x0309,                   /*!< K (VK_K) */
	RZKEY_L: 0x030A,                   /*!< L (VK_L) */
	RZKEY_M: 0x0409,                   /*!< M (VK_M) */
	RZKEY_N: 0x0408,                   /*!< N (VK_N) */
	RZKEY_O: 0x020A,                   /*!< O (VK_O) */
	RZKEY_P: 0x020B,                   /*!< P (VK_P) */
	RZKEY_Q: 0x0202,                   /*!< Q (VK_Q) */
	RZKEY_R: 0x0205,                   /*!< R (VK_R) */
	RZKEY_S: 0x0303,                   /*!< S (VK_S) */
	RZKEY_T: 0x0206,                   /*!< T (VK_T) */
	RZKEY_U: 0x0208,                   /*!< U (VK_U) */
	RZKEY_V: 0x0406,                   /*!< V (VK_V) */
	RZKEY_W: 0x0203,                   /*!< W (VK_W) */
	RZKEY_X: 0x0404,                   /*!< X (VK_X) */
	RZKEY_Y: 0x0207,                   /*!< Y (VK_Y) */
	RZKEY_Z: 0x0403,                   /*!< Z (VK_Z) */
	RZKEY_NUMLOCK: 0x0112,             /*!< Numlock (VK_NUMLOCK) */
	RZKEY_NUMPAD0: 0x0513,             /*!< Numpad 0 (VK_NUMPAD0) */
	RZKEY_NUMPAD1: 0x0412,             /*!< Numpad 1 (VK_NUMPAD1) */
	RZKEY_NUMPAD2: 0x0413,             /*!< Numpad 2 (VK_NUMPAD2) */
	RZKEY_NUMPAD3: 0x0414,             /*!< Numpad 3 (VK_NUMPAD3) */
	RZKEY_NUMPAD4: 0x0312,             /*!< Numpad 4 (VK_NUMPAD4) */
	RZKEY_NUMPAD5: 0x0313,             /*!< Numpad 5 (VK_NUMPAD5) */
	RZKEY_NUMPAD6: 0x0314,             /*!< Numpad 6 (VK_NUMPAD6) */
	RZKEY_NUMPAD7: 0x0212,             /*!< Numpad 7 (VK_NUMPAD7) */
	RZKEY_NUMPAD8: 0x0213,             /*!< Numpad 8 (VK_NUMPAD8) */
	RZKEY_NUMPAD9: 0x0214,             /*!< Numpad 9 (VK_ NUMPAD9*/
	RZKEY_NUMPAD_DIVIDE: 0x0113,       /*!< Divide (VK_DIVIDE) */
	RZKEY_NUMPAD_MULTIPLY: 0x0114,     /*!< Multiply (VK_MULTIPLY) */
	RZKEY_NUMPAD_SUBTRACT: 0x0115,     /*!< Subtract (VK_SUBTRACT) */
	RZKEY_NUMPAD_ADD: 0x0215,          /*!< Add (VK_ADD) */
	RZKEY_NUMPAD_ENTER: 0x0415,        /*!< Enter (VK_RETURN - Extended) */
	RZKEY_NUMPAD_DECIMAL: 0x0514,      /*!< Decimal (VK_DECIMAL) */
	RZKEY_PRINTSCREEN: 0x000F,         /*!< Print Screen (VK_PRINT) */
	RZKEY_SCROLL: 0x0010,              /*!< Scroll Lock (VK_SCROLL) */
	RZKEY_PAUSE: 0x0011,               /*!< Pause (VK_PAUSE) */
	RZKEY_INSERT: 0x010F,              /*!< Insert (VK_INSERT) */
	RZKEY_HOME: 0x0110,                /*!< Home (VK_HOME) */
	RZKEY_PAGEUP: 0x0111,              /*!< Page Up (VK_PRIOR) */
	RZKEY_DELETE: 0x020f,              /*!< Delete (VK_DELETE) */
	RZKEY_END: 0x0210,                 /*!< End (VK_END) */
	RZKEY_PAGEDOWN: 0x0211,            /*!< Page Down (VK_NEXT) */
	RZKEY_UP: 0x0410,                  /*!< Up (VK_UP) */
	RZKEY_LEFT: 0x050F,                /*!< Left (VK_LEFT) */
	RZKEY_DOWN: 0x0510,                /*!< Down (VK_DOWN) */
	RZKEY_RIGHT: 0x0511,               /*!< Right (VK_RIGHT) */
	RZKEY_TAB: 0x0201,                 /*!< Tab (VK_TAB) */
	RZKEY_CAPSLOCK: 0x0301,            /*!< Caps Lock(VK_CAPITAL) */
	RZKEY_BACKSPACE: 0x010E,           /*!< Backspace (VK_BACK) */
	RZKEY_ENTER: 0x030E,               /*!< Enter (VK_RETURN) */
	RZKEY_LCTRL: 0x0501,               /*!< Left Control(VK_LCONTROL) */
	RZKEY_LWIN: 0x0502,                /*!< Left Window (VK_LWIN) */
	RZKEY_LALT: 0x0503,                /*!< Left Alt (VK_LMENU) */
	RZKEY_SPACE: 0x0507,               /*!< Spacebar (VK_SPACE) */
	RZKEY_RALT: 0x050B,                /*!< Right Alt (VK_RMENU) */
	RZKEY_FN: 0x050C,                  /*!< Function key. */
	RZKEY_RMENU: 0x050D,               /*!< Right Menu (VK_APPS) */
	RZKEY_RCTRL: 0x050E,               /*!< Right Control (VK_RCONTROL) */
	RZKEY_LSHIFT: 0x0401,              /*!< Left Shift (VK_LSHIFT) */
	RZKEY_RSHIFT: 0x040E,              /*!< Right Shift (VK_RSHIFT) */
	RZKEY_MACRO1: 0x0100,              /*!< Macro Key 1 */
	RZKEY_MACRO2: 0x0200,              /*!< Macro Key 2 */
	RZKEY_MACRO3: 0x0300,              /*!< Macro Key 3 */
	RZKEY_MACRO4: 0x0400,              /*!< Macro Key 4 */
	RZKEY_MACRO5: 0x0500,              /*!< Macro Key 5 */
	RZKEY_OEM_1: 0x0101,               /*!< ~ (tilde/åŠè§’/å…¨è§’) (VK_OEM_3) */
	RZKEY_OEM_2: 0x010C,               /*!< -- (minus) (VK_OEM_MINUS) */
	RZKEY_OEM_3: 0x010D,               /*!< = (equal) (VK_OEM_PLUS) */
	RZKEY_OEM_4: 0x020C,               /*!< [ (left sqaure bracket) (VK_OEM_4) */
	RZKEY_OEM_5: 0x020D,               /*!< ] (right square bracket) (VK_OEM_6) */
	RZKEY_OEM_6: 0x020E,               /*!< \ (backslash) (VK_OEM_5) */
	RZKEY_OEM_7: 0x030B,               /*!< ; (semi-colon) (VK_OEM_1) */
	RZKEY_OEM_8: 0x030C,               /*!< ' (apostrophe) (VK_OEM_7) */
	RZKEY_OEM_9: 0x040A,               /*!< , (comma) (VK_OEM_COMMA) */
	RZKEY_OEM_10: 0x040B,              /*!< . (period) (VK_OEM_PERIOD) */
	RZKEY_OEM_11: 0x040C,              /*!< / (forward slash) (VK_OEM_2) */
	RZKEY_EUR_1: 0x030D,               /*!< "#" (VK_OEM_5) */
	RZKEY_EUR_2: 0x0402,               /*!< \ (VK_OEM_102) */
	RZKEY_JPN_1: 0x0015,               /*!< Â¥ (0xFF) */
	RZKEY_JPN_2: 0x040D,               /*!< \ (0xC1) */
	RZKEY_JPN_3: 0x0504,               /*!< ç„¡å¤‰æ› (VK_OEM_PA1) */
	RZKEY_JPN_4: 0x0509,               /*!< å¤‰æ› (0xFF) */
	RZKEY_JPN_5: 0x050A,               /*!< ã²ã‚‰ãŒãª/ã‚«ã‚¿ã‚«ãƒŠ (0xFF) */
	RZKEY_KOR_1: 0x0015,               /*!< | (0xFF) */
	RZKEY_KOR_2: 0x030D,               /*!< (VK_OEM_5) */
	RZKEY_KOR_3: 0x0402,               /*!< (VK_OEM_102) */
	RZKEY_KOR_4: 0x040D,               /*!< (0xC1) */
	RZKEY_KOR_5: 0x0504,               /*!< (VK_OEM_PA1) */
	RZKEY_KOR_6: 0x0509,               /*!< í•œ/ì˜ (0xFF) */
	RZKEY_KOR_7: 0x050A,               /*!< (0xFF) */
	RZKEY_INVALID: 0xFFFF              /*!< Invalid keys. */
};

// keyboard leds
var RZLED = {
	RZLED_LOGO: 0x0014                 /*!< Razer logo */
};

// mouse leds
var Mouse = {};
Mouse.RZLED2 = {
  RZLED2_SCROLLWHEEL:   0x0203,  //!< Scroll Wheel LED.
  RZLED2_LOGO:          0x0703,  //!< Logo LED.
  RZLED2_BACKLIGHT:     0x0403,  //!< Backlight LED.
  RZLED2_LEFT_SIDE1:    0x0100,  //!< Left LED 1.
  RZLED2_LEFT_SIDE2:    0x0200,  //!< Left LED 2.
  RZLED2_LEFT_SIDE3:    0x0300,  //!< Left LED 3.
  RZLED2_LEFT_SIDE4:    0x0400,  //!< Left LED 4.
  RZLED2_LEFT_SIDE5:    0x0500,  //!< Left LED 5.
  RZLED2_LEFT_SIDE6:    0x0600,  //!< Left LED 6.
  RZLED2_LEFT_SIDE7:    0x0700,  //!< Left LED 7.
  RZLED2_BOTTOM1:       0x0801,  //!< Bottom LED 1.
  RZLED2_BOTTOM2:       0x0802,  //!< Bottom LED 2.
  RZLED2_BOTTOM3:       0x0803,  //!< Bottom LED 3.
  RZLED2_BOTTOM4:       0x0804,  //!< Bottom LED 4.
  RZLED2_BOTTOM5:       0x0805,  //!< Bottom LED 5.
  RZLED2_RIGHT_SIDE1:   0x0106,  //!< Right LED 1.
  RZLED2_RIGHT_SIDE2:   0x0206,  //!< Right LED 2.
  RZLED2_RIGHT_SIDE3:   0x0306,  //!< Right LED 3.
  RZLED2_RIGHT_SIDE4:   0x0406,  //!< Right LED 4.
  RZLED2_RIGHT_SIDE5:   0x0506,  //!< Right LED 5.
  RZLED2_RIGHT_SIDE6:   0x0606,  //!< Right LED 6.
  RZLED2_RIGHT_SIDE7:   0x0706   //!< Right LED 7.
};

function getHighByte(key) {
	return (key & 0xFF00) >> 8;
}

function getLowByte(key) {
	return (key & 0xFF);
}

var EChromaSDKDeviceTypeEnum = {
  'DE_1D': 0,
  'DE_2D': 1
};

var EChromaSDKDevice1DEnum = {
  'DE_ChromaLink': 0,
  'DE_Headset': 1,
  'DE_Mousepad': 2,
  'DE_MAX': 3
};

var EChromaSDKDevice2DEnum = {
  'DE_Keyboard': 0,
  'DE_Keypad': 1,
  'DE_Mouse': 2,
  'DE_MAX': 3
};

var EChromaSDKDeviceEnum = {
  'DE_ChromaLink': 0,
  'DE_Headset': 1,
  'DE_Keyboard': 2,
  'DE_Keypad': 3,
  'DE_Mouse': 4,
  'DE_Mousepad': 5,
  'DE_MAX': 6
};

function ChromaAnimationFrame1D() {
    var Duration = 0.1;
    var Colors = undefined;
}

function ChromaAnimationFrame2D() {
    var Duration = 0.1;
    var Colors = [];
}

var ChromaAnimation = {
  LoadedAnimations: {},
  LoadedAnimations1D: {},
  LoadedAnimations2D: {},
  PlayingAnimations1D: {},
  PlayingAnimations2D: {},
  UseIdleAnimation1D: {},
  UseIdleAnimation2D: {},
  IdleAnimation1D: {},
  IdleAnimation2D: {},
  IntervalUpdateFrame: undefined,
  updateFrame: function() {
    if (ChromaAnimation.IntervalUpdateFrame == undefined) {

      ChromaAnimation.useIdleAnimations(false);

      ChromaAnimation.IdleAnimation1D[EChromaSDKDevice1DEnum.DE_ChromaLink] = {};
      ChromaAnimation.IdleAnimation1D[EChromaSDKDevice1DEnum.DE_Headset] = {};
      ChromaAnimation.IdleAnimation1D[EChromaSDKDevice1DEnum.DE_Mousepad] = {};
      ChromaAnimation.IdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keyboard] = {};
      ChromaAnimation.IdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keypad] = {};
      ChromaAnimation.IdleAnimation2D[EChromaSDKDevice2DEnum.DE_Mouse] = {};

      ChromaAnimation.PlayingAnimations1D[EChromaSDKDevice1DEnum.DE_ChromaLink] = {};
      ChromaAnimation.PlayingAnimations1D[EChromaSDKDevice1DEnum.DE_Headset] = {};
      ChromaAnimation.PlayingAnimations1D[EChromaSDKDevice1DEnum.DE_Mousepad] = {};
      ChromaAnimation.PlayingAnimations2D[EChromaSDKDevice2DEnum.DE_Keyboard] = {};
      ChromaAnimation.PlayingAnimations2D[EChromaSDKDevice2DEnum.DE_Keypad] = {};
      ChromaAnimation.PlayingAnimations2D[EChromaSDKDevice2DEnum.DE_Mouse] = {};
      ChromaAnimation.IntervalUpdateFrame = setInterval(this.updateFrame, 33);
    }

    // 1D Devices
    for (var device = 0; device < EChromaSDKDevice1DEnum.DE_MAX; ++device) {
      var idleAnimation = ChromaAnimation.getAnimation(ChromaAnimation.IdleAnimation1D[device]);
      var useIdleAnimation = true;

      for (var animationName in ChromaAnimation.PlayingAnimations1D[device]) {
        var animation = ChromaAnimation.PlayingAnimations1D[device][animationName];
        if (animation != undefined) {
          animation.playFrame();
          if (idleAnimation != animation) {
            useIdleAnimation = false;
			
			if (idleAnimation != undefined) {
			  idleAnimation.FrameTime = animation.FrameTime;
			}
          }
        }
      }

      // play idle animation if no other animations are playing
      if (ChromaAnimation.UseIdleAnimation1D[device] &&
        idleAnimation != undefined) {
		if (useIdleAnimation) {
          idleAnimation.playFrame();
		}
      }
    }

    // 2D Devices
    for (var device = 0; device < EChromaSDKDevice2DEnum.DE_MAX; ++device) {
      var idleAnimation = ChromaAnimation.getAnimation(ChromaAnimation.IdleAnimation2D[device]);
      var useIdleAnimation = true;

      for (var animationName in ChromaAnimation.PlayingAnimations2D[device]) {
        var animation = ChromaAnimation.PlayingAnimations2D[device][animationName];
        if (animation != undefined) {
          animation.playFrame();
          if (idleAnimation != animation) {
            useIdleAnimation = false;
			
			if (idleAnimation != undefined) {
			  idleAnimation.FrameTime = animation.FrameTime;
			}
          }
        }
      }

      // play idle animation if no other animations are playing
      if (ChromaAnimation.UseIdleAnimation2D[device] &&
        idleAnimation != undefined) {
		if (useIdleAnimation) {
          idleAnimation.playFrame();
		}
	  }
    }

  },
  getMaxLeds : function(device) {
    if (device == EChromaSDKDevice1DEnum.DE_ChromaLink) {
      return 5;
    } else if (device == EChromaSDKDevice1DEnum.DE_Headset) {
      return 5;
    } else if (device == EChromaSDKDevice1DEnum.DE_Mousepad) {
      return 15;
    } else {
      console.log('getMaxLeds: Invalid device!');
      return undefined;
    }
  },
  getMaxRow : function(device) {
    if (device == EChromaSDKDevice2DEnum.DE_Keyboard) {
      return 6;
    } else if (device == EChromaSDKDevice2DEnum.DE_Keypad) {
      return 4;
    } else if (device == EChromaSDKDevice2DEnum.DE_Mouse) {
      return 9;
    } else {
      console.log('getMaxRow: Invalid device!');
      return undefined;
    }
  },
  getMaxColumn : function(device) {
    if (device == EChromaSDKDevice2DEnum.DE_Keyboard) {
      return 22;
 	    } else if (device == EChromaSDKDevice2DEnum.DE_Keypad) {
      return 5;
     	} else if (device == EChromaSDKDevice2DEnum.DE_Mouse) {
      return 7;
    } else {
      console.log('getMaxColumn: Invalid device!');
      return undefined;
    }
  },
  openAnimation : function (animationName, callback) {
    var refThis = this;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status != 200) {
          console.error('Animation is missing!', animationName);
          return;
        }
        //console.log('Animation Name:', animationName);

        var arrayBuffer = xhr.response;
        //console.log('Array Buffer:');
        //console.log(arrayBuffer);

        var readIndex = 0;
        var readSize = 4;
        var version = new Uint32Array(arrayBuffer.slice(readIndex, readIndex+readSize))[0];
        readIndex += readSize;
        //console.log('version:', version);

        if (version != 1) {
          console.log('openAnimation: Unsupported version!');
          return undefined;
        }

        readSize = 1;
        var deviceType = new Uint8Array(arrayBuffer.slice(readIndex, readIndex+readSize))[0];
        readIndex += readSize;
        //console.log('deviceType:', deviceType);

        if (deviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
          var animation = new ChromaAnimation1D();
          animation.openAnimation(arrayBuffer, readIndex);
          animation.Name = animationName;
          refThis.LoadedAnimations[animationName] = animation;
          callback(animation);
        } else if (deviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
          var animation = new ChromaAnimation2D();
          animation.openAnimation(arrayBuffer, readIndex);
          animation.Name = animationName;
          refThis.LoadedAnimations[animationName] = animation;
          if (callback != undefined) {
            callback(animation);
          }
        } else {
          if (callback != undefined) {
            callback(undefined);
          }
        }
      }
    }

    xhr.open('GET', animationName, true);
    xhr.responseType = "arraybuffer";
    xhr.send('');
  },
  getDeviceType(device) {
	  if (device == EChromaSDKDeviceEnum.DE_ChromaLink) {
		  return EChromaSDKDeviceTypeEnum.DE_1D;
	  } else if (device == EChromaSDKDeviceEnum.DE_Headset) {
		  return EChromaSDKDeviceTypeEnum.DE_1D;
	  } else if (device == EChromaSDKDeviceEnum.DE_Keyboard) {
		  return EChromaSDKDeviceTypeEnum.DE_2D;
	  } else if (device == EChromaSDKDeviceEnum.DE_Keypad) {
		  return EChromaSDKDeviceTypeEnum.DE_2D;
	  } else if (device == EChromaSDKDeviceEnum.DE_Mouse) {
		  return EChromaSDKDeviceTypeEnum.DE_2D;
	  } else if (device == EChromaSDKDeviceEnum.DE_Mousepad) {
		  return EChromaSDKDeviceTypeEnum.DE_1D;
	  } else {
		  return undefined;
	  }
  },
  getDevice1D(device) {
	  if (device == EChromaSDKDeviceEnum.DE_ChromaLink) {
		  return EChromaSDKDevice1DEnum.DE_ChromaLink;
	  } else if (device == EChromaSDKDeviceEnum.DE_Headset) {
		  return EChromaSDKDevice1DEnum.DE_Headset;
	  } else if (device == EChromaSDKDeviceEnum.DE_Mousepad) {
		  return EChromaSDKDevice1DEnum.DE_Mousepad;
	  } else {
		  return undefined;
	  }
  },
  getDevice2D(device) {
	  if (device == EChromaSDKDeviceEnum.DE_Keyboard) {
		  return EChromaSDKDevice2DEnum.DE_Keyboard;
	  } else if (device == EChromaSDKDeviceEnum.DE_Keypad) {
		  return EChromaSDKDevice2DEnum.DE_Keypad;
	  } else if (device == EChromaSDKDeviceEnum.DE_Mouse) {
		  return EChromaSDKDevice2DEnum.DE_Mouse;
	  } else {
		  return undefined;
	  }
  },
  getDeviceEnum(deviceType, device) {
	  if (deviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
        if (device == EChromaSDKDevice1DEnum.DE_ChromaLink) {
		  return EChromaSDKDeviceEnum.DE_ChromaLink;
		} else if (device == EChromaSDKDevice1DEnum.DE_Headset) {
		  return EChromaSDKDeviceEnum.DE_Headset;
		} else if (device == EChromaSDKDevice1DEnum.DE_Mousepad) {
		  return EChromaSDKDeviceEnum.DE_Mousepad;
		}
	  } else if (deviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
        if (device == EChromaSDKDevice2DEnum.DE_Keyboard) {
		  return EChromaSDKDeviceEnum.DE_Keyboard;
		} else if (device == EChromaSDKDevice2DEnum.DE_Keypad) {
		  return EChromaSDKDeviceEnum.DE_Keypad;
		} else if (device == EChromaSDKDevice2DEnum.DE_Mouse) {
		  return EChromaSDKDeviceEnum.DE_Mouse;
		}
	  } else {
	    return undefined;
	  }
  },
  lerp: function(start, end, amt) {
    return (1-amt)*start+amt*end;
  },
  lerpColor: function(from, to, t) {
    var red = Math.floor(this.lerp((from & 0xFF), (to & 0xFF), t));
    var green = Math.floor(this.lerp((from & 0xFF00) >> 8, (to & 0xFF00) >> 8, t));
    var blue = Math.floor(this.lerp((from & 0xFF0000) >> 16, (to & 0xFF0000) >> 16, t));
    var color = red | (green << 8) | (blue << 16);
    return color;
  },
  getAnimation: function(animationName) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return undefined;
    } else {
      return animation;
    }
  },
  getFrameCount: function(animationName) {
    var animation = this.getAnimation(animationName);
    if (animation == undefined) {
      return 0;
    } else {
      return animation.getFrameCount();
    }
  },
  stopByAnimationType: function(device) {
    if (chromaSDK == undefined) {
      setTimeout(function() { ChromaAnimation.stopByAnimationType(device); }, 100);
      return;
    }
    //1D
    if (this.getDeviceType(device) == EChromaSDKDeviceTypeEnum.DE_1D) {
	  var device1D = this.getDevice1D(device);
	  var animation = ChromaAnimation.LoadedAnimations1D[device1D];
      if (animation != undefined) {
        animation.stop();
      }
      ChromaAnimation.LoadedAnimations1D[device1D] = undefined;
    //2D
    } else if (this.getDeviceType(device) == EChromaSDKDeviceTypeEnum.DE_2D) {
	  var device2D = this.getDevice2D(device);
	  var animation = this.LoadedAnimations2D[device2D];
      if (animation != undefined) {
        animation.stop();
      }
      this.LoadedAnimations2D[device2D] = undefined;
    }
  },
  stopAll: function() {
	this.stopByAnimationType(EChromaSDKDeviceEnum.DE_ChromaLink);
	this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Headset);
	this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Keyboard);
	this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Keypad);
	this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Mouse);
	this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Mousepad);
  },
  isPlaying: function(animationName) {
    if (chromaSDK == undefined) {
      return false;
    }
    if (this.LoadedAnimations[animationName] != undefined) {
      return this.LoadedAnimations[animationName].isPlaying();
    }
    return false;
  },
  playAnimation: function(animationName, loop, frameCallback) {
    if (chromaSDK == undefined) {
      setTimeout(function() { ChromaAnimation.playAnimation(animationName, loop, frameCallback); }, 100);
      return;
    }
    if (this.LoadedAnimations[animationName] == undefined) {
      var refThis = this;
      ChromaAnimation.openAnimation(animationName,
        function (animation) {
          //console.log(animation);
          refThis.LoadedAnimations[animationName] = animation;
          //console.log('playAnimation:', animationName);
          animation.FrameCallback = frameCallback;
          switch (animation.DeviceType) {
            case EChromaSDKDeviceTypeEnum.DE_1D:
              ChromaAnimation.PlayingAnimations1D[animation.Device][animationName] = animation;
              break;
            case EChromaSDKDeviceTypeEnum.DE_2D:
              ChromaAnimation.PlayingAnimations2D[animation.Device][animationName] = animation;
              break;
          }
          animation.play(loop);
        });
    } else {
      var animation = this.LoadedAnimations[animationName];
      //console.log('playAnimation:', animationName);
      animation.FrameCallback = frameCallback;
      switch (animation.DeviceType) {
        case EChromaSDKDeviceTypeEnum.DE_1D:
          ChromaAnimation.PlayingAnimations1D[animation.Device][animationName] = animation;
          break;
        case EChromaSDKDeviceTypeEnum.DE_2D:
          ChromaAnimation.PlayingAnimations2D[animation.Device][animationName] = animation;
          break;
      }
      animation.play(loop);
    }
  },
  stopAnimation: function(animationName) {
    var animation = this.LoadedAnimations[animationName];
    if (animation != undefined) {
      this.LoadedAnimations[animationName].stop();
      switch (animation.DeviceType) {
        case EChromaSDKDeviceTypeEnum.DE_1D:
          ChromaAnimation.PlayingAnimations1D[animation.Device][animationName] = undefined;
          break;
        case EChromaSDKDeviceTypeEnum.DE_2D:
          ChromaAnimation.PlayingAnimations2D[animation.Device][animationName] = undefined;
          break;
      }
    }
  },
  closeAnimation: function(animationName) {
    if (this.LoadedAnimations[animationName] != undefined) {
      this.LoadedAnimations[animationName].stop();
      this.LoadedAnimations[animationName] = undefined;
    }
  },
  useIdleAnimation: function(device, flag) {
    switch (device) {
      case EChromaSDKDeviceEnum.DE_ChromaLink:
        ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_ChromaLink] = flag;
        break;
      case EChromaSDKDeviceEnum.DE_Headset:
        ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_Headset] = flag;
        break;
      case EChromaSDKDeviceEnum.DE_Mousepad:
        ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_Mousepad] = flag;
        break;
      case EChromaSDKDeviceEnum.DE_Keyboard:
        ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keyboard] = flag;
        break;
      case EChromaSDKDeviceEnum.DE_Keypad:
        ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keypad] = flag;
        break;
      case EChromaSDKDeviceEnum.DE_Mouse:
        ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Mouse] = flag;
        break;
    }
  },
  useIdleAnimations: function(flag) {
    ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_ChromaLink] = flag;
    ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_Headset] = flag;
    ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_Mousepad] = flag;
    ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keyboard] = flag;
    ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keypad] = flag;
    ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Mouse] = flag;
  },
  setIdleAnimation: function(animationName) {
    var animation = ChromaAnimation.LoadedAnimations[animationName];
    if (animation == undefined) {
      ChromaAnimation.openAnimation(animationName, function (animation) {
        switch (animation.DeviceType) {
          case EChromaSDKDeviceTypeEnum.DE_1D:
            ChromaAnimation.IdleAnimation1D[animation.Device] = animationName;
            break;
          case EChromaSDKDeviceTypeEnum.DE_2D:
            ChromaAnimation.IdleAnimation2D[animation.Device] = animationName;
            break;
        }
      });
    } else {
      switch (animation.DeviceType) {
        case EChromaSDKDeviceTypeEnum.DE_1D:
          ChromaAnimation.IdleAnimation1D[animation.Device] = animationName;
          break;
        case EChromaSDKDeviceTypeEnum.DE_2D:
          ChromaAnimation.IdleAnimation2D[animation.Device] = animationName;
          break;
      }
    }
  },
  reverseAllFrames: function (animationName) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    animation.Frames = animation.Frames.reverse();
  },
  setKeysColor: function(animationName, frameId, keys, color) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < frames.length) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          for (var k = 0; k < keys.length; ++k) {
            var key = keys[k];
            if (getHighByte(key) == i &&
              getLowByte(key) == j) {
              row[j] = color;
            }
          }
        }
      }
    }
  },
  setKeysColorRGB: function(animationName, frameId, keys, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    var color = ChromaAnimation.getRGB(red, green, blue);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < frames.length) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          for (var k = 0; k < keys.length; ++k) {
            var key = keys[k];
            if (getHighByte(key) == i &&
              getLowByte(key) == j) {
              row[j] = color;
            }
          }
        }
      }
    }
  },
  setKeyColor: function(animationName, frameId, key, color) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < frames.length) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          if (getHighByte(key) == i &&
            getLowByte(key) == j) {
            row[j] = color;
          }
        }
      }
    }
  },
  setKeyColorAllFrames: function(animationName, key, color) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          if (getHighByte(key) == i &&
            getLowByte(key) == j) {
            row[j] = color;
          }
        }
      }
    }
  },
  setKeyColorAllFramesRGB: function(animationName, key, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    var color = (red & 0xFF) | ((green & 0xFF) << 8) | ((blue & 0xFF) << 16);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          if (getHighByte(key) == i &&
            getLowByte(key) == j) {
            row[j] = color;
          }
        }
      }
    }
  },
  setKeysColorAllFrames: function(animationName, keys, color) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          for (var k = 0; k < keys.length; ++k) {
            var key = keys[k];
            if (getHighByte(key) == i &&
              getLowByte(key) == j) {
              row[j] = color;
            }
          }
        }
      }
    }
  },
  setKeysColorAllFramesRGB: function(animationName, keys, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    var color = (red & 0xFF) | ((green & 0xFF) << 8) | ((blue & 0xFF) << 16);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          for (var k = 0; k < keys.length; ++k) {
            var key = keys[k];
            if (getHighByte(key) == i &&
              getLowByte(key) == j) {
              row[j] = color;
            }
          }
        }
      }
    }
  },
  copyKeyColorAllFrames: function(sourceAnimationName, targetAnimationName, key) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
      var sourceFrame = sourceFrames[frameId % sourceFrames.length];
      var targetFrame = targetFrames[frameId];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          if (getHighByte(key) == i &&
            getLowByte(key) == j) {
            targetRow[j] = sourceRow[j];
          }
        }
      }
    }
  },
  copyKeyColorAllFramesOffset: function(sourceAnimationName, targetAnimationName, key, offset) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < sourceFrames.length && (frameId+offset) < targetFrames.length; ++frameId) {
      var sourceFrame = sourceFrames[frameId];
      var targetFrame = targetFrames[(frameId+offset) % targetFrames.length];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          if (getHighByte(key) == i &&
            getLowByte(key) == j) {
            targetRow[j] = sourceRow[j];
          }
        }
      }
    }
  },
  copyKeysColorAllFrames: function(sourceAnimationName, targetAnimationName, keys) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
      var sourceFrame = sourceFrames[frameId % sourceFrames.length];
      var targetFrame = targetFrames[frameId];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          for (var k = 0; k < keys.length; ++k) {
            var key = keys[k];
            if (getHighByte(key) == i &&
              getLowByte(key) == j) {
              targetRow[j] = sourceRow[j];
            }
          }
        }
      }
    }
  },
  copyNonZeroAllKeys: function(sourceAnimationName, targetAnimationName, frameId) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < targetFrames.length) {
      var sourceFrame = sourceFrames[frameId % sourceFrames.length];
      var targetFrame = targetFrames[frameId];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color != 0) {
            targetRow[j] = color;
          }
        }
      }
    }
  },
  copyNonZeroAllKeysAllFrames: function(sourceAnimationName, targetAnimationName) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != targetAnimation.DeviceType ||
      sourceAnimation.Device != targetAnimation.Device) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    if (sourceAnimation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(sourceAnimation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
        var sourceFrame = sourceFrames[frameId % sourceFrames.length];
        var targetFrame = targetFrames[frameId];
        var sourceColors = sourceFrame.Colors;
        var targetColors = targetFrame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = sourceColors[i];
          if (color != 0) {
            targetColors[i] = color;
          }
        }
      }
    } else if (sourceAnimation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(sourceAnimation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(sourceAnimation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
        var sourceFrame = sourceFrames[frameId % sourceFrames.length];
        var targetFrame = targetFrames[frameId];
        var sourceColors = sourceFrame.Colors;
        var targetColors = targetFrame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var sourceRow = sourceColors[i];
          var targetRow = targetColors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = sourceRow[j];
            if (color != 0) {
              targetRow[j] = color;
            }
          }
        }
      }
    }
  },
  addNonZeroAllKeysAllFrames: function(sourceAnimationName, targetAnimationName) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != targetAnimation.DeviceType ||
      sourceAnimation.Device != targetAnimation.Device) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    if (sourceAnimation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(sourceAnimation.Device);
      for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
        var sourceFrame = sourceFrames[frameId % sourceFrames.length];
        var targetFrame = targetFrames[frameId];
        var sourceColors = sourceFrame.Colors;
        var targetColors = targetFrame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = sourceColors[i];
          if (color != 0) {
            var sourceRed = color & 0xFF;
            var sourceGreen = (color & 0xFF00) >> 8;
            var sourceBlue = (color & 0xFF0000) >> 16;

            var oldColor = targetColors[i];
            var oldRed = oldColor & 0xFF;
            var oldGreen = (oldColor & 0xFF00) >> 8;
            var oldBlue = (oldColor & 0xFF0000) >> 16;

            var red = Math.min(255, Math.max(0, Number(oldRed) + Number(sourceRed))) & 0xFF;
            var green = Math.min(255, Math.max(0, Number(oldGreen) + Number(sourceGreen))) & 0xFF;
            var blue = Math.min(255, Math.max(0, Number(oldBlue) + Number(sourceBlue))) & 0xFF;
            var newColor = red | (green << 8) | (blue << 16);

            targetColors[i] = newColor;
          }
        }
      }
    } else if (sourceAnimation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(sourceAnimation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(sourceAnimation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
        var sourceFrame = sourceFrames[frameId % sourceFrames.length];
        var targetFrame = targetFrames[frameId];
        var sourceColors = sourceFrame.Colors;
        var targetColors = targetFrame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var sourceRow = sourceColors[i];
          var targetRow = targetColors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = sourceRow[j];
            if (color != 0) {
              var sourceRed = color & 0xFF;
              var sourceGreen = (color & 0xFF00) >> 8;
              var sourceBlue = (color & 0xFF0000) >> 16;

              var oldColor = targetRow[j];
              var oldRed = oldColor & 0xFF;
              var oldGreen = (oldColor & 0xFF00) >> 8;
              var oldBlue = (oldColor & 0xFF0000) >> 16;

              var red = Math.min(255, Math.max(0, Number(oldRed) + Number(sourceRed))) & 0xFF;
              var green = Math.min(255, Math.max(0, Number(oldGreen) + Number(sourceGreen))) & 0xFF;
              var blue = Math.min(255, Math.max(0, Number(oldBlue) + Number(sourceBlue))) & 0xFF;
              var newColor = red | (green << 8) | (blue << 16);

              targetRow[j] = newColor;
            }
          }
        }
      }
    }
  },
  subtractNonZeroAllKeysAllFrames: function(sourceAnimationName, targetAnimationName) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != targetAnimation.DeviceType ||
      sourceAnimation.Device != targetAnimation.Device) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    if (sourceAnimation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(sourceAnimation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
        var sourceFrame = sourceFrames[frameId % sourceFrames.length];
        var targetFrame = targetFrames[frameId];
        var sourceColors = sourceFrame.Colors;
        var targetColors = targetFrame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = sourceColors[i];
          if (color != 0) {
            var sourceRed = color & 0xFF;
            var sourceGreen = (color & 0xFF00) >> 8;
            var sourceBlue = (color & 0xFF0000) >> 16;

            var oldColor = targetColors[i];
            var oldRed = oldColor & 0xFF;
            var oldGreen = (oldColor & 0xFF00) >> 8;
            var oldBlue = (oldColor & 0xFF0000) >> 16;

            var red = Math.min(255, Math.max(0, Number(oldRed) - Number(sourceRed))) & 0xFF;
            var green = Math.min(255, Math.max(0, Number(oldGreen) - Number(sourceGreen))) & 0xFF;
            var blue = Math.min(255, Math.max(0, Number(oldBlue) - Number(sourceBlue))) & 0xFF;
            var newColor = red | (green << 8) | (blue << 16);

            targetColors[i] = newColor;
          }
        }
      }
    } else if (sourceAnimation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(sourceAnimation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(sourceAnimation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
        var sourceFrame = sourceFrames[frameId % sourceFrames.length];
        var targetFrame = targetFrames[frameId];
        var sourceColors = sourceFrame.Colors;
        var targetColors = targetFrame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var sourceRow = sourceColors[i];
          var targetRow = targetColors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = sourceRow[j];
            if (color != 0) {
              var sourceRed = color & 0xFF;
              var sourceGreen = (color & 0xFF00) >> 8;
              var sourceBlue = (color & 0xFF0000) >> 16;

              var oldColor = targetRow[j];
              var oldRed = oldColor & 0xFF;
              var oldGreen = (oldColor & 0xFF00) >> 8;
              var oldBlue = (oldColor & 0xFF0000) >> 16;

              var red = Math.min(255, Math.max(0, Number(oldRed) - Number(sourceRed))) & 0xFF;
              var green = Math.min(255, Math.max(0, Number(oldGreen) - Number(sourceGreen))) & 0xFF;
              var blue = Math.min(255, Math.max(0, Number(oldBlue) - Number(sourceBlue))) & 0xFF;
              var newColor = red | (green << 8) | (blue << 16);

              targetRow[j] = newColor;
            }
          }
        }
      }
    }
  },
  addNonZeroAllKeysAllFramesOffset: function(sourceAnimationName, targetAnimationName, offset) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = sourceFrames.length-1; frameId >= 0; --frameId) {
      var sourceFrame = sourceFrames[frameId];
      var targetFrame = targetFrames[(frameId+offset) % targetFrames.length];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color != 0) {
            var sourceRed = color & 0xFF;
            var sourceGreen = (color & 0xFF00) >> 8;
            var sourceBlue = (color & 0xFF0000) >> 16;

            var oldColor = targetRow[j];
            var oldRed = oldColor & 0xFF;
            var oldGreen = (oldColor & 0xFF00) >> 8;
            var oldBlue = (oldColor & 0xFF0000) >> 16;

            var red = Math.min(255, Math.max(0, Number(oldRed) + Number(sourceRed))) & 0xFF;
            var green = Math.min(255, Math.max(0, Number(oldGreen) + Number(sourceGreen))) & 0xFF;
            var blue = Math.min(255, Math.max(0, Number(oldBlue) + Number(sourceBlue))) & 0xFF;
            var newColor = red | (green << 8) | (blue << 16);

            targetRow[j] = newColor;
          }
        }
      }
    }
  },
  subtractNonZeroAllKeysAllFramesOffset: function(sourceAnimationName, targetAnimationName, offset) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < sourceFrames.length && frameId < targetFrames.length; ++frameId) {
      var sourceFrame = sourceFrames[frameId];
      var targetFrame = targetFrames[(frameId+offset) % targetFrames.length];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color != 0) {
            var sourceRed = color & 0xFF;
            var sourceGreen = (color & 0xFF00) >> 8;
            var sourceBlue = (color & 0xFF0000) >> 16;

            var oldColor = targetRow[j];
            var oldRed = oldColor & 0xFF;
            var oldGreen = (oldColor & 0xFF00) >> 8;
            var oldBlue = (oldColor & 0xFF0000) >> 16;

            var red = Math.min(255, Math.max(0, Number(oldRed) - Number(sourceRed))) & 0xFF;
            var green = Math.min(255, Math.max(0, Number(oldGreen) - Number(sourceGreen))) & 0xFF;
            var blue = Math.min(255, Math.max(0, Number(oldBlue) - Number(sourceBlue))) & 0xFF;
            var newColor = red | (green << 8) | (blue << 16);

            targetRow[j] = newColor;
          }
        }
      }
    }
  },
  copyNonZeroAllKeysOffset: function(sourceAnimationName, targetAnimationName, frameId, offset) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < sourceFrames.length) {
      var sourceFrame = sourceFrames[frameId];
      var targetFrame = targetFrames[(frameId+offset) % targetFrames.length];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color != 0) {
            targetRow[j] = color;
          }
        }
      }
    }
  },
  copyNonZeroAllKeysAllFramesOffset: function(sourceAnimationName, targetAnimationName, offset) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < sourceFrames.length && (frameId+offset) < targetFrames.length; ++frameId) {
      var sourceFrame = sourceFrames[frameId];
      var targetFrame = targetFrames[(frameId+offset) % targetFrames.length];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color != 0) {
            targetRow[j] = color;
          }
        }
      }
    }
  },
  copyNonZeroTargetAllKeys: function(sourceAnimationName, targetAnimationName, frameId) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < targetFrames.length) {
      var sourceFrame = sourceFrames[frameId % sourceFrames.length];
      var targetFrame = targetFrames[frameId];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color != 0 &&
            targetRow[j] != 0) {
            targetRow[j] = color;
          }
        }
      }
    }
  },
  copyNonZeroTargetAllKeysAllFrames: function(sourceAnimationName, targetAnimationName) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    if (sourceAnimation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(sourceAnimation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
        var sourceFrame = sourceFrames[frameId % sourceFrames.length];
        var targetFrame = targetFrames[frameId];
        var sourceColors = sourceFrame.Colors;
        var targetColors = targetFrame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var sourceColor = sourceColors[i];
          var targetColor = targetColors[i];
          if (sourceColor != 0 &&
            targetColor != 0) {
            targetColors[i] = sourceColor;
          }
        }
      }
    } else if (sourceAnimation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(sourceAnimation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(sourceAnimation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
        var sourceFrame = sourceFrames[frameId % sourceFrames.length];
        var targetFrame = targetFrames[frameId];
        var sourceColors = sourceFrame.Colors;
        var targetColors = targetFrame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var sourceRow = sourceColors[i];
          var targetRow = targetColors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = sourceRow[j];
            if (color != 0 &&
              targetRow[j] != 0) {
              targetRow[j] = color;
            }
          }
        }
      }
    }
  },
  copyNonZeroTargetZeroAllKeysAllFrames: function(sourceAnimationName, targetAnimationName) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
      var sourceFrame = sourceFrames[frameId % sourceFrames.length];
      var targetFrame = targetFrames[frameId];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color != 0 &&
            targetRow[j] == 0) {
            targetRow[j] = color;
          }
        }
      }
    }
  },
  copyNonZeroTargetAllKeysAllFramesOffset: function(sourceAnimationName, targetAnimationName, offset) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
      var sourceFrame = sourceFrames[frameId];
      var targetFrame = targetFrames[(frameId+offset) % targetFrames.length];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color != 0 &&
            targetRow[j] != 0) {
            targetRow[j] = color;
          }
        }
      }
    }
  },
  addNonZeroTargetAllKeysAllFrames: function(sourceAnimationName, targetAnimationName) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
      var sourceFrame = sourceFrames[frameId % sourceFrames.length];
      var targetFrame = targetFrames[frameId];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color != 0 &&
            targetRow[j] != 0) {
            var sourceRed = color & 0xFF;
            var sourceGreen = (color & 0xFF00) >> 8;
            var sourceBlue = (color & 0xFF0000) >> 16;

            var oldColor = targetRow[j];
            var oldRed = oldColor & 0xFF;
            var oldGreen = (oldColor & 0xFF00) >> 8;
            var oldBlue = (oldColor & 0xFF0000) >> 16;

            var red = Math.min(255, Math.max(0, Number(oldRed) + Number(sourceRed))) & 0xFF;
            var green = Math.min(255, Math.max(0, Number(oldGreen) + Number(sourceGreen))) & 0xFF;
            var blue = Math.min(255, Math.max(0, Number(oldBlue) + Number(sourceBlue))) & 0xFF;
            var newColor = red | (green << 8) | (blue << 16);

            targetRow[j] = newColor;
          }
        }
      }
    }
  },
  subtractNonZeroTargetAllKeysAllFrames: function(sourceAnimationName, targetAnimationName) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
      var sourceFrame = sourceFrames[frameId % sourceFrames.length];
      var targetFrame = targetFrames[frameId];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color != 0 &&
            targetRow[j] != 0) {
            var sourceRed = color & 0xFF;
            var sourceGreen = (color & 0xFF00) >> 8;
            var sourceBlue = (color & 0xFF0000) >> 16;

            var oldColor = targetRow[j];
            var oldRed = oldColor & 0xFF;
            var oldGreen = (oldColor & 0xFF00) >> 8;
            var oldBlue = (oldColor & 0xFF0000) >> 16;

            var red = Math.min(255, Math.max(0, Number(oldRed) - Number(sourceRed))) & 0xFF;
            var green = Math.min(255, Math.max(0, Number(oldGreen) - Number(sourceGreen))) & 0xFF;
            var blue = Math.min(255, Math.max(0, Number(oldBlue) - Number(sourceBlue))) & 0xFF;
            var newColor = red | (green << 8) | (blue << 16);

            targetRow[j] = newColor;
          }
        }
      }
    }
  },
  copyZeroTargetAllKeysAllFrames: function(sourceAnimationName, targetAnimationName) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
      var sourceFrame = sourceFrames[frameId % sourceFrames.length];
      var targetFrame = targetFrames[frameId];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color == 0 &&
            targetRow[j] != 0) {
            targetRow[j] = color;
          }
        }
      }
    }
  },
  copyZeroTargetZeroAllKeysAllFrames: function(sourceAnimationName, targetAnimationName) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    if (sourceAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      sourceAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    if (targetAnimation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      targetAnimation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    if (sourceFrames.length == 0) {
      return;
    }
    var targetFrames = targetAnimation.Frames;
    if (targetFrames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < targetFrames.length; ++frameId) {
      var sourceFrame = sourceFrames[frameId % sourceFrames.length];
      var targetFrame = targetFrames[frameId];
      var sourceColors = sourceFrame.Colors;
      var targetColors = targetFrame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var sourceRow = sourceColors[i];
        var targetRow = targetColors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = sourceRow[j];
          if (color == 0 &&
            targetRow[j] == 0) {
            targetRow[j] = color;
          }
        }
      }
    }
  },
  fillColor: function(animationName, frameId, newColor) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          colors[i] = newColor;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            row[j] = newColor;
          }
        }
      }
    }
  },
  fillColorRGB: function(animationName, frameId, red, green, blue) {
    var newColor = this.getRGB(red, green, blue);
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          colors[i] = newColor;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            row[j] = newColor;
          }
        }
      }
    }
  },
  fillNonZeroColor: function(animationName, frameId, newColor) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < frames.length) {
      var frame = frames[frameId];
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          if (color != 0) {
            row[j] = newColor;
          }
        }
      }
    }
  },
  fillNonZeroColorRGB: function(animationName, frameId, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    var newColor = ChromaAnimation.getRGB(red, green, blue);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < frames.length) {
      var frame = frames[frameId];
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          if (color != 0) {
            row[j] = newColor;
          }
        }
      }
    }
  },
  fillNonZeroColorAllFrames: function(animationName, newColor) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          if (color != 0) {
            row[j] = newColor;
          }
        }
      }
    }
  },
  fillNonZeroColorAllFramesRGB: function(animationName, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    var newColor = red | (green << 8) | (blue << 16);
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          if (color != 0) {
            colors[i] = newColor;
          }
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            if (color != 0) {
              row[j] = newColor;
            }
          }
        }
      }
    }
  },
  fillZeroColor: function(animationName, frameId, newColor) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          if (color == 0) {
            colors[i] = newColor;
          }
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            if (color == 0) {
              row[j] = newColor;
            }
          }
        }
      }
    }
  },
  fillZeroColorAllFrames: function(animationName, newColor) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          if (color == 0) {
            colors[i] = newColor;
          }
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            if (color == 0) {
              row[j] = newColor;
            }
          }
        }
      }
    }
  },
  fillZeroColorAllFramesRGB: function(animationName, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    var newColor = red | (green << 8) | (blue << 16);
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          if (color == 0) {
            colors[i] = newColor;
          }
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            if (color == 0) {
              row[j] = newColor;
            }
          }
        }
      }
    }
  },
  fillThresholdColors: function(animationName, frameId, threshold, color) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < frames.length) {
      var frame = frames[frameId];
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var oldColor = row[j];
          var red = oldColor & 0xFF;
          var green = (oldColor & 0xFF00) >> 8;
          var blue = (oldColor & 0xFF0000) >> 16;
          if (red != 0 &&
            green != 0 &&
            blue != 0 &&
            red <= threshold &&
            green <= threshold &&
            blue <= threshold) {
            row[j] = color;
          }
        }
      }
    }
  },
  fillThresholdColorsAllFrames: function(animationName, threshold, color) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var oldColor = colors[i];
          var red = oldColor & 0xFF;
          var green = (oldColor & 0xFF00) >> 8;
          var blue = (oldColor & 0xFF0000) >> 16;
          if ((red != 0 ||
            green != 0 ||
            blue != 0) &&
            red <= threshold &&
            green <= threshold &&
            blue <= threshold) {
            colors[i] = color;
          }
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var oldColor = row[j];
            var red = oldColor & 0xFF;
            var green = (oldColor & 0xFF00) >> 8;
            var blue = (oldColor & 0xFF0000) >> 16;
            if ((red != 0 ||
              green != 0 ||
              blue != 0) &&
              red <= threshold &&
              green <= threshold &&
              blue <= threshold) {
              row[j] = color;
            }
          }
        }
      }
    }
  },
  fillThresholdColorsRGB: function(animationName, frameId, threshold, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      var color = ChromaAnimation.getRGB(red, green, blue);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var oldColor = colors[i];
          var red = oldColor & 0xFF;
          var green = (oldColor & 0xFF00) >> 8;
          var blue = (oldColor & 0xFF0000) >> 16;
          if ((red != 0 ||
            green != 0 ||
            blue != 0) &&
            red <= threshold &&
            green <= threshold &&
            blue <= threshold) {
            colors[i] = color;
          }
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      var color = ChromaAnimation.getRGB(red, green, blue);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var oldColor = row[j];
            var red = oldColor & 0xFF;
            var green = (oldColor & 0xFF00) >> 8;
            var blue = (oldColor & 0xFF0000) >> 16;
            if ((red != 0 ||
              green != 0 ||
              blue != 0) &&
              red <= threshold &&
              green <= threshold &&
              blue <= threshold) {
              row[j] = color;
            }
          }
        }
      }
    }
  },
  fillThresholdColorsAllFramesRGB: function(animationName, threshold, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      var color = ChromaAnimation.getRGB(red, green, blue);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var oldColor = colors[i];
          var red = oldColor & 0xFF;
          var green = (oldColor & 0xFF00) >> 8;
          var blue = (oldColor & 0xFF0000) >> 16;
          if ((red != 0 ||
            green != 0 ||
            blue != 0) &&
            red <= threshold &&
            green <= threshold &&
            blue <= threshold) {
            colors[i] = color;
          }
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      var color = ChromaAnimation.getRGB(red, green, blue);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var oldColor = row[j];
            var red = oldColor & 0xFF;
            var green = (oldColor & 0xFF00) >> 8;
            var blue = (oldColor & 0xFF0000) >> 16;
            if ((red != 0 ||
              green != 0 ||
              blue != 0) &&
              red <= threshold &&
              green <= threshold &&
              blue <= threshold) {
              row[j] = color;
            }
          }
        }
      }
    }
  },
  fillThresholdColorsMinMaxRGB: function(animationName, frameId, minThreshold, minRed, minGreen, minBlue, maxThreshold, maxRed, maxGreen, maxBlue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    var minColor = ChromaAnimation.getRGB(minRed, minGreen, minBlue);
    var maxColor = ChromaAnimation.getRGB(maxRed, maxGreen, maxBlue);
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var oldColor = colors[i];
          var red = oldColor & 0xFF;
          var green = (oldColor & 0xFF00) >> 8;
          var blue = (oldColor & 0xFF0000) >> 16;
          if (red != 0 ||
            green != 0 ||
            blue != 0) {
            if (red <= minThreshold &&
              green <= minThreshold &&
              blue <= minThreshold) {
              colors[i] = minColor;
            } else if (red >= maxThreshold ||
              green >= maxThreshold ||
              blue >= maxThreshold) {
              colors[i] = maxColor;
            }
          }
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
      var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var oldColor = row[j];
            var red = oldColor & 0xFF;
            var green = (oldColor & 0xFF00) >> 8;
            var blue = (oldColor & 0xFF0000) >> 16;
            if (red != 0 ||
              green != 0 ||
              blue != 0) {
              if (red <= minThreshold &&
                green <= minThreshold &&
                blue <= minThreshold) {
                row[j] = minColor;
              } else if (red >= maxThreshold ||
                green >= maxThreshold ||
                blue >= maxThreshold) {
                row[j] = maxColor;
              }
            }
          }
        }
      }
    }
  },
  fillThresholdColorsMinMaxAllFramesRGB: function(animationName, minThreshold, minRed, minGreen, minBlue, maxThreshold, maxRed, maxGreen, maxBlue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      var minColor = ChromaAnimation.getRGB(minRed, minGreen, minBlue);
      var maxColor = ChromaAnimation.getRGB(maxRed, maxGreen, maxBlue);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var oldColor = colors[i];
          var red = oldColor & 0xFF;
          var green = (oldColor & 0xFF00) >> 8;
          var blue = (oldColor & 0xFF0000) >> 16;
          if (red != 0 ||
            green != 0 ||
            blue != 0) {
            if (red <= minThreshold &&
              green <= minThreshold &&
              blue <= minThreshold) {
              colors[i] = minColor;
            } else if (red >= maxThreshold ||
              green >= maxThreshold ||
              blue >= maxThreshold) {
              colors[i] = maxColor;
            }
          }
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      var minColor = ChromaAnimation.getRGB(minRed, minGreen, minBlue);
      var maxColor = ChromaAnimation.getRGB(maxRed, maxGreen, maxBlue);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var oldColor = row[j];
            var red = oldColor & 0xFF;
            var green = (oldColor & 0xFF00) >> 8;
            var blue = (oldColor & 0xFF0000) >> 16;
            if (red != 0 ||
              green != 0 ||
              blue != 0) {
              if (red <= minThreshold &&
                green <= minThreshold &&
                blue <= minThreshold) {
                row[j] = minColor;
              } else if (red >= maxThreshold ||
                green >= maxThreshold ||
                blue >= maxThreshold) {
                row[j] = maxColor;
              }
            }
          }
        }
      }
    }
  },
  fillThresholdRGBColorsAllFramesRGB: function(animationName, redThreshold, greenThreshold, blueThreshold, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    var color = ChromaAnimation.getRGB(red, green, blue);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var oldColor = row[j];
          var red = oldColor & 0xFF;
          var green = (oldColor & 0xFF00) >> 8;
          var blue = (oldColor & 0xFF0000) >> 16;
          if ((red != 0 ||
            green != 0 ||
            blue != 0) &&
            red <= redThreshold &&
            green <= greenThreshold &&
            blue <= blueThreshold) {
            row[j] = color;
          }
        }
      }
    }
  },
  fillRandomColors: function(animationName, frameId) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < frames.length) {
      var frame = frames[frameId];
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var red = Math.floor(Math.random() * 256) % 256;
          var green = Math.floor(Math.random() * 256) % 256;
          var blue = Math.floor(Math.random() * 256) % 256;
          var color = red | (green << 8) | (blue << 16);
          row[j] = color;
        }
      }
    }
  },
  fillRandomColorsAllFrames: function(animationName) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var red = Math.floor(Math.random() * 256) % 256;
          var green = Math.floor(Math.random() * 256) % 256;
          var blue = Math.floor(Math.random() * 256) % 256;
          var color = red | (green << 8) | (blue << 16);
          colors[i] = color;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var red = Math.floor(Math.random() * 256) % 256;
            var green = Math.floor(Math.random() * 256) % 256;
            var blue = Math.floor(Math.random() * 256) % 256;
            var color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  fillRandomColorsBlackAndWhite: function(animationName, frameId) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < frames.length) {
      var frame = frames[frameId];
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var c = Math.floor(Math.random() * 256) % 256;
          var red = c;
          var green = c;
          var blue = c;
          var color = red | (green << 8) | (blue << 16);
          row[j] = color;
        }
      }
    }
  },
  fillRandomColorsBlackAndWhiteAllFrames: function(animationName) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }
    //console.log(animation.Frames);
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var c = Math.floor(Math.random() * 256) % 256;
          var red = c;
          var green = c;
          var blue = c;
          var color = red | (green << 8) | (blue << 16);
          colors[i] = color;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var c = Math.floor(Math.random() * 256) % 256;
            var red = c;
            var green = c;
            var blue = c;
            var color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  invertColorsAllFrames: function(animationName) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (frames.length == 0) {
      return;
    }

    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          var red = 255 - (color & 0xFF);
          var green = 255 - ((color & 0xFF00) >> 8);
          var blue = 255 - ((color & 0xFF0000) >> 16);
          color = red | (green << 8) | (blue << 16);
          colors[i] = color;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            var red = 255 - (color & 0xFF);
            var green = 255 - ((color & 0xFF00) >> 8);
            var blue = 255 - ((color & 0xFF0000) >> 16);
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  insertFrame: function(animationName, sourceFrame, targetFrame) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    if (animation.Frames.length == 0) {
      console.error('insertFrame', 'Frame length is zero!', animationName)
      return;
    }
    if (sourceFrame < 0 ||
      sourceFrame >= animation.Frames.length) {
      return;
    }
    var copyFrame = animation.Frames[sourceFrame];
    var frames = [];
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < animation.Frames.length; ++frameId) {
        var oldFrame = animation.Frames[frameId];
        if (frameId == targetFrame) {
          var frame = new ChromaAnimationFrame1D();
          frame.Colors = new Array(maxLeds);
          for (var i = 0; i < maxLeds; ++i) {
            frame.Colors[i] = copyFrame.Colors[i];
          }
          frame.Duration = copyFrame.Duration;
          frames.push(frame);
        }
        frames.push(oldFrame);
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < animation.Frames.length; ++frameId) {
        var oldFrame = animation.Frames[frameId];
        if (frameId == targetFrame) {
          var frame = new ChromaAnimationFrame2D();
          frame.Colors = new Array(maxRow);
          for (var i = 0; i < maxRow; ++i) {
            frame.Colors[i] = new Array(maxColumn);
            for (var j = 0; j < maxColumn; ++j) {
              frame.Colors[i][j] = copyFrame.Colors[i][j];
            }
          }
          frame.Duration = copyFrame.Duration;
          frames.push(frame);
        }
        frames.push(oldFrame);
      }
    }
    animation.Frames = frames;
  },
  insertDelay: function(animationName, frameId, delay) {
    for (var i = 0; i < delay; ++i) {
      this.insertFrame(animationName, frameId, frameId);
    }
  },
  appendAllFrames: function(sourceAnimationName, targetAnimationName) {
    var sourceAnimation = this.LoadedAnimations[sourceAnimationName];
    if (sourceAnimation == undefined) {
      return;
    }
    var targetAnimation = this.LoadedAnimations[targetAnimationName];
    if (targetAnimation == undefined) {
      return;
    }
    this.stopAnimation(targetAnimationName);
    if (sourceAnimation.Frames.length == 0) {
      console.error('appendAllFrames', 'Source Frame length is zero!', animationName)
      return;
    }
    var sourceFrames = sourceAnimation.Frames;
    var targetFrames = targetAnimation.Frames;
    var frameCount = sourceFrames.length;
    if (sourceAnimation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(sourceAnimation.Device);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var sourceFrame = sourceFrames[frameId];
        var frame = new ChromaAnimationFrame1D();
        frame.Colors = new Array(maxLeds);
        for (var i = 0; i < maxLeds; ++i) {
          frame.Colors[i] = sourceFrame.Colors[i];
        }
        frame.Duration = sourceFrame.Duration;
        targetFrames.push(frame);
      }
    } else if (sourceAnimation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(sourceAnimation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(sourceAnimation.Device);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var sourceFrame = sourceFrames[frameId];
        var frame = new ChromaAnimationFrame2D();
        frame.Colors = new Array(maxRow);
        for (var i = 0; i < maxRow; ++i) {
          frame.Colors[i] = new Array(maxColumn);
          for (var j = 0; j < maxColumn; ++j) {
            frame.Colors[i][j] = sourceFrame.Colors[i][j];
          }
        }
        frame.Duration = sourceFrame.Duration;
        targetFrames.push(frame);
      }
    }
  },
  duplicateFirstFrame: function(animationName, frameCount) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    if (animation.Frames.length == 0) {
      console.error('duplicateFirstFrame', 'Frame length is zero!', animationName)
      return;
    }
    var firstFrame = animation.Frames[0];
    var frames = [];
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var frame = new ChromaAnimationFrame1D();
        frame.Colors = new Array(maxLeds);
        for (var i = 0; i < maxLeds; ++i) {
          frame.Colors[i] = firstFrame.Colors[i];
        }
        frame.Duration = firstFrame.Duration;
        frames.push(frame);
      }
      animation.Frames = frames;
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var frame = new ChromaAnimationFrame2D();
        frame.Colors = new Array(maxRow);
        for (var i = 0; i < maxRow; ++i) {
          frame.Colors[i] = new Array(maxColumn);
          for (var j = 0; j < maxColumn; ++j) {
            frame.Colors[i][j] = firstFrame.Colors[i][j];
          }
        }
        frame.Duration = firstFrame.Duration;
        frames.push(frame);
      }
      animation.Frames = frames;
    }
  },
  duplicateFrames: function(animationName) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    if (animation.Frames.length == 0) {
      console.error('duplicateFrames', 'Frame length is zero!', animationName)
      return;
    }
    var frames = [];
    var frameCount = animation.Frames.length;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        for (var d = 0; d < 2; ++d) {
          var copyFrame = animation.Frames[frameId];
          var frame = new ChromaAnimationFrame1D();
          frame.Colors = new Array(maxLeds);
          for (var i = 0; i < maxLeds; ++i) {
            frame.Colors[i] = copyFrame.Colors[i];
          }
          frame.Duration = copyFrame.Duration;
          frames.push(frame);
        }
      }
      animation.Frames = frames;
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        for (var d = 0; d < 2; ++d) {
          var copyFrame = animation.Frames[frameId];
          var frame = new ChromaAnimationFrame2D();
          frame.Colors = new Array(maxRow);
          for (var i = 0; i < maxRow; ++i) {
            frame.Colors[i] = new Array(maxColumn);
            for (var j = 0; j < maxColumn; ++j) {
              frame.Colors[i][j] = copyFrame.Colors[i][j];
            }
          }
          frame.Duration = copyFrame.Duration;
          frames.push(frame);
        }
      }
    }
    animation.Frames = frames;
  },
  duplicateMirrorFrames: function(animationName) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    if (animation.Frames.length == 0) {
      console.error('duplcateMirrorFrames', 'Frame length is zero!', animationName)
      return;
    }
    var frames = [];
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      var frameCount = animation.Frames.length;
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var copyFrame = animation.Frames[frameId];
        var frame = new ChromaAnimationFrame1D();
        frame.Colors = new Array(maxLeds);
        for (var i = 0; i < maxLeds; ++i) {
          frame.Colors[i] = copyFrame.Colors[i];
        }
        frame.Duration = copyFrame.Duration;
        frames.push(frame);
      }
      for (var frameId = frameCount - 1; frameId >= 0; --frameId) {
        var copyFrame = animation.Frames[frameId];
        var frame = new ChromaAnimationFrame1D();
        frame.Colors = new Array(maxLeds);
        for (var i = 0; i < maxLeds; ++i) {
          frame.Colors[i] = copyFrame.Colors[i];
        }
        frame.Duration = copyFrame.Duration;
        frames.push(frame);
      }
      animation.Frames = frames;
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      var frameCount = animation.Frames.length;
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var copyFrame = animation.Frames[frameId];
        var frame = new ChromaAnimationFrame2D();
        frame.Colors = new Array(maxRow);
        for (var i = 0; i < maxRow; ++i) {
          frame.Colors[i] = new Array(maxColumn);
          for (var j = 0; j < maxColumn; ++j) {
            frame.Colors[i][j] = copyFrame.Colors[i][j];
          }
        }
        frame.Duration = copyFrame.Duration;
        frames.push(frame);
      }
      for (var frameId = frameCount - 1; frameId >= 0; --frameId) {
        var copyFrame = animation.Frames[frameId];
        var frame = new ChromaAnimationFrame2D();
        frame.Colors = new Array(maxRow);
        for (var i = 0; i < maxRow; ++i) {
          frame.Colors[i] = new Array(maxColumn);
          for (var j = 0; j < maxColumn; ++j) {
            frame.Colors[i][j] = copyFrame.Colors[i][j];
          }
        }
        frame.Duration = copyFrame.Duration;
        frames.push(frame);
      }
      animation.Frames = frames;
    }
  },
  copyAnimation: function(animationName, newAnimationName) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.Frames.length == 0) {
      console.error('duplicateFirstFrame', 'Frame length is zero!', animationName)
      return;
    }
    var frames = [];
    var frameCount = animation.Frames.length;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var copyFrame = animation.Frames[frameId];
        var frame = new ChromaAnimationFrame1D();
        frame.Colors = new Array(maxLeds);
        for (var i = 0; i < maxLeds; ++i) {
          frame.Colors[i] = copyFrame.Colors[i];
        }
        frame.Duration = copyFrame.Duration;
        frames.push(frame);
      }
      var newAnimation = new ChromaAnimation1D();
	  newAnimation.Name = newAnimationName;
      newAnimation.Device = animation.Device;
      newAnimation.DeviceType = animation.DeviceType;
      newAnimation.Frames = frames;
      this.LoadedAnimations[newAnimationName] = newAnimation;
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var copyFrame = animation.Frames[frameId];
        var frame = new ChromaAnimationFrame2D();
        frame.Colors = new Array(maxRow);
        for (var i = 0; i < maxRow; ++i) {
          frame.Colors[i] = new Array(maxColumn);
          for (var j = 0; j < maxColumn; ++j) {
            frame.Colors[i][j] = copyFrame.Colors[i][j];
          }
        }
        frame.Duration = copyFrame.Duration;
        frames.push(frame);
      }
      var newAnimation = new ChromaAnimation2D();
	  newAnimation.Name = newAnimationName;
      newAnimation.Device = animation.Device;
      newAnimation.DeviceType = animation.DeviceType;
      newAnimation.Frames = frames;
      this.LoadedAnimations[newAnimationName] = newAnimation;
    }
  },
  convertAnimation: function(animationName, newAnimationName, newDeviceType, newDevice) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.Frames.length == 0) {
      console.error('duplicateFirstFrame', 'Frame length is zero!', animationName)
      return;
    }
    ChromaAnimation.closeAnimation(newAnimationName);
    var frames = [];
    var frameCount = animation.Frames.length;

    // this only converts keyboard frames to *.*
    var keyboardMaxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var keyboardMaxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);

    if (newDeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var copyFrame = animation.Frames[frameId];
        var maxLeds = ChromaAnimation.getMaxLeds(newDevice);
        var frame = new ChromaAnimationFrame1D();
        frame.Colors = new Array(maxLeds);
        for (var i = 0; i < keyboardMaxRow; ++i) {
          if (i >= 1) {
            continue;
          }
          for (var j = 0; j < keyboardMaxColumn; ++j) {
            if (j >= maxLeds) {
              continue;
            }
            frame.Colors[j] = copyFrame.Colors[i][j];
          }
        }
        frame.Duration = copyFrame.Duration;
        frames.push(frame);
      }

      var newAnimation = new ChromaAnimation1D();
      newAnimation.Name = newAnimationName;
      newAnimation.Device = newDevice;
      newAnimation.DeviceType = newDeviceType;
      newAnimation.Frames = frames;
      this.LoadedAnimations[newAnimationName] = newAnimation;
      return newAnimation;
    } else if (newDeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var copyFrame = animation.Frames[frameId];
        var maxRow = ChromaAnimation.getMaxRow(newDevice);
        var maxColumn = ChromaAnimation.getMaxColumn(newDevice);
        var frame = new ChromaAnimationFrame2D();
        frame.Colors = new Array(maxRow);
        for (var i = 0; i < keyboardMaxRow || i < maxRow; ++i) {
          if (i >= maxRow) {
            continue;
          }
          frame.Colors[i] = new Array(maxColumn);
          for (var j = 0; j < keyboardMaxColumn || j < maxColumn; ++j) {
            if (j >= maxColumn) {
              continue;
            }
            var color = undefined;
            if (i >= keyboardMaxRow ||
              j >= keyboardMaxColumn) {
              color = 0;
            } else {
              color = copyFrame.Colors[i][j];
            }
            frame.Colors[i][j] = color;
          }
        }
        frame.Duration = copyFrame.Duration;
        frames.push(frame);
      }

      var newAnimation = new ChromaAnimation2D();
      newAnimation.Name = newAnimationName;
      newAnimation.Device = newDevice;
      newAnimation.DeviceType = newDeviceType;
      newAnimation.Frames = frames;
      this.LoadedAnimations[newAnimationName] = newAnimation;
      return newAnimation;
    }
  },
  createAnimation: function(animationName, deviceType, device) {
    this.closeAnimation(animationName);
    var frames = [];
    var frameCount = 1;
    if (deviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var frame = new ChromaAnimationFrame1D();
        frame.Colors = new Array(maxLeds);
        for (var i = 0; i < maxLeds; ++i) {
          frame.Colors[i] = 0;
        }
        frame.Duration = 0.1;
        frames.push(frame);
      }
      var newAnimation = new ChromaAnimation1D();
      newAnimation.Device = device;
      newAnimation.DeviceType = deviceType;
      newAnimation.Frames = frames;
      this.LoadedAnimations[animationName] = newAnimation;
    } else if (deviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(device);
      var maxColumn = ChromaAnimation.getMaxColumn(device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var frame = new ChromaAnimationFrame2D();
        frame.Colors = new Array(maxRow);
        for (var i = 0; i < maxRow; ++i) {
          frame.Colors[i] = new Array(maxColumn);
          for (var j = 0; j < maxColumn; ++j) {
            frame.Colors[i][j] = 0;
          }
        }
        frame.Duration = 0.1;
        frames.push(frame);
      }
      var newAnimation = new ChromaAnimation2D();
      newAnimation.Device = device;
      newAnimation.DeviceType = deviceType;
      newAnimation.Frames = frames;
      this.LoadedAnimations[animationName] = newAnimation;
    }
  },
  reduceFrames: function(animationName, n) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    if (animation.Frames.length == 0) {
      console.error('duplicateFirstFrame', 'Frame length is zero!', animationName)
      return;
    }
    var frames = [];
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      var frameCount = animation.Frames.length;
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        if (frameId % n == 0) {
          continue;
        }
        var copyFrame = animation.Frames[frameId];
        var frame = new ChromaAnimationFrame1D();
        frame.Colors = new Array(maxLeds);
        for (var i = 0; i < maxLeds; ++i) {
          frame.Colors[i] = copyFrame.Colors[i];
        }
        frame.Duration = copyFrame.Duration;
        frames.push(frame);
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      var frameCount = animation.Frames.length;
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        if (frameId % n == 0) {
          continue;
        }
        var copyFrame = animation.Frames[frameId];
        var frame = new ChromaAnimationFrame2D();
        frame.Colors = new Array(maxRow);
        for (var i = 0; i < maxRow; ++i) {
          frame.Colors[i] = new Array(maxColumn);
          for (var j = 0; j < maxColumn; ++j) {
            frame.Colors[i][j] = copyFrame.Colors[i][j];
          }
        }
        frame.Duration = copyFrame.Duration;
        frames.push(frame);
      }
    }
    animation.Frames = frames;
  },
  trimFrame: function(animationName, removeFrameId) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    if (animation.Frames.length == 0) {
      console.error('duplicateFirstFrame', 'Frame length is zero!', animationName)
      return;
    }
    var frames = [];
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    var frameCount = animation.Frames.length;
    for (var frameId = 0; frameId < frameCount; ++frameId) {
      if (frameId == removeFrameId) {
        continue;
      }
      var frame = animation.Frames[frameId];
      frames.push(frame);
    }
    animation.Frames = frames;
  },
  trimStartFrames: function(animationName, numberOfFrames) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    if (animation.Frames.length == 0) {
      console.error('trimStartFrames', 'Frame length is zero!', animationName)
      return;
    }
    //console.log(animation.Frames);
    for (var i = 0; i < numberOfFrames; ++i) {
      this.trimFrame(animationName, 0);
    }
  },
  trimEndFrames: function(animationName, lastFrameId) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    if (animation.Frames.length == 0) {
      console.error('trimEndFrames', 'Frame length is zero!', animationName)
      return;
    }
    //console.log(animation.Frames);
    while (lastFrameId >= 0 &&
      (lastFrameId+1) < animation.Frames.length) {
        this.trimFrame(animationName, animation.Frames.length - 1);
    }
  },
  fadeStartFrames: function(animationName, fade) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    if (animation.Frames.length == 0) {
      console.error('fadeStartFrames', 'Frame length is zero!', animationName)
      return;
    }
    if (fade <= 0) {
      return;
    }
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < fade; ++frameId) {
      var t = (frameId+1) / fade;
      this.multiplyIntensity(animationName, frameId, t);
    }
  },
  fadeEndFrames: function(animationName, fade) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    if (animation.Frames.length == 0) {
      console.error('fadeEndFrames', 'Frame length is zero!', animationName)
      return;
    }
    if (fade <= 0) {
      return;
    }
    //console.log(animation.Frames);
    for (var offset = 0; offset < fade; ++offset) {
      var frameId = animation.Frames.length - 1 - offset;
      var t = (offset+1) / fade;
      this.multiplyIntensity(animationName, frameId, t);
    }
  },
  makeBlankFrames: function(animationName, frameCount, duration, color) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    var frames = [];
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var frame = new ChromaAnimationFrame1D();
        frame.Colors = new Array(maxLeds);
        for (var i = 0; i < maxLeds; ++i) {
          frame.Colors[i] = color;
        }
        frame.Duration = duration;
        frames.push(frame);
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var frame = new ChromaAnimationFrame2D();
        frame.Colors = new Array(maxRow);
        for (var i = 0; i < maxRow; ++i) {
          frame.Colors[i] = new Array(maxColumn);
          for (var j = 0; j < maxColumn; ++j) {
            frame.Colors[i][j] = color;
          }
        }
        frame.Duration = duration;
        frames.push(frame);
      }
    }
    animation.Frames = frames;
  },
  makeBlankFramesRGB: function(animationName, frameCount, duration, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    this.stopAnimation(animationName);
    var frames = [];
    var color = ChromaAnimation.getRGB(red, green, blue);
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var frame = new ChromaAnimationFrame1D();
        frame.Colors = new Array(maxLeds);
        for (var i = 0; i < maxLeds; ++i) {
          frame.Colors[i] = color;
        }
        frame.Duration = duration;
        frames.push(frame);
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frameCount; ++frameId) {
        var frame = new ChromaAnimationFrame2D();
        frame.Colors = new Array(maxRow);
        for (var i = 0; i < maxRow; ++i) {
          frame.Colors[i] = new Array(maxColumn);
          for (var j = 0; j < maxColumn; ++j) {
            frame.Colors[i][j] = color;
          }
        }
        frame.Duration = duration;
        frames.push(frame);
      }
    }
    animation.Frames = frames;
  },
  offsetColors: function(animationName, frameId, redOffset, greenOffset, blueOffset) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(red) + Number(redOffset))) & 0xFF;
          green = Math.min(255, Math.max(0, Number(green) + Number(greenOffset))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(blue) + Number(blueOffset))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          colors[i] = color;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) + Number(redOffset))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) + Number(greenOffset))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) + Number(blueOffset))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  offsetColorsWithColor: function(animationName, frameId, color) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var redOffset = (color & 0xFF);
    var greenOffset = (color & 0xFF00) >> 8;
    var blueOffset = (color & 0xFF0000) >> 16;
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < frames.length) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(red) + Number(redOffset))) & 0xFF;
          green = Math.min(255, Math.max(0, Number(green) + Number(greenOffset))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(blue) + Number(blueOffset))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          row[j] = color;
        }
      }
    }
  },
  offsetColorsWithColorAllFrames: function(animationName, color) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var redOffset = (color & 0xFF);
    var greenOffset = (color & 0xFF00) >> 8;
    var blueOffset = (color & 0xFF0000) >> 16;
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(red) + Number(redOffset))) & 0xFF;
          green = Math.min(255, Math.max(0, Number(green) + Number(greenOffset))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(blue) + Number(blueOffset))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          row[j] = color;
        }
      }
    }
  },
  offsetNonZeroColorsWithColorAllFrames: function(animationName, color) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var redOffset = (color & 0xFF);
    var greenOffset = (color & 0xFF00) >> 8;
    var blueOffset = (color & 0xFF0000) >> 16;
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          if (color != 0) {
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) + Number(redOffset))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) + Number(greenOffset))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) + Number(blueOffset))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  offsetColorsAllFrames: function(animationName, redOffset, greenOffset, blueOffset) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(red) + Number(redOffset))) & 0xFF;
          green = Math.min(255, Math.max(0, Number(green) + Number(greenOffset))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(blue) + Number(blueOffset))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          colors[i] = color;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) + Number(redOffset))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) + Number(greenOffset))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) + Number(blueOffset))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  offsetNonZeroColors: function(animationName, frameId, redOffset, greenOffset, blueOffset) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < frames.length) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          if (color != 0) {
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) + Number(redOffset))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) + Number(greenOffset))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) + Number(blueOffset))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  offsetNonZeroColorsAllFrames: function(animationName, redOffset, greenOffset, blueOffset) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          if (color != 0) {
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) + Number(redOffset))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) + Number(greenOffset))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) + Number(blueOffset))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  multiplyIntensity: function(animationName, frameId, intensity) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(red) * Number(intensity))) & 0xFF;
          green = Math.min(255, Math.max(0, Number(green) * Number(intensity))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(blue) * Number(intensity))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          colors[i] = color;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) * Number(intensity))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) * Number(intensity))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) * Number(intensity))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  getRGB(red, green, blue) {
    return (red & 0xFF) | ((green & 0xFF) << 8) | ((blue & 0xFF) << 16);
  },
  getRed(color) {
    var red = (color & 0xFF);
    return red;
  },
  getGreen(color) {
    var green = (color & 0xFF00) >> 8;
    return green;
  },
  getBlue(color) {
    var blue = (color & 0xFF0000) >> 16;
    return blue;
  },
  debugColor(color) {
    var red = (color & 0xFF);
    var green = (color & 0xFF00) >> 8;
    var blue = (color & 0xFF0000) >> 16;
    console.log('Red', red, 'Green', green, 'Blue', blue);
  },
  multiplyIntensityColor: function(animationName, frameId, colorTint) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      var red = (colorTint & 0xFF);
      var green = (colorTint & 0xFF00) >> 8;
      var blue = (colorTint & 0xFF0000) >> 16;
      var redIntensity = red / 255.0;
      var greenIntensity = green / 255.0;
      var blueIntensity = blue / 255.0;
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(red) * Number(redIntensity))) & 0xFF;
          green = Math.min(255, Math.max(0, Number(green) * Number(greenIntensity))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(blue) * Number(blueIntensity))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          colors[i] = color;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      var red = (colorTint & 0xFF);
      var green = (colorTint & 0xFF00) >> 8;
      var blue = (colorTint & 0xFF0000) >> 16;
      var redIntensity = red / 255.0;
      var greenIntensity = green / 255.0;
      var blueIntensity = blue / 255.0;
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) * Number(redIntensity))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) * Number(greenIntensity))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) * Number(blueIntensity))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  multiplyIntensityColorAllFrames: function(animationName, colorTint) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      var red = (colorTint & 0xFF);
      var green = (colorTint & 0xFF00) >> 8;
      var blue = (colorTint & 0xFF0000) >> 16;
      var redIntensity = red / 255.0;
      var greenIntensity = green / 255.0;
      var blueIntensity = blue / 255.0;
      //console.log(animation.Frames);
      for (frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(red) * Number(redIntensity))) & 0xFF;
          green = Math.min(255, Math.max(0, Number(green) * Number(greenIntensity))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(blue) * Number(blueIntensity))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          colors[i] = color;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      var red = (colorTint & 0xFF);
      var green = (colorTint & 0xFF00) >> 8;
      var blue = (colorTint & 0xFF0000) >> 16;
      var redIntensity = red / 255.0;
      var greenIntensity = green / 255.0;
      var blueIntensity = blue / 255.0;
      //console.log(animation.Frames);
      for (frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) * Number(redIntensity))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) * Number(greenIntensity))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) * Number(blueIntensity))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  multiplyIntensityRGB: function(animationName, frameId, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }

    var frames = animation.Frames;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      var redIntensity = red / 255.0;
      var greenIntensity = green / 255.0;
      var blueIntensity = blue / 255.0;
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(red) * Number(redIntensity))) & 0xFF;
          green = Math.min(255, Math.max(0, Number(green) * Number(greenIntensity))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(blue) * Number(blueIntensity))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          colors[i] = color;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      var redIntensity = red / 255.0;
      var greenIntensity = green / 255.0;
      var blueIntensity = blue / 255.0;
      //console.log(animation.Frames);
      if (frameId >= 0 && frameId < frames.length) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) * Number(redIntensity))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) * Number(greenIntensity))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) * Number(blueIntensity))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  multiplyIntensityAllFrames: function(animationName, intensity) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(red) * Number(intensity))) & 0xFF;
          green = Math.min(255, Math.max(0, Number(green) * Number(intensity))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(blue) * Number(intensity))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          colors[i] = color;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) * Number(intensity))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) * Number(intensity))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) * Number(intensity))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  multiplyIntensityAllFramesRGB: function(animationName, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    var redIntensity = red / 255.0;
    var greenIntensity = green / 255.0;
    var blueIntensity = blue / 255.0;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(red) * Number(redIntensity))) & 0xFF;
          green = Math.min(255, Math.max(0, Number(green) * Number(greenIntensity))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(blue) * Number(blueIntensity))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          colors[i] = color;
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) * Number(redIntensity))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) * Number(greenIntensity))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) * Number(blueIntensity))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  multiplyColorLerpAllFrames: function(animationName, color1, color2) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    var frameCount = frames.length;
    for (var frameId = 0; frameId < frameCount; ++frameId) {
      var t = (frameId+1) / frameCount;
      var color = this.lerpColor(color1, color2, t);
      this.multiplyIntensityColor(animationName, frameId, color);
    }
  },
  multiplyTargetColorLerpAllFrames: function(animationName, color1, color2) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          //console.log('color', color);
          var red = (color & 0xFF) / 255.0;
          var green = ((color & 0xFF00) >> 8) / 255.0;
          var blue = ((color & 0xFF0000) >> 16) / 255.0;
          var t = (red+green+blue) / 3.0;
          colors[i] = ChromaAnimation.lerpColor(color1, color2, t);
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF) / 255.0;
            var green = ((color & 0xFF00) >> 8) / 255.0;
            var blue = ((color & 0xFF0000) >> 16) / 255.0;
            var t = (red+green+blue) / 3.0;
            row[j] = ChromaAnimation.lerpColor(color1, color2, t);
          }
        }
      }
    }
  },
  multiplyNonZeroTargetColorLerpAllFrames: function(animationName, color1, color2) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_1D) {
      var maxLeds = ChromaAnimation.getMaxLeds(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxLeds; ++i) {
          var color = colors[i];
          if (color != 0) {
            //console.log('color', color);
            var red = (color & 0xFF) / 255.0;
            var green = ((color & 0xFF00) >> 8) / 255.0;
            var blue = ((color & 0xFF0000) >> 16) / 255.0;
            var t = (red+green+blue) / 3.0;
            colors[i] = ChromaAnimation.lerpColor(color1, color2, t);
          }
        }
      }
    } else if (animation.DeviceType == EChromaSDKDeviceTypeEnum.DE_2D) {
      var maxRow = ChromaAnimation.getMaxRow(animation.Device);
      var maxColumn = ChromaAnimation.getMaxColumn(animation.Device);
      //console.log(animation.Frames);
      for (var frameId = 0; frameId < frames.length; ++frameId) {
        var frame = frames[frameId];
        //console.log(frame);
        var colors = frame.Colors;
        for (var i = 0; i < maxRow; ++i) {
          var row = colors[i];
          for (var j = 0; j < maxColumn; ++j) {
            var color = row[j];
            if (color != 0) {
              //console.log('color', color);
              var red = (color & 0xFF) / 255.0;
              var green = ((color & 0xFF00) >> 8) / 255.0;
              var blue = ((color & 0xFF0000) >> 16) / 255.0;
              var t = (red+green+blue) / 3.0;
              row[j] = ChromaAnimation.lerpColor(color1, color2, t);
            }
          }
        }
      }
    }
  },
  copyRedChannelAllFrames: function(animationName, greenIntensity, blueIntensity) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          green = Math.min(255, Math.max(0, Number(red) * Number(greenIntensity))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(red) * Number(blueIntensity))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          row[j] = color;
        }
      }
    }
  },
  copyGreenChannelAllFrames: function(animationName, redIntensity, blueIntensity) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(green) * Number(redIntensity))) & 0xFF;
          blue = Math.min(255, Math.max(0, Number(green) * Number(blueIntensity))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          row[j] = color;
        }
      }
    }
  },
  copyBlueChannelAllFrames: function(animationName, redIntensity, greenIntensity) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          red = Math.min(255, Math.max(0, Number(blue) * Number(redIntensity))) & 0xFF;
          green = Math.min(255, Math.max(0, Number(blue) * Number(greenIntensity))) & 0xFF;
          color = red | (green << 8) | (blue << 16);
          row[j] = color;
        }
      }
    }
  },
  desaturateAllFrames: function(animationName) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          //console.log('color', color);
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          var gray = Math.sqrt(red*red + green*green + blue*blue);
          color = gray | (gray << 8) | (gray << 16);
          row[j] = color;
        }
      }
    }
  },
  multiplyIntensityKey: function(animationName, frameId, key, intensity) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    if (frameId >= 0 && frameId < frames.length) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          if (getHighByte(key) == i &&
            getLowByte(key) == j) {

            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) * Number(intensity))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) * Number(intensity))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) * Number(intensity))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  multiplyIntensityKeyAllFrames: function(animationName, key, intensity) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          if (getHighByte(key) == i &&
            getLowByte(key) == j) {

            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) * Number(intensity))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) * Number(intensity))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) * Number(intensity))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  multiplyIntensityKeyAllFramesRGB: function(animationName, key, red, green, blue) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    var redIntensity = red / 255.0;
    var greenIntensity = green / 255.0;
    var blueIntensity = blue / 255.0;
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          if (getHighByte(key) == i &&
            getLowByte(key) == j) {

            var color = row[j];
            //console.log('color', color);
            var red = (color & 0xFF);
            var green = (color & 0xFF00) >> 8;
            var blue = (color & 0xFF0000) >> 16;
            red = Math.min(255, Math.max(0, Number(red) * Number(redIntensity))) & 0xFF;
            green = Math.min(255, Math.max(0, Number(green) * Number(greenIntensity))) & 0xFF;
            blue = Math.min(255, Math.max(0, Number(blue) * Number(blueIntensity))) & 0xFF;
            color = red | (green << 8) | (blue << 16);
            row[j] = color;
          }
        }
      }
    }
  },
  setChromaCustomColorAllFrames: function(animationName) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    var frames = animation.Frames;
    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      //console.log(frame);
      var colors = frame.Colors;
      for (var i = 0; i < maxRow; ++i) {
        var row = colors[i];
        for (var j = 0; j < maxColumn; ++j) {
          var color = row[j];
          //console.log('color', color);
          var customFlag = 0x01;
          var red = (color & 0xFF);
          var green = (color & 0xFF00) >> 8;
          var blue = (color & 0xFF0000) >> 16;
          color = red | (green << 8) | (blue << 16) | (customFlag << 24);
          row[j] = color;
        }
      }
    }
  },
  setChromaCustomFlag: function(animationName, flag) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    if (animation.DeviceType != EChromaSDKDeviceTypeEnum.DE_2D ||
      animation.Device != EChromaSDKDevice2DEnum.DE_Keyboard) {
      return;
    }
    animation.setChromaCustomFlag(flag);
  },
  playComposite: function(animationName, loop, frameCallback) {
    if (chromaSDK == undefined) {
      setTimeout(function() { ChromaAnimation.playComposite(animationName, loop); }, 100);
      return;
    }
    this.playAnimation(animationName + "_ChromaLink.chroma", loop, frameCallback);
    this.playAnimation(animationName + "_Headset.chroma", loop, frameCallback);
    this.playAnimation(animationName + "_Keyboard.chroma", loop, frameCallback);
    this.playAnimation(animationName + "_Keypad.chroma", loop, frameCallback);
    this.playAnimation(animationName + "_Mouse.chroma", loop, frameCallback);
    this.playAnimation(animationName + "_Mousepad.chroma", loop, frameCallback);
  },
  overrideFrameDuration: function(animationName, duration) {
    var animation = this.LoadedAnimations[animationName];
    if (animation == undefined) {
      return;
    }
    var frames = animation.Frames;
    //console.log(animation.Frames);
    for (var frameId = 0; frameId < frames.length; ++frameId) {
      var frame = frames[frameId];
      frame.Duration = duration;
    }
  },
  stopComposite: function(animationName) {
    if (chromaSDK == undefined) {
      setTimeout(function() { ChromaAnimation.stopComposite(animationName, loop); }, 100);
      return;
    }
    this.stopAnimation(animationName + "_ChromaLink.chroma");
    this.stopAnimation(animationName + "_Headset.chroma");
    this.stopAnimation(animationName + "_Keyboard.chroma");
    this.stopAnimation(animationName + "_Keypad.chroma");
    this.stopAnimation(animationName + "_Mouse.chroma");
    this.stopAnimation(animationName + "_Mousepad.chroma");
  },
  staticColor: function (device, color) {
    if (chromaSDK == undefined) {
      setTimeout(function() { ChromaAnimation.staticColor(device, color); }, 100);
      return;
    }
    this.stopByAnimationType(device);
    if (device == EChromaSDKDeviceEnum.DE_ChromaLink) {
      chromaSDK.createChromaLinkEffect("CHROMA_STATIC", color);
    } else if (device == EChromaSDKDeviceEnum.DE_Headset) {
      chromaSDK.createHeadsetEffect("CHROMA_STATIC", color);
    } else if (device == EChromaSDKDeviceEnum.DE_Keyboard) {
      chromaSDK.createKeyboardEffect("CHROMA_STATIC", color);
    } else if (device == EChromaSDKDeviceEnum.DE_Keypad) {
      chromaSDK.createKeypadEffect("CHROMA_STATIC", color);
    } else if (device == EChromaSDKDeviceEnum.DE_Mouse) {
      chromaSDK.createMouseEffect("CHROMA_STATIC", color);
    } else if (device == EChromaSDKDeviceEnum.DE_Mousepad) {
      chromaSDK.createMousematEffect("CHROMA_STATIC", color);
    }
  },
  staticColorAll: function(color) {
    this.staticColor(EChromaSDKDeviceEnum.DE_ChromaLink, color);
    this.staticColor(EChromaSDKDeviceEnum.DE_Headset, color);
    this.staticColor(EChromaSDKDeviceEnum.DE_Keyboard, color);
    this.staticColor(EChromaSDKDeviceEnum.DE_Keypad, color);
    this.staticColor(EChromaSDKDeviceEnum.DE_Mouse, color);
    this.staticColor(EChromaSDKDeviceEnum.DE_Mousepad, color);
  },
  custom: function(device, colors) {
    if (chromaSDK == undefined) {
      setTimeout(function() {
        ChromaAnimation.custom(device, colors);
      }, 100);
      return;
    }
	this.stopByAnimationType(device);
    if (device == EChromaSDKDeviceEnum.DE_ChromaLink) {
      chromaSDK.createChromaLinkEffect("CHROMA_CUSTOM", colors);
    } else if (device == EChromaSDKDeviceEnum.DE_Headset) {
      chromaSDK.createHeadsetEffect("CHROMA_CUSTOM", colors);
    } else if (device == EChromaSDKDeviceEnum.DE_Keyboard) {
      chromaSDK.createKeyboardEffect("CHROMA_CUSTOM", colors);
    } else if (device == EChromaSDKDeviceEnum.DE_Keypad) {
      chromaSDK.createKeypadEffect("CHROMA_CUSTOM", colors);
    } else if (device == EChromaSDKDeviceEnum.DE_Mouse) {
      chromaSDK.createMouseEffect("CHROMA_CUSTOM2", colors);
    } else if (device == EChromaSDKDeviceEnum.DE_Mousepad) {
      chromaSDK.createMousematEffect("CHROMA_CUSTOM", colors);
    }
  },
  customKey: function(colors) {
    if (chromaSDK == undefined) {
      setTimeout(function() {
        ChromaAnimation.customKey(colors);
      }, 100);
      return;
    }
    this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Keyboard);
    chromaSDK.createKeyboardEffect("CHROMA_CUSTOM_KEY", colors);
  },
  clear: function (device) {
    if (chromaSDK == undefined) {
      setTimeout(function() { ChromaAnimation.clear(device); }, 100);
      return;
    }
	this.stopByAnimationType(device);
    if (device == EChromaSDKDeviceEnum.DE_ChromaLink) {
      chromaSDK.createChromaLinkEffect("CHROMA_NONE");
    } else if (device == EChromaSDKDeviceEnum.DE_Headset) {
      chromaSDK.createHeadsetEffect("CHROMA_NONE");
    } else if (device == EChromaSDKDeviceEnum.DE_Keyboard) {
      chromaSDK.createKeyboardEffect("CHROMA_NONE");
    } else if (device == EChromaSDKDeviceEnum.DE_Keypad) {
      chromaSDK.createKeypadEffect("CHROMA_NONE");
    } else if (device == EChromaSDKDeviceEnum.DE_Mouse) {
      chromaSDK.createMouseEffect("CHROMA_NONE");
    } else if (device == EChromaSDKDeviceEnum.DE_Mousepad) {
      chromaSDK.createMousematEffect("CHROMA_NONE");
    }
  },
  clearAll: function () {
    this.clear(EChromaSDKDeviceEnum.DE_ChromaLink);
    this.clear(EChromaSDKDeviceEnum.DE_Headset);
    this.clear(EChromaSDKDeviceEnum.DE_Keyboard);
    this.clear(EChromaSDKDeviceEnum.DE_Keypad);
    this.clear(EChromaSDKDeviceEnum.DE_Mouse);
    this.clear(EChromaSDKDeviceEnum.DE_Mousepad);
  },
  getKey: function (row, col) {
    return (row << 8) | col;
  },

  // Helper function to implement reactive key setEffect
  reactiveKeyEffectAllFrames: function (layer, key, lineWidth, color) {

    var frameCount = ChromaAnimation.getFrameCount(layer);

    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);

    var startRow = getHighByte(key);
    var startColumn = getLowByte(key);

    // console.log('Start Column =', startColumn);
    // console.log('Start Row =', startRow);

    var radius = 0;
    var speed = 25/ frameCount;

    for (var frameIndex = 0; frameIndex < frameCount; ++frameIndex) {
      var stroke = radius;
      for (var t = 0; t < lineWidth; ++t) {
        for (var i = 0; i < 360; ++i) {
          var angle = i * Math.PI / 180;
          var r = Math.floor(startRow + stroke * Math.sin(angle));
          var c = Math.floor(startColumn + stroke * Math.cos(angle));
          if (r >= 0 && r < maxRow &&
            c >= 0 && c < maxColumn) {
              var rkey = ChromaAnimation.getKey(r, c);
              ChromaAnimation.setKeyColor(layer, frameIndex, rkey, color);
          }
        }
        stroke += speed;
      }
      radius += speed;
    }
  },

  reactiveKeyEffectAllFramesRGB: function (layer, key, lineWidth, red, green, blue) {

    var frameCount = ChromaAnimation.getFrameCount(layer);

    var maxRow = ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard);
    var maxColumn = ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);

    var startRow = getHighByte(key);
    var startColumn = getLowByte(key);

    // console.log('Start Column =', startColumn);
    // console.log('Start Row =', startRow);

    var color = ChromaAnimation.getRGB(red, green, blue);
    var radius = 0;
    var speed = 25/ frameCount;

    for (var frameIndex = 0; frameIndex < frameCount; ++frameIndex) {
      var stroke = radius;
      for (var t = 0; t < lineWidth; ++t) {
        for (var i = 0; i < 360; ++i) {
          var angle = i * Math.PI / 180;
          var r = Math.floor(startRow + stroke * Math.sin(angle));
          var c = Math.floor(startColumn + stroke * Math.cos(angle));
          if (r >= 0 && r < maxRow &&
            c >= 0 && c < maxColumn) {
              var rkey = ChromaAnimation.getKey(r, c);
              ChromaAnimation.setKeyColor(layer, frameIndex, rkey, color);
          }
        }
        stroke += speed;
      }
      radius += speed;
    }
  }
};
ChromaAnimation.updateFrame();

function ChromaAnimation1D() {
  var Name;
  var Device;
  var Frames = [];
  var Loop = true;
  var FrameTime = 0;
  var FrameCallback = undefined;
}

ChromaAnimation1D.prototype = {

  DeviceType: EChromaSDKDeviceTypeEnum.DE_1D,

  CurrentIndex: 0,

  IsPlaying: false,

  openAnimation: function(arrayBuffer, readIndex) {

    readSize = 1;
    var device = new Uint8Array(arrayBuffer.slice(readIndex, readIndex+readSize))[0];
    readIndex += readSize;
    //console.log('device:', device);
    this.Device = device;

    readSize = 4;
    var frameCount = new Uint32Array(arrayBuffer.slice(readIndex, readIndex+readSize))[0];
    readIndex += readSize;
    //console.log('frameCount:', frameCount);

    var maxLeds = ChromaAnimation.getMaxLeds(device);
    //console.log('maxLeds:', maxLeds);

    var frames = [];

    for (var index = 0; index < frameCount; ++index) {

      var frame = new ChromaAnimationFrame1D();

      readSize = Float32Array.BYTES_PER_ELEMENT;
      var duration = new Float32Array(arrayBuffer.slice(readIndex, readIndex+readSize))[0];
      readIndex += readSize;

      if (duration < 0.033) {
        duration = 0.033;
      }

      frame.Duration = duration;

      //console.log('Frame '+index+': duration='+duration);

      readSize = 4 * maxLeds;
      var colors = new Uint32Array(arrayBuffer.slice(readIndex, readIndex+readSize));
      readIndex += readSize;
      //console.log(colors);

      frame.Colors = new Array(maxLeds);
      for (var i = 0; i < maxLeds; ++i) {
        var color = colors[i];
        frame.Colors[i] = color;
      }

      frames.push(frame);
    }

    this.Frames = frames;
  },
  saveAnimation: function() {

    var device = this.Device;
    var maxLeds = ChromaAnimation.getMaxLeds(device);
    var frames = this.Frames;
    var frameCount = frames.length;

    var writeArrays = [];


    var writeArray = new Uint32Array(1);
    var version = 1;
    writeArray[0] = version;
    writeArrays.push(writeArray.buffer);
    //console.log('version:', version);


    var writeArray = new Uint8Array(1);
    var deviceType = this.DeviceType;
    writeArray[0] = deviceType;
    writeArrays.push(writeArray.buffer);
    //console.log('deviceType:', deviceType);


    var writeArray = new Uint8Array(1);
    writeArray[0] = device;
    writeArrays.push(writeArray.buffer);
    //console.log('device:', device);


    var writeArray = new Uint32Array(1);
    writeArray[0] = frameCount;
    writeArrays.push(writeArray.buffer);
    //console.log('frameCount:', frameCount);

    for (var index = 0; index < frameCount; ++index) {

      var frame = frames[index];

      var writeArray = new Float32Array(1);
      var duration = frame.Duration;
      if (duration < 0.033) {
        duration = 0.033;
      }
      writeArray[0] = duration;
      writeArrays.push(writeArray.buffer);

      //console.log('Frame', index, 'duration', duration);

      var writeArray = new Uint32Array(maxLeds);
      for (var i = 0; i < maxLeds; ++i) {
        var color = frame.Colors[i];
        writeArray[i] = color;
      }
      writeArrays.push(writeArray.buffer);
    }

    var blob = new Blob(writeArrays, {type: 'application/octet-stream'});

    return blob;
  },
  getFrameCount: function() {
    return this.Frames.length;
  },
  getFrame: function() {
    if (this.CurrentIndex < this.Frames.length) {
      return this.Frames[this.CurrentIndex];
    } else {
      return undefined;
    }
  },
  getDuration: function() {
    var frame = this.getFrame();
    if (frame != undefined) {
      return frame.Duration;
    } else {
      return 0;
    }
  },
  playFrame: function() {
    if (this.FrameTime < Date.now() &&
	  (Date.now() - this.FrameTime) < 3000) {
      return;
    }
    if (this.CurrentIndex < this.Frames.length) {
      var duration = this.getDuration();
      //console.log('Play Frame: '+this.CurrentIndex+' of: '+this.Frames.length+' Duration: '+duration);

      if (this.Device == EChromaSDKDevice1DEnum.DE_ChromaLink) {
        chromaSDK.createChromaLinkEffect("CHROMA_CUSTOM", this.getFrame().Colors);
      } else if (this.Device == EChromaSDKDevice1DEnum.DE_Headset) {
        chromaSDK.createHeadsetEffect("CHROMA_CUSTOM", this.getFrame().Colors);
      } else if (this.Device == EChromaSDKDevice1DEnum.DE_Mousepad) {
        chromaSDK.createMousematEffect("CHROMA_CUSTOM", this.getFrame().Colors);
      }

      if (this.FrameCallback != undefined) {
        this.FrameCallback(this, this.getFrame().Colors);
      }

      // schedule next frame
      var refThis = this;
      if (duration < 0.1) {
        duration = 0.1;
	  }
      this.FrameTime = Date.now() + Math.floor(duration * 1000);
      ++this.CurrentIndex;
    } else {
      //console.log('Animation complete.');
      if (this.Loop) {
        this.play(this.Loop);
      } else {
        this.stop();
      }
    }
  },
  stop: function () {
    this.IsPlaying = false;
    this.CurrentIndex = 0;
    this.Loop = false;
  	if (ChromaAnimation.LoadedAnimations1D[this.Device] == this) {
  	  ChromaAnimation.LoadedAnimations1D[this.Device] = undefined;
  	}
    ChromaAnimation.PlayingAnimations1D[this.Device][this.Name] = undefined;
  },
  isPlaying: function() {
    return this.IsPlaying;
  },
  play: function (loop) {
    this.stop();
    this.IsPlaying = true;
    ChromaAnimation.stopByAnimationType(ChromaAnimation.getDeviceEnum(this.DeviceType, this.Device));
    ChromaAnimation.LoadedAnimations1D[this.Device] = this;
    ChromaAnimation.PlayingAnimations1D[this.Device][this.Name] = this;
    this.CurrentIndex = 0;
    this.Loop = loop;
    //console.log('play:', this.Name);
    this.playFrame();
  }
};

function ChromaAnimation2D() {
  var Name;
  var Device;
  var Frames = [];
  var Loop = false;
  var FrameTime = 0;
  var FrameCallback = undefined;
}

ChromaAnimation2D.prototype = {

  DeviceType: EChromaSDKDeviceTypeEnum.DE_2D,

  CurrentIndex: 0,

  UseChromaCustom: false,

  IsPlaying: false,

  openAnimation: function(arrayBuffer, readIndex) {

    readSize = 1;
    var device = new Uint8Array(arrayBuffer.slice(readIndex, readIndex+readSize))[0];
    readIndex += readSize;
    //console.log('device:', device);
    this.Device = device;

    readSize = 4;
    var frameCount = new Uint32Array(arrayBuffer.slice(readIndex, readIndex+readSize))[0];
    readIndex += readSize;
    //console.log('frameCount:', frameCount);

    var maxRow = ChromaAnimation.getMaxRow(device);
    //console.log('maxRow:', maxRow);

    var maxColumn = ChromaAnimation.getMaxColumn(device);
    //console.log('maxColumn:', maxColumn);

    var frames = [];

    for (var index = 0; index < frameCount; ++index) {

      var frame = new ChromaAnimationFrame2D();

      readSize = Float32Array.BYTES_PER_ELEMENT;
      var duration = new Float32Array(arrayBuffer.slice(readIndex, readIndex+readSize))[0];
      readIndex += readSize;

      if (duration < 0.033) {
        duration = 0.033;
      }

      frame.Duration = duration;

      //console.log('Frame '+index+': duration='+duration);

      readSize = 4 * maxRow * maxColumn;
      var colors = new Uint32Array(arrayBuffer.slice(readIndex, readIndex+readSize));
      readIndex += readSize;
      //console.log(colors);

      frame.Colors = new Array(maxRow);
      for (var i = 0; i < maxRow; ++i) {
        frame.Colors[i] = new Array(maxColumn);
        for (var j = 0; j < maxColumn; ++j) {
          var color = colors[i * maxColumn + j];
          frame.Colors[i][j] = color;
        }
      }

      frames.push(frame);
    }

    this.Frames = frames;
  },
  saveAnimation: function() {

    var device = this.Device;
    var maxRow = ChromaAnimation.getMaxRow(device);
    var maxColumn = ChromaAnimation.getMaxColumn(device);
    var frames = this.Frames;
    var frameCount = frames.length;

    var writeArrays = [];


    var writeArray = new Uint32Array(1);
    var version = 1;
    writeArray[0] = version;
    writeArrays.push(writeArray.buffer);
    //console.log('version:', version);


    var writeArray = new Uint8Array(1);
    var deviceType = this.DeviceType;
    writeArray[0] = deviceType;
    writeArrays.push(writeArray.buffer);
    //console.log('deviceType:', deviceType);


    var writeArray = new Uint8Array(1);
    writeArray[0] = device;
    writeArrays.push(writeArray.buffer);
    //console.log('device:', device);


    var writeArray = new Uint32Array(1);
    writeArray[0] = frameCount;
    writeArrays.push(writeArray.buffer);
    //console.log('frameCount:', frameCount);

    for (var index = 0; index < frameCount; ++index) {

      var frame = frames[index];

      var writeArray = new Float32Array(1);
      var duration = frame.Duration;
      if (duration < 0.033) {
        duration = 0.033;
      }
      writeArray[0] = duration;
      writeArrays.push(writeArray.buffer);

      //console.log('Frame', index, 'duration', duration);

      var writeArray = new Uint32Array(maxRow * maxColumn);
      for (var i = 0; i < maxRow; ++i) {
        for (var j = 0; j < maxColumn; ++j) {
          var color = frame.Colors[i][j];
          writeArray[i * maxColumn + j] = color;
        }
      }
      writeArrays.push(writeArray.buffer);
    }

    var blob = new Blob(writeArrays, {type: 'application/octet-stream'});

    return blob;
  },
  getFrameCount: function() {
    return this.Frames.length;
  },
  getFrame: function() {
    if (this.CurrentIndex < this.Frames.length) {
      return this.Frames[this.CurrentIndex];
    } else {
      return undefined;
    }
  },
  getDuration: function() {
    var frame = this.getFrame();
    if (frame != undefined) {
      return frame.Duration;
    } else {
      return 0;
    }
  },
  setChromaCustomFlag: function(flag) {
    if (this.Device == EChromaSDKDevice2DEnum.DE_Keyboard) {
      if (flag == true) {
        this.UseChromaCustom = flag;
      } else {
        this.UseChromaCustom = false;
      }
    }
  },
  playFrame: function() {
    if (this.FrameTime < Date.now() &&
	  (Date.now() - this.FrameTime) < 3000) {
      return;
    }
    if (this.CurrentIndex < this.Frames.length) {
      var duration = this.getDuration();
      //console.log('Play Frame: '+this.CurrentIndex+' of: '+this.Frames.length+' Duration: '+duration);

      if (this.Device == EChromaSDKDevice2DEnum.DE_Keyboard) {
        if (this.UseChromaCustom) {
          chromaSDK.createKeyboardEffect("CHROMA_CUSTOM_KEY", this.getFrame().Colors);
        } else {
          chromaSDK.createKeyboardEffect("CHROMA_CUSTOM", this.getFrame().Colors);
        }
      } else if (this.Device == EChromaSDKDevice2DEnum.DE_Keypad) {
        chromaSDK.createKeypadEffect("CHROMA_CUSTOM", this.getFrame().Colors);
      } else if (this.Device == EChromaSDKDevice2DEnum.DE_Mouse) {
        chromaSDK.createMouseEffect("CHROMA_CUSTOM2", this.getFrame().Colors);
      }

      if (this.FrameCallback != undefined) {
        this.FrameCallback(this, this.getFrame().Colors);
      }

      // schedule next frame
      var refThis = this;
      if (duration < 0.1) {
        duration = 0.1;
	  }
      this.FrameTime = Date.now() + Math.floor(duration * 1000);
      ++this.CurrentIndex;
    } else {
      //console.log('Animation complete.');
      if (this.Loop) {
        this.play(this.Loop);
      } else {
        this.stop();
      }
    }
  },
  stop: function () {
    this.IsPlaying = false;
    this.CurrentIndex = 0;
    this.Loop = false;
  	if (ChromaAnimation.LoadedAnimations2D[this.Device] == this) {
  	  ChromaAnimation.LoadedAnimations2D[this.Device] = undefined;
  	}
    ChromaAnimation.PlayingAnimations2D[this.Device][this.Name] = undefined;
  },
  isPlaying: function() {
    return this.IsPlaying;
  },
  play: function (loop) {
    this.stop();
    this.IsPlaying = true;
    ChromaAnimation.stopByAnimationType(ChromaAnimation.getDeviceEnum(this.DeviceType, this.Device));
    ChromaAnimation.LoadedAnimations2D[this.Device] = this;
    ChromaAnimation.PlayingAnimations2D[this.Device][this.Name] = this;
    this.CurrentIndex = 0;
    this.Loop = loop;
    //console.log('play:', this.Name);
    this.playFrame();
  }
};


var chromaSDK = new ChromaSDK();
var chromaIsInitialized = false;
var browserTabIsVisible = true;
var pageHadFocus = undefined;
var lastPlayers = '';
var lastPlayerState = '';
var lastServerStatus = '';
var selectedPlayer = '';


function detectChromaSDK() {
  var oReq = new XMLHttpRequest();
  oReq.timeout = 2000; // time in milliseconds
  oReq.addEventListener("load", function() {
    var jsonVersion = JSON.parse(this.responseText);
    var versionOrBetter = false;
    if (jsonVersion != undefined &&
      jsonVersion.version != undefined) {
      var parts = jsonVersion.version.split(".");
      if (parts.length >= 3 &&
        ((parts[0] > 2) ||
        (parts[0] == 2 && parts[1] > 8) ||
        (parts[0] == 2 && parts[1] == 8 && parts[2] >= 5))) {
          versionOrBetter = true;
        } else {
          //$("#divChromaMissing").show();
          setTimeout(function() { detectChromaSDK(); }, 1000);
        }
    }
    
    if (versionOrBetter) {
      chromaSDK.init();
      chromaIsInitialized = true;
      
      gameChromaReady();
      
      console.log('Chroma initialized!');

    } else {
    
	  console.log('ChromaSDK is too old!', this.responseText);
      //showChromaProblem();

      //Redetect Chroma
      setTimeout(function() { detectChromaSDK(); }, 5000);
    }
  });
  oReq.ontimeout = function() {
    //showChromaProblem();
	console.log('ChromaSDK timed out!');
    setTimeout(function() { detectChromaSDK(); }, 5000);
  };
  oReq.onerror = function() {
    //showChromaProblem();
	console.log('ChromaSDK HTTP error!');
    setTimeout(function() { detectChromaSDK(); }, 5000);
  };
  oReq.open("GET", "https://chromasdk.io:54236/razer/chromasdk");
  oReq.send();
}


// browser function to determine tab is hidden
// ref: https://stackoverflow.com/questions/7389328/detect-if-browser-tab-has-focus/46719827#46719827
function handleTabVisibility() {

  // check the visiblility of the page
  var hidden, visibilityState, visibilityChange;

  if (typeof document.hidden !== "undefined") {
      hidden = "hidden", visibilityChange = "visibilitychange", visibilityState = "visibilityState";
  }
  else if (typeof document.mozHidden !== "undefined") {
      hidden = "mozHidden", visibilityChange = "mozvisibilitychange", visibilityState = "mozVisibilityState";
  }
  else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden", visibilityChange = "msvisibilitychange", visibilityState = "msVisibilityState";
  }
  else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden", visibilityChange = "webkitvisibilitychange", visibilityState = "webkitVisibilityState";
  }

  if (typeof document.addEventListener === "undefined" || typeof hidden === "undefined") {
      // not supported
  }
  else {
      document.addEventListener(visibilityChange, function() {
          //console.log('hidden', document[hidden]);
          //console.log('visibilityState: ', document[visibilityState]);

          switch (document[visibilityState]) {
          case "visible":
              // visible
              browserTabIsVisible = true;
              break;
          case "hidden":
              // hidden
              browserTabIsVisible = false;
              break;
          }
      }, false);
  }

};
// end of browser function


function detectWindowFocus() {
  if (browserTabIsVisible) {
    if (!pageHadFocus) {
      pageHadFocus = true;
      //console.log('page has focus');
      detectChromaSDK();
    }
  } else {
    if (pageHadFocus && chromaIsInitialized) {
      ChromaAnimation.clearAll();
      chromaSDK.uninit();
      console.log('Chroma has uninitialized! (Page lost focus)');
      pageHadFocus = false;
      chromaIsInitialized = false;
      //console.log('page lost focus');
    }
  }
}


function getPlayers() {
  var oReq = new XMLHttpRequest();
  oReq.timeout = 2000; // time in milliseconds
  oReq.addEventListener("load", function() {
	//console.log('players', this.responseText);
		
	var json = JSON.parse(this.responseText);
	//console.log('json', json);
	
	var players = '';
	Object.entries(json).forEach(([key, value]) => {
		players += ' ';
		if (selectedPlayer == value) {
		  players += '<a style="color: #0F0; background-color: #222" onclick="selectedPlayer=\'' + value + '\';">' + value + '</a>';
		} else {
		  players += '<a style="color: #000; background-color: #DDD" onclick="selectedPlayer=\'' + value + '\';">' + value + '</a>';
		}
	});
	// only need to display changes
	if (players != lastPlayers) {
		lastPlayers = players;
		$('#divPlayers').html(players);
	}

    // get next status
    setTimeout(function() { getPlayers(); }, 1000);
  });
  oReq.ontimeout = function() {
    // get next status
	setTimeout(function() { getPlayers(); }, 1000);
  };
  oReq.onerror = function() {
    // get next status
	setTimeout(function() { getPlayers(); }, 1000);
  };
  oReq.open("GET", "players.json");
  oReq.send();
}


function getPlayerState() {
  var oReq = new XMLHttpRequest();
  oReq.timeout = 2000; // time in milliseconds
  oReq.addEventListener("load", function() {
	//console.log('playerState', this.responseText);
	
	var json = JSON.parse(this.responseText);
	//console.log('json', json);
	var events = '';
	for (var i = 0; i < Object.keys(json).length; ++i) {
		var data = json[i];
		//console.log('selectedPlayer', selectedPlayer, 'player', data.player, 'event', data.event);
		if (selectedPlayer != '' &&
			data.player == selectedPlayer &&
			chromaIsInitialized) {
			//console.log('selected player', selectedPlayer, data.event);
			events += JSON.stringify(data);
			events += '<br/>';
			//events += data.event;
			//events += '<br/>';
			switch (data.event) {
				case 'OnPlayerAttack':
					showEffect1ChromaLink();
					showEffect1Headset();
					showEffect1Keyboard();
					showEffect1Keypad();
					showEffect1Mouse();
					showEffect1Mousepad();
					break;
				case 'OnActiveItemChanged':
					showEffect2ChromaLink();
					showEffect2Headset();
					showEffect2Keyboard();
					showEffect2Keypad();
					showEffect2Mouse();
					showEffect2Mousepad();
					break;
				case 'OnMessagePlayer':
					if (data.event.message == "Can't afford to place!") {
						showEffect3ChromaLink();
						showEffect3Headset();
						showEffect3Keyboard();
						showEffect3Keypad();
						showEffect3Mouse();
						showEffect3Mousepad();
					}
					break;
				case 'OnMeleeThrown':
					showEffect4ChromaLink();
					showEffect4Headset();
					showEffect4Keyboard();
					showEffect4Keypad();
					showEffect4Mouse();
					showEffect4Mousepad();
					break;
				case 'OnPlayerJump':
					showEffect5ChromaLink();
					showEffect5Headset();
					showEffect5Keyboard();
					showEffect5Keypad();
					showEffect5Mouse();
					showEffect5Mousepad();
					break;
				case 'OnPlayerDuck':
					showEffect6ChromaLink();
					showEffect6Headset();
					showEffect6Keyboard();
					showEffect6Keypad();
					showEffect6Mouse();
					showEffect6Mousepad();
					break;
				case 'OnPlayerSprint':
					showEffect7ChromaLink();
					showEffect7Headset();
					showEffect7Keyboard();
					showEffect7Keypad();
					showEffect7Mouse();
					showEffect7Mousepad();
					break;
			}
		}
	}
	if (lastPlayerState != events) {
		lastPlayerState = events;
		$('#divPlayerState').html(events);
	}
    // get next status
    setTimeout(function() { getPlayerState(); }, 100);
  });
  oReq.ontimeout = function() {
    // get next status
	setTimeout(function() { getPlayerState(); }, 1000);
  };
  oReq.onerror = function() {
    // get next status
	setTimeout(function() { getPlayerState(); }, 1000);
  };
  oReq.open("GET", "player.json?player="+selectedPlayer);
  oReq.send();
}


function getServerStatus() {
  var oReq = new XMLHttpRequest();
  oReq.timeout = 2000; // time in milliseconds
  oReq.addEventListener("load", function() {
	if (lastServerStatus != this.responseText) {
		lastServerStatus = this.responseText;
		$('#divServerStatus').html(this.responseText);
		//console.log('serverStatus', this.responseText);
	}
    // get next status
    setTimeout(function() { getServerStatus(); }, 1000);
  });
  oReq.ontimeout = function() {
    // get next status
	setTimeout(function() { getServerStatus(); }, 1000);
  };
  oReq.onerror = function() {
    // get next status
	setTimeout(function() { getServerStatus(); }, 1000);
  };
  oReq.open("GET", "status.html");
  oReq.send();
}

function setupIdleAnimation(sourceAnimation, idleAnimation, device) {
	
	ChromaAnimation.closeAnimation(sourceAnimation);
	ChromaAnimation.closeAnimation(idleAnimation);
	
	ChromaAnimation.openAnimation(sourceAnimation, function(baseAnimation) {
		
		var frameCount = 50;
		ChromaAnimation.makeBlankFramesRGB(sourceAnimation, frameCount, 0.033, 48, 48, 48);
		
		if (device == EChromaSDKDeviceEnum.DE_Keyboard) {
          var keys = [];
          keys.push(RZKEY.RZKEY_W);
          keys.push(RZKEY.RZKEY_A);
          keys.push(RZKEY.RZKEY_S);
          keys.push(RZKEY.RZKEY_D);
		  keys.push(RZKEY.RZKEY_LSHIFT);
		  keys.push(RZKEY.RZKEY_LCTRL);
		  keys.push(RZKEY.RZKEY_LALT);
		  keys.push(RZKEY.RZKEY_SPACE);
          var color = ChromaAnimation.getRGB(255,105,20);
          ChromaAnimation.setKeysColorAllFrames(sourceAnimation, keys, color);
		  var keys = [];
		  keys.push(RZKEY.RZKEY_F1);
		  keys.push(RZKEY.RZKEY_G);
		  var color = ChromaAnimation.getRGB(0,255,255);
		  ChromaAnimation.setKeysColorAllFrames(sourceAnimation, keys, color);
		  var keys = [];
		  keys.push(RZKEY.RZKEY_E);
		  keys.push(RZKEY.RZKEY_N);
		  var color = ChromaAnimation.getRGB(0,255,0);
          ChromaAnimation.setKeysColorAllFrames(sourceAnimation, keys, color);
		  var keys = [];
		  keys.push(RZKEY.RZKEY_1);
		  keys.push(RZKEY.RZKEY_2);
		  keys.push(RZKEY.RZKEY_3);
		  keys.push(RZKEY.RZKEY_4);
		  keys.push(RZKEY.RZKEY_5);
		  keys.push(RZKEY.RZKEY_6);
		  var color = ChromaAnimation.getRGB(255,255,255);
          ChromaAnimation.setKeysColorAllFrames(sourceAnimation, keys, color);
		  var keys = [];
		  keys.push(RZKEY.RZKEY_V);
		  var color = ChromaAnimation.getRGB(255,0,0);
          ChromaAnimation.setKeysColorAllFrames(sourceAnimation, keys, color);
		}
		
		ChromaAnimation.overrideFrameDuration(sourceAnimation, 0.033);
		
		ChromaAnimation.copyAnimation(sourceAnimation, idleAnimation);
		ChromaAnimation.closeAnimation(sourceAnimation);
		
		ChromaAnimation.setIdleAnimation(idleAnimation);
		ChromaAnimation.useIdleAnimation(device, true);
	});
}

function gameChromaReady() {
	
	setupIdleAnimation('Animations/Blank_ChromaLink.chroma',
		'Animations/Idle_ChromaLink.chroma',
		EChromaSDKDeviceEnum.DE_ChromaLink);
	
	setupIdleAnimation('Animations/Blank_Headset.chroma',
		'Animations/Idle_Headset.chroma',
		EChromaSDKDeviceEnum.DE_Headset);
		
	setupIdleAnimation('Animations/Blank_Keyboard.chroma',
		'Animations/Idle_Keyboard.chroma',
		EChromaSDKDeviceEnum.DE_Keyboard);
		
	setupIdleAnimation('Animations/Blank_Keypad.chroma',
		'Animations/Idle_Keypad.chroma',
		EChromaSDKDeviceEnum.DE_Keypad);
		
	setupIdleAnimation('Animations/Blank_Mouse.chroma',
		'Animations/Idle_Mouse.chroma',
		EChromaSDKDeviceEnum.DE_Mouse);
		
	setupIdleAnimation('Animations/Blank_Mousepad.chroma',
		'Animations/Idle_Mousepad.chroma',
		EChromaSDKDeviceEnum.DE_Mousepad);
}


function showEffect1Keyboard() {

  var baseLayer = 'Animations/Effect1_Keyboard.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,0,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.setChromaCustomFlag(baseLayer, true);
    ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
    
	ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect1ChromaLink() {
  var baseLayer = 'Animations/Effect1_ChromaLink.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,0,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect1Headset() {
  var baseLayer = 'Animations/Effect1_Headset.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,0,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect1Mousepad() {
  var baseLayer = 'Animations/Effect1_Mousepad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,0,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect1Mouse() {
  var baseLayer = 'Animations/Effect1_Mouse.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,0,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect1Keypad() {
  var baseLayer = 'Animations/Effect1_Keypad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,0,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}


function showEffect2Keyboard() {

  var baseLayer = 'Animations/Effect2_Keyboard.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,0,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.setChromaCustomFlag(baseLayer, true);
    ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
    
	ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect2ChromaLink() {
  var baseLayer = 'Animations/Effect2_ChromaLink.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,0,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect2Headset() {
  var baseLayer = 'Animations/Effect2_Headset.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,0,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect2Mousepad() {
  var baseLayer = 'Animations/Effect2_Mousepad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,0,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect2Mouse() {
  var baseLayer = 'Animations/Effect2_Mouse.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,0,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect2Keypad() {
  var baseLayer = 'Animations/Effect2_Keypad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,0,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect3Keyboard() {

  var baseLayer = 'Animations/Blank_Keyboard.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
	ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 0, 0);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.setChromaCustomFlag(baseLayer, true);
    ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
    
	ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect3ChromaLink() {
  var baseLayer = 'Animations/Blank_ChromaLink.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 0, 0);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect3Headset() {
  var baseLayer = 'Animations/Blank_Headset.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 0, 0);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect3Mousepad() {
  var baseLayer = 'Animations/Blank_Mousepad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 0, 0);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect3Mouse() {
  var baseLayer = 'Animations/Blank_Mouse.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 0, 0);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect3Keypad() {
  var baseLayer = 'Animations/Blank_Keypad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 0, 0);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect4Keyboard() {

  var baseLayer = 'Animations/Blank_Keyboard.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 8;
    ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0);
    ChromaAnimation.fillRandomColorsBlackAndWhiteAllFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);

    var color1 = ChromaAnimation.getRGB(255,0,0);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.setChromaCustomFlag(baseLayer, true);
    ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
    
	ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect4ChromaLink() {
  var baseLayer = 'Animations/Blank_ChromaLink.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 8;
    ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.1, 0);
    ChromaAnimation.fillRandomColorsBlackAndWhiteAllFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);

    var color1 = ChromaAnimation.getRGB(255,0,0);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect4Headset() {
  var baseLayer = 'Animations/Blank_Headset.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 8;
    ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.1, 0);
    ChromaAnimation.fillRandomColorsBlackAndWhiteAllFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);

    var color1 = ChromaAnimation.getRGB(255,0,0);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect4Mousepad() {
  var baseLayer = 'Animations/Blank_Mousepad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 8;
    ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.1, 0);
    ChromaAnimation.fillRandomColorsBlackAndWhiteAllFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);

    var color1 = ChromaAnimation.getRGB(255,0,0);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect4Mouse() {
  var baseLayer = 'Animations/Blank_Mouse.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 8;
    ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.1, 0);
    ChromaAnimation.fillRandomColorsBlackAndWhiteAllFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);

    var color1 = ChromaAnimation.getRGB(255,0,0);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect4Keypad() {
  var baseLayer = 'Animations/Blank_Keypad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 8;
    ChromaAnimation.makeBlankFrames(baseLayer, frameCount, 0.1, 0);
    ChromaAnimation.fillRandomColorsBlackAndWhiteAllFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);
    ChromaAnimation.duplicateFrames(baseLayer);

    var color1 = ChromaAnimation.getRGB(255,0,0);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect5Keyboard() {

  var baseLayer = 'Animations/Blank_Keyboard.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.setChromaCustomFlag(baseLayer, true);
    ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
    
	ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect5ChromaLink() {
  var baseLayer = 'Animations/Blank_ChromaLink.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect5Headset() {
  var baseLayer = 'Animations/Blank_Headset.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect5Mousepad() {
  var baseLayer = 'Animations/Blank_Mousepad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect5Mouse() {
  var baseLayer = 'Animations/Blank_Mouse.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect5Keypad() {
  var baseLayer = 'Animations/Blank_Keypad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var frameCount = 40;
    ChromaAnimation.makeBlankFramesRGB(baseLayer, frameCount, 0.033, 255, 255, 255);

	ChromaAnimation.fadeStartFrames(baseLayer, 10);
    ChromaAnimation.fadeEndFrames(baseLayer, frameCount - 10);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect6Keyboard() {

  var baseLayer = 'Animations/Effect6_Keyboard.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.setChromaCustomFlag(baseLayer, true);
    ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
    
	ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect6ChromaLink() {
  var baseLayer = 'Animations/Effect6_ChromaLink.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect6Headset() {
  var baseLayer = 'Animations/Effect6_Headset.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect6Mousepad() {
  var baseLayer = 'Animations/Effect6_Mousepad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect6Mouse() {
  var baseLayer = 'Animations/Effect6_Mouse.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect6Keypad() {
  var baseLayer = 'Animations/Effect6_Keypad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect7Keyboard() {

  var baseLayer = 'Animations/Effect7_Keyboard.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.setChromaCustomFlag(baseLayer, true);
    ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
    
	ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect7ChromaLink() {
  var baseLayer = 'Animations/Effect7_ChromaLink.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect7Headset() {
  var baseLayer = 'Animations/Effect7_Headset.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect7Mousepad() {
  var baseLayer = 'Animations/Effect7_Mousepad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect7Mouse() {
  var baseLayer = 'Animations/Effect7_Mouse.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect7Keypad() {
  var baseLayer = 'Animations/Effect7_Keypad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(16,16,16);
    var color2 = ChromaAnimation.getRGB(255,255,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}


$( document ).ready(function() {
  getPlayers();
  getPlayerState();
  getServerStatus();
  
  handleTabVisibility();
  setInterval(function() {
    detectWindowFocus();
  }, 1000);
});

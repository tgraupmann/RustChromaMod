/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

//minified - ChromaSDK
function ChromaSDK(){}ChromaSDK.prototype={uri:void 0,onTimer:function(){var e=chromaSDK;if(null!=e.uri&&e.initialized){var a=new XMLHttpRequest;a.open("PUT",e.uri+"/heartbeat",!0),a.setRequestHeader("content-type","application/json"),a.onerror=function(){console.log("Heartbeat onerror",a.status)},a.onreadystatechange=function(){4==a.readyState&&200!=a.status&&console.log("Heartbeat error",a.status)},a.send(null)}},init:function(){var e=this;setTimeout(function(){null!=e.timerId&&(clearInterval(e.timerId),e.timerId=void 0);var a=new XMLHttpRequest;a.open("POST","https://chromasdk.io:54236/razer/chromasdk",!0),a.setRequestHeader("content-type","application/json");var o=JSON.stringify({title:"RUST Chroma RGB MOD",description:"Play RGB lighting from RUST game events.",author:{name:"Razer US Ltd.",contact:"https://github.com/tgraupmann/RustChromaMod"},device_supported:["keyboard","mouse","headset","mousepad","keypad","chromalink"],category:"game"});a.send(o),a.onreadystatechange=function(){4==a.readyState&&null!=a.responseText&&""!=a.responseText&&(e.uri=JSON.parse(a.responseText).uri,e.timerId=setInterval(e.onTimer,1e3),e.initialized=!0,console.log("Chroma is initialized!"))}},0)},uninit:function(){var e=this;setTimeout(function(){if(e.initialized=!1,null!=e.uri){console.log("Uninitializing Chroma...");var a=new XMLHttpRequest;a.open("DELETE",e.uri,!0),a.setRequestHeader("content-type","application/json"),a.send(null),a.onreadystatechange=function(){4==a.readyState&&console.log("Chroma uninitialized!")},e.uri=void 0}},0)},createKeyboardEffect:function(e,a){var o=this;setTimeout(function(){if(null!=o.uri){var r;if("CHROMA_NONE"==e)r=JSON.stringify({effect:e});else if("CHROMA_CUSTOM"==e)r=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var i={color:a};r=JSON.stringify({effect:e,param:i})}else if("CHROMA_CUSTOM_KEY"==e){i={color:a,key:a};r=JSON.stringify({effect:e,param:i})}var n=new XMLHttpRequest;n.open("PUT",o.uri+"/keyboard",!0),n.setRequestHeader("content-type","application/json"),n.send(r)}},0)},preCreateKeyboardEffect:function(e,a){if(null!=this.uri){var o;if("CHROMA_NONE"==e)o=JSON.stringify({effect:e});else if("CHROMA_CUSTOM"==e)o=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var r={color:a};o=JSON.stringify({effect:e,param:r})}else"CHROMA_CUSTOM_KEY"==e&&(o=JSON.stringify({effect:e,param:a}));var i=new XMLHttpRequest;return i.open("POST",this.uri+"/keyboard",!1),i.setRequestHeader("content-type","application/json"),i.send(o),JSON.parse(i.responseText).id}},createMousematEffect:function(e,a){var o=this;setTimeout(function(){if(null!=o.uri){var r;if("CHROMA_NONE"==e)r=JSON.stringify({effect:e});else if("CHROMA_CUSTOM"==e)r=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var i={color:a};r=JSON.stringify({effect:e,param:i})}var n=new XMLHttpRequest;n.open("PUT",o.uri+"/mousepad",!0),n.setRequestHeader("content-type","application/json"),n.send(r)}},0)},preCreateMousematEffect:function(e,a){if(null!=this.uri){var o;if("CHROMA_NONE"==e)o=JSON.stringify({effect:e});else if("CHROMA_CUSTOM"==e)o=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var r={color:a};o=JSON.stringify({effect:e,param:r})}var i=new XMLHttpRequest;return i.open("POST",this.uri+"/mousepad",!1),i.setRequestHeader("content-type","application/json"),i.send(o),JSON.parse(i.responseText).id}},createMouseEffect:function(e,a){var o=this;setTimeout(function(){if(null!=o.uri){var r;if("CHROMA_NONE"==e)r=JSON.stringify({effect:e});else if("CHROMA_CUSTOM2"==e)r=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var i={color:a};r=JSON.stringify({effect:e,param:i})}var n=new XMLHttpRequest;n.open("PUT",o.uri+"/mouse",!0),n.setRequestHeader("content-type","application/json"),n.send(r)}},0)},preCreateMouseEffect:function(e,a){if(null!=this.uri){var o;if("CHROMA_NONE"==e)o=JSON.stringify({effect:e});else if("CHROMA_CUSTOM2"==e)o=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var r={color:a};o=JSON.stringify({effect:e,param:r})}var i=new XMLHttpRequest;return i.open("POST",this.uri+"/mouse",!1),i.setRequestHeader("content-type","application/json"),i.send(o),JSON.parse(i.responseText).id}},createHeadsetEffect:function(e,a){var o=this;setTimeout(function(){if(null!=o.uri){var r;if("CHROMA_NONE"==e)r=JSON.stringify({effect:e});else if("CHROMA_CUSTOM"==e)r=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var i={color:a};r=JSON.stringify({effect:e,param:i})}var n=new XMLHttpRequest;n.open("PUT",o.uri+"/headset",!0),n.setRequestHeader("content-type","application/json"),n.send(r)}},0)},preCreateHeadsetEffect:function(e,a){if(null!=this.uri){var o;if("CHROMA_NONE"==e)o=JSON.stringify({effect:e});else if("CHROMA_CUSTOM"==e)o=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var r={color:a};o=JSON.stringify({effect:e,param:r})}var i=new XMLHttpRequest;return i.open("POST",this.uri+"/headset",!1),i.setRequestHeader("content-type","application/json"),i.send(o),JSON.parse(i.responseText).id}},createKeypadEffect:function(e,a){var o=this;setTimeout(function(){if(null!=o.uri){var r;if("CHROMA_NONE"==e)r=JSON.stringify({effect:e});else if("CHROMA_CUSTOM"==e)r=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var i={color:a};r=JSON.stringify({effect:e,param:i})}var n=new XMLHttpRequest;n.open("PUT",o.uri+"/keypad",!0),n.setRequestHeader("content-type","application/json"),n.send(r)}},0)},preCreateKeypadEffect:function(e,a){if(null!=this.uri){var o;if("CHROMA_NONE"==e)o=JSON.stringify({effect:e});else if("CHROMA_CUSTOM"==e)o=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var r={color:a};o=JSON.stringify({effect:e,param:r})}var i=new XMLHttpRequest;return i.open("POST",this.uri+"/keypad",!1),i.setRequestHeader("content-type","application/json"),i.send(o),JSON.parse(i.responseText).id}},createChromaLinkEffect:function(e,a){var o=this;setTimeout(function(){if(null!=o.uri){var r;if("CHROMA_NONE"==e)r=JSON.stringify({effect:e});else if("CHROMA_CUSTOM"==e)r=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var i={color:a};r=JSON.stringify({effect:e,param:i})}var n=new XMLHttpRequest;n.open("PUT",o.uri+"/chromalink",!0),n.setRequestHeader("content-type","application/json"),n.send(r)}},0)},preCreateChromaLinkEffect:function(e,a){if(null!=this.uri){var o;if("CHROMA_NONE"==e)o=JSON.stringify({effect:e});else if("CHROMA_CUSTOM"==e)o=JSON.stringify({effect:e,param:a});else if("CHROMA_STATIC"==e){var r={color:a};o=JSON.stringify({effect:e,param:r})}var i=new XMLHttpRequest;return i.open("POST",this.uri+"/chromalink",!1),i.setRequestHeader("content-type","application/json"),i.send(o),JSON.parse(i.responseText).id}},setEffect:function(e){var a=this;setTimeout(function(){if(null!=a.uri){var o=JSON.stringify({id:e}),r=new XMLHttpRequest;r.open("PUT",a.uri+"/effect",!0),r.setRequestHeader("content-type","application/json"),r.send(o)}},0)},deleteEffect:function(e){var a=this;setTimeout(function(){if(null!=a.uri){var o=JSON.stringify({id:e}),r=new XMLHttpRequest;r.open("DELETE",a.uri+"/effect",!0),r.setRequestHeader("content-type","application/json"),r.send(o)}},0)},deleteEffectGroup:function(e){var a=this;setTimeout(function(){if(null!=a.uri){var o=e,r=new XMLHttpRequest;r.open("DELETE",a.uri+"/effect",!0),r.setRequestHeader("content-type","application/json"),r.send(o)}},0)}};var RZKEY={RZKEY_ESC:1,RZKEY_F1:3,RZKEY_F2:4,RZKEY_F3:5,RZKEY_F4:6,RZKEY_F5:7,RZKEY_F6:8,RZKEY_F7:9,RZKEY_F8:10,RZKEY_F9:11,RZKEY_F10:12,RZKEY_F11:13,RZKEY_F12:14,RZKEY_1:258,RZKEY_2:259,RZKEY_3:260,RZKEY_4:261,RZKEY_5:262,RZKEY_6:263,RZKEY_7:264,RZKEY_8:265,RZKEY_9:266,RZKEY_0:267,RZKEY_A:770,RZKEY_B:1031,RZKEY_C:1029,RZKEY_D:772,RZKEY_E:516,RZKEY_F:773,RZKEY_G:774,RZKEY_H:775,RZKEY_I:521,RZKEY_J:776,RZKEY_K:777,RZKEY_L:778,RZKEY_M:1033,RZKEY_N:1032,RZKEY_O:522,RZKEY_P:523,RZKEY_Q:514,RZKEY_R:517,RZKEY_S:771,RZKEY_T:518,RZKEY_U:520,RZKEY_V:1030,RZKEY_W:515,RZKEY_X:1028,RZKEY_Y:519,RZKEY_Z:1027,RZKEY_NUMLOCK:274,RZKEY_NUMPAD0:1299,RZKEY_NUMPAD1:1042,RZKEY_NUMPAD2:1043,RZKEY_NUMPAD3:1044,RZKEY_NUMPAD4:786,RZKEY_NUMPAD5:787,RZKEY_NUMPAD6:788,RZKEY_NUMPAD7:530,RZKEY_NUMPAD8:531,RZKEY_NUMPAD9:532,RZKEY_NUMPAD_DIVIDE:275,RZKEY_NUMPAD_MULTIPLY:276,RZKEY_NUMPAD_SUBTRACT:277,RZKEY_NUMPAD_ADD:533,RZKEY_NUMPAD_ENTER:1045,RZKEY_NUMPAD_DECIMAL:1300,RZKEY_PRINTSCREEN:15,RZKEY_SCROLL:16,RZKEY_PAUSE:17,RZKEY_INSERT:271,RZKEY_HOME:272,RZKEY_PAGEUP:273,RZKEY_DELETE:527,RZKEY_END:528,RZKEY_PAGEDOWN:529,RZKEY_UP:1040,RZKEY_LEFT:1295,RZKEY_DOWN:1296,RZKEY_RIGHT:1297,RZKEY_TAB:513,RZKEY_CAPSLOCK:769,RZKEY_BACKSPACE:270,RZKEY_ENTER:782,RZKEY_LCTRL:1281,RZKEY_LWIN:1282,RZKEY_LALT:1283,RZKEY_SPACE:1287,RZKEY_RALT:1291,RZKEY_FN:1292,RZKEY_RMENU:1293,RZKEY_RCTRL:1294,RZKEY_LSHIFT:1025,RZKEY_RSHIFT:1038,RZKEY_MACRO1:256,RZKEY_MACRO2:512,RZKEY_MACRO3:768,RZKEY_MACRO4:1024,RZKEY_MACRO5:1280,RZKEY_OEM_1:257,RZKEY_OEM_2:268,RZKEY_OEM_3:269,RZKEY_OEM_4:524,RZKEY_OEM_5:525,RZKEY_OEM_6:526,RZKEY_OEM_7:779,RZKEY_OEM_8:780,RZKEY_OEM_9:1034,RZKEY_OEM_10:1035,RZKEY_OEM_11:1036,RZKEY_EUR_1:781,RZKEY_EUR_2:1026,RZKEY_JPN_1:21,RZKEY_JPN_2:1037,RZKEY_JPN_3:1284,RZKEY_JPN_4:1289,RZKEY_JPN_5:1290,RZKEY_KOR_1:21,RZKEY_KOR_2:781,RZKEY_KOR_3:1026,RZKEY_KOR_4:1037,RZKEY_KOR_5:1284,RZKEY_KOR_6:1289,RZKEY_KOR_7:1290,RZKEY_INVALID:65535},RZLED={RZLED_LOGO:20},Mouse={};function getHighByte(e){return(65280&e)>>8}function getLowByte(e){return 255&e}Mouse.RZLED2={RZLED2_SCROLLWHEEL:515,RZLED2_LOGO:1795,RZLED2_BACKLIGHT:1027,RZLED2_LEFT_SIDE1:256,RZLED2_LEFT_SIDE2:512,RZLED2_LEFT_SIDE3:768,RZLED2_LEFT_SIDE4:1024,RZLED2_LEFT_SIDE5:1280,RZLED2_LEFT_SIDE6:1536,RZLED2_LEFT_SIDE7:1792,RZLED2_BOTTOM1:2049,RZLED2_BOTTOM2:2050,RZLED2_BOTTOM3:2051,RZLED2_BOTTOM4:2052,RZLED2_BOTTOM5:2053,RZLED2_RIGHT_SIDE1:262,RZLED2_RIGHT_SIDE2:518,RZLED2_RIGHT_SIDE3:774,RZLED2_RIGHT_SIDE4:1030,RZLED2_RIGHT_SIDE5:1286,RZLED2_RIGHT_SIDE6:1542,RZLED2_RIGHT_SIDE7:1798};var EChromaSDKDeviceTypeEnum={DE_1D:0,DE_2D:1},EChromaSDKDevice1DEnum={DE_ChromaLink:0,DE_Headset:1,DE_Mousepad:2,DE_MAX:3},EChromaSDKDevice2DEnum={DE_Keyboard:0,DE_Keypad:1,DE_Mouse:2,DE_MAX:3},EChromaSDKDeviceEnum={DE_ChromaLink:0,DE_Headset:1,DE_Keyboard:2,DE_Keypad:3,DE_Mouse:4,DE_Mousepad:5,DE_MAX:6};function ChromaAnimationFrame1D(){}function ChromaAnimationFrame2D(){}var ChromaAnimation={LoadedAnimations:{},LoadedAnimations1D:{},LoadedAnimations2D:{},PlayingAnimations1D:{},PlayingAnimations2D:{},UseIdleAnimation1D:{},UseIdleAnimation2D:{},IdleAnimation1D:{},IdleAnimation2D:{},IntervalUpdateFrame:void 0,updateFrame:function(){null==ChromaAnimation.IntervalUpdateFrame&&(ChromaAnimation.useIdleAnimations(!1),ChromaAnimation.IdleAnimation1D[EChromaSDKDevice1DEnum.DE_ChromaLink]={},ChromaAnimation.IdleAnimation1D[EChromaSDKDevice1DEnum.DE_Headset]={},ChromaAnimation.IdleAnimation1D[EChromaSDKDevice1DEnum.DE_Mousepad]={},ChromaAnimation.IdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keyboard]={},ChromaAnimation.IdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keypad]={},ChromaAnimation.IdleAnimation2D[EChromaSDKDevice2DEnum.DE_Mouse]={},ChromaAnimation.PlayingAnimations1D[EChromaSDKDevice1DEnum.DE_ChromaLink]={},ChromaAnimation.PlayingAnimations1D[EChromaSDKDevice1DEnum.DE_Headset]={},ChromaAnimation.PlayingAnimations1D[EChromaSDKDevice1DEnum.DE_Mousepad]={},ChromaAnimation.PlayingAnimations2D[EChromaSDKDevice2DEnum.DE_Keyboard]={},ChromaAnimation.PlayingAnimations2D[EChromaSDKDevice2DEnum.DE_Keypad]={},ChromaAnimation.PlayingAnimations2D[EChromaSDKDevice2DEnum.DE_Mouse]={},ChromaAnimation.IntervalUpdateFrame=setInterval(this.updateFrame,33));for(var e=0;e<EChromaSDKDevice1DEnum.DE_MAX;++e){var a=ChromaAnimation.getAnimation(ChromaAnimation.IdleAnimation1D[e]),o=!0;for(var r in ChromaAnimation.PlayingAnimations1D[e]){null!=(i=ChromaAnimation.PlayingAnimations1D[e][r])&&(i.playFrame(),a!=i&&(o=!1,null!=a&&(a.FrameTime=i.FrameTime)))}ChromaAnimation.UseIdleAnimation1D[e]&&null!=a&&o&&a.playFrame()}for(e=0;e<EChromaSDKDevice2DEnum.DE_MAX;++e){a=ChromaAnimation.getAnimation(ChromaAnimation.IdleAnimation2D[e]),o=!0;for(var r in ChromaAnimation.PlayingAnimations2D[e]){var i;null!=(i=ChromaAnimation.PlayingAnimations2D[e][r])&&(i.playFrame(),a!=i&&(o=!1,null!=a&&(a.FrameTime=i.FrameTime)))}ChromaAnimation.UseIdleAnimation2D[e]&&null!=a&&o&&a.playFrame()}},getMaxLeds:function(e){return e==EChromaSDKDevice1DEnum.DE_ChromaLink?5:e==EChromaSDKDevice1DEnum.DE_Headset?5:e==EChromaSDKDevice1DEnum.DE_Mousepad?15:void console.log("getMaxLeds: Invalid device!")},getMaxRow:function(e){return e==EChromaSDKDevice2DEnum.DE_Keyboard?6:e==EChromaSDKDevice2DEnum.DE_Keypad?4:e==EChromaSDKDevice2DEnum.DE_Mouse?9:void console.log("getMaxRow: Invalid device!")},getMaxColumn:function(e){return e==EChromaSDKDevice2DEnum.DE_Keyboard?22:e==EChromaSDKDevice2DEnum.DE_Keypad?5:e==EChromaSDKDevice2DEnum.DE_Mouse?7:void console.log("getMaxColumn: Invalid device!")},openAnimation:function(e,a){var o=this,r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState){if(200!=r.status)return void console.error("Animation is missing!",e);var i=r.response,n=0,m=4,t=new Uint32Array(i.slice(n,n+m))[0];if(n+=m,1!=t)return void console.log("openAnimation: Unsupported version!");m=1;var D=new Uint8Array(i.slice(n,n+m))[0];if(n+=m,D==EChromaSDKDeviceTypeEnum.DE_1D)(h=new ChromaAnimation1D).openAnimation(i,n),h.Name=e,o.LoadedAnimations[e]=h,a(h);else if(D==EChromaSDKDeviceTypeEnum.DE_2D){var h;(h=new ChromaAnimation2D).openAnimation(i,n),h.Name=e,o.LoadedAnimations[e]=h,null!=a&&a(h)}else null!=a&&a(void 0)}},r.open("GET",e,!0),r.responseType="arraybuffer",r.send("")},getDeviceType:e=>e==EChromaSDKDeviceEnum.DE_ChromaLink?EChromaSDKDeviceTypeEnum.DE_1D:e==EChromaSDKDeviceEnum.DE_Headset?EChromaSDKDeviceTypeEnum.DE_1D:e==EChromaSDKDeviceEnum.DE_Keyboard?EChromaSDKDeviceTypeEnum.DE_2D:e==EChromaSDKDeviceEnum.DE_Keypad?EChromaSDKDeviceTypeEnum.DE_2D:e==EChromaSDKDeviceEnum.DE_Mouse?EChromaSDKDeviceTypeEnum.DE_2D:e==EChromaSDKDeviceEnum.DE_Mousepad?EChromaSDKDeviceTypeEnum.DE_1D:void 0,getDevice1D:e=>e==EChromaSDKDeviceEnum.DE_ChromaLink?EChromaSDKDevice1DEnum.DE_ChromaLink:e==EChromaSDKDeviceEnum.DE_Headset?EChromaSDKDevice1DEnum.DE_Headset:e==EChromaSDKDeviceEnum.DE_Mousepad?EChromaSDKDevice1DEnum.DE_Mousepad:void 0,getDevice2D:e=>e==EChromaSDKDeviceEnum.DE_Keyboard?EChromaSDKDevice2DEnum.DE_Keyboard:e==EChromaSDKDeviceEnum.DE_Keypad?EChromaSDKDevice2DEnum.DE_Keypad:e==EChromaSDKDeviceEnum.DE_Mouse?EChromaSDKDevice2DEnum.DE_Mouse:void 0,getDeviceEnum(e,a){if(e==EChromaSDKDeviceTypeEnum.DE_1D){if(a==EChromaSDKDevice1DEnum.DE_ChromaLink)return EChromaSDKDeviceEnum.DE_ChromaLink;if(a==EChromaSDKDevice1DEnum.DE_Headset)return EChromaSDKDeviceEnum.DE_Headset;if(a==EChromaSDKDevice1DEnum.DE_Mousepad)return EChromaSDKDeviceEnum.DE_Mousepad}else{if(e!=EChromaSDKDeviceTypeEnum.DE_2D)return;if(a==EChromaSDKDevice2DEnum.DE_Keyboard)return EChromaSDKDeviceEnum.DE_Keyboard;if(a==EChromaSDKDevice2DEnum.DE_Keypad)return EChromaSDKDeviceEnum.DE_Keypad;if(a==EChromaSDKDevice2DEnum.DE_Mouse)return EChromaSDKDeviceEnum.DE_Mouse}},lerp:function(e,a,o){return(1-o)*e+o*a},lerpColor:function(e,a,o){return Math.floor(this.lerp(255&e,255&a,o))|Math.floor(this.lerp((65280&e)>>8,(65280&a)>>8,o))<<8|Math.floor(this.lerp((16711680&e)>>16,(16711680&a)>>16,o))<<16},getAnimation:function(e){var a=this.LoadedAnimations[e];return null==a?void 0:a},getFrameCount:function(e){var a=this.getAnimation(e);return null==a?0:a.getFrameCount()},stopByAnimationType:function(e){if(null!=chromaSDK){if(this.getDeviceType(e)==EChromaSDKDeviceTypeEnum.DE_1D){var a=this.getDevice1D(e);null!=(o=ChromaAnimation.LoadedAnimations1D[a])&&o.stop(),ChromaAnimation.LoadedAnimations1D[a]=void 0}else if(this.getDeviceType(e)==EChromaSDKDeviceTypeEnum.DE_2D){var o,r=this.getDevice2D(e);null!=(o=this.LoadedAnimations2D[r])&&o.stop(),this.LoadedAnimations2D[r]=void 0}}else setTimeout(function(){ChromaAnimation.stopByAnimationType(e)},100)},stopAll:function(){this.stopByAnimationType(EChromaSDKDeviceEnum.DE_ChromaLink),this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Headset),this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Keyboard),this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Keypad),this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Mouse),this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Mousepad)},isPlaying:function(e){return null!=chromaSDK&&(null!=this.LoadedAnimations[e]&&this.LoadedAnimations[e].isPlaying())},playAnimation:function(e,a,o){if(null!=chromaSDK)if(null==this.LoadedAnimations[e]){var r=this;ChromaAnimation.openAnimation(e,function(i){switch(r.LoadedAnimations[e]=i,i.FrameCallback=o,i.DeviceType){case EChromaSDKDeviceTypeEnum.DE_1D:ChromaAnimation.PlayingAnimations1D[i.Device][e]=i;break;case EChromaSDKDeviceTypeEnum.DE_2D:ChromaAnimation.PlayingAnimations2D[i.Device][e]=i}i.play(a)})}else{var i=this.LoadedAnimations[e];switch(i.FrameCallback=o,i.DeviceType){case EChromaSDKDeviceTypeEnum.DE_1D:ChromaAnimation.PlayingAnimations1D[i.Device][e]=i;break;case EChromaSDKDeviceTypeEnum.DE_2D:ChromaAnimation.PlayingAnimations2D[i.Device][e]=i}i.play(a)}else setTimeout(function(){ChromaAnimation.playAnimation(e,a,o)},100)},stopAnimation:function(e){var a=this.LoadedAnimations[e];if(null!=a)switch(this.LoadedAnimations[e].stop(),a.DeviceType){case EChromaSDKDeviceTypeEnum.DE_1D:ChromaAnimation.PlayingAnimations1D[a.Device][e]=void 0;break;case EChromaSDKDeviceTypeEnum.DE_2D:ChromaAnimation.PlayingAnimations2D[a.Device][e]=void 0}},closeAnimation:function(e){null!=this.LoadedAnimations[e]&&(this.LoadedAnimations[e].stop(),this.LoadedAnimations[e]=void 0)},useIdleAnimation:function(e,a){switch(e){case EChromaSDKDeviceEnum.DE_ChromaLink:ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_ChromaLink]=a;break;case EChromaSDKDeviceEnum.DE_Headset:ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_Headset]=a;break;case EChromaSDKDeviceEnum.DE_Mousepad:ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_Mousepad]=a;break;case EChromaSDKDeviceEnum.DE_Keyboard:ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keyboard]=a;break;case EChromaSDKDeviceEnum.DE_Keypad:ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keypad]=a;break;case EChromaSDKDeviceEnum.DE_Mouse:ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Mouse]=a}},useIdleAnimations:function(e){ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_ChromaLink]=e,ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_Headset]=e,ChromaAnimation.UseIdleAnimation1D[EChromaSDKDevice1DEnum.DE_Mousepad]=e,ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keyboard]=e,ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Keypad]=e,ChromaAnimation.UseIdleAnimation2D[EChromaSDKDevice2DEnum.DE_Mouse]=e},setIdleAnimation:function(e){var a=ChromaAnimation.LoadedAnimations[e];if(null==a)ChromaAnimation.openAnimation(e,function(a){switch(a.DeviceType){case EChromaSDKDeviceTypeEnum.DE_1D:ChromaAnimation.IdleAnimation1D[a.Device]=e;break;case EChromaSDKDeviceTypeEnum.DE_2D:ChromaAnimation.IdleAnimation2D[a.Device]=e}});else switch(a.DeviceType){case EChromaSDKDeviceTypeEnum.DE_1D:ChromaAnimation.IdleAnimation1D[a.Device]=e;break;case EChromaSDKDeviceTypeEnum.DE_2D:ChromaAnimation.IdleAnimation2D[a.Device]=e}},reverseAllFrames:function(e){var a=this.LoadedAnimations[e];null!=a&&(a.Frames=a.Frames.reverse())},setKeysColor:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var n=i.Frames,m=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),t=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(a>=0&&a<n.length)for(var D=n[a].Colors,h=0;h<m;++h)for(var s=D[h],E=0;E<t;++E)for(var v=0;v<o.length;++v){var l=o[v];getHighByte(l)==h&&getLowByte(l)==E&&(s[E]=r)}}},setKeysColorRGB:function(e,a,o,r,i,n){var m=this.LoadedAnimations[e];if(null!=m&&m.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&m.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var t=m.Frames,D=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),h=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),s=ChromaAnimation.getRGB(r,i,n);if(a>=0&&a<t.length)for(var E=t[a].Colors,v=0;v<D;++v)for(var l=E[v],u=0;u<h;++u)for(var C=0;C<o.length;++C){var c=o[C];getHighByte(c)==v&&getLowByte(c)==u&&(l[u]=s)}}},setKeyColor:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var n=i.Frames,m=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),t=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(a>=0&&a<n.length)for(var D=n[a].Colors,h=0;h<m;++h)for(var s=D[h],E=0;E<t;++E)getHighByte(o)==h&&getLowByte(o)==E&&(s[E]=r)}},setKeyColorAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var i=r.Frames,n=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),m=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),t=0;t<i.length;++t)for(var D=i[t].Colors,h=0;h<n;++h)for(var s=D[h],E=0;E<m;++E)getHighByte(a)==h&&getLowByte(a)==E&&(s[E]=o)},setKeyColorAllFramesRGB:function(e,a,o,r,i){var n=this.LoadedAnimations[e];if(null!=n&&n.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&n.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var m=n.Frames,t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=255&o|(255&r)<<8|(255&i)<<16,s=0;s<m.length;++s)for(var E=m[s].Colors,v=0;v<t;++v)for(var l=E[v],u=0;u<D;++u)getHighByte(a)==v&&getLowByte(a)==u&&(l[u]=h)},setKeysColorAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var i=r.Frames,n=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),m=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),t=0;t<i.length;++t)for(var D=i[t].Colors,h=0;h<n;++h)for(var s=D[h],E=0;E<m;++E)for(var v=0;v<a.length;++v){var l=a[v];getHighByte(l)==h&&getLowByte(l)==E&&(s[E]=o)}},setKeysColorAllFramesRGB:function(e,a,o,r,i){var n=this.LoadedAnimations[e];if(null!=n&&n.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&n.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var m=n.Frames,t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=255&o|(255&r)<<8|(255&i)<<16,s=0;s<m.length;++s)for(var E=m[s].Colors,v=0;v<t;++v)for(var l=E[v],u=0;u<D;++u)for(var C=0;C<a.length;++C){var c=a[C];getHighByte(c)==v&&getLowByte(c)==u&&(l[u]=h)}},copyKeyColorAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=this.LoadedAnimations[a];if(null!=i&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var n=r.Frames;if(0!=n.length){var m=i.Frames;if(0!=m.length)for(var t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=0;h<m.length;++h)for(var s=n[h%n.length],E=m[h],v=s.Colors,l=E.Colors,u=0;u<t;++u)for(var C=v[u],c=l[u],f=0;f<D;++f)getHighByte(o)==u&&getLowByte(o)==f&&(c[f]=C[f])}}}},copyKeyColorAllFramesOffset:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i){var n=this.LoadedAnimations[a];if(null!=n&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&n.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&n.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var m=i.Frames;if(0!=m.length){var t=n.Frames;if(0!=t.length)for(var D=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),h=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),s=0;s<m.length&&s+r<t.length;++s)for(var E=m[s],v=t[(s+r)%t.length],l=E.Colors,u=v.Colors,C=0;C<D;++C)for(var c=l[C],f=u[C],A=0;A<h;++A)getHighByte(o)==C&&getLowByte(o)==A&&(f[A]=c[A])}}}},copyKeysColorAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=this.LoadedAnimations[a];if(null!=i&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var n=r.Frames;if(0!=n.length){var m=i.Frames;if(0!=m.length)for(var t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=0;h<m.length;++h)for(var s=n[h%n.length],E=m[h],v=s.Colors,l=E.Colors,u=0;u<t;++u)for(var C=v[u],c=l[u],f=0;f<D;++f)for(var A=0;A<o.length;++A){var y=o[A];getHighByte(y)==u&&getLowByte(y)==f&&(c[f]=C[f])}}}}},copyNonZeroAllKeys:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=this.LoadedAnimations[a];if(null!=i&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var n=r.Frames;if(0!=n.length){var m=i.Frames;if(0!=m.length){var t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(o>=0&&o<m.length)for(var h=n[o%n.length],s=m[o],E=h.Colors,v=s.Colors,l=0;l<t;++l)for(var u=E[l],C=v[l],c=0;c<D;++c){var f=u[c];0!=f&&(C[c]=f)}}}}}},copyNonZeroAllKeysAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=this.LoadedAnimations[a];if(null!=r&&o.DeviceType==r.DeviceType&&o.Device==r.Device){var i=o.Frames;if(0!=i.length){var n=r.Frames;if(0!=n.length)if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var m=ChromaAnimation.getMaxLeds(o.Device),t=0;t<n.length;++t)for(var D=i[t%i.length],h=n[t],s=D.Colors,E=h.Colors,v=0;v<m;++v){0!=(A=s[v])&&(E[v]=A)}else if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var l=ChromaAnimation.getMaxRow(o.Device),u=ChromaAnimation.getMaxColumn(o.Device);for(t=0;t<n.length;++t)for(D=i[t%i.length],h=n[t],s=D.Colors,E=h.Colors,v=0;v<l;++v)for(var C=s[v],c=E[v],f=0;f<u;++f){var A;0!=(A=C[f])&&(c[f]=A)}}}}}},addNonZeroAllKeysAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=this.LoadedAnimations[a];if(null!=r&&o.DeviceType==r.DeviceType&&o.Device==r.Device){var i=o.Frames;if(0!=i.length){var n=r.Frames;if(0!=n.length)if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var m=ChromaAnimation.getMaxLeds(o.Device),t=0;t<n.length;++t)for(var D=i[t%i.length],h=n[t],s=D.Colors,E=h.Colors,v=0;v<m;++v){if(0!=(g=s[v])){var l=255&g,u=(65280&g)>>8,C=(16711680&g)>>16,c=255&(S=E[v]),f=(65280&S)>>8,A=(16711680&S)>>16,y=255&Math.min(255,Math.max(0,Number(c)+Number(l)))|(255&Math.min(255,Math.max(0,Number(f)+Number(u))))<<8|(255&Math.min(255,Math.max(0,Number(A)+Number(C))))<<16;E[v]=y}}else if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var K=ChromaAnimation.getMaxRow(o.Device),d=ChromaAnimation.getMaxColumn(o.Device);for(t=0;t<n.length;++t)for(D=i[t%i.length],h=n[t],s=D.Colors,E=h.Colors,v=0;v<K;++v)for(var p=s[v],_=E[v],M=0;M<d;++M){var g;if(0!=(g=p[M])){var S;l=255&g,u=(65280&g)>>8,C=(16711680&g)>>16,c=255&(S=_[M]),f=(65280&S)>>8,A=(16711680&S)>>16,y=255&Math.min(255,Math.max(0,Number(c)+Number(l)))|(255&Math.min(255,Math.max(0,Number(f)+Number(u))))<<8|(255&Math.min(255,Math.max(0,Number(A)+Number(C))))<<16;_[M]=y}}}}}}},subtractNonZeroAllKeysAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=this.LoadedAnimations[a];if(null!=r&&o.DeviceType==r.DeviceType&&o.Device==r.Device){var i=o.Frames;if(0!=i.length){var n=r.Frames;if(0!=n.length)if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var m=ChromaAnimation.getMaxLeds(o.Device),t=0;t<n.length;++t)for(var D=i[t%i.length],h=n[t],s=D.Colors,E=h.Colors,v=0;v<m;++v){if(0!=(g=s[v])){var l=255&g,u=(65280&g)>>8,C=(16711680&g)>>16,c=255&(S=E[v]),f=(65280&S)>>8,A=(16711680&S)>>16,y=255&Math.min(255,Math.max(0,Number(c)-Number(l)))|(255&Math.min(255,Math.max(0,Number(f)-Number(u))))<<8|(255&Math.min(255,Math.max(0,Number(A)-Number(C))))<<16;E[v]=y}}else if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var K=ChromaAnimation.getMaxRow(o.Device),d=ChromaAnimation.getMaxColumn(o.Device);for(t=0;t<n.length;++t)for(D=i[t%i.length],h=n[t],s=D.Colors,E=h.Colors,v=0;v<K;++v)for(var p=s[v],_=E[v],M=0;M<d;++M){var g;if(0!=(g=p[M])){var S;l=255&g,u=(65280&g)>>8,C=(16711680&g)>>16,c=255&(S=_[M]),f=(65280&S)>>8,A=(16711680&S)>>16,y=255&Math.min(255,Math.max(0,Number(c)-Number(l)))|(255&Math.min(255,Math.max(0,Number(f)-Number(u))))<<8|(255&Math.min(255,Math.max(0,Number(A)-Number(C))))<<16;_[M]=y}}}}}}},addNonZeroAllKeysAllFramesOffset:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=this.LoadedAnimations[a];if(null!=i&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var n=r.Frames;if(0!=n.length){var m=i.Frames;if(0!=m.length)for(var t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=n.length-1;h>=0;--h)for(var s=n[h],E=m[(h+o)%m.length],v=s.Colors,l=E.Colors,u=0;u<t;++u)for(var C=v[u],c=l[u],f=0;f<D;++f){var A=C[f];if(0!=A){var y=255&A,K=(65280&A)>>8,d=(16711680&A)>>16,p=c[f],_=255&p,M=(65280&p)>>8,g=(16711680&p)>>16,S=255&Math.min(255,Math.max(0,Number(_)+Number(y)))|(255&Math.min(255,Math.max(0,Number(M)+Number(K))))<<8|(255&Math.min(255,Math.max(0,Number(g)+Number(d))))<<16;c[f]=S}}}}}},subtractNonZeroAllKeysAllFramesOffset:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=this.LoadedAnimations[a];if(null!=i&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var n=r.Frames;if(0!=n.length){var m=i.Frames;if(0!=m.length)for(var t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=0;h<n.length&&h<m.length;++h)for(var s=n[h],E=m[(h+o)%m.length],v=s.Colors,l=E.Colors,u=0;u<t;++u)for(var C=v[u],c=l[u],f=0;f<D;++f){var A=C[f];if(0!=A){var y=255&A,K=(65280&A)>>8,d=(16711680&A)>>16,p=c[f],_=255&p,M=(65280&p)>>8,g=(16711680&p)>>16,S=255&Math.min(255,Math.max(0,Number(_)-Number(y)))|(255&Math.min(255,Math.max(0,Number(M)-Number(K))))<<8|(255&Math.min(255,Math.max(0,Number(g)-Number(d))))<<16;c[f]=S}}}}}},copyNonZeroAllKeysOffset:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i){var n=this.LoadedAnimations[a];if(null!=n&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&n.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&n.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var m=i.Frames;if(0!=m.length){var t=n.Frames;if(0!=t.length){var D=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),h=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(o>=0&&o<m.length)for(var s=m[o],E=t[(o+r)%t.length],v=s.Colors,l=E.Colors,u=0;u<D;++u)for(var C=v[u],c=l[u],f=0;f<h;++f){var A=C[f];0!=A&&(c[f]=A)}}}}}},copyNonZeroAllKeysAllFramesOffset:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=this.LoadedAnimations[a];if(null!=i&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var n=r.Frames;if(0!=n.length){var m=i.Frames;if(0!=m.length)for(var t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=0;h<n.length&&h+o<m.length;++h)for(var s=n[h],E=m[(h+o)%m.length],v=s.Colors,l=E.Colors,u=0;u<t;++u)for(var C=v[u],c=l[u],f=0;f<D;++f){var A=C[f];0!=A&&(c[f]=A)}}}}},copyNonZeroTargetAllKeys:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=this.LoadedAnimations[a];if(null!=i&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var n=r.Frames;if(0!=n.length){var m=i.Frames;if(0!=m.length){var t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(o>=0&&o<m.length)for(var h=n[o%n.length],s=m[o],E=h.Colors,v=s.Colors,l=0;l<t;++l)for(var u=E[l],C=v[l],c=0;c<D;++c){var f=u[c];0!=f&&0!=C[c]&&(C[c]=f)}}}}}},copyNonZeroTargetAllKeysAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=this.LoadedAnimations[a];if(null!=r){var i=o.Frames;if(0!=i.length){var n=r.Frames;if(0!=n.length)if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var m=ChromaAnimation.getMaxLeds(o.Device),t=0;t<n.length;++t)for(var D=i[t%i.length],h=n[t],s=D.Colors,E=h.Colors,v=0;v<m;++v){var l=s[v],u=E[v];0!=l&&0!=u&&(E[v]=l)}else if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var C=ChromaAnimation.getMaxRow(o.Device),c=ChromaAnimation.getMaxColumn(o.Device);for(t=0;t<n.length;++t)for(D=i[t%i.length],h=n[t],s=D.Colors,E=h.Colors,v=0;v<C;++v)for(var f=s[v],A=E[v],y=0;y<c;++y){var K=f[y];0!=K&&0!=A[y]&&(A[y]=K)}}}}}},copyNonZeroTargetZeroAllKeysAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=this.LoadedAnimations[a];if(null!=r&&o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&o.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var i=o.Frames;if(0!=i.length){var n=r.Frames;if(0!=n.length)for(var m=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),t=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),D=0;D<n.length;++D)for(var h=i[D%i.length],s=n[D],E=h.Colors,v=s.Colors,l=0;l<m;++l)for(var u=E[l],C=v[l],c=0;c<t;++c){var f=u[c];0!=f&&0==C[c]&&(C[c]=f)}}}}},copyNonZeroTargetAllKeysAllFramesOffset:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=this.LoadedAnimations[a];if(null!=i&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var n=r.Frames;if(0!=n.length){var m=i.Frames;if(0!=m.length)for(var t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=0;h<m.length;++h)for(var s=n[h],E=m[(h+o)%m.length],v=s.Colors,l=E.Colors,u=0;u<t;++u)for(var C=v[u],c=l[u],f=0;f<D;++f){var A=C[f];0!=A&&0!=c[f]&&(c[f]=A)}}}}},addNonZeroTargetAllKeysAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=this.LoadedAnimations[a];if(null!=r&&o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&o.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var i=o.Frames;if(0!=i.length){var n=r.Frames;if(0!=n.length)for(var m=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),t=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),D=0;D<n.length;++D)for(var h=i[D%i.length],s=n[D],E=h.Colors,v=s.Colors,l=0;l<m;++l)for(var u=E[l],C=v[l],c=0;c<t;++c){var f=u[c];if(0!=f&&0!=C[c]){var A=255&f,y=(65280&f)>>8,K=(16711680&f)>>16,d=C[c],p=255&d,_=(65280&d)>>8,M=(16711680&d)>>16,g=255&Math.min(255,Math.max(0,Number(p)+Number(A)))|(255&Math.min(255,Math.max(0,Number(_)+Number(y))))<<8|(255&Math.min(255,Math.max(0,Number(M)+Number(K))))<<16;C[c]=g}}}}}},subtractNonZeroTargetAllKeysAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=this.LoadedAnimations[a];if(null!=r&&o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&o.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var i=o.Frames;if(0!=i.length){var n=r.Frames;if(0!=n.length)for(var m=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),t=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),D=0;D<n.length;++D)for(var h=i[D%i.length],s=n[D],E=h.Colors,v=s.Colors,l=0;l<m;++l)for(var u=E[l],C=v[l],c=0;c<t;++c){var f=u[c];if(0!=f&&0!=C[c]){var A=255&f,y=(65280&f)>>8,K=(16711680&f)>>16,d=C[c],p=255&d,_=(65280&d)>>8,M=(16711680&d)>>16,g=255&Math.min(255,Math.max(0,Number(p)-Number(A)))|(255&Math.min(255,Math.max(0,Number(_)-Number(y))))<<8|(255&Math.min(255,Math.max(0,Number(M)-Number(K))))<<16;C[c]=g}}}}}},copyZeroTargetAllKeysAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=this.LoadedAnimations[a];if(null!=r&&o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&o.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var i=o.Frames;if(0!=i.length){var n=r.Frames;if(0!=n.length)for(var m=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),t=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),D=0;D<n.length;++D)for(var h=i[D%i.length],s=n[D],E=h.Colors,v=s.Colors,l=0;l<m;++l)for(var u=E[l],C=v[l],c=0;c<t;++c){var f=u[c];0==f&&0!=C[c]&&(C[c]=f)}}}}},copyZeroTargetZeroAllKeysAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=this.LoadedAnimations[a];if(null!=r&&o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&o.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var i=o.Frames;if(0!=i.length){var n=r.Frames;if(0!=n.length)for(var m=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),t=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),D=0;D<n.length;++D)for(var h=i[D%i.length],s=n[D],E=h.Colors,v=s.Colors,l=0;l<m;++l)for(var u=E[l],C=v[l],c=0;c<t;++c){var f=u[c];0==f&&0==C[c]&&(C[c]=f)}}}}},fillColor:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=r.Frames;if(0!=i.length)if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){var n=ChromaAnimation.getMaxLeds(r.Device);if(a>=0&&a<i.length)for(var m=i[a].Colors,t=0;t<n;++t){m[t];m[t]=o}}else if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var D=ChromaAnimation.getMaxRow(r.Device),h=ChromaAnimation.getMaxColumn(r.Device);if(a>=0&&a<i.length)for(m=i[a].Colors,t=0;t<D;++t)for(var s=m[t],E=0;E<h;++E){s[E];s[E]=o}}}},fillColorRGB:function(e,a,o,r,i){var n=this.getRGB(o,r,i),m=this.LoadedAnimations[e];if(null!=m){var t=m.Frames;if(0!=t.length)if(m.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){var D=ChromaAnimation.getMaxLeds(m.Device);if(a>=0&&a<t.length)for(var h=t[a].Colors,s=0;s<D;++s){h[s];h[s]=n}}else if(m.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var E=ChromaAnimation.getMaxRow(m.Device),v=ChromaAnimation.getMaxColumn(m.Device);if(a>=0&&a<t.length)for(h=t[a].Colors,s=0;s<E;++s)for(var l=h[s],u=0;u<v;++u){l[u];l[u]=n}}}},fillNonZeroColor:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=r.Frames;if(0!=i.length){var n=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),m=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(a>=0&&a<i.length)for(var t=i[a].Colors,D=0;D<n;++D)for(var h=t[D],s=0;s<m;++s){0!=h[s]&&(h[s]=o)}}}},fillNonZeroColorRGB:function(e,a,o,r,i){var n=this.LoadedAnimations[e];if(null!=n){var m=n.Frames;if(0!=m.length){var t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=ChromaAnimation.getRGB(o,r,i);if(a>=0&&a<m.length)for(var s=m[a].Colors,E=0;E<t;++E)for(var v=s[E],l=0;l<D;++l){0!=v[l]&&(v[l]=h)}}}},fillNonZeroColorAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=o.Frames;if(0!=r.length)for(var i=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),n=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),m=0;m<r.length;++m)for(var t=r[m].Colors,D=0;D<i;++D)for(var h=t[D],s=0;s<n;++s){0!=h[s]&&(h[s]=a)}}},fillNonZeroColorAllFramesRGB:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i){var n=i.Frames;if(0!=n.length){var m=a|o<<8|r<<16;if(i.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var t=ChromaAnimation.getMaxLeds(i.Device),D=0;D<n.length;++D)for(var h=n[D].Colors,s=0;s<t;++s){0!=h[s]&&(h[s]=m)}else if(i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var E=ChromaAnimation.getMaxRow(i.Device),v=ChromaAnimation.getMaxColumn(i.Device);for(D=0;D<n.length;++D)for(h=n[D].Colors,s=0;s<E;++s)for(var l=h[s],u=0;u<v;++u){0!=l[u]&&(l[u]=m)}}}}},fillZeroColor:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=r.Frames;if(0!=i.length)if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){var n=ChromaAnimation.getMaxLeds(r.Device);if(a>=0&&a<i.length)for(var m=i[a].Colors,t=0;t<n;++t){0==m[t]&&(m[t]=o)}}else if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var D=ChromaAnimation.getMaxRow(r.Device),h=ChromaAnimation.getMaxColumn(r.Device);if(a>=0&&a<i.length)for(m=i[a].Colors,t=0;t<D;++t)for(var s=m[t],E=0;E<h;++E){0==s[E]&&(s[E]=o)}}}},fillZeroColorAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=o.Frames;if(0!=r.length)if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var i=ChromaAnimation.getMaxLeds(o.Device),n=0;n<r.length;++n)for(var m=r[n].Colors,t=0;t<i;++t){0==m[t]&&(m[t]=a)}else if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var D=ChromaAnimation.getMaxRow(o.Device),h=ChromaAnimation.getMaxColumn(o.Device);for(n=0;n<r.length;++n)for(m=r[n].Colors,t=0;t<D;++t)for(var s=m[t],E=0;E<h;++E){0==s[E]&&(s[E]=a)}}}},fillZeroColorAllFramesRGB:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i){var n=i.Frames;if(0!=n.length){var m=a|o<<8|r<<16;if(i.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var t=ChromaAnimation.getMaxLeds(i.Device),D=0;D<n.length;++D)for(var h=n[D].Colors,s=0;s<t;++s){0==h[s]&&(h[s]=m)}else if(i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var E=ChromaAnimation.getMaxRow(i.Device),v=ChromaAnimation.getMaxColumn(i.Device);for(D=0;D<n.length;++D)for(h=n[D].Colors,s=0;s<E;++s)for(var l=h[s],u=0;u<v;++u){0==l[u]&&(l[u]=m)}}}}},fillThresholdColors:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i){var n=i.Frames;if(0!=n.length){var m=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),t=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(a>=0&&a<n.length)for(var D=n[a].Colors,h=0;h<m;++h)for(var s=D[h],E=0;E<t;++E){var v=s[E],l=255&v,u=(65280&v)>>8,C=(16711680&v)>>16;0!=l&&0!=u&&0!=C&&l<=o&&u<=o&&C<=o&&(s[E]=r)}}}},fillThresholdColorsAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=r.Frames;if(0!=i.length)if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var n=ChromaAnimation.getMaxLeds(r.Device),m=0;m<i.length;++m)for(var t=i[m].Colors,D=0;D<n;++D){var h=(65280&(C=t[D]))>>8,s=(16711680&C)>>16;(0!=(c=255&C)||0!=h||0!=s)&&c<=a&&h<=a&&s<=a&&(t[D]=o)}else if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var E=ChromaAnimation.getMaxRow(r.Device),v=ChromaAnimation.getMaxColumn(r.Device);for(m=0;m<i.length;++m)for(t=i[m].Colors,D=0;D<E;++D)for(var l=t[D],u=0;u<v;++u){var C,c;h=(65280&(C=l[u]))>>8,s=(16711680&C)>>16;(0!=(c=255&C)||0!=h||0!=s)&&c<=a&&h<=a&&s<=a&&(l[u]=o)}}}},fillThresholdColorsRGB:function(e,a,o,r,i,n){var m=this.LoadedAnimations[e];if(null!=m){var t=m.Frames;if(0!=t.length)if(m.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){var D=ChromaAnimation.getMaxLeds(m.Device),h=ChromaAnimation.getRGB(r,i,n);if(a>=0&&a<t.length)for(var s=t[a].Colors,E=0;E<D;++E){i=(65280&(c=s[E]))>>8,n=(16711680&c)>>16;(0!=(r=255&c)||0!=i||0!=n)&&r<=o&&i<=o&&n<=o&&(s[E]=h)}}else if(m.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var v=ChromaAnimation.getMaxRow(m.Device),l=ChromaAnimation.getMaxColumn(m.Device);h=ChromaAnimation.getRGB(r,i,n);if(a>=0&&a<t.length)for(s=t[a].Colors,E=0;E<v;++E)for(var u=s[E],C=0;C<l;++C){var c;i=(65280&(c=u[C]))>>8,n=(16711680&c)>>16;(0!=(r=255&c)||0!=i||0!=n)&&r<=o&&i<=o&&n<=o&&(u[C]=h)}}}},fillThresholdColorsAllFramesRGB:function(e,a,o,r,i){var n=this.LoadedAnimations[e];if(null!=n){var m=n.Frames;if(0!=m.length)if(n.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){ChromaAnimation.getMaxLeds(n.Device);for(var t=ChromaAnimation.getRGB(o,r,i),D=0;D<m.length;++D)for(var h=m[D].Colors,s=0;s<E;++s){r=(65280&(C=h[s]))>>8,i=(16711680&C)>>16;(0!=(o=255&C)||0!=r||0!=i)&&o<=a&&r<=a&&i<=a&&(h[s]=t)}}else if(n.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var E=ChromaAnimation.getMaxRow(n.Device),v=ChromaAnimation.getMaxColumn(n.Device);for(t=ChromaAnimation.getRGB(o,r,i),D=0;D<m.length;++D)for(h=m[D].Colors,s=0;s<E;++s)for(var l=h[s],u=0;u<v;++u){var C;r=(65280&(C=l[u]))>>8,i=(16711680&C)>>16;(0!=(o=255&C)||0!=r||0!=i)&&o<=a&&r<=a&&i<=a&&(l[u]=t)}}}},fillThresholdColorsMinMaxRGB:function(e,a,o,r,i,n,m,t,D,h){var s=this.LoadedAnimations[e];if(null!=s){var E=s.Frames;if(0!=E.length){var v=ChromaAnimation.getRGB(r,i,n),l=ChromaAnimation.getRGB(t,D,h);if(s.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){var u=ChromaAnimation.getMaxLeds(s.Device);if(a>=0&&a<E.length)for(var C=E[a].Colors,c=0;c<u;++c){var f=(65280&(_=C[c]))>>8,A=(16711680&_)>>16;0==(M=255&_)&&0==f&&0==A||(M<=o&&f<=o&&A<=o?C[c]=v:(M>=m||f>=m||A>=m)&&(C[c]=l))}}else if(s.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){var y=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),K=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(a>=0&&a<E.length)for(C=E[a].Colors,c=0;c<y;++c)for(var d=C[c],p=0;p<K;++p){var _,M;f=(65280&(_=d[p]))>>8,A=(16711680&_)>>16;0==(M=255&_)&&0==f&&0==A||(M<=o&&f<=o&&A<=o?d[p]=v:(M>=m||f>=m||A>=m)&&(d[p]=l))}}}}},fillThresholdColorsMinMaxAllFramesRGB:function(e,a,o,r,i,n,m,t,D){var h=this.LoadedAnimations[e];if(null!=h){var s=h.Frames;if(0!=s.length)if(h.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var E=ChromaAnimation.getMaxLeds(h.Device),v=ChromaAnimation.getRGB(o,r,i),l=ChromaAnimation.getRGB(m,t,D),u=0;u<s.length;++u)for(var C=s[u].Colors,c=0;c<E;++c){var f=(65280&(_=C[c]))>>8,A=(16711680&_)>>16;0==(M=255&_)&&0==f&&0==A||(M<=a&&f<=a&&A<=a?C[c]=v:(M>=n||f>=n||A>=n)&&(C[c]=l))}else if(h.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var y=ChromaAnimation.getMaxRow(h.Device),K=ChromaAnimation.getMaxColumn(h.Device);for(v=ChromaAnimation.getRGB(o,r,i),l=ChromaAnimation.getRGB(m,t,D),u=0;u<s.length;++u)for(C=s[u].Colors,c=0;c<y;++c)for(var d=C[c],p=0;p<K;++p){var _,M;f=(65280&(_=d[p]))>>8,A=(16711680&_)>>16;0==(M=255&_)&&0==f&&0==A||(M<=a&&f<=a&&A<=a?d[p]=v:(M>=n||f>=n||A>=n)&&(d[p]=l))}}}},fillThresholdRGBColorsAllFramesRGB:function(e,a,o,r,i,n,m){var t=this.LoadedAnimations[e];if(null!=t){var D=t.Frames;if(0!=D.length)for(var h=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),s=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),E=ChromaAnimation.getRGB(i,n,m),v=0;v<D.length;++v)for(var l=D[v].Colors,u=0;u<h;++u)for(var C=l[u],c=0;c<s;++c){var f=C[c];n=(65280&f)>>8,m=(16711680&f)>>16;(0!=(i=255&f)||0!=n||0!=m)&&i<=a&&n<=o&&m<=r&&(C[c]=E)}}},fillRandomColors:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=o.Frames;if(0!=r.length){var i=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),n=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(a>=0&&a<r.length)for(var m=r[a].Colors,t=0;t<i;++t)for(var D=m[t],h=0;h<n;++h){var s=Math.floor(256*Math.random())%256|Math.floor(256*Math.random())%256<<8|Math.floor(256*Math.random())%256<<16;D[h]=s}}}},fillRandomColorsAllFrames:function(e){var a=this.LoadedAnimations[e];if(null!=a){var o=a.Frames;if(0!=o.length)if(a.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var r=ChromaAnimation.getMaxLeds(a.Device),i=0;i<o.length;++i)for(var n=o[i].Colors,m=0;m<r;++m){var t=Math.floor(256*Math.random())%256|Math.floor(256*Math.random())%256<<8|Math.floor(256*Math.random())%256<<16;n[m]=t}else if(a.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var D=ChromaAnimation.getMaxRow(a.Device),h=ChromaAnimation.getMaxColumn(a.Device);for(i=0;i<o.length;++i)for(n=o[i].Colors,m=0;m<D;++m)for(var s=n[m],E=0;E<h;++E){t=Math.floor(256*Math.random())%256|Math.floor(256*Math.random())%256<<8|Math.floor(256*Math.random())%256<<16;s[E]=t}}}},fillRandomColorsBlackAndWhite:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=o.Frames;if(0!=r.length){var i=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),n=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(a>=0&&a<r.length)for(var m=r[a].Colors,t=0;t<i;++t)for(var D=m[t],h=0;h<n;++h){var s=Math.floor(256*Math.random())%256,E=s|s<<8|s<<16;D[h]=E}}}},fillRandomColorsBlackAndWhiteAllFrames:function(e){var a=this.LoadedAnimations[e];if(null!=a){var o=a.Frames;if(0!=o.length)if(a.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var r=ChromaAnimation.getMaxLeds(a.Device),i=0;i<o.length;++i)for(var n=o[i].Colors,m=0;m<r;++m){var t=(v=Math.floor(256*Math.random())%256)|v<<8|v<<16;n[m]=t}else if(a.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var D=ChromaAnimation.getMaxRow(a.Device),h=ChromaAnimation.getMaxColumn(a.Device);for(i=0;i<o.length;++i)for(n=o[i].Colors,m=0;m<D;++m)for(var s=n[m],E=0;E<h;++E){var v;t=(v=Math.floor(256*Math.random())%256)|v<<8|v<<16;s[E]=t}}}},invertColorsAllFrames:function(e){var a=this.LoadedAnimations[e];if(null!=a){var o=a.Frames;if(0!=o.length)if(a.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var r=ChromaAnimation.getMaxLeds(a.Device),i=0;i<o.length;++i)for(var n=o[i].Colors,m=0;m<r;++m){E=255-(255&(E=n[m]))|255-((65280&E)>>8)<<8|255-((16711680&E)>>16)<<16,n[m]=E}else if(a.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var t=ChromaAnimation.getMaxRow(a.Device),D=ChromaAnimation.getMaxColumn(a.Device);for(i=0;i<o.length;++i)for(n=o[i].Colors,m=0;m<t;++m)for(var h=n[m],s=0;s<D;++s){var E;E=255-(255&(E=h[s]))|255-((65280&E)>>8)<<8|255-((16711680&E)>>16)<<16,h[s]=E}}}},insertFrame:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r)if(this.stopAnimation(e),0!=r.Frames.length){if(!(a<0||a>=r.Frames.length)){var i=r.Frames[a],n=[];if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var m=ChromaAnimation.getMaxLeds(r.Device),t=0;t<r.Frames.length;++t){var D=r.Frames[t];if(t==o){(v=new ChromaAnimationFrame1D).Colors=new Array(m);for(var h=0;h<m;++h)v.Colors[h]=i.Colors[h];v.Duration=i.Duration,n.push(v)}n.push(D)}else if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var s=ChromaAnimation.getMaxRow(r.Device),E=ChromaAnimation.getMaxColumn(r.Device);for(t=0;t<r.Frames.length;++t){D=r.Frames[t];if(t==o){var v;(v=new ChromaAnimationFrame2D).Colors=new Array(s);for(h=0;h<s;++h){v.Colors[h]=new Array(E);for(var l=0;l<E;++l)v.Colors[h][l]=i.Colors[h][l]}v.Duration=i.Duration,n.push(v)}n.push(D)}}r.Frames=n}}else console.error("insertFrame","Frame length is zero!",e)},insertDelay:function(e,a,o){for(var r=0;r<o;++r)this.insertFrame(e,a,a)},appendAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=this.LoadedAnimations[a];if(null!=r)if(this.stopAnimation(a),0!=o.Frames.length){var i=o.Frames,n=r.Frames,m=i.length;if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var t=ChromaAnimation.getMaxLeds(o.Device),D=0;D<m;++D){var h=i[D];(l=new ChromaAnimationFrame1D).Colors=new Array(t);for(var s=0;s<t;++s)l.Colors[s]=h.Colors[s];l.Duration=h.Duration,n.push(l)}else if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var E=ChromaAnimation.getMaxRow(o.Device),v=ChromaAnimation.getMaxColumn(o.Device);for(D=0;D<m;++D){var l;h=i[D];(l=new ChromaAnimationFrame2D).Colors=new Array(E);for(s=0;s<E;++s){l.Colors[s]=new Array(v);for(var u=0;u<v;++u)l.Colors[s][u]=h.Colors[s][u]}l.Duration=h.Duration,n.push(l)}}}else console.error("appendAllFrames","Source Frame length is zero!",animationName)}},duplicateFirstFrame:function(e,a){var o=this.LoadedAnimations[e];if(null!=o)if(this.stopAnimation(e),0!=o.Frames.length){var r=o.Frames[0],i=[];if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){for(var n=ChromaAnimation.getMaxLeds(o.Device),m=0;m<a;++m){(s=new ChromaAnimationFrame1D).Colors=new Array(n);for(var t=0;t<n;++t)s.Colors[t]=r.Colors[t];s.Duration=r.Duration,i.push(s)}o.Frames=i}else if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var D=ChromaAnimation.getMaxRow(o.Device),h=ChromaAnimation.getMaxColumn(o.Device);for(m=0;m<a;++m){var s;(s=new ChromaAnimationFrame2D).Colors=new Array(D);for(t=0;t<D;++t){s.Colors[t]=new Array(h);for(var E=0;E<h;++E)s.Colors[t][E]=r.Colors[t][E]}s.Duration=r.Duration,i.push(s)}o.Frames=i}}else console.error("duplicateFirstFrame","Frame length is zero!",e)},duplicateFrames:function(e){var a=this.LoadedAnimations[e];if(null!=a)if(this.stopAnimation(e),0!=a.Frames.length){var o=[],r=a.Frames.length;if(a.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){for(var i=ChromaAnimation.getMaxLeds(a.Device),n=0;n<r;++n)for(var m=0;m<2;++m){var t=a.Frames[n];(E=new ChromaAnimationFrame1D).Colors=new Array(i);for(var D=0;D<i;++D)E.Colors[D]=t.Colors[D];E.Duration=t.Duration,o.push(E)}a.Frames=o}else if(a.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var h=ChromaAnimation.getMaxRow(a.Device),s=ChromaAnimation.getMaxColumn(a.Device);for(n=0;n<r;++n)for(m=0;m<2;++m){var E;t=a.Frames[n];(E=new ChromaAnimationFrame2D).Colors=new Array(h);for(D=0;D<h;++D){E.Colors[D]=new Array(s);for(var v=0;v<s;++v)E.Colors[D][v]=t.Colors[D][v]}E.Duration=t.Duration,o.push(E)}}a.Frames=o}else console.error("duplicateFrames","Frame length is zero!",e)},duplicateMirrorFrames:function(e){var a=this.LoadedAnimations[e];if(null!=a)if(this.stopAnimation(e),0!=a.Frames.length){var o=[];if(a.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){for(var r=ChromaAnimation.getMaxLeds(a.Device),i=a.Frames.length,n=0;n<i;++n){var m=a.Frames[n];(E=new ChromaAnimationFrame1D).Colors=new Array(r);for(var t=0;t<r;++t)E.Colors[t]=m.Colors[t];E.Duration=m.Duration,o.push(E)}for(n=i-1;n>=0;--n){m=a.Frames[n];(E=new ChromaAnimationFrame1D).Colors=new Array(r);for(t=0;t<r;++t)E.Colors[t]=m.Colors[t];E.Duration=m.Duration,o.push(E)}a.Frames=o}else if(a.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var D=ChromaAnimation.getMaxRow(a.Device),h=ChromaAnimation.getMaxColumn(a.Device);for(i=a.Frames.length,n=0;n<i;++n){m=a.Frames[n];(E=new ChromaAnimationFrame2D).Colors=new Array(D);for(t=0;t<D;++t){E.Colors[t]=new Array(h);for(var s=0;s<h;++s)E.Colors[t][s]=m.Colors[t][s]}E.Duration=m.Duration,o.push(E)}for(n=i-1;n>=0;--n){var E;m=a.Frames[n];(E=new ChromaAnimationFrame2D).Colors=new Array(D);for(t=0;t<D;++t){E.Colors[t]=new Array(h);for(s=0;s<h;++s)E.Colors[t][s]=m.Colors[t][s]}E.Duration=m.Duration,o.push(E)}a.Frames=o}}else console.error("duplcateMirrorFrames","Frame length is zero!",e)},copyAnimation:function(e,a){var o=this.LoadedAnimations[e];if(null!=o)if(0!=o.Frames.length){var r=[],i=o.Frames.length;if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){for(var n=ChromaAnimation.getMaxLeds(o.Device),m=0;m<i;++m){var t=o.Frames[m];(E=new ChromaAnimationFrame1D).Colors=new Array(n);for(var D=0;D<n;++D)E.Colors[D]=t.Colors[D];E.Duration=t.Duration,r.push(E)}(l=new ChromaAnimation1D).Name=a,l.Device=o.Device,l.DeviceType=o.DeviceType,l.Frames=r,this.LoadedAnimations[a]=l}else if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var h=ChromaAnimation.getMaxRow(o.Device),s=ChromaAnimation.getMaxColumn(o.Device);for(m=0;m<i;++m){var E;t=o.Frames[m];(E=new ChromaAnimationFrame2D).Colors=new Array(h);for(D=0;D<h;++D){E.Colors[D]=new Array(s);for(var v=0;v<s;++v)E.Colors[D][v]=t.Colors[D][v]}E.Duration=t.Duration,r.push(E)}var l;(l=new ChromaAnimation2D).Name=a,l.Device=o.Device,l.DeviceType=o.DeviceType,l.Frames=r,this.LoadedAnimations[a]=l}}else console.error("duplicateFirstFrame","Frame length is zero!",e)},convertAnimation:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i)if(0!=i.Frames.length){ChromaAnimation.closeAnimation(a);var n=[],m=i.Frames.length,t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(o==EChromaSDKDeviceTypeEnum.DE_1D){for(var h=0;h<m;++h){var s=i.Frames[h],E=ChromaAnimation.getMaxLeds(r);(u=new ChromaAnimationFrame1D).Colors=new Array(E);for(var v=0;v<t;++v)if(!(v>=1))for(var l=0;l<D;++l)l>=E||(u.Colors[l]=s.Colors[v][l]);u.Duration=s.Duration,n.push(u)}return(A=new ChromaAnimation1D).Name=a,A.Device=r,A.DeviceType=o,A.Frames=n,this.LoadedAnimations[a]=A,A}if(o==EChromaSDKDeviceTypeEnum.DE_2D){for(h=0;h<m;++h){s=i.Frames[h];var u,C=ChromaAnimation.getMaxRow(r),c=ChromaAnimation.getMaxColumn(r);(u=new ChromaAnimationFrame2D).Colors=new Array(C);for(v=0;v<t||v<C;++v)if(!(v>=C)){u.Colors[v]=new Array(c);for(l=0;l<D||l<c;++l)if(!(l>=c)){var f=void 0;f=v>=t||l>=D?0:s.Colors[v][l],u.Colors[v][l]=f}}u.Duration=s.Duration,n.push(u)}var A;return(A=new ChromaAnimation2D).Name=a,A.Device=r,A.DeviceType=o,A.Frames=n,this.LoadedAnimations[a]=A,A}}else console.error("duplicateFirstFrame","Frame length is zero!",e)},createAnimation:function(e,a,o){this.closeAnimation(e);var r=[];if(a==EChromaSDKDeviceTypeEnum.DE_1D){for(var i=ChromaAnimation.getMaxLeds(o),n=0;n<1;++n){(h=new ChromaAnimationFrame1D).Colors=new Array(i);for(var m=0;m<i;++m)h.Colors[m]=0;h.Duration=.1,r.push(h)}(E=new ChromaAnimation1D).Device=o,E.DeviceType=a,E.Frames=r,this.LoadedAnimations[e]=E}else if(a==EChromaSDKDeviceTypeEnum.DE_2D){var t=ChromaAnimation.getMaxRow(o),D=ChromaAnimation.getMaxColumn(o);for(n=0;n<1;++n){var h;(h=new ChromaAnimationFrame2D).Colors=new Array(t);for(m=0;m<t;++m){h.Colors[m]=new Array(D);for(var s=0;s<D;++s)h.Colors[m][s]=0}h.Duration=.1,r.push(h)}var E;(E=new ChromaAnimation2D).Device=o,E.DeviceType=a,E.Frames=r,this.LoadedAnimations[e]=E}},reduceFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o)if(this.stopAnimation(e),0!=o.Frames.length){var r=[];if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){for(var i=ChromaAnimation.getMaxLeds(o.Device),n=o.Frames.length,m=0;m<n;++m)if(m%a!=0){var t=o.Frames[m];(E=new ChromaAnimationFrame1D).Colors=new Array(i);for(var D=0;D<i;++D)E.Colors[D]=t.Colors[D];E.Duration=t.Duration,r.push(E)}}else if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var h=ChromaAnimation.getMaxRow(o.Device),s=ChromaAnimation.getMaxColumn(o.Device);for(n=o.Frames.length,m=0;m<n;++m)if(m%a!=0){var E;t=o.Frames[m];(E=new ChromaAnimationFrame2D).Colors=new Array(h);for(D=0;D<h;++D){E.Colors[D]=new Array(s);for(var v=0;v<s;++v)E.Colors[D][v]=t.Colors[D][v]}E.Duration=t.Duration,r.push(E)}}o.Frames=r}else console.error("duplicateFirstFrame","Frame length is zero!",e)},trimFrame:function(e,a){var o=this.LoadedAnimations[e];if(null!=o)if(this.stopAnimation(e),0!=o.Frames.length){for(var r=[],i=(ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),o.Frames.length),n=0;n<i;++n)if(n!=a){var m=o.Frames[n];r.push(m)}o.Frames=r}else console.error("duplicateFirstFrame","Frame length is zero!",e)},trimStartFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o)if(this.stopAnimation(e),0!=o.Frames.length)for(var r=0;r<a;++r)this.trimFrame(e,0);else console.error("trimStartFrames","Frame length is zero!",e)},trimEndFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o)if(this.stopAnimation(e),0!=o.Frames.length)for(;a>=0&&a+1<o.Frames.length;)this.trimFrame(e,o.Frames.length-1);else console.error("trimEndFrames","Frame length is zero!",e)},fadeStartFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o)if(this.stopAnimation(e),0!=o.Frames.length){if(!(a<=0))for(var r=0;r<a;++r){var i=(r+1)/a;this.multiplyIntensity(e,r,i)}}else console.error("fadeStartFrames","Frame length is zero!",e)},fadeEndFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o)if(this.stopAnimation(e),0!=o.Frames.length){if(!(a<=0))for(var r=0;r<a;++r){var i=o.Frames.length-1-r,n=(r+1)/a;this.multiplyIntensity(e,i,n)}}else console.error("fadeEndFrames","Frame length is zero!",e)},makeBlankFrames:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i){this.stopAnimation(e);var n=[];if(i.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var m=ChromaAnimation.getMaxLeds(i.Device),t=0;t<a;++t){(E=new ChromaAnimationFrame1D).Colors=new Array(m);for(var D=0;D<m;++D)E.Colors[D]=r;E.Duration=o,n.push(E)}else if(i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var h=ChromaAnimation.getMaxRow(i.Device),s=ChromaAnimation.getMaxColumn(i.Device);for(t=0;t<a;++t){var E;(E=new ChromaAnimationFrame2D).Colors=new Array(h);for(D=0;D<h;++D){E.Colors[D]=new Array(s);for(var v=0;v<s;++v)E.Colors[D][v]=r}E.Duration=o,n.push(E)}}i.Frames=n}},makeBlankFramesRGB:function(e,a,o,r,i,n){var m=this.LoadedAnimations[e];if(null!=m){this.stopAnimation(e);var t=[],D=ChromaAnimation.getRGB(r,i,n);if(m.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var h=ChromaAnimation.getMaxLeds(m.Device),s=0;s<a;++s){(u=new ChromaAnimationFrame1D).Colors=new Array(h);for(var E=0;E<h;++E)u.Colors[E]=D;u.Duration=o,t.push(u)}else if(m.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var v=ChromaAnimation.getMaxRow(m.Device),l=ChromaAnimation.getMaxColumn(m.Device);for(s=0;s<a;++s){var u;(u=new ChromaAnimationFrame2D).Colors=new Array(v);for(E=0;E<v;++E){u.Colors[E]=new Array(l);for(var C=0;C<l;++C)u.Colors[E][C]=D}u.Duration=o,t.push(u)}}m.Frames=t}},offsetColors:function(e,a,o,r,i){var n=this.LoadedAnimations[e];if(null!=n){var m=n.Frames;if(n.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){var t=ChromaAnimation.getMaxLeds(n.Device);if(a>=0&&a<m.length)for(var D=m[a].Colors,h=0;h<t;++h){var s=255&(f=D[h]),E=(65280&f)>>8,v=(16711680&f)>>16;f=(s=255&Math.min(255,Math.max(0,Number(s)+Number(o))))|(E=255&Math.min(255,Math.max(0,Number(E)+Number(r))))<<8|(v=255&Math.min(255,Math.max(0,Number(v)+Number(i))))<<16,D[h]=f}}else if(n.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var l=ChromaAnimation.getMaxRow(n.Device),u=ChromaAnimation.getMaxColumn(n.Device);if(a>=0&&a<m.length)for(D=m[a].Colors,h=0;h<l;++h)for(var C=D[h],c=0;c<u;++c){var f;s=255&(f=C[c]),E=(65280&f)>>8,v=(16711680&f)>>16;f=(s=255&Math.min(255,Math.max(0,Number(s)+Number(o))))|(E=255&Math.min(255,Math.max(0,Number(E)+Number(r))))<<8|(v=255&Math.min(255,Math.max(0,Number(v)+Number(i))))<<16,C[c]=f}}}},offsetColorsWithColor:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var i=255&o,n=(65280&o)>>8,m=(16711680&o)>>16,t=r.Frames,D=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),h=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(a>=0&&a<t.length)for(var s=t[a].Colors,E=0;E<D;++E)for(var v=s[E],l=0;l<h;++l){var u=255&(o=v[l]),C=(65280&o)>>8,c=(16711680&o)>>16;o=(u=255&Math.min(255,Math.max(0,Number(u)+Number(i))))|(C=255&Math.min(255,Math.max(0,Number(C)+Number(n))))<<8|(c=255&Math.min(255,Math.max(0,Number(c)+Number(m))))<<16,v[l]=o}}},offsetColorsWithColorAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o&&o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&o.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var r=255&a,i=(65280&a)>>8,n=(16711680&a)>>16,m=o.Frames,t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=0;h<m.length;++h)for(var s=m[h].Colors,E=0;E<t;++E)for(var v=s[E],l=0;l<D;++l){var u=255&(a=v[l]),C=(65280&a)>>8,c=(16711680&a)>>16;a=(u=255&Math.min(255,Math.max(0,Number(u)+Number(r))))|(C=255&Math.min(255,Math.max(0,Number(C)+Number(i))))<<8|(c=255&Math.min(255,Math.max(0,Number(c)+Number(n))))<<16,v[l]=a}},offsetNonZeroColorsWithColorAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o&&o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&o.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var r=255&a,i=(65280&a)>>8,n=(16711680&a)>>16,m=o.Frames,t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=0;h<m.length;++h)for(var s=m[h].Colors,E=0;E<t;++E)for(var v=s[E],l=0;l<D;++l){if(0!=(a=v[l])){var u=255&a,C=(65280&a)>>8,c=(16711680&a)>>16;a=(u=255&Math.min(255,Math.max(0,Number(u)+Number(r))))|(C=255&Math.min(255,Math.max(0,Number(C)+Number(i))))<<8|(c=255&Math.min(255,Math.max(0,Number(c)+Number(n))))<<16,v[l]=a}}},offsetColorsAllFrames:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i){var n=i.Frames;if(i.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var m=ChromaAnimation.getMaxLeds(i.Device),t=0;t<n.length;++t)for(var D=n[t].Colors,h=0;h<m;++h){var s=255&(f=D[h]),E=(65280&f)>>8,v=(16711680&f)>>16;f=(s=255&Math.min(255,Math.max(0,Number(s)+Number(a))))|(E=255&Math.min(255,Math.max(0,Number(E)+Number(o))))<<8|(v=255&Math.min(255,Math.max(0,Number(v)+Number(r))))<<16,D[h]=f}else if(i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var l=ChromaAnimation.getMaxRow(i.Device),u=ChromaAnimation.getMaxColumn(i.Device);for(t=0;t<n.length;++t)for(D=n[t].Colors,h=0;h<l;++h)for(var C=D[h],c=0;c<u;++c){var f;s=255&(f=C[c]),E=(65280&f)>>8,v=(16711680&f)>>16;f=(s=255&Math.min(255,Math.max(0,Number(s)+Number(a))))|(E=255&Math.min(255,Math.max(0,Number(E)+Number(o))))<<8|(v=255&Math.min(255,Math.max(0,Number(v)+Number(r))))<<16,C[c]=f}}}},offsetNonZeroColors:function(e,a,o,r,i){var n=this.LoadedAnimations[e];if(null!=n&&n.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&n.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var m=n.Frames,t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(a>=0&&a<m.length)for(var h=m[a].Colors,s=0;s<t;++s)for(var E=h[s],v=0;v<D;++v){var l=E[v];if(0!=l){var u=255&l,C=(65280&l)>>8,c=(16711680&l)>>16;l=(u=255&Math.min(255,Math.max(0,Number(u)+Number(o))))|(C=255&Math.min(255,Math.max(0,Number(C)+Number(r))))<<8|(c=255&Math.min(255,Math.max(0,Number(c)+Number(i))))<<16,E[v]=l}}}},offsetNonZeroColorsAllFrames:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var n=i.Frames,m=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),t=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),D=0;D<n.length;++D)for(var h=n[D].Colors,s=0;s<m;++s)for(var E=h[s],v=0;v<t;++v){var l=E[v];if(0!=l){var u=255&l,C=(65280&l)>>8,c=(16711680&l)>>16;l=(u=255&Math.min(255,Math.max(0,Number(u)+Number(a))))|(C=255&Math.min(255,Math.max(0,Number(C)+Number(o))))<<8|(c=255&Math.min(255,Math.max(0,Number(c)+Number(r))))<<16,E[v]=l}}},multiplyIntensity:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=r.Frames;if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){var n=ChromaAnimation.getMaxLeds(r.Device);if(a>=0&&a<i.length)for(var m=i[a].Colors,t=0;t<n;++t){var D=255&(C=m[t]),h=(65280&C)>>8,s=(16711680&C)>>16;C=(D=255&Math.min(255,Math.max(0,Number(D)*Number(o))))|(h=255&Math.min(255,Math.max(0,Number(h)*Number(o))))<<8|(s=255&Math.min(255,Math.max(0,Number(s)*Number(o))))<<16,m[t]=C}}else if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var E=ChromaAnimation.getMaxRow(r.Device),v=ChromaAnimation.getMaxColumn(r.Device);if(a>=0&&a<i.length)for(m=i[a].Colors,t=0;t<E;++t)for(var l=m[t],u=0;u<v;++u){var C;D=255&(C=l[u]),h=(65280&C)>>8,s=(16711680&C)>>16;C=(D=255&Math.min(255,Math.max(0,Number(D)*Number(o))))|(h=255&Math.min(255,Math.max(0,Number(h)*Number(o))))<<8|(s=255&Math.min(255,Math.max(0,Number(s)*Number(o))))<<16,l[u]=C}}}},getRGB:(e,a,o)=>255&e|(255&a)<<8|(255&o)<<16,getRed:e=>255&e,getGreen:e=>(65280&e)>>8,getBlue:e=>(16711680&e)>>16,debugColor(e){var a=255&e,o=(65280&e)>>8,r=(16711680&e)>>16;console.log("Red",a,"Green",o,"Blue",r)},multiplyIntensityColor:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=r.Frames;if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){var n=ChromaAnimation.getMaxLeds(r.Device),m=(E=255&o)/255,t=(v=(65280&o)>>8)/255,D=(l=(16711680&o)>>16)/255;if(a>=0&&a<i.length)for(var h=i[a].Colors,s=0;s<n;++s){var E=255&(A=h[s]),v=(65280&A)>>8,l=(16711680&A)>>16;A=(E=255&Math.min(255,Math.max(0,Number(E)*Number(m))))|(v=255&Math.min(255,Math.max(0,Number(v)*Number(t))))<<8|(l=255&Math.min(255,Math.max(0,Number(l)*Number(D))))<<16,h[s]=A}}else if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var u=ChromaAnimation.getMaxRow(r.Device),C=ChromaAnimation.getMaxColumn(r.Device);m=(E=255&o)/255,t=(v=(65280&o)>>8)/255,D=(l=(16711680&o)>>16)/255;if(a>=0&&a<i.length)for(h=i[a].Colors,s=0;s<u;++s)for(var c=h[s],f=0;f<C;++f){var A;E=255&(A=c[f]),v=(65280&A)>>8,l=(16711680&A)>>16;A=(E=255&Math.min(255,Math.max(0,Number(E)*Number(m))))|(v=255&Math.min(255,Math.max(0,Number(v)*Number(t))))<<8|(l=255&Math.min(255,Math.max(0,Number(l)*Number(D))))<<16,c[f]=A}}}},multiplyIntensityColorAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=o.Frames;if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){var i=ChromaAnimation.getMaxLeds(o.Device),n=(s=255&a)/255,m=(E=(65280&a)>>8)/255,t=(v=(16711680&a)>>16)/255;for(frameId=0;frameId<r.length;++frameId)for(var D=r[frameId].Colors,h=0;h<i;++h){var s=255&(f=D[h]),E=(65280&f)>>8,v=(16711680&f)>>16;f=(s=255&Math.min(255,Math.max(0,Number(s)*Number(n))))|(E=255&Math.min(255,Math.max(0,Number(E)*Number(m))))<<8|(v=255&Math.min(255,Math.max(0,Number(v)*Number(t))))<<16,D[h]=f}}else if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var l=ChromaAnimation.getMaxRow(o.Device),u=ChromaAnimation.getMaxColumn(o.Device);n=(s=255&a)/255,m=(E=(65280&a)>>8)/255,t=(v=(16711680&a)>>16)/255;for(frameId=0;frameId<r.length;++frameId)for(D=r[frameId].Colors,h=0;h<l;++h)for(var C=D[h],c=0;c<u;++c){var f;s=255&(f=C[c]),E=(65280&f)>>8,v=(16711680&f)>>16;f=(s=255&Math.min(255,Math.max(0,Number(s)*Number(n))))|(E=255&Math.min(255,Math.max(0,Number(E)*Number(m))))<<8|(v=255&Math.min(255,Math.max(0,Number(v)*Number(t))))<<16,C[c]=f}}}},multiplyIntensityRGB:function(e,a,o,r,i){var n=this.LoadedAnimations[e];if(null!=n){var m=n.Frames;if(n.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D){var t=ChromaAnimation.getMaxLeds(n.Device),D=o/255,h=r/255,s=i/255;if(a>=0&&a<m.length)for(var E=m[a].Colors,v=0;v<t;++v){o=255&(f=E[v]),r=(65280&f)>>8,i=(16711680&f)>>16;f=(o=255&Math.min(255,Math.max(0,Number(o)*Number(D))))|(r=255&Math.min(255,Math.max(0,Number(r)*Number(h))))<<8|(i=255&Math.min(255,Math.max(0,Number(i)*Number(s))))<<16,E[v]=f}}else if(n.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var l=ChromaAnimation.getMaxRow(n.Device),u=ChromaAnimation.getMaxColumn(n.Device);D=o/255,h=r/255,s=i/255;if(a>=0&&a<m.length)for(E=m[a].Colors,v=0;v<l;++v)for(var C=E[v],c=0;c<u;++c){var f;o=255&(f=C[c]),r=(65280&f)>>8,i=(16711680&f)>>16;f=(o=255&Math.min(255,Math.max(0,Number(o)*Number(D))))|(r=255&Math.min(255,Math.max(0,Number(r)*Number(h))))<<8|(i=255&Math.min(255,Math.max(0,Number(i)*Number(s))))<<16,C[c]=f}}}},multiplyIntensityAllFrames:function(e,a){var o=this.LoadedAnimations[e];if(null!=o){var r=o.Frames;if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var i=ChromaAnimation.getMaxLeds(o.Device),n=0;n<r.length;++n)for(var m=r[n].Colors,t=0;t<i;++t){var D=255&(C=m[t]),h=(65280&C)>>8,s=(16711680&C)>>16;C=(D=255&Math.min(255,Math.max(0,Number(D)*Number(a))))|(h=255&Math.min(255,Math.max(0,Number(h)*Number(a))))<<8|(s=255&Math.min(255,Math.max(0,Number(s)*Number(a))))<<16,m[t]=C}else if(o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var E=ChromaAnimation.getMaxRow(o.Device),v=ChromaAnimation.getMaxColumn(o.Device);for(n=0;n<r.length;++n)for(m=r[n].Colors,t=0;t<E;++t)for(var l=m[t],u=0;u<v;++u){var C;D=255&(C=l[u]),h=(65280&C)>>8,s=(16711680&C)>>16;C=(D=255&Math.min(255,Math.max(0,Number(D)*Number(a))))|(h=255&Math.min(255,Math.max(0,Number(h)*Number(a))))<<8|(s=255&Math.min(255,Math.max(0,Number(s)*Number(a))))<<16,l[u]=C}}}},multiplyIntensityAllFramesRGB:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i){var n=i.Frames,m=a/255,t=o/255,D=r/255;if(i.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var h=ChromaAnimation.getMaxLeds(i.Device),s=0;s<n.length;++s)for(var E=n[s].Colors,v=0;v<h;++v){a=255&(f=E[v]),o=(65280&f)>>8,r=(16711680&f)>>16;f=(a=255&Math.min(255,Math.max(0,Number(a)*Number(m))))|(o=255&Math.min(255,Math.max(0,Number(o)*Number(t))))<<8|(r=255&Math.min(255,Math.max(0,Number(r)*Number(D))))<<16,E[v]=f}else if(i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var l=ChromaAnimation.getMaxRow(i.Device),u=ChromaAnimation.getMaxColumn(i.Device);for(s=0;s<n.length;++s)for(E=n[s].Colors,v=0;v<l;++v)for(var C=E[v],c=0;c<u;++c){var f;a=255&(f=C[c]),o=(65280&f)>>8,r=(16711680&f)>>16;f=(a=255&Math.min(255,Math.max(0,Number(a)*Number(m))))|(o=255&Math.min(255,Math.max(0,Number(o)*Number(t))))<<8|(r=255&Math.min(255,Math.max(0,Number(r)*Number(D))))<<16,C[c]=f}}}},multiplyColorLerpAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r)for(var i=r.Frames.length,n=0;n<i;++n){var m=(n+1)/i,t=this.lerpColor(a,o,m);this.multiplyIntensityColor(e,n,t)}},multiplyTargetColorLerpAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=r.Frames;if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var n=ChromaAnimation.getMaxLeds(r.Device),m=0;m<i.length;++m)for(var t=i[m].Colors,D=0;D<n;++D){var h=((255&(u=t[D]))/255+((65280&u)>>8)/255+((16711680&u)>>16)/255)/3;t[D]=ChromaAnimation.lerpColor(a,o,h)}else if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var s=ChromaAnimation.getMaxRow(r.Device),E=ChromaAnimation.getMaxColumn(r.Device);for(m=0;m<i.length;++m)for(t=i[m].Colors,D=0;D<s;++D)for(var v=t[D],l=0;l<E;++l){var u;h=((255&(u=v[l]))/255+((65280&u)>>8)/255+((16711680&u)>>16)/255)/3;v[l]=ChromaAnimation.lerpColor(a,o,h)}}}},multiplyNonZeroTargetColorLerpAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r){var i=r.Frames;if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_1D)for(var n=ChromaAnimation.getMaxLeds(r.Device),m=0;m<i.length;++m)for(var t=i[m].Colors,D=0;D<n;++D){if(0!=(u=t[D])){var h=((255&u)/255+((65280&u)>>8)/255+((16711680&u)>>16)/255)/3;t[D]=ChromaAnimation.lerpColor(a,o,h)}}else if(r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D){var s=ChromaAnimation.getMaxRow(r.Device),E=ChromaAnimation.getMaxColumn(r.Device);for(m=0;m<i.length;++m)for(t=i[m].Colors,D=0;D<s;++D)for(var v=t[D],l=0;l<E;++l){var u;if(0!=(u=v[l])){h=((255&u)/255+((65280&u)>>8)/255+((16711680&u)>>16)/255)/3;v[l]=ChromaAnimation.lerpColor(a,o,h)}}}}},copyRedChannelAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var i=r.Frames,n=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),m=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),t=0;t<i.length;++t)for(var D=i[t].Colors,h=0;h<n;++h)for(var s=D[h],E=0;E<m;++E){var v=s[E],l=255&v;v=l|(255&Math.min(255,Math.max(0,Number(l)*Number(a))))<<8|(255&Math.min(255,Math.max(0,Number(l)*Number(o))))<<16,s[E]=v}},copyGreenChannelAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var i=r.Frames,n=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),m=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),t=0;t<i.length;++t)for(var D=i[t].Colors,h=0;h<n;++h)for(var s=D[h],E=0;E<m;++E){var v=s[E],l=(65280&v)>>8;v=255&Math.min(255,Math.max(0,Number(l)*Number(a)))|l<<8|(255&Math.min(255,Math.max(0,Number(l)*Number(o))))<<16,s[E]=v}},copyBlueChannelAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var i=r.Frames,n=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),m=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),t=0;t<i.length;++t)for(var D=i[t].Colors,h=0;h<n;++h)for(var s=D[h],E=0;E<m;++E){var v=s[E],l=(16711680&v)>>16;v=255&Math.min(255,Math.max(0,Number(l)*Number(a)))|(255&Math.min(255,Math.max(0,Number(l)*Number(o))))<<8|l<<16,s[E]=v}},desaturateAllFrames:function(e){var a=this.LoadedAnimations[e];if(null!=a&&a.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&a.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var o=a.Frames,r=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),i=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),n=0;n<o.length;++n)for(var m=o[n].Colors,t=0;t<r;++t)for(var D=m[t],h=0;h<i;++h){var s=D[h],E=255&s,v=(65280&s)>>8,l=(16711680&s)>>16,u=Math.sqrt(E*E+v*v+l*l);s=u|u<<8|u<<16,D[h]=s}},multiplyIntensityKey:function(e,a,o,r){var i=this.LoadedAnimations[e];if(null!=i&&i.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&i.Device==EChromaSDKDevice2DEnum.DE_Keyboard){var n=i.Frames,m=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),t=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard);if(a>=0&&a<n.length)for(var D=n[a].Colors,h=0;h<m;++h)for(var s=D[h],E=0;E<t;++E)if(getHighByte(o)==h&&getLowByte(o)==E){var v=s[E],l=255&v,u=(65280&v)>>8,C=(16711680&v)>>16;v=(l=255&Math.min(255,Math.max(0,Number(l)*Number(r))))|(u=255&Math.min(255,Math.max(0,Number(u)*Number(r))))<<8|(C=255&Math.min(255,Math.max(0,Number(C)*Number(r))))<<16,s[E]=v}}},multiplyIntensityKeyAllFrames:function(e,a,o){var r=this.LoadedAnimations[e];if(null!=r&&r.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&r.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var i=r.Frames,n=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),m=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),t=0;t<i.length;++t)for(var D=i[t].Colors,h=0;h<n;++h)for(var s=D[h],E=0;E<m;++E)if(getHighByte(a)==h&&getLowByte(a)==E){var v=s[E],l=255&v,u=(65280&v)>>8,C=(16711680&v)>>16;v=(l=255&Math.min(255,Math.max(0,Number(l)*Number(o))))|(u=255&Math.min(255,Math.max(0,Number(u)*Number(o))))<<8|(C=255&Math.min(255,Math.max(0,Number(C)*Number(o))))<<16,s[E]=v}},multiplyIntensityKeyAllFramesRGB:function(e,a,o,r,i){var n=this.LoadedAnimations[e];if(null!=n&&n.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&n.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var m=n.Frames,t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=o/255,s=r/255,E=i/255,v=0;v<m.length;++v)for(var l=m[v].Colors,u=0;u<t;++u)for(var C=l[u],c=0;c<D;++c)if(getHighByte(a)==u&&getLowByte(a)==c){var f=C[c];o=255&f,r=(65280&f)>>8,i=(16711680&f)>>16;f=(o=255&Math.min(255,Math.max(0,Number(o)*Number(h))))|(r=255&Math.min(255,Math.max(0,Number(r)*Number(s))))<<8|(i=255&Math.min(255,Math.max(0,Number(i)*Number(E))))<<16,C[c]=f}},setChromaCustomColorAllFrames:function(e){var a=this.LoadedAnimations[e];if(null!=a&&a.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&a.Device==EChromaSDKDevice2DEnum.DE_Keyboard)for(var o=a.Frames,r=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),i=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),n=0;n<o.length;++n)for(var m=o[n].Colors,t=0;t<r;++t)for(var D=m[t],h=0;h<i;++h){var s=D[h];s=255&s|(65280&s)>>8<<8|(16711680&s)>>16<<16|1<<24,D[h]=s}},setChromaCustomFlag:function(e,a){var o=this.LoadedAnimations[e];null!=o&&o.DeviceType==EChromaSDKDeviceTypeEnum.DE_2D&&o.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&o.setChromaCustomFlag(a)},playComposite:function(e,a,o){null!=chromaSDK?(this.playAnimation(e+"_ChromaLink.chroma",a,o),this.playAnimation(e+"_Headset.chroma",a,o),this.playAnimation(e+"_Keyboard.chroma",a,o),this.playAnimation(e+"_Keypad.chroma",a,o),this.playAnimation(e+"_Mouse.chroma",a,o),this.playAnimation(e+"_Mousepad.chroma",a,o)):setTimeout(function(){ChromaAnimation.playComposite(e,a)},100)},overrideFrameDuration:function(e,a){var o=this.LoadedAnimations[e];if(null!=o)for(var r=o.Frames,i=0;i<r.length;++i){r[i].Duration=a}},stopComposite:function(e){null!=chromaSDK?(this.stopAnimation(e+"_ChromaLink.chroma"),this.stopAnimation(e+"_Headset.chroma"),this.stopAnimation(e+"_Keyboard.chroma"),this.stopAnimation(e+"_Keypad.chroma"),this.stopAnimation(e+"_Mouse.chroma"),this.stopAnimation(e+"_Mousepad.chroma")):setTimeout(function(){ChromaAnimation.stopComposite(e,loop)},100)},staticColor:function(e,a){null!=chromaSDK?(this.stopByAnimationType(e),e==EChromaSDKDeviceEnum.DE_ChromaLink?chromaSDK.createChromaLinkEffect("CHROMA_STATIC",a):e==EChromaSDKDeviceEnum.DE_Headset?chromaSDK.createHeadsetEffect("CHROMA_STATIC",a):e==EChromaSDKDeviceEnum.DE_Keyboard?chromaSDK.createKeyboardEffect("CHROMA_STATIC",a):e==EChromaSDKDeviceEnum.DE_Keypad?chromaSDK.createKeypadEffect("CHROMA_STATIC",a):e==EChromaSDKDeviceEnum.DE_Mouse?chromaSDK.createMouseEffect("CHROMA_STATIC",a):e==EChromaSDKDeviceEnum.DE_Mousepad&&chromaSDK.createMousematEffect("CHROMA_STATIC",a)):setTimeout(function(){ChromaAnimation.staticColor(e,a)},100)},staticColorAll:function(e){this.staticColor(EChromaSDKDeviceEnum.DE_ChromaLink,e),this.staticColor(EChromaSDKDeviceEnum.DE_Headset,e),this.staticColor(EChromaSDKDeviceEnum.DE_Keyboard,e),this.staticColor(EChromaSDKDeviceEnum.DE_Keypad,e),this.staticColor(EChromaSDKDeviceEnum.DE_Mouse,e),this.staticColor(EChromaSDKDeviceEnum.DE_Mousepad,e)},custom:function(e,a){null!=chromaSDK?(this.stopByAnimationType(e),e==EChromaSDKDeviceEnum.DE_ChromaLink?chromaSDK.createChromaLinkEffect("CHROMA_CUSTOM",a):e==EChromaSDKDeviceEnum.DE_Headset?chromaSDK.createHeadsetEffect("CHROMA_CUSTOM",a):e==EChromaSDKDeviceEnum.DE_Keyboard?chromaSDK.createKeyboardEffect("CHROMA_CUSTOM",a):e==EChromaSDKDeviceEnum.DE_Keypad?chromaSDK.createKeypadEffect("CHROMA_CUSTOM",a):e==EChromaSDKDeviceEnum.DE_Mouse?chromaSDK.createMouseEffect("CHROMA_CUSTOM2",a):e==EChromaSDKDeviceEnum.DE_Mousepad&&chromaSDK.createMousematEffect("CHROMA_CUSTOM",a)):setTimeout(function(){ChromaAnimation.custom(e,a)},100)},customKey:function(e){null!=chromaSDK?(this.stopByAnimationType(EChromaSDKDeviceEnum.DE_Keyboard),chromaSDK.createKeyboardEffect("CHROMA_CUSTOM_KEY",e)):setTimeout(function(){ChromaAnimation.customKey(e)},100)},clear:function(e){null!=chromaSDK?(this.stopByAnimationType(e),e==EChromaSDKDeviceEnum.DE_ChromaLink?chromaSDK.createChromaLinkEffect("CHROMA_NONE"):e==EChromaSDKDeviceEnum.DE_Headset?chromaSDK.createHeadsetEffect("CHROMA_NONE"):e==EChromaSDKDeviceEnum.DE_Keyboard?chromaSDK.createKeyboardEffect("CHROMA_NONE"):e==EChromaSDKDeviceEnum.DE_Keypad?chromaSDK.createKeypadEffect("CHROMA_NONE"):e==EChromaSDKDeviceEnum.DE_Mouse?chromaSDK.createMouseEffect("CHROMA_NONE"):e==EChromaSDKDeviceEnum.DE_Mousepad&&chromaSDK.createMousematEffect("CHROMA_NONE")):setTimeout(function(){ChromaAnimation.clear(e)},100)},clearAll:function(){this.clear(EChromaSDKDeviceEnum.DE_ChromaLink),this.clear(EChromaSDKDeviceEnum.DE_Headset),this.clear(EChromaSDKDeviceEnum.DE_Keyboard),this.clear(EChromaSDKDeviceEnum.DE_Keypad),this.clear(EChromaSDKDeviceEnum.DE_Mouse),this.clear(EChromaSDKDeviceEnum.DE_Mousepad)},getKey:function(e,a){return e<<8|a},reactiveKeyEffectAllFrames:function(e,a,o,r){for(var i=ChromaAnimation.getFrameCount(e),n=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),m=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),t=getHighByte(a),D=getLowByte(a),h=0,s=25/i,E=0;E<i;++E){for(var v=h,l=0;l<o;++l){for(var u=0;u<360;++u){var C=u*Math.PI/180,c=Math.floor(t+v*Math.sin(C)),f=Math.floor(D+v*Math.cos(C));if(c>=0&&c<n&&f>=0&&f<m){var A=ChromaAnimation.getKey(c,f);ChromaAnimation.setKeyColor(e,E,A,r)}}v+=s}h+=s}},reactiveKeyEffectAllFramesRGB:function(e,a,o,r,i,n){for(var m=ChromaAnimation.getFrameCount(e),t=ChromaAnimation.getMaxRow(EChromaSDKDevice2DEnum.DE_Keyboard),D=ChromaAnimation.getMaxColumn(EChromaSDKDevice2DEnum.DE_Keyboard),h=getHighByte(a),s=getLowByte(a),E=ChromaAnimation.getRGB(r,i,n),v=0,l=25/m,u=0;u<m;++u){for(var C=v,c=0;c<o;++c){for(var f=0;f<360;++f){var A=f*Math.PI/180,y=Math.floor(h+C*Math.sin(A)),K=Math.floor(s+C*Math.cos(A));if(y>=0&&y<t&&K>=0&&K<D){var d=ChromaAnimation.getKey(y,K);ChromaAnimation.setKeyColor(e,u,d,E)}}C+=l}v+=l}}};function ChromaAnimation1D(){}function ChromaAnimation2D(){}ChromaAnimation.updateFrame(),ChromaAnimation1D.prototype={DeviceType:EChromaSDKDeviceTypeEnum.DE_1D,CurrentIndex:0,IsPlaying:!1,openAnimation:function(e,a){readSize=1;var o=new Uint8Array(e.slice(a,a+readSize))[0];a+=readSize,this.Device=o,readSize=4;var r=new Uint32Array(e.slice(a,a+readSize))[0];a+=readSize;for(var i=ChromaAnimation.getMaxLeds(o),n=[],m=0;m<r;++m){var t=new ChromaAnimationFrame1D;readSize=Float32Array.BYTES_PER_ELEMENT;var D=new Float32Array(e.slice(a,a+readSize))[0];a+=readSize,D<.033&&(D=.033),t.Duration=D,readSize=4*i;var h=new Uint32Array(e.slice(a,a+readSize));a+=readSize,t.Colors=new Array(i);for(var s=0;s<i;++s){var E=h[s];t.Colors[s]=E}n.push(t)}this.Frames=n},saveAnimation:function(){var e=this.Device,a=ChromaAnimation.getMaxLeds(e),o=this.Frames,r=o.length,i=[];(n=new Uint32Array(1))[0]=1,i.push(n.buffer);var n=new Uint8Array(1),m=this.DeviceType;n[0]=m,i.push(n.buffer),(n=new Uint8Array(1))[0]=e,i.push(n.buffer),(n=new Uint32Array(1))[0]=r,i.push(n.buffer);for(var t=0;t<r;++t){var D=o[t],h=(n=new Float32Array(1),D.Duration);h<.033&&(h=.033),n[0]=h,i.push(n.buffer);n=new Uint32Array(a);for(var s=0;s<a;++s){var E=D.Colors[s];n[s]=E}i.push(n.buffer)}return new Blob(i,{type:"application/octet-stream"})},getFrameCount:function(){return this.Frames.length},getFrame:function(){return this.CurrentIndex<this.Frames.length?this.Frames[this.CurrentIndex]:void 0},getDuration:function(){var e=this.getFrame();return null!=e?e.Duration:0},playFrame:function(){if(!(this.FrameTime>Date.now()))if(this.CurrentIndex<this.Frames.length){var e=this.getDuration();this.Device==EChromaSDKDevice1DEnum.DE_ChromaLink?chromaSDK.createChromaLinkEffect("CHROMA_CUSTOM",this.getFrame().Colors):this.Device==EChromaSDKDevice1DEnum.DE_Headset?chromaSDK.createHeadsetEffect("CHROMA_CUSTOM",this.getFrame().Colors):this.Device==EChromaSDKDevice1DEnum.DE_Mousepad&&chromaSDK.createMousematEffect("CHROMA_CUSTOM",this.getFrame().Colors),null!=this.FrameCallback&&this.FrameCallback(this,this.getFrame().Colors);e<.1&&(e=.1),this.FrameTime=Date.now()+Math.floor(1e3*e),++this.CurrentIndex}else this.Loop?this.play(this.Loop):this.stop()},stop:function(){this.IsPlaying=!1,this.CurrentIndex=0,this.Loop=!1,ChromaAnimation.LoadedAnimations1D[this.Device]==this&&(ChromaAnimation.LoadedAnimations1D[this.Device]=void 0),ChromaAnimation.PlayingAnimations1D[this.Device][this.Name]=void 0},isPlaying:function(){return this.IsPlaying},play:function(e){this.stop(),this.IsPlaying=!0,ChromaAnimation.stopByAnimationType(ChromaAnimation.getDeviceEnum(this.DeviceType,this.Device)),ChromaAnimation.LoadedAnimations1D[this.Device]=this,ChromaAnimation.PlayingAnimations1D[this.Device][this.Name]=this,this.CurrentIndex=0,this.Loop=e,this.playFrame()}},ChromaAnimation2D.prototype={DeviceType:EChromaSDKDeviceTypeEnum.DE_2D,CurrentIndex:0,UseChromaCustom:!1,IsPlaying:!1,openAnimation:function(e,a){readSize=1;var o=new Uint8Array(e.slice(a,a+readSize))[0];a+=readSize,this.Device=o,readSize=4;var r=new Uint32Array(e.slice(a,a+readSize))[0];a+=readSize;for(var i=ChromaAnimation.getMaxRow(o),n=ChromaAnimation.getMaxColumn(o),m=[],t=0;t<r;++t){var D=new ChromaAnimationFrame2D;readSize=Float32Array.BYTES_PER_ELEMENT;var h=new Float32Array(e.slice(a,a+readSize))[0];a+=readSize,h<.033&&(h=.033),D.Duration=h,readSize=4*i*n;var s=new Uint32Array(e.slice(a,a+readSize));a+=readSize,D.Colors=new Array(i);for(var E=0;E<i;++E){D.Colors[E]=new Array(n);for(var v=0;v<n;++v){var l=s[E*n+v];D.Colors[E][v]=l}}m.push(D)}this.Frames=m},saveAnimation:function(){var e=this.Device,a=ChromaAnimation.getMaxRow(e),o=ChromaAnimation.getMaxColumn(e),r=this.Frames,i=r.length,n=[];(m=new Uint32Array(1))[0]=1,n.push(m.buffer);var m=new Uint8Array(1),t=this.DeviceType;m[0]=t,n.push(m.buffer),(m=new Uint8Array(1))[0]=e,n.push(m.buffer),(m=new Uint32Array(1))[0]=i,n.push(m.buffer);for(var D=0;D<i;++D){var h=r[D],s=(m=new Float32Array(1),h.Duration);s<.033&&(s=.033),m[0]=s,n.push(m.buffer);m=new Uint32Array(a*o);for(var E=0;E<a;++E)for(var v=0;v<o;++v){var l=h.Colors[E][v];m[E*o+v]=l}n.push(m.buffer)}return new Blob(n,{type:"application/octet-stream"})},getFrameCount:function(){return this.Frames.length},getFrame:function(){return this.CurrentIndex<this.Frames.length?this.Frames[this.CurrentIndex]:void 0},getDuration:function(){var e=this.getFrame();return null!=e?e.Duration:0},setChromaCustomFlag:function(e){this.Device==EChromaSDKDevice2DEnum.DE_Keyboard&&(this.UseChromaCustom=1==e&&e)},playFrame:function(){if(!(this.FrameTime>Date.now()))if(this.CurrentIndex<this.Frames.length){var e=this.getDuration();this.Device==EChromaSDKDevice2DEnum.DE_Keyboard?this.UseChromaCustom?chromaSDK.createKeyboardEffect("CHROMA_CUSTOM_KEY",this.getFrame().Colors):chromaSDK.createKeyboardEffect("CHROMA_CUSTOM",this.getFrame().Colors):this.Device==EChromaSDKDevice2DEnum.DE_Keypad?chromaSDK.createKeypadEffect("CHROMA_CUSTOM",this.getFrame().Colors):this.Device==EChromaSDKDevice2DEnum.DE_Mouse&&chromaSDK.createMouseEffect("CHROMA_CUSTOM2",this.getFrame().Colors),null!=this.FrameCallback&&this.FrameCallback(this,this.getFrame().Colors);e<.1&&(e=.1),this.FrameTime=Date.now()+Math.floor(1e3*e),++this.CurrentIndex}else this.Loop?this.play(this.Loop):this.stop()},stop:function(){this.IsPlaying=!1,this.CurrentIndex=0,this.Loop=!1,ChromaAnimation.LoadedAnimations2D[this.Device]==this&&(ChromaAnimation.LoadedAnimations2D[this.Device]=void 0),ChromaAnimation.PlayingAnimations2D[this.Device][this.Name]=void 0},isPlaying:function(){return this.IsPlaying},play:function(e){this.stop(),this.IsPlaying=!0,ChromaAnimation.stopByAnimationType(ChromaAnimation.getDeviceEnum(this.DeviceType,this.Device)),ChromaAnimation.LoadedAnimations2D[this.Device]=this,ChromaAnimation.PlayingAnimations2D[this.Device][this.Name]=this,this.CurrentIndex=0,this.Loop=e,this.playFrame()}};

// set/get cookies
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


var chromaSDK = new ChromaSDK();
var chromaIsInitialized = false;
var browserTabIsVisible = true;
var pageHadFocus = undefined;
var lastPlayers = '';
var lastPlayerState = '';
var lastServerStatus = '';
var selectedPlayer = getCookie('RustChromaMod_SelectedPlayer');


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


function selectPlayer(player) {
  setCookie('RustChromaMod_SelectedPlayer', player, 30);
  selectedPlayer = player;
  lastPlayers = '';
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
		  players += '<a style="color: #0F0; background-color: #222" onclick="selectPlayer(\'' + value + '\');">' + value + '</a>';
		} else {
		  players += '<a style="color: #000; background-color: #DDD" onclick="selectPlayer(\'' + value + '\');">' + value + '</a>';
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
				case 'OnPlayerConnected':
					showEffect8ChromaLink();
					showEffect8Headset();
					showEffect8Keyboard();
					showEffect8Keypad();
					showEffect8Mouse();
					showEffect8Mousepad();
					break;
				case 'OnPlayerDeath':
					showEffect9ChromaLink();
					showEffect9Headset();
					showEffect9Keyboard();
					showEffect9Keypad();
					showEffect9Mouse();
					showEffect9Mousepad();
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

function setupHotKeys(animation) {
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
  ChromaAnimation.setKeysColorAllFrames(animation, keys, color);
  var keys = [];
  keys.push(RZKEY.RZKEY_F1);
  keys.push(RZKEY.RZKEY_G);
  var color = ChromaAnimation.getRGB(0,255,255);
  ChromaAnimation.setKeysColorAllFrames(animation, keys, color);
  var keys = [];
  keys.push(RZKEY.RZKEY_E);
  keys.push(RZKEY.RZKEY_N);
  var color = ChromaAnimation.getRGB(0,255,0);
  ChromaAnimation.setKeysColorAllFrames(animation, keys, color);
  var keys = [];
  keys.push(RZKEY.RZKEY_1);
  keys.push(RZKEY.RZKEY_2);
  keys.push(RZKEY.RZKEY_3);
  keys.push(RZKEY.RZKEY_4);
  keys.push(RZKEY.RZKEY_5);
  keys.push(RZKEY.RZKEY_6);
  var color = ChromaAnimation.getRGB(255,255,255);
  ChromaAnimation.setKeysColorAllFrames(animation, keys, color);
  var keys = [];
  keys.push(RZKEY.RZKEY_V);
  var color = ChromaAnimation.getRGB(255,0,0);
  ChromaAnimation.setKeysColorAllFrames(animation, keys, color);
}

function setupIdleAnimation(sourceAnimation, idleAnimation, device) {
	
	ChromaAnimation.closeAnimation(sourceAnimation);
	ChromaAnimation.closeAnimation(idleAnimation);
	
	ChromaAnimation.openAnimation(sourceAnimation, function(baseAnimation) {
		
		var frameCount = 50;
		ChromaAnimation.makeBlankFramesRGB(sourceAnimation, frameCount, 0.033, 48, 48, 48);
		
		if (device == EChromaSDKDeviceEnum.DE_Keyboard) {
		  setupHotKeys(sourceAnimation);
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
    
	setupHotKeys(baseLayer);
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
    
	setupHotKeys(baseLayer);
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
    
	setupHotKeys(baseLayer);
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
    
	setupHotKeys(baseLayer);
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
    
	setupHotKeys(baseLayer);
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
    
	setupHotKeys(baseLayer);
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
    
	setupHotKeys(baseLayer);
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

function showEffect8Keyboard() {

  var baseLayer = 'Animations/Effect8_Keyboard.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.setChromaCustomFlag(baseLayer, true);
    ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
    
	setupHotKeys(baseLayer);
	ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect8ChromaLink() {
  var baseLayer = 'Animations/Effect8_ChromaLink.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect8Headset() {
  var baseLayer = 'Animations/Effect8_Headset.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect8Mousepad() {
  var baseLayer = 'Animations/Effect8_Mousepad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect8Mouse() {
  var baseLayer = 'Animations/Effect8_Mouse.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect8Keypad() {
  var baseLayer = 'Animations/Effect8_Keypad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(0,255,255);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect9Keyboard() {

  var baseLayer = 'Animations/Effect9_Keyboard.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(127,0,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.setChromaCustomFlag(baseLayer, true);
    ChromaAnimation.setChromaCustomColorAllFrames(baseLayer);
    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);
    
	setupHotKeys(baseLayer);
	ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect9ChromaLink() {
  var baseLayer = 'Animations/Effect9_ChromaLink.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(127,0,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect9Headset() {
  var baseLayer = 'Animations/Effect9_Headset.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(127,0,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect9Mousepad() {
  var baseLayer = 'Animations/Effect9_Mousepad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(127,0,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect9Mouse() {
  var baseLayer = 'Animations/Effect9_Mouse.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(127,0,0);
    ChromaAnimation.multiplyTargetColorLerpAllFrames(baseLayer, color1, color2);

    ChromaAnimation.overrideFrameDuration(baseLayer, 0.033);

    ChromaAnimation.playAnimation(baseLayer, false);
  });
}

function showEffect9Keypad() {
  var baseLayer = 'Animations/Effect9_Keypad.chroma';
  ChromaAnimation.closeAnimation(baseLayer);
  ChromaAnimation.openAnimation(baseLayer, function(baseAnimation) {

    var color1 = ChromaAnimation.getRGB(0,127,0);
    var color2 = ChromaAnimation.getRGB(127,0,0);
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

/*! For license information please see 842.33d6c103.chunk.js.LICENSE.txt */
(self.webpackChunkhcmd_communication=self.webpackChunkhcmd_communication||[]).push([[842],{75454:(t,e,n)=>{"use strict";n.d(e,{A:()=>r});var i=n(59662),o=n(70579);const r=(0,i.A)((0,o.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41zm-6.78.66h5v1.5h-5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.25h-5v-1.5h5zm0-2.5h-5v-1.5h5z"}),"Calculate")},23072:(t,e,n)=>{"use strict";n.d(e,{A:()=>r});var i=n(59662),o=n(70579);const r=(0,i.A)((0,o.jsx)("path",{d:"M10 9h4V6h3l-5-5-5 5h3zm-1 1H6V7l-5 5 5 5v-3h3zm14 2-5-5v3h-3v4h3v3zm-9 3h-4v3H7l5 5 5-5h-3z"}),"OpenWith")},8911:(t,e,n)=>{"use strict";n.d(e,{A:()=>r});var i=n(59662),o=n(70579);const r=(0,i.A)((0,o.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8"}),"Replay")},25496:function(t,e,n){var i,o,r,s;t.exports=(i=n(65173),o=n(65043),r=n(26363),s=n(2576),function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=i(n(1)),l=n(2),d=i(l),p=i(n(3)),f=i(n(4)),v=function(t){function e(){var t,n,i;r(this,e);for(var a=arguments.length,h=Array(a),c=0;c<a;c++)h[c]=arguments[c];return n=i=s(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(h))),i._sigPad=null,i._excludeOurProps=function(){var t=i.props;return t.canvasProps,t.clearOnResize,o(t,["canvasProps","clearOnResize"])},i.getCanvas=function(){return i._canvas},i.getTrimmedCanvas=function(){var t=document.createElement("canvas");return t.width=i._canvas.width,t.height=i._canvas.height,t.getContext("2d").drawImage(i._canvas,0,0),(0,f.default)(t)},i.getSignaturePad=function(){return i._sigPad},i._checkClearOnResize=function(){i.props.clearOnResize&&i._resizeCanvas()},i._resizeCanvas=function(){var t=i.props.canvasProps||{},e=t.width,n=t.height;if(!e||!n){var o=i._canvas,r=Math.max(window.devicePixelRatio||1,1);e||(o.width=o.offsetWidth*r),n||(o.height=o.offsetHeight*r),o.getContext("2d").scale(r,r),i.clear()}},i.on=function(){return window.addEventListener("resize",i._checkClearOnResize),i._sigPad.on()},i.off=function(){return window.removeEventListener("resize",i._checkClearOnResize),i._sigPad.off()},i.clear=function(){return i._sigPad.clear()},i.isEmpty=function(){return i._sigPad.isEmpty()},i.fromDataURL=function(t,e){return i._sigPad.fromDataURL(t,e)},i.toDataURL=function(t,e){return i._sigPad.toDataURL(t,e)},i.fromData=function(t){return i._sigPad.fromData(t)},i.toData=function(){return i._sigPad.toData()},s(i,n)}return a(e,t),c(e,[{key:"componentDidMount",value:function(){this._sigPad=new p.default(this._canvas,this._excludeOurProps()),this._resizeCanvas(),this.on()}},{key:"componentWillUnmount",value:function(){this.off()}},{key:"componentDidUpdate",value:function(){Object.assign(this._sigPad,this._excludeOurProps())}},{key:"render",value:function(){var t=this,e=this.props.canvasProps;return d.default.createElement("canvas",h({ref:function(e){t._canvas=e}},e))}}]),e}(l.Component);v.propTypes={velocityFilterWeight:u.default.number,minWidth:u.default.number,maxWidth:u.default.number,minDistance:u.default.number,dotSize:u.default.oneOfType([u.default.number,u.default.func]),penColor:u.default.string,throttle:u.default.number,onEnd:u.default.func,onBegin:u.default.func,canvasProps:u.default.object,clearOnResize:u.default.bool},v.defaultProps={clearOnResize:!0},e.default=v},function(t,e){t.exports=i},function(t,e){t.exports=o},function(t,e){t.exports=r},function(t,e){t.exports=s}]))},62658:(t,e,n)=>{"use strict";n.d(e,{A:()=>s});var i=n(65043),o=n(63812),r=i.useState;const s=function(t){var e,n,s=r(!1),a=s[0],h=s[1];return"function"===typeof t&&(t=t(a)),[i.cloneElement(t,{onMouseEnter:(n=t.props.onMouseEnter,function(t){(n||o.lQ)(t),h(!0)}),onMouseLeave:(e=t.props.onMouseLeave,function(t){(e||o.lQ)(t),h(!1)})}),a]}},2576:function(t){t.exports=function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t){var e=t.getContext("2d"),n=t.width,i=t.height,o=e.getImageData(0,0,n,i).data,a=r(!0,n,i,o),h=r(!1,n,i,o),c=s(!0,n,i,o),u=s(!1,n,i,o)-c+1,l=h-a+1,d=e.getImageData(c,a,u,l);return t.width=u,t.height=l,e.clearRect(0,0,u,l),e.putImageData(d,0,0),t}function i(t,e,n,i){return{red:i[4*(n*e+t)],green:i[4*(n*e+t)+1],blue:i[4*(n*e+t)+2],alpha:i[4*(n*e+t)+3]}}function o(t,e,n,o){return i(t,e,n,o).alpha}function r(t,e,n,i){for(var r=t?1:-1,s=t?0:n-1;t?s<n:s>-1;s+=r)for(var a=0;a<e;a++)if(o(a,s,e,i))return s;return null}function s(t,e,n,i){for(var r=t?1:-1,s=t?0:e-1;t?s<e:s>-1;s+=r)for(var a=0;a<n;a++)if(o(s,a,e,i))return s;return null}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n}])},4812:(t,e,n)=>{"use strict";n.d(e,{PN:()=>f});var i,o=n(65043),r=n(89181),s=n(26690),a=n(37352),h=n(67475);!function(t){t.Line="line",t.Handle="handle"}(i||(i={}));const c={width:0,height:0,x:0,y:0},u={...c,pointerX:0,pointerY:0,aspectRatio:1};var l=(0,o.memo)((function(t){let{nodeId:e,position:n,variant:l=i.Handle,className:d,style:p={},children:f,color:v,minWidth:m=10,minHeight:_=10,maxWidth:g=Number.MAX_VALUE,maxHeight:y=Number.MAX_VALUE,keepAspectRatio:x=!1,shouldResize:w,onResizeStart:P,onResize:b,onResizeEnd:E}=t;const M=(0,h.FC)(),z="string"===typeof e?e:M,C=(0,h.PI)(),R=(0,o.useRef)(null),k=(0,o.useRef)(u),D=(0,o.useRef)(c),A=(0,h.E_)(),L=l===i.Line?"right":"bottom-right",W=null!==n&&void 0!==n?n:L;(0,o.useEffect)((()=>{if(!R.current||!z)return;const t=(0,a.A)(R.current),e=W.includes("right")||W.includes("left"),n=W.includes("bottom")||W.includes("top"),i=W.includes("left"),o=W.includes("top"),r=(0,s.A)().on("start",(t=>{var e,n,i,o;const r=C.getState().nodeInternals.get(z),{xSnapped:s,ySnapped:a}=A(t);D.current={width:null!==(e=null===r||void 0===r?void 0:r.width)&&void 0!==e?e:0,height:null!==(n=null===r||void 0===r?void 0:r.height)&&void 0!==n?n:0,x:null!==(i=null===r||void 0===r?void 0:r.position.x)&&void 0!==i?i:0,y:null!==(o=null===r||void 0===r?void 0:r.position.y)&&void 0!==o?o:0},k.current={...D.current,pointerX:s,pointerY:a,aspectRatio:D.current.width/D.current.height},null===P||void 0===P||P(t,{...D.current})})).on("drag",(t=>{const{nodeInternals:r,triggerNodeChanges:s}=C.getState(),{xSnapped:a,ySnapped:c}=A(t),u=r.get(z);if(u){const r=[],{pointerX:l,pointerY:d,width:p,height:f,x:v,y:P,aspectRatio:E}=k.current,{x:M,y:C,width:R,height:A}=D.current,L=Math.floor(e?a-l:0),W=Math.floor(n?c-d:0);let S=(0,h.qE)(p+(i?-L:L),m,g),T=(0,h.qE)(f+(o?-W:W),_,y);if(x){const t=S/T,i=e&&n;S=t<=E&&i||n&&!e?T*E:S,T=t>E&&i||e&&!n?S/E:T,S>=g?(S=g,T=g/E):S<=m&&(S=m,T=m/E),T>=y?(T=y,S=y*E):T<=_&&(T=_,S=_*E)}const O=S!==R,N=T!==A;if(i||o){const t=i?v-(S-p):v,e=o?P-(T-f):P,n=t!==M&&O,s=e!==C&&N;if(n||s){const i={id:u.id,type:"position",position:{x:n?t:M,y:s?e:C}};r.push(i),D.current.x=i.position.x,D.current.y=i.position.y}}if(O||N){const t={id:z,type:"dimensions",updateStyle:!0,resizing:!0,dimensions:{width:S,height:T}};r.push(t),D.current.width=S,D.current.height=T}if(0===r.length)return;const U=function(t){let{width:e,prevWidth:n,height:i,prevHeight:o,invertX:r,invertY:s}=t;const a=e-n,h=i-o,c=[a>0?1:a<0?-1:0,h>0?1:h<0?-1:0];return a&&r&&(c[0]=-1*c[0]),h&&s&&(c[1]=-1*c[1]),c}({width:D.current.width,prevWidth:R,height:D.current.height,prevHeight:A,invertX:i,invertY:o}),H={...D.current,direction:U};if(!1===(null===w||void 0===w?void 0:w(t,H)))return;null===b||void 0===b||b(t,H),s(r)}})).on("end",(t=>{const e={id:z,type:"dimensions",resizing:!1};null===E||void 0===E||E(t,{...D.current}),C.getState().triggerNodeChanges([e])}));return t.call(r),()=>{t.on(".drag",null)}}),[z,W,m,_,g,y,x,A,P,b,E]);const S=W.split("-"),T=l===i.Line?"borderColor":"backgroundColor",O=v?{...p,[T]:v}:p;return o.createElement("div",{className:(0,r.A)(["react-flow__resize-control","nodrag",...S,l,d]),ref:R,style:O},f)}));const d=["top-left","top-right","bottom-left","bottom-right"],p=["top","right","bottom","left"];function f(t){let{nodeId:e,isVisible:n=!0,handleClassName:r,handleStyle:s,lineClassName:a,lineStyle:h,color:c,minWidth:u=10,minHeight:f=10,maxWidth:v=Number.MAX_VALUE,maxHeight:m=Number.MAX_VALUE,keepAspectRatio:_=!1,shouldResize:g,onResizeStart:y,onResize:x,onResizeEnd:w}=t;return n?o.createElement(o.Fragment,null,p.map((t=>o.createElement(l,{key:t,className:a,style:h,nodeId:e,position:t,variant:i.Line,color:c,minWidth:u,minHeight:f,maxWidth:v,maxHeight:m,onResizeStart:y,keepAspectRatio:_,shouldResize:g,onResize:x,onResizeEnd:w}))),d.map((t=>o.createElement(l,{key:t,className:r,style:s,nodeId:e,position:t,color:c,minWidth:u,minHeight:f,maxWidth:v,maxHeight:m,onResizeStart:y,keepAspectRatio:_,shouldResize:g,onResize:x,onResizeEnd:w})))):null}},26363:(t,e,n)=>{"use strict";function i(t,e,n){this.x=t,this.y=e,this.time=n||(new Date).getTime()}function o(t,e,n,i){this.startPoint=t,this.control1=e,this.control2=n,this.endPoint=i}function r(t,e){var n=this,i=e||{};this.velocityFilterWeight=i.velocityFilterWeight||.7,this.minWidth=i.minWidth||.5,this.maxWidth=i.maxWidth||2.5,this.throttle="throttle"in i?i.throttle:16,this.minDistance="minDistance"in i?i.minDistance:5,this.throttle?this._strokeMoveUpdate=function(t,e,n){var i,o,r,s=null,a=0;n||(n={});var h=function(){a=!1===n.leading?0:Date.now(),s=null,r=t.apply(i,o),s||(i=o=null)};return function(){var c=Date.now();a||!1!==n.leading||(a=c);var u=e-(c-a);return i=this,o=arguments,u<=0||u>e?(s&&(clearTimeout(s),s=null),a=c,r=t.apply(i,o),s||(i=o=null)):s||!1===n.trailing||(s=setTimeout(h,u)),r}}(r.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=r.prototype._strokeUpdate,this.dotSize=i.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=i.penColor||"black",this.backgroundColor=i.backgroundColor||"rgba(0,0,0,0)",this.onBegin=i.onBegin,this.onEnd=i.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(t){1===t.which&&(n._mouseButtonDown=!0,n._strokeBegin(t))},this._handleMouseMove=function(t){n._mouseButtonDown&&n._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(t))},this._handleTouchStart=function(t){if(1===t.targetTouches.length){var e=t.changedTouches[0];n._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];n._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){t.target===n._canvas&&(t.preventDefault(),n._strokeEnd(t))},this.on()}n.r(e),n.d(e,{default:()=>s}),i.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1},i.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},i.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},o.prototype.length=function(){for(var t=0,e=void 0,n=void 0,i=0;i<=10;i+=1){var o=i/10,r=this._point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),s=this._point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var a=r-e,h=s-n;t+=Math.sqrt(a*a+h*h)}e=r,n=s}return t},o.prototype._point=function(t,e,n,i,o){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t},r.prototype.clear=function(){var t=this._ctx,e=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0},r.prototype.fromDataURL=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new Image,o=n.ratio||window.devicePixelRatio||1,r=n.width||this._canvas.width/o,s=n.height||this._canvas.height/o;this._reset(),i.src=t,i.onload=function(){e._ctx.drawImage(i,0,0,r,s)},this._isEmpty=!1},r.prototype.toDataURL=function(t){var e;if("image/svg+xml"===t)return this._toSVG();for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return(e=this._canvas).toDataURL.apply(e,[t].concat(i))},r.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()},r.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)},r.prototype.isEmpty=function(){return this._isEmpty},r.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),"function"===typeof this.onBegin&&this.onBegin(t)},r.prototype._strokeUpdate=function(t){var e=t.clientX,n=t.clientY,i=this._createPoint(e,n),o=this._data[this._data.length-1],r=o&&o[o.length-1],s=r&&i.distanceTo(r)<this.minDistance;if(!r||!s){var a=this._addPoint(i),h=a.curve,c=a.widths;h&&c&&this._drawCurve(h,c.start,c.end),this._data[this._data.length-1].push({x:i.x,y:i.y,time:i.time,color:this.penColor})}},r.prototype._strokeEnd=function(t){var e=this.points.length>2,n=this.points[0];if(!e&&n&&this._drawDot(n),n){var i=this._data[this._data.length-1],o=i[i.length-1];n.equals(o)||i.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}"function"===typeof this.onEnd&&this.onEnd(t)},r.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},r.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)},r.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},r.prototype._createPoint=function(t,e,n){var o=this._canvas.getBoundingClientRect();return new i(t-o.left,e-o.top,n||(new Date).getTime())},r.prototype._addPoint=function(t){var e=this.points;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var n=this._calculateCurveControlPoints(e[0],e[1],e[2]).c2,i=this._calculateCurveControlPoints(e[1],e[2],e[3]).c1,r=new o(e[1],n,i,e[2]),s=this._calculateCurveWidths(r);return e.shift(),{curve:r,widths:s}}return{}},r.prototype._calculateCurveControlPoints=function(t,e,n){var o=t.x-e.x,r=t.y-e.y,s=e.x-n.x,a=e.y-n.y,h=(t.x+e.x)/2,c=(t.y+e.y)/2,u=(e.x+n.x)/2,l=(e.y+n.y)/2,d=Math.sqrt(o*o+r*r),p=Math.sqrt(s*s+a*a),f=p/(d+p),v=u+(h-u)*f,m=l+(c-l)*f,_=e.x-v,g=e.y-m;return{c1:new i(h+_,c+g),c2:new i(u+_,l+g)}},r.prototype._calculateCurveWidths=function(t){var e=t.startPoint,n=t.endPoint,i={start:null,end:null},o=this.velocityFilterWeight*n.velocityFrom(e)+(1-this.velocityFilterWeight)*this._lastVelocity,r=this._strokeWidth(o);return i.start=this._lastWidth,i.end=r,this._lastVelocity=o,this._lastWidth=r,i},r.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)},r.prototype._drawPoint=function(t,e,n){var i=this._ctx;i.moveTo(t,e),i.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1},r.prototype._drawCurve=function(t,e,n){var i=this._ctx,o=n-e,r=Math.floor(t.length());i.beginPath();for(var s=0;s<r;s+=1){var a=s/r,h=a*a,c=h*a,u=1-a,l=u*u,d=l*u,p=d*t.startPoint.x;p+=3*l*a*t.control1.x,p+=3*u*h*t.control2.x,p+=c*t.endPoint.x;var f=d*t.startPoint.y;f+=3*l*a*t.control1.y,f+=3*u*h*t.control2.y,f+=c*t.endPoint.y;var v=e+c*o;this._drawPoint(p,f,v)}i.closePath(),i.fill()},r.prototype._drawDot=function(t){var e=this._ctx,n="function"===typeof this.dotSize?this.dotSize():this.dotSize;e.beginPath(),this._drawPoint(t.x,t.y,n),e.closePath(),e.fill()},r.prototype._fromData=function(t,e,n){for(var o=0;o<t.length;o+=1){var r=t[o];if(r.length>1)for(var s=0;s<r.length;s+=1){var a=r[s],h=new i(a.x,a.y,a.time),c=a.color;if(0===s)this.penColor=c,this._reset(),this._addPoint(h);else if(s!==r.length-1){var u=this._addPoint(h),l=u.curve,d=u.widths;l&&d&&e(l,d,c)}}else this._reset(),n(r[0])}},r.prototype._toSVG=function(){var t=this,e=this._data,n=this._canvas,i=Math.max(window.devicePixelRatio||1,1),o=n.width/i,r=n.height/i,s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttributeNS(null,"width",n.width),s.setAttributeNS(null,"height",n.height),this._fromData(e,(function(t,e,n){var i=document.createElement("path");if(!isNaN(t.control1.x)&&!isNaN(t.control1.y)&&!isNaN(t.control2.x)&&!isNaN(t.control2.y)){var o="M "+t.startPoint.x.toFixed(3)+","+t.startPoint.y.toFixed(3)+" C "+t.control1.x.toFixed(3)+","+t.control1.y.toFixed(3)+" "+t.control2.x.toFixed(3)+","+t.control2.y.toFixed(3)+" "+t.endPoint.x.toFixed(3)+","+t.endPoint.y.toFixed(3);i.setAttribute("d",o),i.setAttribute("stroke-width",(2.25*e.end).toFixed(3)),i.setAttribute("stroke",n),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),s.appendChild(i)}}),(function(e){var n=document.createElement("circle"),i="function"===typeof t.dotSize?t.dotSize():t.dotSize;n.setAttribute("r",i),n.setAttribute("cx",e.x),n.setAttribute("cy",e.y),n.setAttribute("fill",e.color),s.appendChild(n)}));var a='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+o+" "+r+'" width="'+o+'" height="'+r+'">',h=s.innerHTML;if(void 0===h){var c=document.createElement("dummy"),u=s.childNodes;c.innerHTML="";for(var l=0;l<u.length;l+=1)c.appendChild(u[l].cloneNode(!0));h=c.innerHTML}return"data:image/svg+xml;base64,"+btoa(a+h+"</svg>")},r.prototype.fromData=function(t){var e=this;this.clear(),this._fromData(t,(function(t,n){return e._drawCurve(t,n.start,n.end)}),(function(t){return e._drawDot(t)})),this._data=t},r.prototype.toData=function(){return this._data};const s=r}}]);
//# sourceMappingURL=842.33d6c103.chunk.js.map
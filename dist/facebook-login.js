!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FacebookLogin=t(require("react")):e.FacebookLogin=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(5),l=n(c),p=o(3),u=n(p),f=function(e){function t(e){r(this,t);var o=i(this,Object.getPrototypeOf(t).call(this,e));return o.responseApi=function(e){window.FB.api("/me",{fields:o.props.fields},function(t){Object.assign(t,e),o.props.callback(t)})},o.checkLoginState=function(e){e.authResponse?o.responseApi(e.authResponse):o.props.callback&&o.props.callback({status:e.status})},o.click=function(){var e=o.props,t=e.scope,n=e.appId;navigator.userAgent.match("CriOS")?window.location.href="https://www.facebook.com/dialog/oauth?client_id="+n+"&redirect_uri="+window.location.href+"&state=facebookdirect&"+t:window.FB.login(o.checkLoginState,{scope:t})},o}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,a=t.autoLoad,s=t.language,c=document.createElement("div");c.id="fb-root",document.body.appendChild(c),window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),(a||window.location.search.includes("facebookdirect"))&&window.FB.getLoginStatus(e.checkLoginState)},function(e,t,o){var n=e.getElementsByTagName(t)[0],r=n,i=n;e.getElementById(o)||(i=e.createElement(t),i.id=o,i.src="//connect.facebook.net/"+s+"/all.js",r.parentNode.insertBefore(i,r))}(document,"script","facebook-jssdk")}},{key:"renderWithFontAwesome",value:function(){var e=this.props,t=e.cssClass,o=e.size,n=e.icon,r=e.textButton;return l["default"].createElement("span",null,l["default"].createElement("link",{rel:"stylesheet",href:"//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),l["default"].createElement("button",{className:t+" "+o,onClick:this.click},l["default"].createElement("i",{className:"fa "+n})," ",r),l["default"].createElement("style",{dangerouslySetInnerHTML:{__html:u["default"]}}))}},{key:"render",value:function(){var e=this.props,t=e.cssClass,o=e.size,n=e.icon,r=e.textButton,i=e.typeButton;return n?this.renderWithFontAwesome():l["default"].createElement("span",null,l["default"].createElement("button",{className:t+" "+o,onClick:this.click,type:i},r),l["default"].createElement("style",{dangerouslySetInnerHTML:{__html:u["default"]}}))}}]),t}(l["default"].Component);f.propTypes={callback:c.PropTypes.func.isRequired,appId:c.PropTypes.string.isRequired,xfbml:c.PropTypes.bool,cookie:c.PropTypes.bool,scope:c.PropTypes.string,textButton:c.PropTypes.string,typeButton:c.PropTypes.string,autoLoad:c.PropTypes.bool,size:c.PropTypes.string,fields:c.PropTypes.string,cssClass:c.PropTypes.string,version:c.PropTypes.string,icon:c.PropTypes.string,language:c.PropTypes.string},f.defaultProps={textButton:"Login with Facebook",typeButton:"submit",scope:"public_profile,email",xfbml:!1,cookie:!1,size:"metro",fields:"name",cssClass:"kep-login-facebook",version:"2.3",language:"en_US"},t["default"]=f},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),i=n(r);t["default"]=i["default"]},function(e,t,o){t=e.exports=o(4)(),t.push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},function(t,o){t.exports=e}])});
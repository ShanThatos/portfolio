import{g as O}from"./index-79d6545a.js";function j(c,o){for(var p=0;p<o.length;p++){const t=o[p];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in c)){const e=Object.getOwnPropertyDescriptor(t,r);e&&Object.defineProperty(c,r,e.get?e:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var h=y;y.displayName="markupTemplating";y.aliases=[];function y(c){(function(o){function p(t,r){return"___"+t.toUpperCase()+r+"___"}Object.defineProperties(o.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,r,e,l){if(t.language===r){var u=t.tokenStack=[];t.code=t.code.replace(e,function(n){if(typeof l=="function"&&!l(n))return n;for(var i=u.length,a;t.code.indexOf(a=p(r,i))!==-1;)++i;return u[i]=n,a}),t.grammar=o.languages.markup}}},tokenizePlaceholders:{value:function(t,r){if(t.language!==r||!t.tokenStack)return;t.grammar=o.languages[r];var e=0,l=Object.keys(t.tokenStack);function u(n){for(var i=0;i<n.length&&!(e>=l.length);i++){var a=n[i];if(typeof a=="string"||a.content&&typeof a.content=="string"){var d=l[e],m=t.tokenStack[d],g=typeof a=="string"?a:a.content,k=p(r,d),s=g.indexOf(k);if(s>-1){++e;var _=g.substring(0,s),v=new o.Token(r,o.tokenize(m,t.grammar),"language-"+r,m),b=g.substring(s+k.length),f=[];_&&f.push.apply(f,u([_])),f.push(v),b&&f.push.apply(f,u([b])),typeof a=="string"?n.splice.apply(n,[i,1].concat(f)):a.content=f}}else a.content&&u(a.content)}return n}u(t.tokens)}}})})(c)}const T=O(h),w=j({__proto__:null,default:T},[h]);export{h as a,w as m};
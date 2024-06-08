import{j as R}from"./Markdown-957a1ad0.js";import"./index-00606307.js";import"./date-display-75f041d5.js";q.displayName="js-templates";q.aliases=[];function q(A){A.register(R),function(a){var d=a.languages.javascript["template-string"],O=d.pattern.source,h=d.inside.interpolation,C=h.inside["interpolation-punctuation"],E=h.pattern.source;function c(t,n){if(a.languages[t])return{pattern:RegExp("((?:"+n+")\\s*)"+O),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}a.languages.javascript["template-string"]=[c("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),c("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),c("svg",/\bsvg/.source),c("markdown",/\b(?:markdown|md)/.source),c("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),c("sql",/\bsql/.source),d].filter(Boolean);function S(t,n){return"___"+n.toUpperCase()+"_"+t+"___"}function _(t,n,r){var e={code:t,grammar:n,language:r};return a.hooks.run("before-tokenize",e),e.tokens=a.tokenize(e.code,e.grammar),a.hooks.run("after-tokenize",e),e.tokens}function L(t){var n={};n["interpolation-punctuation"]=C;var r=a.tokenize(t,n);if(r.length===3){var e=[1,1];e.push.apply(e,_(r[1],a.languages.javascript,"javascript")),r.splice.apply(r,e)}return new a.Token("interpolation",r,h.alias,t)}function G(t,n,r){var e=a.tokenize(t,{interpolation:{pattern:RegExp(E),lookbehind:!0}}),l=0,f={},p=e.map(function(o){if(typeof o=="string")return o;for(var s=o.content,i;t.indexOf(i=S(l++,r))!==-1;);return f[i]=s,i}).join(""),g=_(p,n,r),y=Object.keys(f);l=0;function u(o){for(var s=0;s<o.length;s++){if(l>=y.length)return;var i=o[s];if(typeof i=="string"||typeof i.content=="string"){var j=y[l],k=typeof i=="string"?i:i.content,m=k.indexOf(j);if(m!==-1){++l;var w=k.substring(0,m),M=L(f[j]),T=k.substring(m+j.length),v=[];if(w&&v.push(w),v.push(M),T){var x=[T];u(x),v.push.apply(v,x)}typeof i=="string"?(o.splice.apply(o,[s,1].concat(v)),s+=v.length-1):i.content=v}}else{var z=i.content;Array.isArray(z)?u(z):u([z])}}}return u(g),new a.Token(r,g,"language-"+r,t)}var H={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};a.hooks.add("after-tokenize",function(t){if(!(t.language in H))return;function n(r){for(var e=0,l=r.length;e<l;e++){var f=r[e];if(typeof f!="string"){var p=f.content;if(!Array.isArray(p)){typeof p!="string"&&n([p]);continue}if(f.type==="template-string"){var g=p[1];if(p.length===3&&typeof g!="string"&&g.type==="embedded-code"){var y=b(g),u=g.alias,o=Array.isArray(u)?u[0]:u,s=a.languages[o];if(!s)continue;p[1]=G(y,s,o)}}else n(p)}}}n(t.tokens)});function b(t){return typeof t=="string"?t:Array.isArray(t)?t.map(b).join(""):b(t.content)}}(A)}export{q as default};

import{g as u}from"./index-9c922025.js";function l(n,e){for(var o=0;o<e.length;o++){const r=e[o];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in n)){const g=Object.getOwnPropertyDescriptor(r,t);g&&Object.defineProperty(n,t,g.get?g:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i=a;a.displayName="ignore";a.aliases=["gitignore","hgignore","npmignore"];function a(n){(function(e){e.languages.ignore={comment:/^#.*/m,entry:{pattern:/\S(?:.*(?:(?:\\ )|\S))?/,alias:"string",inside:{operator:/^!|\*\*?|\?/,regex:{pattern:/(^|[^\\])\[[^\[\]]*\]/,lookbehind:!0},punctuation:/\//}}},e.languages.gitignore=e.languages.ignore,e.languages.hgignore=e.languages.ignore,e.languages.npmignore=e.languages.ignore})(n)}const s=u(i),c=l({__proto__:null,default:s},[i]);export{c as i};

import{g as f}from"./index-9c922025.js";function i(e,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(t,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var c=a;a.displayName="csv";a.aliases=[];function a(e){e.languages.csv={value:/[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,punctuation:/,/}}const u=f(c),g=i({__proto__:null,default:u},[c]);export{g as c};

import{g as s}from"./index-9c922025.js";function c(e,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const p=Object.getOwnPropertyDescriptor(t,r);p&&Object.defineProperty(e,r,p.get?p:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i=a;a.displayName="hpkp";a.aliases=[];function a(e){e.languages.hpkp={directive:{pattern:/\b(?:includeSubDomains|max-age|pin-sha256|preload|report-to|report-uri|strict)(?=[\s;=]|$)/i,alias:"property"},operator:/=/,punctuation:/;/}}const u=s(i),f=c({__proto__:null,default:u},[i]);export{f as h};

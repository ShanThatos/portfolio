import{g as d}from"./index-9c922025.js";function g(e,u){for(var r=0;r<u.length;r++){const o=u[r];if(typeof o!="string"&&!Array.isArray(o)){for(const t in o)if(t!=="default"&&!(t in e)){const a=Object.getOwnPropertyDescriptor(o,t);a&&Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>o[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var l=n;n.displayName="goModule";n.aliases=[];function n(e){e.languages["go-mod"]=e.languages["go-module"]={comment:{pattern:/\/\/.*/,greedy:!0},version:{pattern:/(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,lookbehind:!0,alias:"number"},"go-version":{pattern:/((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,lookbehind:!0,alias:"number"},keyword:{pattern:/^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,lookbehind:!0},operator:/=>/,punctuation:/[()[\],]/}}const s=d(l),c=g({__proto__:null,default:s},[l]);export{c as g};

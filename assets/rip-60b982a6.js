import{g as o}from"./index-79d6545a.js";function b(e,d){for(var n=0;n<d.length;n++){const r=d[n];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const a=Object.getOwnPropertyDescriptor(r,t);a&&Object.defineProperty(e,t,a.get?a:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i=s;s.displayName="rip";s.aliases=[];function s(e){e.languages.rip={comment:{pattern:/#.*/,greedy:!0},char:{pattern:/\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,greedy:!0},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},regex:{pattern:/(^|[^/])\/(?!\/)(?:\[[^\n\r\]]*\]|\\.|[^/\\\r\n\[])+\/(?=\s*(?:$|[\r\n,.;})]))/,lookbehind:!0,greedy:!0},keyword:/(?:=>|->)|\b(?:case|catch|class|else|exit|finally|if|raise|return|switch|try)\b/,builtin:/@|\bSystem\b/,boolean:/\b(?:false|true)\b/,date:/\b\d{4}-\d{2}-\d{2}\b/,time:/\b\d{2}:\d{2}:\d{2}\b/,datetime:/\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,symbol:/:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,number:/[+-]?\b(?:\d+\.\d+|\d+)\b/,punctuation:/(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,reference:/[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/}}const u=o(i),l=b({__proto__:null,default:u},[i]);export{l as r};
import{g as u}from"./index-9c922025.js";function c(e,o){for(var n=0;n<o.length;n++){const t=o[n];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(t,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i=s;s.displayName="jsstacktrace";s.aliases=[];function s(e){e.languages.jsstacktrace={"error-message":{pattern:/^\S.*/m,alias:"string"},"stack-frame":{pattern:/(^[ \t]+)at[ \t].*/m,lookbehind:!0,inside:{"not-my-code":{pattern:/^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,alias:"comment"},filename:{pattern:/(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,lookbehind:!0,alias:"url"},function:{pattern:/(\bat\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,lookbehind:!0,inside:{punctuation:/\./}},punctuation:/[()]/,keyword:/\b(?:at|new)\b/,alias:{pattern:/\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,alias:"variable"},"line-number":{pattern:/:\d+(?::\d+)?\b/,alias:"number",inside:{punctuation:/:/}}}}}}const l=u(i),m=c({__proto__:null,default:l},[i]);export{m as j};

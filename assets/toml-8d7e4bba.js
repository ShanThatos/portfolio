import{g as u}from"./index-9c922025.js";function l(r,a){for(var n=0;n<a.length;n++){const e=a[n];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in r)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var d=s;s.displayName="toml";s.aliases=[];function s(r){(function(a){var n=/(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source;function e(t){return t.replace(/__/g,function(){return n})}a.languages.toml={comment:{pattern:/#.*/,greedy:!0},table:{pattern:RegExp(e(/(^[\t ]*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source),"m"),lookbehind:!0,greedy:!0,alias:"class-name"},key:{pattern:RegExp(e(/(^[\t ]*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source),"m"),lookbehind:!0,greedy:!0,alias:"property"},string:{pattern:/"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},date:[{pattern:/\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,alias:"number"},{pattern:/\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,alias:"number"}],number:/(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,boolean:/\b(?:false|true)\b/,punctuation:/[.,=[\]{}]/}})(r)}const i=u(d),c=l({__proto__:null,default:i},[d]);export{c as t};

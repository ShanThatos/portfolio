import{g as l}from"./index-79d6545a.js";function u(t,s){for(var n=0;n<s.length;n++){const e=s[n];if(typeof e!="string"&&!Array.isArray(e)){for(const a in e)if(a!=="default"&&!(a in t)){const r=Object.getOwnPropertyDescriptor(e,a);r&&Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:()=>e[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i=o;o.displayName="antlr4";o.aliases=["g4"];function o(t){t.languages.antlr4={comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,string:{pattern:/'(?:\\.|[^\\'\r\n])*'/,greedy:!0},"character-class":{pattern:/\[(?:\\.|[^\\\]\r\n])*\]/,greedy:!0,alias:"regex",inside:{range:{pattern:/([^[]|(?:^|[^\\])(?:\\\\)*\\\[)-(?!\])/,lookbehind:!0,alias:"punctuation"},escape:/\\(?:u(?:[a-fA-F\d]{4}|\{[a-fA-F\d]+\})|[pP]\{[=\w-]+\}|[^\r\nupP])/,punctuation:/[\[\]]/}},action:{pattern:/\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\}/,greedy:!0,inside:{content:{pattern:/(\{)[\s\S]+(?=\})/,lookbehind:!0},punctuation:/[{}]/}},command:{pattern:/(->\s*(?!\s))(?:\s*(?:,\s*)?\b[a-z]\w*(?:\s*\([^()\r\n]*\))?)+(?=\s*;)/i,lookbehind:!0,inside:{function:/\b\w+(?=\s*(?:[,(]|$))/,punctuation:/[,()]/}},annotation:{pattern:/@\w+(?:::\w+)*/,alias:"keyword"},label:{pattern:/#[ \t]*\w+/,alias:"punctuation"},keyword:/\b(?:catch|channels|finally|fragment|grammar|import|lexer|locals|mode|options|parser|returns|throws|tokens)\b/,definition:[{pattern:/\b[a-z]\w*(?=\s*:)/,alias:["rule","class-name"]},{pattern:/\b[A-Z]\w*(?=\s*:)/,alias:["token","constant"]}],constant:/\b[A-Z][A-Z_]*\b/,operator:/\.\.|->|[|~]|[*+?]\??/,punctuation:/[;:()=]/},t.languages.g4=t.languages.antlr4}const c=l(i),g=u({__proto__:null,default:c},[i]);export{g as a};
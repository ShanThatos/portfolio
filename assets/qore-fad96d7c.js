import{g as l}from"./index-9c922025.js";function c(e,i){for(var o=0;o<i.length;o++){const t=i[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s=a;a.displayName="qore";a.aliases=[];function a(e){e.languages.qore=e.languages.extend("clike",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/|#).*)/,lookbehind:!0},string:{pattern:/("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/,greedy:!0},keyword:/\b(?:abstract|any|assert|binary|bool|boolean|break|byte|case|catch|char|class|code|const|continue|data|default|do|double|else|enum|extends|final|finally|float|for|goto|hash|if|implements|import|inherits|instanceof|int|interface|long|my|native|new|nothing|null|object|our|own|private|reference|rethrow|return|short|soft(?:bool|date|float|int|list|number|string)|static|strictfp|string|sub|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/,boolean:/\b(?:false|true)\b/i,function:/\$?\b(?!\d)\w+(?=\()/,number:/\b(?:0b[01]+|0x(?:[\da-f]*\.)?[\da-fp\-]+|(?:\d+(?:\.\d+)?|\.\d+)(?:e\d+)?[df]|(?:\d+(?:\.\d+)?|\.\d+))\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|[!=](?:==?|~)?|>>?=?|<(?:=>?|<=?)?|&[&=]?|\|[|=]?|[*\/%^]=?|[~?])/,lookbehind:!0},variable:/\$(?!\d)\w+\b/})}const d=l(s),b=c({__proto__:null,default:d},[s]);export{b as q};

import{g as o}from"./index-79d6545a.js";import{a as c}from"./java-5c61a7fe.js";function g(e,l){for(var r=0;r<l.length;r++){const t=l[r];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const n=Object.getOwnPropertyDescriptor(t,a);n&&Object.defineProperty(e,a,n.get?n:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var d=c,i=s;s.displayName="scala";s.aliases=[];function s(e){e.register(d),e.languages.scala=e.languages.extend("java",{"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,number:/\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,builtin:/\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,symbol:/'[^\d\s\\]\w*/}),e.languages.insertBefore("scala","triple-quoted-string",{"string-interpolation":{pattern:/\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,greedy:!0,inside:{id:{pattern:/^\w+/,greedy:!0,alias:"function"},escape:{pattern:/\\\$"|\$[$"]/,greedy:!0,alias:"symbol"},interpolation:{pattern:/\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,greedy:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:e.languages.scala}}},string:/[\s\S]+/}}}),delete e.languages.scala["class-name"],delete e.languages.scala.function}const u=o(i),y=g({__proto__:null,default:u},[i]);export{y as s};
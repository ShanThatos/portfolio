import{g}from"./index-9c922025.js";function l(e,t){for(var n=0;n<t.length;n++){const o=t[n];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(o,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i=s;s.displayName="groovy";s.aliases=[];function s(e){e.languages.groovy=e.languages.extend("clike",{string:[{pattern:/("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,greedy:!0},{pattern:/(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],keyword:/\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/}),e.languages.insertBefore("groovy","string",{shebang:{pattern:/#!.+/,alias:"comment"}}),e.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(?:and|cleanup|expect|given|setup|then|when|where):/}),e.languages.insertBefore("groovy","function",{annotation:{pattern:/(^|[^.])@\w+/,lookbehind:!0,alias:"punctuation"}}),e.hooks.add("wrap",function(t){if(t.language==="groovy"&&t.type==="string"){var n=t.content.value[0];if(n!="'"){var o=/([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;n==="$"&&(o=/([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),t.content.value=t.content.value.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),t.content=e.highlight(t.content.value,{expression:{pattern:o,lookbehind:!0,inside:e.languages.groovy}}),t.classes.push(n==="/"?"regex":"gstring")}}})}const c=g(i),p=l({__proto__:null,default:c},[i]);export{p as g};

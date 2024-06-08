import{g as l}from"./index-79d6545a.js";function c(e,i){for(var a=0;a<i.length;a++){const t=i[a];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s=o;o.displayName="pascal";o.aliases=["objectpascal"];function o(e){e.languages.pascal={directive:{pattern:/\{\$[\s\S]*?\}/,greedy:!0,alias:["marco","property"]},comment:{pattern:/\(\*[\s\S]*?\*\)|\{[\s\S]*?\}|\/\/.*/,greedy:!0},string:{pattern:/(?:'(?:''|[^'\r\n])*'(?!')|#[&$%]?[a-f\d]+)+|\^[a-z]/i,greedy:!0},asm:{pattern:/(\basm\b)[\s\S]+?(?=\bend\s*[;[])/i,lookbehind:!0,greedy:!0,inside:null},keyword:[{pattern:/(^|[^&])\b(?:absolute|array|asm|begin|case|const|constructor|destructor|do|downto|else|end|file|for|function|goto|if|implementation|inherited|inline|interface|label|nil|object|of|operator|packed|procedure|program|record|reintroduce|repeat|self|set|string|then|to|type|unit|until|uses|var|while|with)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:dispose|exit|false|new|true)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:class|dispinterface|except|exports|finalization|finally|initialization|inline|library|on|out|packed|property|raise|resourcestring|threadvar|try)\b/i,lookbehind:!0},{pattern:/(^|[^&])\b(?:absolute|abstract|alias|assembler|bitpacked|break|cdecl|continue|cppdecl|cvar|default|deprecated|dynamic|enumerator|experimental|export|external|far|far16|forward|generic|helper|implements|index|interrupt|iochecks|local|message|name|near|nodefault|noreturn|nostackframe|oldfpccall|otherwise|overload|override|pascal|platform|private|protected|public|published|read|register|reintroduce|result|safecall|saveregisters|softfloat|specialize|static|stdcall|stored|strict|unaligned|unimplemented|varargs|virtual|write)\b/i,lookbehind:!0}],number:[/(?:[&%]\d+|\$[a-f\d]+)/i,/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?/i],operator:[/\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=]/,{pattern:/(^|[^&])\b(?:and|as|div|exclude|in|include|is|mod|not|or|shl|shr|xor)\b/,lookbehind:!0}],punctuation:/\(\.|\.\)|[()\[\]:;,.]/},e.languages.pascal.asm.inside=e.languages.extend("pascal",{asm:void 0,keyword:void 0,operator:void 0}),e.languages.objectpascal=e.languages.pascal}const d=l(s),u=c({__proto__:null,default:d},[s]);export{u as p};
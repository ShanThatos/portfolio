import{g as l}from"./index-9c922025.js";function u(e,i){for(var n=0;n<i.length;n++){const t=i[n];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(t,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s=o;o.displayName="wren";o.aliases=[];function o(e){e.languages.wren={comment:[{pattern:/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*))*\*\/)*\*\/)*\*\//,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},"string-literal":null,hashbang:{pattern:/^#!\/.+/,greedy:!0,alias:"comment"},attribute:{pattern:/#!?[ \t\u3000]*\w+/,alias:"keyword"},"class-name":[{pattern:/(\bclass\s+)\w+/,lookbehind:!0},/\b[A-Z][a-z\d_]*\b/],constant:/\b[A-Z][A-Z\d_]*\b/,null:{pattern:/\bnull\b/,alias:"keyword"},keyword:/\b(?:as|break|class|construct|continue|else|for|foreign|if|import|in|is|return|static|super|this|var|while)\b/,boolean:/\b(?:false|true)\b/,number:/\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,function:/\b[a-z_]\w*(?=\s*[({])/i,operator:/<<|>>|[=!<>]=?|&&|\|\||[-+*/%~^&|?:]|\.{2,3}/,punctuation:/[\[\](){}.,;]/},e.languages.wren["string-literal"]={pattern:/(^|[^\\"])"(?:[^\\"%]|\\[\s\S]|%(?!\()|%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\))*"/,lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)%\((?:[^()]|\((?:[^()]|\([^)]*\))*\))*\)/,lookbehind:!0,inside:{expression:{pattern:/^(%\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:e.languages.wren},"interpolation-punctuation":{pattern:/^%\(|\)$/,alias:"punctuation"}}},string:/[\s\S]+/}}}const p=l(s),d=u({__proto__:null,default:p},[s]);export{d as w};

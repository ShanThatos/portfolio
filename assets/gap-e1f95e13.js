import{g as p}from"./index-9c922025.js";function l(e,i){for(var r=0;r<i.length;r++){const t=i[r];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const a=Object.getOwnPropertyDescriptor(t,n);a&&Object.defineProperty(e,n,a.get?a:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var u=o;o.displayName="gap";o.aliases=[];function o(e){e.languages.gap={shell:{pattern:/^gap>[\s\S]*?(?=^gap>|$(?![\s\S]))/m,greedy:!0,inside:{gap:{pattern:/^(gap>).+(?:(?:\r(?:\n|(?!\n))|\n)>.*)*/,lookbehind:!0,inside:null},punctuation:/^gap>/}},comment:{pattern:/#.*/,greedy:!0},string:{pattern:/(^|[^\\'"])(?:'(?:[^\r\n\\']|\\.){1,10}'|"(?:[^\r\n\\"]|\\.)*"(?!")|"""[\s\S]*?""")/,lookbehind:!0,greedy:!0,inside:{continuation:{pattern:/([\r\n])>/,lookbehind:!0,alias:"punctuation"}}},keyword:/\b(?:Assert|Info|IsBound|QUIT|TryNextMethod|Unbind|and|atomic|break|continue|do|elif|else|end|fi|for|function|if|in|local|mod|not|od|or|quit|readonly|readwrite|rec|repeat|return|then|until|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:{pattern:/(^|[^\w.]|\.\.)(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?(?:_[a-z]?)?(?=$|[^\w.]|\.\.)/,lookbehind:!0},continuation:{pattern:/([\r\n])>/,lookbehind:!0,alias:"punctuation"},operator:/->|[-+*/^~=!]|<>|[<>]=?|:=|\.\./,punctuation:/[()[\]{},;.:]/},e.languages.gap.shell.inside.gap.inside=e.languages.gap}const s=p(u),g=l({__proto__:null,default:s},[u]);export{g};

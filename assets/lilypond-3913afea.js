import{g as l}from"./index-79d6545a.js";import{a as d}from"./scheme-41528b0d.js";function p(o,a){for(var e=0;e<a.length;e++){const n=a[e];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in o)){const t=Object.getOwnPropertyDescriptor(n,r);t&&Object.defineProperty(o,r,t.get?t:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var u=d,i=s;s.displayName="lilypond";s.aliases=[];function s(o){o.register(u),function(a){for(var e=/\((?:[^();"#\\]|\\[\s\S]|;.*(?!.)|"(?:[^"\\]|\\.)*"|#(?:\{(?:(?!#\})[\s\S])*#\}|[^{])|<expr>)*\)/.source,n=5,r=0;r<n;r++)e=e.replace(/<expr>/g,function(){return e});e=e.replace(/<expr>/g,/[^\s\S]/.source);var t=a.languages.lilypond={comment:/%(?:(?!\{).*|\{[\s\S]*?%\})/,"embedded-scheme":{pattern:RegExp(/(^|[=\s])#(?:"(?:[^"\\]|\\.)*"|[^\s()"]*(?:[^\s()]|<expr>))/.source.replace(/<expr>/g,function(){return e}),"m"),lookbehind:!0,greedy:!0,inside:{scheme:{pattern:/^(#)[\s\S]+$/,lookbehind:!0,alias:"language-scheme",inside:{"embedded-lilypond":{pattern:/#\{[\s\S]*?#\}/,greedy:!0,inside:{punctuation:/^#\{|#\}$/,lilypond:{pattern:/[\s\S]+/,alias:"language-lilypond",inside:null}}},rest:a.languages.scheme}},punctuation:/#/}},string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0},"class-name":{pattern:/(\\new\s+)[\w-]+/,lookbehind:!0},keyword:{pattern:/\\[a-z][-\w]*/i,inside:{punctuation:/^\\/}},operator:/[=|]|<<|>>/,punctuation:{pattern:/(^|[a-z\d])(?:'+|,+|[_^]?-[_^]?(?:[-+^!>._]|(?=\d))|[_^]\.?|[.!])|[{}()[\]<>^~]|\\[()[\]<>\\!]|--|__/,lookbehind:!0},number:/\b\d+(?:\/\d+)?\b/};t["embedded-scheme"].inside.scheme.inside["embedded-lilypond"].inside.lilypond.inside=t,a.languages.ly=t}(o)}const c=l(i),m=p({__proto__:null,default:c},[i]);export{m as l};
import{g as y}from"./index-9c922025.js";function k(o,t){for(var s=0;s<t.length;s++){const a=t[s];if(typeof a!="string"&&!Array.isArray(a)){for(const e in a)if(e!=="default"&&!(e in o)){const i=Object.getOwnPropertyDescriptor(a,e);i&&Object.defineProperty(o,e,i.get?i:{enumerable:!0,get:()=>a[e]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var m=g;g.displayName="lisp";g.aliases=[];function g(o){(function(t){function s(c){return RegExp(/(\()/.source+"(?:"+c+")"+/(?=[\s\)])/.source)}function a(c){return RegExp(/([\s([])/.source+"(?:"+c+")"+/(?=[\s)])/.source)}var e=/(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,i="&"+e,n="(\\()",f="(?=\\))",b="(?=\\s)",l=/(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,r={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+e+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+e),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+e),alias:"property"},splice:{pattern:RegExp(",@?"+e),alias:["symbol","variable"]},keyword:[{pattern:RegExp(n+"(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)"+b),lookbehind:!0},{pattern:RegExp(n+"(?:append|by|collect|concat|do|finally|for|in|return)"+b),lookbehind:!0}],declare:{pattern:s(/declare/.source),lookbehind:!0,alias:"keyword"},interactive:{pattern:s(/interactive/.source),lookbehind:!0,alias:"keyword"},boolean:{pattern:a(/nil|t/.source),lookbehind:!0},number:{pattern:a(/[-+]?\d+(?:\.\d*)?/.source),lookbehind:!0},defvar:{pattern:RegExp(n+"def(?:const|custom|group|var)\\s+"+e),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(e)}},defun:{pattern:RegExp(n+/(?:cl-)?(?:defmacro|defun\*?)\s+/.source+e+/\s+\(/.source+l+/\)/.source),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+e),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp(n+"lambda\\s+\\(\\s*(?:&?"+e+"(?:\\s+&?"+e+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(n+e),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},u={"lisp-marker":RegExp(i),varform:{pattern:RegExp(/\(/.source+e+/\s+(?=\S)/.source+l+/\)/.source),inside:r},argument:{pattern:RegExp(/(^|[\s(])/.source+e),lookbehind:!0,alias:"variable"},rest:r},p="\\S+(?:\\s+\\S+)*",d={pattern:RegExp(n+l+f),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+p),inside:u},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+p),inside:u},keys:{pattern:RegExp("&key\\s+"+p+"(?:\\s+&allow-other-keys)?"),inside:u},argument:{pattern:RegExp(e),alias:"variable"},punctuation:/[()]/}};r.lambda.inside.arguments=d,r.defun.inside.arguments=t.util.clone(d),r.defun.inside.arguments.inside.sublist=d,t.languages.lisp=r,t.languages.elisp=r,t.languages.emacs=r,t.languages["emacs-lisp"]=r})(o)}const v=y(m),E=k({__proto__:null,default:v},[m]);export{E as l};

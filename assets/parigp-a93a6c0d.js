import{g as f}from"./index-79d6545a.js";function u(e,r){for(var t=0;t<r.length;t++){const o=r[t];if(typeof o!="string"&&!Array.isArray(o)){for(const n in o)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(o,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>o[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a=p;p.displayName="parigp";p.aliases=[];function p(e){e.languages.parigp={comment:/\/\*[\s\S]*?\*\/|\\\\.*/,string:{pattern:/"(?:[^"\\\r\n]|\\.)*"/,greedy:!0},keyword:function(){var r=["breakpoint","break","dbg_down","dbg_err","dbg_up","dbg_x","forcomposite","fordiv","forell","forpart","forprime","forstep","forsubgroup","forvec","for","iferr","if","local","my","next","return","until","while"];return r=r.map(function(t){return t.split("").join(" *")}).join("|"),RegExp("\\b(?:"+r+")\\b")}(),function:/\b\w(?:[\w ]*\w)?(?= *\()/,number:{pattern:/((?:\. *\. *)?)(?:\b\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *(?:[+-] *)?\d(?: *\d)*)?/i,lookbehind:!0},operator:/\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?: *>|(?: *<)?(?: *=)?)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,punctuation:/[\[\]{}().,:;|]/}}const g=f(a),s=u({__proto__:null,default:g},[a]);export{s as p};
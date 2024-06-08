import{g as m}from"./index-9c922025.js";function f(s,o){for(var u=0;u<o.length;u++){const r=o[u];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in s)){const n=Object.getOwnPropertyDescriptor(r,e);n&&Object.defineProperty(s,e,n.get?n:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var p=l;l.displayName="textile";l.aliases=[];function l(s){(function(o){var u=/\([^|()\n]+\)|\[[^\]\n]+\]|\{[^}\n]+\}/.source,r=/\)|\((?![^|()\n]+\))/.source;function e(k,b){return RegExp(k.replace(/<MOD>/g,function(){return"(?:"+u+")"}).replace(/<PAR>/g,function(){return"(?:"+r+")"}),b||"")}var n={css:{pattern:/\{[^{}]+\}/,inside:{rest:o.languages.css}},"class-id":{pattern:/(\()[^()]+(?=\))/,lookbehind:!0,alias:"attr-value"},lang:{pattern:/(\[)[^\[\]]+(?=\])/,lookbehind:!0,alias:"attr-value"},punctuation:/[\\\/]\d+|\S/},c=o.languages.textile=o.languages.extend("markup",{phrase:{pattern:/(^|\r|\n)\S[\s\S]*?(?=$|\r?\n\r?\n|\r\r)/,lookbehind:!0,inside:{"block-tag":{pattern:e(/^[a-z]\w*(?:<MOD>|<PAR>|[<>=])*\./.source),inside:{modifier:{pattern:e(/(^[a-z]\w*)(?:<MOD>|<PAR>|[<>=])+(?=\.)/.source),lookbehind:!0,inside:n},tag:/^[a-z]\w*/,punctuation:/\.$/}},list:{pattern:e(/^[*#]+<MOD>*\s+\S.*/.source,"m"),inside:{modifier:{pattern:e(/(^[*#]+)<MOD>+/.source),lookbehind:!0,inside:n},punctuation:/^[*#]+/}},table:{pattern:e(/^(?:(?:<MOD>|<PAR>|[<>=^~])+\.\s*)?(?:\|(?:(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.|(?!(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+\.))[^|]*)+\|/.source,"m"),inside:{modifier:{pattern:e(/(^|\|(?:\r?\n|\r)?)(?:<MOD>|<PAR>|[<>=^~_]|[\\/]\d+)+(?=\.)/.source),lookbehind:!0,inside:n},punctuation:/\||^\./}},inline:{pattern:e(/(^|[^a-zA-Z\d])(\*\*|__|\?\?|[*_%@+\-^~])<MOD>*.+?\2(?![a-zA-Z\d])/.source),lookbehind:!0,inside:{bold:{pattern:e(/(^(\*\*?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},italic:{pattern:e(/(^(__?)<MOD>*).+?(?=\2)/.source),lookbehind:!0},cite:{pattern:e(/(^\?\?<MOD>*).+?(?=\?\?)/.source),lookbehind:!0,alias:"string"},code:{pattern:e(/(^@<MOD>*).+?(?=@)/.source),lookbehind:!0,alias:"keyword"},inserted:{pattern:e(/(^\+<MOD>*).+?(?=\+)/.source),lookbehind:!0},deleted:{pattern:e(/(^-<MOD>*).+?(?=-)/.source),lookbehind:!0},span:{pattern:e(/(^%<MOD>*).+?(?=%)/.source),lookbehind:!0},modifier:{pattern:e(/(^\*\*|__|\?\?|[*_%@+\-^~])<MOD>+/.source),lookbehind:!0,inside:n},punctuation:/[*_%?@+\-^~]+/}},"link-ref":{pattern:/^\[[^\]]+\]\S+$/m,inside:{string:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0},url:{pattern:/(^\])\S+$/,lookbehind:!0},punctuation:/[\[\]]/}},link:{pattern:e(/"<MOD>*[^"]+":.+?(?=[^\w/]?(?:\s|$))/.source),inside:{text:{pattern:e(/(^"<MOD>*)[^"]+(?=")/.source),lookbehind:!0},modifier:{pattern:e(/(^")<MOD>+/.source),lookbehind:!0,inside:n},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[":]/}},image:{pattern:e(/!(?:<MOD>|<PAR>|[<>=])*(?![<>=])[^!\s()]+(?:\([^)]+\))?!(?::.+?(?=[^\w/]?(?:\s|$)))?/.source),inside:{source:{pattern:e(/(^!(?:<MOD>|<PAR>|[<>=])*)(?![<>=])[^!\s()]+(?:\([^)]+\))?(?=!)/.source),lookbehind:!0,alias:"url"},modifier:{pattern:e(/(^!)(?:<MOD>|<PAR>|[<>=])+/.source),lookbehind:!0,inside:n},url:{pattern:/(:).+/,lookbehind:!0},punctuation:/[!:]/}},footnote:{pattern:/\b\[\d+\]/,alias:"comment",inside:{punctuation:/\[|\]/}},acronym:{pattern:/\b[A-Z\d]+\([^)]+\)/,inside:{comment:{pattern:/(\()[^()]+(?=\))/,lookbehind:!0},punctuation:/[()]/}},mark:{pattern:/\b\((?:C|R|TM)\)/,alias:"comment",inside:{punctuation:/[()]/}}}}}),i=c.phrase.inside,t={inline:i.inline,link:i.link,image:i.image,footnote:i.footnote,acronym:i.acronym,mark:i.mark};c.tag.pattern=/<\/?(?!\d)[a-z0-9]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;var d=i.inline.inside;d.bold.inside=t,d.italic.inside=t,d.inserted.inside=t,d.deleted.inside=t,d.span.inside=t;var a=i.table.inside;a.inline=t.inline,a.link=t.link,a.image=t.image,a.footnote=t.footnote,a.acronym=t.acronym,a.mark=t.mark})(s)}const g=m(p),O=f({__proto__:null,default:g},[p]);export{O as t};

import{g as i}from"./index-79d6545a.js";function s(o,r){for(var t=0;t<r.length;t++){const e=r[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in o)){const a=Object.getOwnPropertyDescriptor(e,n);a&&Object.defineProperty(o,n,a.get?a:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var u=d;d.displayName="kumir";d.aliases=["kum"];function d(o){(function(r){var t=/\s\x00-\x1f\x22-\x2f\x3a-\x3f\x5b-\x5e\x60\x7b-\x7e/.source;function e(n,a){return RegExp(n.replace(/<nonId>/g,t),a)}r.languages.kumir={comment:{pattern:/\|.*/},prolog:{pattern:/#.*/,greedy:!0},string:{pattern:/"[^\n\r"]*"|'[^\n\r']*'/,greedy:!0},boolean:{pattern:e(/(^|[<nonId>])(?:да|нет)(?=[<nonId>]|$)/.source),lookbehind:!0},"operator-word":{pattern:e(/(^|[<nonId>])(?:и|или|не)(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"keyword"},"system-variable":{pattern:e(/(^|[<nonId>])знач(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"keyword"},type:[{pattern:e(/(^|[<nonId>])(?:вещ|лит|лог|сим|цел)(?:\x20*таб)?(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"builtin"},{pattern:e(/(^|[<nonId>])(?:компл|сканкод|файл|цвет)(?=[<nonId>]|$)/.source),lookbehind:!0,alias:"important"}],keyword:{pattern:e(/(^|[<nonId>])(?:алг|арг(?:\x20*рез)?|ввод|ВКЛЮЧИТЬ|вс[её]|выбор|вывод|выход|дано|для|до|дс|если|иначе|исп|использовать|кон(?:(?:\x20+|_)исп)?|кц(?:(?:\x20+|_)при)?|надо|нач|нс|нц|от|пауза|пока|при|раза?|рез|стоп|таб|то|утв|шаг)(?=[<nonId>]|$)/.source),lookbehind:!0},name:{pattern:e(/(^|[<nonId>])[^\d<nonId>][^<nonId>]*(?:\x20+[^<nonId>]+)*(?=[<nonId>]|$)/.source),lookbehind:!0},number:{pattern:e(/(^|[<nonId>])(?:\B\$[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)(?=[<nonId>]|$)/.source,"i"),lookbehind:!0},punctuation:/:=|[(),:;\[\]]/,"operator-char":{pattern:/\*\*?|<[=>]?|>=?|[-+/=]/,alias:"operator"}},r.languages.kum=r.languages.kumir})(o)}const l=i(u),c=s({__proto__:null,default:l},[u]);export{c as k};
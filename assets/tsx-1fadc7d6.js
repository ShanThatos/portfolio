import{g as p}from"./index-9c922025.js";import{a as l}from"./jsx-16ac386c.js";import{a as c}from"./typescript-4c426773.js";function u(r,e){for(var a=0;a<e.length;a++){const t=e[a];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in r)){const s=Object.getOwnPropertyDescriptor(t,o);s&&Object.defineProperty(r,o,s.get?s:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var f=l,i=c,g=n;n.displayName="tsx";n.aliases=[];function n(r){r.register(f),r.register(i),function(e){var a=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",a),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var t=e.languages.tsx.tag;t.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+t.pattern.source+")",t.pattern.flags),t.lookbehind=!0}(r)}const x=p(g),b=u({__proto__:null,default:x},[g]);export{b as t};

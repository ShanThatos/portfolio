import{g as b}from"./index-9c922025.js";function f(i,n){for(var o=0;o<n.length;o++){const e=n[o];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in i)){const r=Object.getOwnPropertyDescriptor(e,t);r&&Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var d=c;c.displayName="robotframework";c.aliases=[];function c(i){(function(n){var o={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},e={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function t(m,l){var a={};a["section-header"]={pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"};for(var p in l)a[p]=l[p];return a.tag={pattern:/([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},a.variable=e,a.comment=o,{pattern:RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g,function(){return m}),"im"),alias:"section",inside:a}}var r={pattern:/(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},s={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:e}},u={pattern:/([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:e}};n.languages.robotframework={settings:t("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:t("Variables"),"test-cases":t("Test Cases",{"test-name":s,documentation:r,property:u}),keywords:t("Keywords",{"keyword-name":s,documentation:r,property:u}),tasks:t("Tasks",{"task-name":s,documentation:r,property:u}),comment:o},n.languages.robot=n.languages.robotframework})(i)}const g=b(d),y=f({__proto__:null,default:g},[d]);export{y as r};

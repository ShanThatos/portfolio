import{j as s}from"./Markdown-957a1ad0.js";import g from"./markup-templating-d40a3c8c.js";import"./index-00606307.js";import"./date-display-75f041d5.js";import"./markup-4370da48.js";n.displayName="ejs";n.aliases=["eta"];function n(e){e.register(s),e.register(g),function(a){a.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:a.languages.javascript}},a.hooks.add("before-tokenize",function(t){var o=/<%(?!%)[\s\S]+?%>/g;a.languages["markup-templating"].buildPlaceholders(t,"ejs",o)}),a.hooks.add("after-tokenize",function(t){a.languages["markup-templating"].tokenizePlaceholders(t,"ejs")}),a.languages.eta=a.languages.ejs}(e)}export{n as default};

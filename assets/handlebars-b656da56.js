import s from"./markup-templating-d40a3c8c.js";import"./markup-4370da48.js";t.displayName="handlebars";t.aliases=["hbs","mustache"];function t(n){n.register(s),function(a){a.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:false|true)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},a.hooks.add("before-tokenize",function(e){var l=/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;a.languages["markup-templating"].buildPlaceholders(e,"handlebars",l)}),a.hooks.add("after-tokenize",function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"handlebars")}),a.languages.hbs=a.languages.handlebars,a.languages.mustache=a.languages.handlebars}(n)}export{t as default};

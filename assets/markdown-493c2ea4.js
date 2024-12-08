import _ from"./markup-4370da48.js";f.displayName="markdown";f.aliases=["md"];function f(h){h.register(_),function(e){var k=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function d(n){return n=n.replace(/<inner>/g,function(){return k}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+n+")")}var p=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,l=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return p}),g=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+l+g+"(?:"+l+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+l+g+")(?:"+l+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(p),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+l+")"+g+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+l+"$"),inside:{"table-header":{pattern:RegExp(p),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:d(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:d(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:d(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:d(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(n){["url","bold","italic","strike","code-snippet"].forEach(function(t){n!==t&&(e.languages.markdown[n].inside.content.inside[t]=e.languages.markdown[t])})}),e.hooks.add("after-tokenize",function(n){if(n.language!=="markdown"&&n.language!=="md")return;function t(r){if(!(!r||typeof r=="string"))for(var s=0,c=r.length;s<c;s++){var i=r[s];if(i.type!=="code"){t(i.content);continue}var o=i.content[1],a=i.content[3];if(o&&a&&o.type==="code-language"&&a.type==="code-block"&&typeof o.content=="string"){var u=o.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");u=(/[a-z][\w-]*/i.exec(u)||[""])[0].toLowerCase();var b="language-"+u;a.alias?typeof a.alias=="string"?a.alias=[a.alias,b]:a.alias.push(b):a.alias=[b]}}}t(n.tokens)}),e.hooks.add("wrap",function(n){if(n.type==="code-block"){for(var t="",r=0,s=n.classes.length;r<s;r++){var c=n.classes[r],i=/language-(.+)/.exec(c);if(i){t=i[1];break}}var o=e.languages[t];if(o)n.content=e.highlight(n.content.value,o,t);else if(t&&t!=="none"&&e.plugins.autoloader){var a="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);n.attributes.id=a,e.plugins.autoloader.loadLanguages(t,function(){var u=document.getElementById(a);u&&(u.innerHTML=e.highlight(u.textContent,e.languages[t],t))})}}}),RegExp(e.languages.markup.tag.pattern.source,"gi"),e.languages.md=e.languages.markdown}(h)}export{f as default};
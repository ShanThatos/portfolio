import{c as o}from"./BlogEntryPage-f381ca72.js";import i from"./markup-templating-d40a3c8c.js";import"./index-d77c3d41.js";import"./blogs-a181b6cc.js";import"./date-display-9252cee1.js";import"./markup-4370da48.js";n.displayName="tt2";n.aliases=[];function n(e){e.register(o),e.register(i),function(t){t.languages.tt2=t.languages.extend("clike",{comment:/#.*|\[%#[\s\S]*?%\]/,keyword:/\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,punctuation:/[[\]{},()]/}),t.languages.insertBefore("tt2","number",{operator:/=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,variable:{pattern:/\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i}}),t.languages.insertBefore("tt2","keyword",{delimiter:{pattern:/^(?:\[%|%%)-?|-?%\]$/,alias:"punctuation"}}),t.languages.insertBefore("tt2","string",{"single-quoted-string":{pattern:/'[^\\']*(?:\\[\s\S][^\\']*)*'/,greedy:!0,alias:"string"},"double-quoted-string":{pattern:/"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,greedy:!0,alias:"string",inside:{variable:{pattern:/\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i}}}}),delete t.languages.tt2.string,t.hooks.add("before-tokenize",function(a){var r=/\[%[\s\S]+?%\]/g;t.languages["markup-templating"].buildPlaceholders(a,"tt2",r)}),t.hooks.add("after-tokenize",function(a){t.languages["markup-templating"].tokenizePlaceholders(a,"tt2")})}(e)}export{n as default};

import o from"./markup-templating-d40a3c8c.js";import i from"./ruby-c63d8cc8.js";import"./markup-4370da48.js";import"./BlogEntryPage-688bd6f8.js";import"./index-d92c1686.js";import"./blogs-a181b6cc.js";import"./date-display-ee89db9c.js";r.displayName="erb";r.aliases=[];function r(a){a.register(o),a.register(i),function(e){e.languages.erb={delimiter:{pattern:/^(\s*)<%=?|%>(?=\s*$)/,lookbehind:!0,alias:"punctuation"},ruby:{pattern:/\s*\S[\s\S]*/,alias:"language-ruby",inside:e.languages.ruby}},e.hooks.add("before-tokenize",function(n){var t=/<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s(?:[^\r\n]|[\r\n](?!=end))*[\r\n]=end)+?%>/g;e.languages["markup-templating"].buildPlaceholders(n,"erb",t)}),e.hooks.add("after-tokenize",function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"erb")})}(a)}export{r as default};
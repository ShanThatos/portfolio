import{c as r}from"./BlogEntryPage-f381ca72.js";import"./index-d77c3d41.js";import"./blogs-a181b6cc.js";import"./date-display-9252cee1.js";a.displayName="birb";a.aliases=[];function a(e){e.register(r),e.languages.birb=e.languages.extend("clike",{string:{pattern:/r?("|')(?:\\.|(?!\1)[^\\])*\1/,greedy:!0},"class-name":[/\b[A-Z](?:[\d_]*[a-zA-Z]\w*)?\b/,/\b(?:[A-Z]\w*|(?!(?:var|void)\b)[a-z]\w*)(?=\s+\w+\s*[;,=()])/],keyword:/\b(?:assert|break|case|class|const|default|else|enum|final|follows|for|grab|if|nest|new|next|noSeeb|return|static|switch|throw|var|void|while)\b/,operator:/\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?|:/,variable:/\b[a-z_]\w*\b/}),e.languages.insertBefore("birb","function",{metadata:{pattern:/<\w+>/,greedy:!0,alias:"symbol"}})}export{a as default};

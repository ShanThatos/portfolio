import{c as a}from"./BlogEntryPage-f381ca72.js";import"./index-d77c3d41.js";import"./blogs-a181b6cc.js";import"./date-display-9252cee1.js";t.displayName="processing";t.aliases=[];function t(e){e.register(a),e.languages.processing=e.languages.extend("clike",{keyword:/\b(?:break|case|catch|class|continue|default|else|extends|final|for|if|implements|import|new|null|private|public|return|static|super|switch|this|try|void|while)\b/,function:/\b\w+(?=\s*\()/,operator:/<[<=]?|>[>=]?|&&?|\|\|?|[%?]|[!=+\-*\/]=?/}),e.languages.insertBefore("processing","number",{constant:/\b(?!XML\b)[A-Z][A-Z\d_]+\b/,type:{pattern:/\b(?:boolean|byte|char|color|double|float|int|[A-Z]\w*)\b/,alias:"class-name"}})}export{t as default};

import{g as c}from"./index-79d6545a.js";function p(e,l){for(var r=0;r<l.length;r++){const t=l[r];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in e)){const n=Object.getOwnPropertyDescriptor(t,o);n&&Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s=a;a.displayName="peoplecode";a.aliases=["pcode"];function a(e){e.languages.peoplecode={comment:RegExp([/\/\*[\s\S]*?\*\//.source,/\bREM[^;]*;/.source,/<\*(?:[^<*]|\*(?!>)|<(?!\*)|<\*(?:(?!\*>)[\s\S])*\*>)*\*>/.source,/\/\+[\s\S]*?\+\//.source].join("|")),string:{pattern:/'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,greedy:!0},variable:/%\w+/,"function-definition":{pattern:/((?:^|[^\w-])(?:function|method)\s+)\w+/i,lookbehind:!0,alias:"function"},"class-name":{pattern:/((?:^|[^-\w])(?:as|catch|class|component|create|extends|global|implements|instance|local|of|property|returns)\s+)\w+(?::\w+)*/i,lookbehind:!0,inside:{punctuation:/:/}},keyword:/\b(?:abstract|alias|as|catch|class|component|constant|create|declare|else|end-(?:class|evaluate|for|function|get|if|method|set|try|while)|evaluate|extends|for|function|get|global|if|implements|import|instance|library|local|method|null|of|out|peopleCode|private|program|property|protected|readonly|ref|repeat|returns?|set|step|then|throw|to|try|until|value|when(?:-other)?|while)\b/i,"operator-keyword":{pattern:/\b(?:and|not|or)\b/i,alias:"operator"},function:/[_a-z]\w*(?=\s*\()/i,boolean:/\b(?:false|true)\b/i,number:/\b\d+(?:\.\d+)?\b/,operator:/<>|[<>]=?|!=|\*\*|[-+*/|=@]/,punctuation:/[:.;,()[\]]/},e.languages.pcode=e.languages.peoplecode}const i=c(s),d=p({__proto__:null,default:i},[s]);export{d as p};
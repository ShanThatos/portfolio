import{g as y}from"./index-9c922025.js";function l(e,s){for(var r=0;r<s.length;r++){const t=s[r];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const n=Object.getOwnPropertyDescriptor(t,a);n&&Object.defineProperty(e,a,n.get?n:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i=o;o.displayName="keyman";o.aliases=[];function o(e){e.languages.keyman={comment:{pattern:/\bc .*/i,greedy:!0},string:{pattern:/"[^"\r\n]*"|'[^'\r\n]*'/,greedy:!0},"virtual-key":{pattern:/\[\s*(?:(?:ALT|CAPS|CTRL|LALT|LCTRL|NCAPS|RALT|RCTRL|SHIFT)\s+)*(?:[TKU]_[\w?]+|[A-E]\d\d?|"[^"\r\n]*"|'[^'\r\n]*')\s*\]/i,greedy:!0,alias:"function"},"header-keyword":{pattern:/&\w+/,alias:"bold"},"header-statement":{pattern:/\b(?:bitmap|bitmaps|caps always off|caps on only|copyright|hotkey|language|layout|message|name|shift frees caps|version)\b/i,alias:"bold"},"rule-keyword":{pattern:/\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|reset|return|save|set|store|use)\b/i,alias:"keyword"},"structural-keyword":{pattern:/\b(?:ansi|begin|group|match|nomatch|unicode|using keys)\b/i,alias:"keyword"},"compile-target":{pattern:/\$(?:keyman|keymanonly|keymanweb|kmfl|weaver):/i,alias:"property"},number:/\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,operator:/[+>\\$]|\.\./,punctuation:/[()=,]/}}const p=y(i),d=l({__proto__:null,default:p},[i]);export{d as k};

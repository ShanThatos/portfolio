e.displayName="mata";e.aliases=[];function e(t){(function(a){var r=/\b(?:(?:col|row)?vector|matrix|scalar)\b/.source,n=/\bvoid\b|<org>|\b(?:complex|numeric|pointer(?:\s*\([^()]*\))?|real|string|(?:class|struct)\s+\w+|transmorphic)(?:\s*<org>)?/.source.replace(/<org>/g,r);a.languages.mata={comment:{pattern:/\/\/.*|\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\//,greedy:!0},string:{pattern:/"[^"\r\n]*"|[‘`']".*?"[’`']/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|struct)\s+)\w+(?=\s*(?:\{|\bextends\b))/,lookbehind:!0},type:{pattern:RegExp(n),alias:"class-name",inside:{punctuation:/[()]/,keyword:/\b(?:class|function|struct|void)\b/}},keyword:/\b(?:break|class|continue|do|else|end|extends|external|final|for|function|goto|if|pragma|private|protected|public|return|static|struct|unset|unused|version|virtual|while)\b/,constant:/\bNULL\b/,number:{pattern:/(^|[^\w.])(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|\d[a-f0-9]*(?:\.[a-f0-9]+)?x[+-]?\d+)i?(?![\w.])/i,lookbehind:!0},missing:{pattern:/(^|[^\w.])(?:\.[a-z]?)(?![\w.])/,lookbehind:!0,alias:"symbol"},function:/\b[a-z_]\w*(?=\s*\()/i,operator:/\.\.|\+\+|--|&&|\|\||:?(?:[!=<>]=|[+\-*/^<>&|:])|[!?=\\#’`']/,punctuation:/[()[\]{},;.]/}})(t)}export{e as default};

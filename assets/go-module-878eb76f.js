o.displayName="go-module";o.aliases=["go-mod"];function o(e){e.languages["go-mod"]=e.languages["go-module"]={comment:{pattern:/\/\/.*/,greedy:!0},version:{pattern:/(^|[\s()[\],])v\d+\.\d+\.\d+(?:[+-][-+.\w]*)?(?![^\s()[\],])/,lookbehind:!0,alias:"number"},"go-version":{pattern:/((?:^|\s)go\s+)\d+(?:\.\d+){1,2}/,lookbehind:!0,alias:"number"},keyword:{pattern:/^([ \t]*)(?:exclude|go|module|replace|require|retract)\b/m,lookbehind:!0},operator:/=>/,punctuation:/[()[\],]/}}export{o as default};
import{g as s}from"./index-9c922025.js";import{a as l}from"./c-f95e8507.js";function g(e,c){for(var r=0;r<c.length;r++){const t=c[r];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(t,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var u=l,i=n;n.displayName="objectivec";n.aliases=["objc"];function n(e){e.register(u),e.languages.objectivec=e.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete e.languages.objectivec["class-name"],e.languages.objc=e.languages.objectivec}const f=s(i),d=g({__proto__:null,default:f},[i]);export{d as o};

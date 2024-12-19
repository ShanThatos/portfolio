import{r as o,j as e}from"./index-b4ed7cd7.js";const w=[{title:"Hello World",code:'print("Hello World!")'},{title:"Fibonacci",code:`
import "io/input" # https://github.com/ShanThatos/compile-pythonic-to-bf/blob/main/lib/io/input.bfun
println("Hello fibonacci!")
stop = readint()
a = 1
b = 1
while (a < stop) {
    print(a, "")
    c = a + b
    a = b
    b = c
}
    `},{title:"Lists",code:`
import "structs/range"
import "structs/list"

y = list("nested lists", 5, 4, 3, 2, 1)
x = list("strings yay", y, 1, 1)

for (i in range(30)) {
    x.append(x[-1] + x[-2])
    println(x)
}

for (el in x) {
    println(el)
}
    `},{title:"Primes",code:`
import "structs/list"

primes = list(2)

func is_prime(n) {
    # i would have used a for loop here but 
    # there are a bunch of memory leaks in the heap lol oops
    # for loops create an iterator object, but it 
    # doesn't get freed anywhere hehe

    # could have been:
    # for (p in primes) { ... }

    i = 0
    while (i < len(primes)) {
        p = primes[i]
        if (p * p > n) 
            return 1
        if (n % p == 0) 
            return 0
        i += 1
    }
    println("ruh roh")
    end # inline assembly :D
}

i = 3
while (i < 500) {
    if (is_prime(i)) 
        primes.append(i)
    i += 2
}
println(primes)
    `}],v=()=>{const[x,p]=o.useState(!1),[m,u]=o.useState(localStorage.getItem("c2bf-code")??""),h=o.useRef(null),[f,c]=o.useState(""),[n,l]=o.useState(""),[r,d]=o.useState(""),b=o.useCallback(a=>{u(a),l(""),d(""),c(""),localStorage.setItem("c2bf-code",a)},[u]);o.useEffect(()=>{fetch("https://c2bf-server.fly.dev/")},[]);const y=o.useCallback(()=>{var i;p(!0),c(""),l(""),d("");const a=((i=h.current)==null?void 0:i.value)??"";fetch("https://c2bf-server.fly.dev/compile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:a})}).then(async t=>{if(t.ok){const s=await t.json();l(s.bf_code),d(s.c_code)}else if(t.status===400){const s=await t.json();c(s.detail)}}).catch(t=>{alert(`Something went wrong, please try again later. ${t}`)}).finally(()=>{p(!1)})},[]),g=o.useCallback(()=>{const a=new Blob([n],{type:"text/plain"}),i=URL.createObjectURL(a),t=document.createElement("a");t.href=i,t.download="code.bf",t.click(),URL.revokeObjectURL(i)},[n]),j=o.useCallback(()=>{const a=new Blob([r],{type:"text/plain"}),i=URL.createObjectURL(a),t=document.createElement("a");t.href=i,t.download="code.c",t.click(),URL.revokeObjectURL(i)},[r]);return e.jsxs("div",{className:"p-10",children:[e.jsxs("div",{className:"flex flex-row justify-center items-center gap-2",children:[e.jsx("a",{className:"underline text-[#49a6e4]",href:"https://github.com/ShanThatos/compile-pythonic-to-bf/tree/main/lib",children:"Standard Library"}),e.jsx("a",{className:"underline text-[#49a6e4]",href:"https://github.com/ShanThatos/compile-pythonic-to-bf/tree/main/examples",children:"Example Code"})]}),e.jsx("div",{className:"mt-2 flex flex-row justify-center items-center gap-2",children:w.map(({title:a,code:i})=>e.jsx("button",{className:"bg-[#2c75b5] px-2 py-1 rounded hover:opacity-80 active:opacity-70",onClick:()=>b(i.trim()),children:a},a))}),e.jsx("div",{className:"mt-3 flex flex-row justify-center items-center",children:e.jsx("textarea",{ref:h,rows:20,className:"flex-1 rounded bg-[#222222] text-white font-[Consolas] p-2",spellCheck:!1,value:m,onChange:a=>b(a.target.value),children:m})}),e.jsx("div",{className:"mt-8 flex flex-row justify-center items-center",children:e.jsx("button",{className:"bg-primary-800 px-2 py-1 rounded hover:opacity-80 active:opacity-70 disabled:opacity-50",disabled:x,onClick:y,children:"Compile to Brainfuck"})}),f&&e.jsx("div",{className:"mt-2 max-w-md mx-auto text-[#ff4e4e] text-center",children:f}),e.jsxs("div",{className:"mt-5 flex flex-row justify-center items-center gap-2",children:[e.jsx("button",{onClick:g,disabled:n==="",className:"bg-white text-black rounded px-2 py-1 disabled:opacity-50 hover:opacity-80 active:opacity-70",children:"Download Brainfuck Code"}),e.jsx("button",{onClick:j,disabled:r==="",className:"bg-white text-black rounded px-2 py-1 disabled:opacity-50 hover:opacity-80 active:opacity-70",children:"Download Equivalent C Code"})]}),e.jsx("div",{className:"mt-4 max-w-md mx-auto text-center",children:e.jsx("p",{children:"The brainfuck code will probably be impossible to run on a standard intepreter. Thus, the C code was created using an optimizing brainfuck to C compiler and provided to you. The operations and processing will be exactly the same as the original brainfuck code, but the C code will run much faster."})})]})};export{v as default};

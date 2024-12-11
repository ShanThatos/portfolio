import { useCallback, useEffect, useRef, useState } from "react"

const CODE_EXAMPLES = [
  {
    "title": "Hello World",
    "code": "print(\"Hello World!\")"
  },
  {
    "title": "Fibonacci",
    "code": `
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
    `
  },
  {
    "title": "Lists",
    "code": `
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
    `
  },
  {
    "title": "Primes",
    "code": `
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
    `
  }
] as const


const C2BFDemoPage = () => {
  const [compiling, setCompiling] = useState<boolean>(false)
  const [code, _setCode] = useState<string>(localStorage.getItem("c2bf-code") ?? "")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const [error, setError] = useState<string>("")
  const [resultBf, setResultBf] = useState<string>("")
  const [resultC, setResultC] = useState<string>("")

  const setCode = useCallback((newCode: string) => {
    _setCode(newCode)
    setResultBf("")
    setResultC("")
    setError("")
    localStorage.setItem("c2bf-code", newCode)
  }, [_setCode])

  useEffect(() => {
    fetch("https://c2bf-server.fly.dev/")
  }, [])

  const compileToBrainfuck = useCallback(() => {
    setCompiling(true)
    setError("")
    setResultBf("")
    setResultC("")
    const currentCode = textareaRef.current?.value ?? ""
    fetch("https://c2bf-server.fly.dev/compile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code: currentCode })
    }).then(async res => {
      if (res.ok) {
        const data = await res.json()
        setResultBf(data.bf_code)
        setResultC(data.c_code)
      } else if (res.status === 400) {
        const data = await res.json()
        setError(data.detail)
      }
    }).catch(err => {
      alert(`Something went wrong, please try again later. ${err}`)
    }).finally(() => {
      setCompiling(false)
    })
  }, [])

  const downloadBfCode = useCallback(() => {
    const blob = new Blob([resultBf], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "code.bf"
    a.click()
    URL.revokeObjectURL(url)
  }, [resultBf])

  const downloadCCode = useCallback(() => {
    const blob = new Blob([resultC], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "code.c"
    a.click()
    URL.revokeObjectURL(url)
  }, [resultC])

  return (
    <div className="p-10">
      <div className="flex flex-row justify-center items-center gap-2">
        <a className="underline text-[#49a6e4]" href="https://github.com/ShanThatos/compile-pythonic-to-bf/tree/main/lib">Standard Library</a>
        <a className="underline text-[#49a6e4]" href="https://github.com/ShanThatos/compile-pythonic-to-bf/tree/main/examples">Example Code</a>
      </div>
      <div className="mt-2 flex flex-row justify-center items-center gap-2">
        {CODE_EXAMPLES.map(({ title, code }) => (
          <button
            key={title}
            className="bg-[#2c75b5] px-2 py-1 rounded hover:opacity-80 active:opacity-70"
            onClick={() => setCode(code.trim())}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-row justify-center items-center">
        <textarea
          ref={textareaRef}
          rows={20}
          className="flex-1 rounded bg-[#222222] text-white font-[Consolas] p-2"
          spellCheck={false}
          value={code}
          onChange={e => setCode(e.target.value)}
        >{code}</textarea>
      </div>
      <div className="mt-8 flex flex-row justify-center items-center">
        <button
          className="bg-primary-800 px-2 py-1 rounded hover:opacity-80 active:opacity-70 disabled:opacity-50"
          disabled={compiling}
          onClick={compileToBrainfuck}
        >
          Compile to Brainfuck
        </button>
      </div>
      {error && <div className="mt-2 max-w-md mx-auto text-[#ff4e4e] text-center">{error}</div>}
      <div className="mt-5 flex flex-row justify-center items-center gap-2">
        <button onClick={downloadBfCode} disabled={resultBf === ""}
          className="bg-white text-black rounded px-2 py-1 disabled:opacity-50 hover:opacity-80 active:opacity-70"
        >Download Brainfuck Code</button>
        <button onClick={downloadCCode} disabled={resultC === ""}
          className="bg-white text-black rounded px-2 py-1 disabled:opacity-50 hover:opacity-80 active:opacity-70"
        >Download Equivalent C Code</button>
      </div>
      <div className="mt-4 max-w-md mx-auto text-center">
        <p>
          The brainfuck code will probably be impossible to run on a standard intepreter.
          Thus, the C code was created using an optimizing brainfuck to C compiler and provided to you.
          The operations and processing will be exactly the same as the original brainfuck code, but
          the C code will run much faster.
        </p>
      </div>
    </div >
  )
}

export default C2BFDemoPage
/* eslint-disable react/prop-types */
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism-async-light"
import syntaxStyle from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import { ImageZoom } from "./ImageZoom"

import langAsm from "react-syntax-highlighter/dist/esm/languages/prism/asm6502"
import langBrainfuck from "react-syntax-highlighter/dist/esm/languages/prism/brainfuck"
import langJavascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript"
import langPython from "react-syntax-highlighter/dist/esm/languages/prism/python"
import { Link } from "react-router-dom"


SyntaxHighlighter.registerLanguage("asm6502", langAsm)
SyntaxHighlighter.registerLanguage("brainfuck", langBrainfuck)
SyntaxHighlighter.registerLanguage("javascript", langJavascript)
SyntaxHighlighter.registerLanguage("python", langPython)


const reactMarkdownClasses = `
prose prose-invert 
mx-auto 
prose-pre:p-0 
prose-a:text-secondary-500 
prose-code:before:hidden prose-code:after:hidden
prose-h1:font-normal
prose-h2:font-normal
prose-h3:font-normal
prose-h4:font-normal
prose-h5:font-normal
prose-h6:font-normal
`

const Markdown = ({ content, srcPath }: { content: string, srcPath: string }) => {
  return (
    <ReactMarkdown
      className={reactMarkdownClasses}
      rehypePlugins={[rehypeRaw]}
      components={{
        a: (props) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { ref, node, href, target, ...rest } = props
          // return <a href={`/_/${href}`} {...rest} />
          if (href === undefined) {
            return <span>Anchor elements must have an href D:</span>
          }
          const newTarget = target === undefined && href.startsWith("http") ? "_blank" : target
          return <Link to={href} target={newTarget} {...rest} />
        },
        img: (props) => {
          const { className, src, ...rest } = props
          return (
            <span className="block px-0 md:px-5">
              <ImageZoom
                loading="lazy"
                src={`${srcPath}/${src}`}
                className={`${className} w-full rounded-2xl border-8 border-black my-4`}
                options={{ margin: 20 }}
                {...rest}
              />
            </span>
          )
        },
        code: (props) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { children, className, node, ...rest } = props as any
          const match = /language-(\w+)/.exec(className || "")
          return match ? (
            <SyntaxHighlighter
              {...rest}
              language={match[1]}
              style={syntaxStyle}
              customStyle={{ margin: "5px" }}
              wrapLongLines
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        }
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default Markdown
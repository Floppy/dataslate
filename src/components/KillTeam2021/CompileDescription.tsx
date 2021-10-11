import React from 'react'
import ReactMarkdown from 'react-markdown'
import { HighlightedText } from './HighlightedText'
import ReactDOMServer from 'react-dom/server'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

interface Props {
  children: string
}

export function CompileDescription (props: Props) {
  const descriptionWithHighlightedSymbols = <HighlightedText>{props.children}</HighlightedText>

  return (
    <ReactMarkdown
      skipHtml
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        table: ({ node, ...props }) => <table className='table table-sm table-striped table-bordered' {...props} />
      }}
    >
      {ReactDOMServer.renderToStaticMarkup(descriptionWithHighlightedSymbols)}
    </ReactMarkdown>
  )
}

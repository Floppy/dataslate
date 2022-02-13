import reactStringReplace from 'react-string-replace'

interface Props {
  children: React.ReactNode
}

export function HighlightedText (props: Props): JSX.Element {
  let output: React.ReactNodeArray = [props.children]
  output = reactStringReplace(output, '▲', () => <span className='triangle'>▲</span>)
  output = reactStringReplace(output, '●', () => <span className='circle'>●</span>)
  output = reactStringReplace(output, '○', () => <span className='circle'>●</span>)
  output = reactStringReplace(output, '⬤', () => <span className='circle'>●</span>)
  output = reactStringReplace(output, '⬛', () => <span className='square'>■</span>)
  output = reactStringReplace(output, '■', () => <span className='square'>■</span>)
  output = reactStringReplace(output, '⬟', () => <span className='pentagon'>⬟</span>)
  output = output.filter((el: React.ReactNode) => (el !== ''))

  return <>{output}</>
}

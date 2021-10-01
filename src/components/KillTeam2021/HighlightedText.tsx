import React from 'react';
import reactStringReplace from 'react-string-replace'

type Props = {
  children: React.ReactNode,
};

export function HighlightedText(props: Props) {
  let output = [props.children];
  output = reactStringReplace(output, '▲', () => <span className="triangle">▲</span>)
  output = reactStringReplace(output, '●', () => <span className="circle">●</span>)
  output = reactStringReplace(output, '○', () => <span className="circle">●</span>)
  output = reactStringReplace(output, '⬤', () => <span className="circle">●</span>)
  output = reactStringReplace(output, '⬛', () => <span className="square">■</span>)
  output = reactStringReplace(output, '■', () => <span className="square">■</span>)
  output = reactStringReplace(output, '⬟', () => <span className="pentagon">⬟</span>)
  output = output.filter(el => el !== '')

  return <>{output}</>
}

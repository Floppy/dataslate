import React from 'react';
import reactStringReplace from 'react-string-replace'

type Props = {
  children: React.ReactNode,
};

export function HighlightedText(props: Props) {
  let output = [props.children];
  output = reactStringReplace(output, /[▲]/g, (match, i) => (
    <><span className="triangle">▲</span>{match}</>
  ))
  output = reactStringReplace(output, /[●○⬤]/g, (match, i) => (
    <><span className="circle">●</span>{match}</>
  ))
  output = reactStringReplace(output, /[⬛■]/g, (match, i) => (
    <><span className="square">■</span>{match}</>
  ))
  output = reactStringReplace(output, /[⬟]/g, (match, i) => (
    <><span className="pentagon">⬟</span>{match}</>
  ))
  return <>{output}</>
}

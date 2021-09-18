import React from 'react'
import CSS from 'csstype'

type Props = {
  name: string,
  value: string,
  secondaryValue?: string | null,
}

export function StatBadge (props: Props) {
  const badgeStyle: CSS.Properties = {
    paddingTop: '.2vw',
    border: '1px solid black',
    width: '5vw',
    height: '5vw',
    background: 'black',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    borderRadius: '50%',
  };
  const nameStyle: CSS.Properties = {
    fontSize: '1vw',
    fontWeight: 'bold',
    lineHeight: '1vw',
  };
  const valueStyle: CSS.Properties = {
    fontSize: '3vw',
    lineHeight: '3vw',
    fontWeight: 'bold'
  }
  return (
    <div className='statbadge mb-4' style={badgeStyle}>
      <div className='name' style={nameStyle}>{props.name}</div>
      <div className='value' style={valueStyle}>
        { props.value }
        { props.secondaryValue
          ? <small>{props.secondaryValue}</small>
          : <></>
        }
      </div>
    </div>
  )
}

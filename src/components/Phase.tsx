import React from 'react';

type Props = {
  name: string,
  children: React.ReactNode,
};

function Phase(props: Props) {
  return <>
    <h1 style={{
      background: 'black',
      color: 'white',
      padding: '10px',
      width: '100%',
      textTransform: 'capitalize',
    }}>
      {props.name}
    </h1>
    {props.children}
  </>
}

export default Phase;

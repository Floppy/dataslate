import React from 'react';

type Props = {
  name: string,
  children: React.ReactNode,
};

function Phase(props: Props) {
  return <>
    <h2 style={{
      textTransform: "capitalize"
    }}>
      {props.name}
    </h2>
    {props.children}
  </>
}

export default Phase;

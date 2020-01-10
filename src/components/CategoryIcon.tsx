import React from 'react';

type Props = {
  category: string;
};

export function CategoryIcon(props: Props) {
  const icons: {
    [index: string]: string;
  } = {
    'commander': '👑',
    'leader': '💀',
    'specialist': '',
  };
  return (<span className='category' style={{marginRight: '10px'}}>
    {props.category ? icons[props.category.toLowerCase()] : ''}
  </span>);
}

import React from 'react';

type Props = {
  specialism: string;
};

export function SpecialistIcon(props: Props) {
  const icons: {
    [index: string]: string;
  } = {
    'combat': '🤜',
    'comms': '📻',
    'demolitions': '💣',
    'ferocity': '🦖',
    'fortitude': '🛡️',
    'heavy': '💥',
    'leadership': '💀',
    'logistics': '🚚',
    'medic': '⚕️',
    'melee': '🤜',
    'psyker': '🧠',
    'scout': '🔦',
    'shooting': '🔫',
    'stealth': '👻',
    'strategist': '🗺️',
    'strength': '💪',
    'sniper': '🎯',
    'veteran': '⭐',
    'zealot': '😤',
    '': ''
  };
  return (<span className='specialism' style={{marginRight: '10px'}}>
    {props.specialism ? icons[props.specialism.toLowerCase()] : ''}
  </span>);
}

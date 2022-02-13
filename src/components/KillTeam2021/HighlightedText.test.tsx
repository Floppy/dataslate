import TestRenderer from 'react-test-renderer'
import { HighlightedText } from './HighlightedText'

describe('triangle', () => {
  it('translates ▲ correctly', () => {
    const text = 'There is a ▲ in the text'
    const component = TestRenderer.create(
      <HighlightedText>{text}</HighlightedText>
    )

    const expected = [
      'There is a ',
      { type: 'span', props: { className: 'triangle' }, children: ['▲'] },
      ' in the text'
    ]

    expect(component.toJSON()).toEqual(expected)
  })
})

describe('circle', () => {
  for (const circleSymbol of ['●', '○', '⬤']) {
    it(`translates ${circleSymbol} correctly`, () => {
      const text = `There is a ${circleSymbol} in the text`
      const component = TestRenderer.create(
        <HighlightedText>{text}</HighlightedText>
      )

      const expected = [
        'There is a ',
        { type: 'span', props: { className: 'circle' }, children: ['●'] },
        ' in the text'
      ]

      expect(component.toJSON()).toEqual(expected)
    })
  }
})

describe('square', () => {
  for (const squareSymbol of ['⬛', '■']) {
    it(`translates ${squareSymbol} correctly`, () => {
      const text = `There is a ${squareSymbol} in the text`
      const component = TestRenderer.create(
        <HighlightedText>{text}</HighlightedText>
      )

      const expected = [
        'There is a ',
        { type: 'span', props: { className: 'square' }, children: ['■'] },
        ' in the text'
      ]

      expect(component.toJSON()).toEqual(expected)
    })
  }
})

describe('pentagon', () => {
  it('translates ⬟ correctly', () => {
    const text = 'There is a ⬟ in the text'
    const component = TestRenderer.create(
      <HighlightedText>{text}</HighlightedText>
    )

    const expected = [
      'There is a ',
      { type: 'span', props: { className: 'pentagon' }, children: ['⬟'] },
      ' in the text'
    ]

    expect(component.toJSON()).toEqual(expected)
  })
})

it('works correctly if text contains the same symbol twice', () => {
  const text = 'First there is a ⬟, and then there is a second ⬟.'
  const component = TestRenderer.create(
    <HighlightedText>{text}</HighlightedText>
  )

  const expected = [
    'First there is a ',
    { type: 'span', props: { className: 'pentagon' }, children: ['⬟'] },
    ', and then there is a second ',
    { type: 'span', props: { className: 'pentagon' }, children: ['⬟'] },
    '.'
  ]

  expect(component.toJSON()).toEqual(expected)
})

it('works correctly if text contains multiple various symbols', () => {
  const text = '▲●○⬤⬛■⬟'
  const component = TestRenderer.create(
    <HighlightedText>{text}</HighlightedText>
  )

  const expected = [
    { type: 'span', props: { className: 'triangle' }, children: ['▲'] },
    { type: 'span', props: { className: 'circle' }, children: ['●'] },
    { type: 'span', props: { className: 'circle' }, children: ['●'] },
    { type: 'span', props: { className: 'circle' }, children: ['●'] },
    { type: 'span', props: { className: 'square' }, children: ['■'] },
    { type: 'span', props: { className: 'square' }, children: ['■'] },
    { type: 'span', props: { className: 'pentagon' }, children: ['⬟'] }
  ]

  expect(component.toJSON()).toEqual(expected)
})

import TestRenderer from 'react-test-renderer'
import { SpecialistIcon } from './SpecialistIcon'

it('renders a image with a specialism class', () => {
  const component = TestRenderer.create(
    <SpecialistIcon specialism='combat' />
  )
  expect(component.root.findByType('img').props.className).toBe('specialism')
})

it('renders the right image for combat specialism', () => {
  const component = TestRenderer.create(
    <SpecialistIcon specialism='combat' />
  )
  expect(component.root.findByType('img').props.src).toContain('combat.svg')
})

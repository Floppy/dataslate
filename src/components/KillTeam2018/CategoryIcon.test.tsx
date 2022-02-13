import TestRenderer from 'react-test-renderer'
import { CategoryIcon } from './CategoryIcon'

it('renders an image with a category class', () => {
  const component = TestRenderer.create(
    <CategoryIcon category='commander' />
  )
  expect(component.root.findByType('img').props.className).toBe('category')
})

it('renders the right image for commander category', () => {
  const component = TestRenderer.create(
    <CategoryIcon category='commander' />
  )
  expect(component.root.findByType('img').props.src).toContain('commander.svg')
})

it('renders the right image for leader category', () => {
  const component = TestRenderer.create(
    <CategoryIcon category='leader' />
  )
  expect(component.root.findByType('img').props.src).toContain('leader.svg')
})

import React from 'react'
import TestRenderer from 'react-test-renderer'
import { CategoryIcon } from './CategoryIcon'

it('renders a span with a category class', () => {
  const component = TestRenderer.create(
    <CategoryIcon category="commander"/>
  );
  expect(component.root.findByType("span").props.className).toBe('category');
})

it('renders a crown for commander category', () => {
  const component = TestRenderer.create(
    <CategoryIcon category="commander"/>
  );
  expect(component.root.findByType("span").props.children).toBe('👑');
})

it('renders a skull for leader category', () => {
  const component = TestRenderer.create(
    <CategoryIcon category="leader"/>
  );
  expect(component.root.findByType("span").props.children).toBe('💀');
})

it('renders empty span if specialist category specified', () => {
  const component = TestRenderer.create(
    <CategoryIcon category="specialist"/>
  );
  expect(component.root.findByType("span").props.children).toBe('');
})

it('renders empty span if empty category specified', () => {
  const component = TestRenderer.create(
    <CategoryIcon category=""/>
  );
  expect(component.root.findByType("span").props.children).toBe('');
})

it('renders empty span if no category specified', () => {
  const component = TestRenderer.create(
    <CategoryIcon />
  );
  expect(component.root.findByType("span").props.children).toBe('');
})


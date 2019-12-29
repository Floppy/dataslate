import React from 'react'
import TestRenderer from 'react-test-renderer'
import { SpecialistIcon } from './SpecialistIcon'

it('renders a span with a specialism class', () => {
  const component = TestRenderer.create(
    <SpecialistIcon specialism="combat"/>
  );
  expect(component.root.findByType("span").props.className).toBe('specialism');
})

it('renders a fist for combat specialism', () => {
  const component = TestRenderer.create(
    <SpecialistIcon specialism="combat"/>
  );
  expect(component.root.findByType("span").props.children).toBe('🤜');
})

it('renders a skull for leadership specialism', () => {
  const component = TestRenderer.create(
    <SpecialistIcon specialism="leadership"/>
  );
  expect(component.root.findByType("span").props.children).toBe('💀');
})

it('renders empty span if empty specialism specified', () => {
  const component = TestRenderer.create(
    <SpecialistIcon specialism=""/>
  );
  expect(component.root.findByType("span").props.children).toBe('');
})

it('renders empty span if no specialism specified', () => {
  const component = TestRenderer.create(
    <SpecialistIcon />
  );
  expect(component.root.findByType("span").props.children).toBe('');
})


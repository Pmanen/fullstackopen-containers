import { test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Todo from './Todo'

const todo = { text: 'Buy groceries', done: false }

test('renders the todo text', () => {
  render(<Todo todo={todo} deleteTodo={vi.fn()} completeTodo={vi.fn()} />)
  screen.getByText('Buy groceries')
})
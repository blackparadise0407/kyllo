import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Avatar } from '.'

describe('Avatar component', () => {
  test('should render', () => {
    render(<Avatar />)
    expect(screen.getByTestId('avatar')).toBeTruthy()
  })
})

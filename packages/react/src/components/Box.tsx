import { VariantProps } from '@stitches/react'
import { styled } from '../styles'
import { ElementType } from 'react'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends VariantProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'

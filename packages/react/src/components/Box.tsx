import { VariantProps } from '@stitches/react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends VariantProps<typeof Box> {}

Box.displayName = 'Box'

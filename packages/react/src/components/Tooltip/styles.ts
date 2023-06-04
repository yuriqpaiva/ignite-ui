import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipRoot = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  alignItems: 'center',
  color: '$white',
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: 5,
  position: 'relative',
  top: -12,

  // Bottom Triangle
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: -20,
    rotate: '180deg',
    left: '50%',
    marginLeft: -10,
    borderWidth: '10px',
    borderStyle: 'solid',
    borderColor: 'transparent transparent $gray900 transparent',
  },
})

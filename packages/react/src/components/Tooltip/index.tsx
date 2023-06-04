import { ComponentProps, ReactNode } from 'react'
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from './styles'
import { Text } from '../Text'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  Trigger: ReactNode
  text: string
}

export function Tooltip({ Trigger, text, ...props }: TooltipProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <TooltipRoot>
        <TooltipTrigger>{Trigger}</TooltipTrigger>
        <TooltipContent>
          <Text size="sm" as="span">
            {text}
          </Text>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'

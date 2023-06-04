import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@yuri-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    text: "That's a tooltip example",
    Trigger: <Text>Hover this text to show a Tooltip</Text>,
  },
  argTypes: {
    Trigger: {
      control: { disable: true },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', marginTop: 24 }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<TooltipProps> = {}

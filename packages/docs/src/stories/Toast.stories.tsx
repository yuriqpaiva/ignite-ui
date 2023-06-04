import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@yuri-ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Toast component title',
    subtitle: 'Toast component subtitle',
    isOpen: true,
  },
  argTypes: {
    isOpen: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

export const Primary: StoryObj<ToastProps> = {}

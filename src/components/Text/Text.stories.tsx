import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";


export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Default Text',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    children: 'Small Text',
    size: 'sm'
  }, argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
}

export const Large: StoryObj<TextProps> = {

  args: {
    children: 'Large Text',
    size: 'lg'
  }, argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>
        Text Example
      </p>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}

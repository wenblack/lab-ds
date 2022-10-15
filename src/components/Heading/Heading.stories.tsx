import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from "./Heading";
import { } from './Heading';


export default {
  title: 'Components/Heading',
  component: Heading,
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
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    children: 'Small Text',
    size: 'sm'

  }
}

export const Large: StoryObj<HeadingProps> = {

  args: {
    children: 'Large Text',
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>
        Heading Example
      </h1>
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

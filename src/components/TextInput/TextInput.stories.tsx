import { Meta } from '@storybook/react'
import {
  TextInput,
  TextInputIconEmail,
  TextInputRootPRops,
  TextInputIconPassword
} from "./TextInput";


export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInputIconEmail />
        <TextInput.Input placeholder='Type your username or e-mail' type='text' />
      </>

    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRootPRops>

export const Default = {}
export const Password = {
  args: {
    children: (
      <>
        <TextInputIconPassword />
        <TextInput.Input placeholder='Type your username or e-mail' type='password' />
      </>

    )
  }
}
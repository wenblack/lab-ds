import { Envelope, LockKey } from "phosphor-react";
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootPRops {
  children: ReactNode
}
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function TextInputRoot(props: TextInputRootPRops) {
  return (
    <div className='flex items-center border-cyan-300 border-solid gap-3 font-sans font-normal w-full bg-gray-800 rounded py-4 px-3 focus-within:ring-2 ring-cyan-300 focus-within:text-gray-100 '>
      {props.children}
    </div>
  )
}
export function TextInputIconEmail() {
  return <Envelope size={23} color="#7C7C8A" />
}

export function TextInputIconPassword() {
  return <LockKey size={23} color="#7C7C8A" />
}


export function TextInputInput(props: TextInputProps) {
  return (
    <input
      className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 w-full outline-none'
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIconEmail,
}
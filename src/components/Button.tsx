import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  bg: string
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={`${props.bg} text-white w-40 py-3 rounded-md`}>
      {props.children}
    </button>
  )
}

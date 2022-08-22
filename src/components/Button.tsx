import { CSSProperties, ReactNode } from 'react'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  bg: string
  size: 'base' | 'sm' | 'full'
  style?: CSSProperties
}

export const Button = (props: ButtonProps) => {
  if (!props.size) props.size = 'base'

  const { bg, size, style, children, ...buttonProps } = props

  return (
    <button
      className={`${props.bg} text-white ${
        props.size === 'base'
          ? 'w-40 py-3'
          : props.size === 'sm'
          ? 'w-28 py-2'
          : 'w-full py-3'
      } rounded-radbase`}
      style={props.style}
      {...buttonProps}
    >
      {props.children}
    </button>
  )
}

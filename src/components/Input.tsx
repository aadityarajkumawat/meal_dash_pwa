import { useEffect } from 'react'
import { Fragment, ReactNode } from 'react'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string
  right?: ReactNode
  inputRef?: React.MutableRefObject<HTMLInputElement | null>
}

export const Input = (props: InputProps) => {
  const { name, right, inputRef, ...inputProps } = props

  return (
    <div className='w-full rounded-radbase'>
      <label>{name}</label>
      <div className='border-yellow1 border-2 rounded-radbase bg-base flex'>
        {!!right && <Fragment>{right}</Fragment>}
        <input
          ref={inputRef}
          className={`pr-3 py-3 text-lg w-full outline-none bg-base rouned`}
          {...inputProps}
        />
      </div>
    </div>
  )
}

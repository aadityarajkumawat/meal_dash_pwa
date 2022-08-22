import { useEffect } from 'react'
import { Fragment, ReactNode } from 'react'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string
  right?: ReactNode
}

export const Input = (props: InputProps) => {
  const { name, right, ...inputProps } = props

  return (
    <div className='w-full rounded-radbase'>
      <label>{name}</label>
      <div className='border-yellow1 border-2 rounded-radbase bg-base flex'>
        {!!right && <Fragment>{right}</Fragment>}
        <input
          className={`pr-3 py-3 text-lg w-full outline-none bg-base rounded-radbase`}
          {...inputProps}
        />
      </div>
    </div>
  )
}

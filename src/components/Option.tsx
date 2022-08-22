import { useNavigate } from 'react-router-dom'

interface OptionProps {
  title: string
  to?: string
}

export const Option = (props: OptionProps) => {
  const pushTo = useNavigate()

  function safeNavigate() {
    if (props.to) pushTo(props.to)
  }

  return (
    <div
      className='border-2 border-yellow1 px-3 py-2 rounded-md mb-2'
      onClick={safeNavigate}
    >
      <p className='text-lg'>{props.title}</p>
    </div>
  )
}

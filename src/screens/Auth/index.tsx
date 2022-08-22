import { useRef } from 'react'
import { useEffect } from 'react'
import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

type PageState = 'enter-number' | 'enter-otp'

export const Auth = () => {
  const [pageState, setPageState] = useState<PageState>('enter-number')
  const pushTo = useNavigate()

  const inputRef = useRef<HTMLInputElement | null>(null)
  const inputRef1 = useRef<HTMLInputElement | null>(null)
  const inputRef2 = useRef<HTMLInputElement | null>(null)
  const inputRef3 = useRef<HTMLInputElement | null>(null)
  const inputRef4 = useRef<HTMLInputElement | null>(null)
  const inputRef5 = useRef<HTMLInputElement | null>(null)

  const mobileInputRef = useRef<HTMLInputElement | null>(null)

  const refs = [inputRef, inputRef1, inputRef2, inputRef3, inputRef4, inputRef5]

  const otp = useRef<Array<number>>([])

  useEffect(() => {
    if (!inputRef.current) return
    inputRef.current.focus()
  }, [pageState])

  function handleChange(value: string, index: number) {
    if (value.length > 1) return

    const _otp = [...otp.current]
    _otp[index] = parseInt(value)

    otp.current = _otp

    refs[index + 1].current?.focus()
  }

  return (
    <div className='flex justify-center items-center h-full w-full px-5'>
      <div className='flex flex-col items-center w-full'>
        {pageState === 'enter-number' ? (
          <Fragment>
            <p className='text-blue1 text-4xl mb-14'>Welcome</p>
            <div className='w-full flex flex-col items-end'>
              <Fragment>
                <Input
                  ref={mobileInputRef}
                  name='Enter your phone number'
                  type='number'
                  right={
                    <div className='flex items-center pl-2'>
                      <p className='text-lg'>+91</p>
                    </div>
                  }
                />

                <Button
                  size='full'
                  bg='bg-yellow1 mt-5'
                  onClick={() => {
                    setPageState('enter-otp')
                  }}
                >
                  <p className='text-stone-800'>Continue</p>
                </Button>
              </Fragment>
            </div>
          </Fragment>
        ) : (
          <div className='w-full flex flex-col items-end'>
            <Fragment>
              <div className='w-full'>
                <p>Enter OTP</p>

                <div className='flex justify-between w-full'>
                  <input
                    className='outline-none w-12 h-12 bg-base border-yellow1 border-2 rounded-md p-1 text-center text-lg'
                    type='number'
                    value={otp.current[0]}
                    onChange={(e) => handleChange(e.target.value, 0)}
                    ref={refs[0]}
                  />
                  <input
                    className='outline-none w-12 h-12 bg-base border-yellow1 border-2 rounded-md p-1 text-center text-lg'
                    type='number'
                    onChange={(e) => handleChange(e.target.value, 1)}
                    value={otp.current[1]}
                    ref={refs[1]}
                  />
                  <input
                    className='outline-none w-12 h-12 bg-base border-yellow1 border-2 rounded-md p-1 text-center text-lg'
                    type='number'
                    onChange={(e) => handleChange(e.target.value, 2)}
                    value={otp.current[2]}
                    ref={refs[2]}
                  />
                  <input
                    className='outline-none w-12 h-12 bg-base border-yellow1 border-2 rounded-md p-1 text-center text-lg'
                    type='number'
                    onChange={(e) => handleChange(e.target.value, 3)}
                    value={otp.current[3]}
                    ref={refs[3]}
                  />
                  <input
                    className='outline-none w-12 h-12 bg-base border-yellow1 border-2 rounded-md p-1 text-center text-lg'
                    type='number'
                    onChange={(e) => handleChange(e.target.value, 4)}
                    value={otp.current[4]}
                    ref={refs[4]}
                  />
                  <input
                    className='outline-none w-12 h-12 bg-base border-yellow1 border-2 rounded-md p-1 text-center text-lg'
                    type='number'
                    onChange={(e) => handleChange(e.target.value, 5)}
                    value={otp.current[5]}
                    ref={refs[5]}
                  />
                </div>
              </div>

              <Button
                size='full'
                bg='bg-yellow1 mt-5 w-full'
                onClick={() => {
                  pushTo('/home')
                }}
              >
                <p className='text-stone-800'>Continue</p>
              </Button>
            </Fragment>
          </div>
        )}
      </div>
    </div>
  )
}

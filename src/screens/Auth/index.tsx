import { Fragment, useEffect, useRef, useState } from 'react'
import OtpInput from 'react-otp-input'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Toast } from '../../components/Toast'

type PageState = 'enter-number' | 'enter-otp'

export const Auth = () => {
  const [pageState, setPageState] = useState<PageState>('enter-number')
  const pushTo = useNavigate()

  const [toast, setToast] = useState<string>('')

  useEffect(() => {
    if (toast.length > 0) {
      setTimeout(() => {
        setToast('')
      }, 2000)
    }
  }, [toast])

  const mobileInputRef = useRef<HTMLInputElement | null>(null)

  const [inputMobile, setInputMobile] = useState<string>('')
  const [otp, setOTP] = useState({ otp: '' })

  return (
    <div className='flex justify-center items-center h-full w-full px-5'>
      <div className='flex flex-col items-center w-full'>
        {pageState === 'enter-number' ? (
          <Fragment>
            <p className='text-blue1 text-4xl mb-14'>Welcome</p>
            <div className='w-full flex flex-col items-end'>
              <Fragment>
                <Input
                  value={inputMobile}
                  onChange={(e) => {
                    setInputMobile(e.target.value)
                  }}
                  inputRef={mobileInputRef}
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
                    // if (inputMobile.length === 0) {
                    //   setToast('Please enter mobile number')
                    //   return
                    // }
                    // if (inputMobile.length !== 10) {
                    //   setToast('Invalid mobile number')
                    //   return
                    // }
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
              <form className='w-full'>
                <div className='w-full'>
                  <p>Enter OTP</p>

                  <OtpInput
                    value={otp.otp}
                    onChange={(otp: string) => {
                      setOTP((_otp) => ({ ..._otp, otp }))
                    }}
                    numInputs={6}
                    separator={<span></span>}
                    inputStyle='outline-none w-50px h-12 bg-base border-yellow1 border-2 rounded-md py-1 px-2 text-center text-lg'
                    focusStyle='border-yellow-600'
                    containerStyle='w-full justify-between'
                    shouldAutoFocus={true}
                    isInputNum={true}
                  />
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
              </form>
            </Fragment>
          </div>
        )}
      </div>
      {!!toast && <Toast msg={toast} />}
    </div>
  )
}

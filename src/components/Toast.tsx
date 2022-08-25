import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

interface ToastProps {
  type?: 'success' | 'info' | 'error' | 'warning'
  msg: string
}

export const Toast = (props: ToastProps) => {
  if (!!!props.msg) return null

  const comp = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='absolute top-6 w-80'
      style={{ left: '50%', transform: 'translateX(-50%)' }}
    >
      <div
        id='toast-success'
        className='flex items-center p-4 mb-4 w-full max-w-xs text-gray-500rounded-lg shadow bg-yellow1 bg-opacity-50 rounded-radbase'
        role='alert'
      >
        {/* <div className='inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
          <svg
            aria-hidden='true'
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clip-rule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Check icon</span>
        </div> */}
        <div className='ml-3 text-sm font-normal'>{props.msg}</div>
        <button
          type='button'
          className='ml-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-yellow-200 p-1.5 hover:ring-yellow-200 inline-flex h-8 w-8 bg-yellow1 bg-opacity-0'
          data-dismiss-target='#toast-success'
          aria-label='Close'
        >
          <span className='sr-only'>Close</span>
          <svg
            aria-hidden='true'
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
    </motion.div>
  )

  return createPortal(comp, document.getElementById('toast') as Element)
}

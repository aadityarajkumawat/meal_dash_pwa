import { Option } from '../../components/Option'

export const Support = () => {
  return (
    <div className='flex justify-center mt-24 w-full px-5'>
      <div className='flex flex-col items-center w-full'>
        <p className='text-blue1 text-3xl'>Support</p>
        <div className='flex flex-col w-full mt-7 rounded-sm'>
          <Option title='Food Quality issues' />
          <Option title='Food hygine issues' />
          <Option title='Service issues' />
          <Option title='Other issues' />
          <Option title='Special request' />
          <Option title='Contact Us' />
        </div>
      </div>
    </div>
  )
}

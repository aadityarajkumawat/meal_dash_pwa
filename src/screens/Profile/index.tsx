import { Option } from '../../components/Option'

export const Profile = () => {
  return (
    <div className='flex justify-center mt-24 w-full px-5'>
      <div className='flex flex-col items-center w-full'>
        <div
          className='bg-yellow1 rounded-full'
          style={{ width: 90, height: 90 }}
        ></div>

        <div className='text-center'>
          <p className='text-xl'>Aditya</p>
          <p className='text-blue1'>Edit profile details</p>
        </div>

        <div className='flex flex-col w-full mt-7 rounded-sm'>
          <Option title='Free Meals' to='/free-meals' />
          <Option title='Manage Calender' to='/manage-calender' />
          <Option title='Menu' to='/menu' />
          <Option title='Feedback' to='/feedback' />
          <Option title='Support' to='/support' />
          <Option title='Contact Us' to='/contact-us' />
          <Option title='Logout' to='/' />
        </div>
      </div>
    </div>
  )
}

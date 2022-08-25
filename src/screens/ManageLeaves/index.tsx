import { useState } from 'react'
import 'react-daterange-picker/dist/css/react-calendar.css'
import DateRangePicker from 'react-daterange-picker'

const stateDefinitions = {
  unavailable: {
    color: '',
    label: 'Unavailable',
  },
}

export const ManageLeaves = () => {
  const [value, onChange] = useState([new Date(), new Date()])

  return (
    <div className='flex justify-center mt-24 w-full px-5'>
      <div className='flex flex-col items-center w-full'>
        <p className='text-blue1 text-3xl'>Manage Leaves</p>
        <div className='flex flex-col w-full mt-7 rounded-sm'>
          <DateRangePicker
            selectionType='range'
            stateDefinitions={stateDefinitions}
            defaultState='unavailable'
            value={value}
            onSelect={(...all: any) => {
              console.log(all)
            }}
            minimumDate={new Date()}
          />
        </div>
      </div>
    </div>
  )
}

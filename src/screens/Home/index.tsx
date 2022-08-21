import { useEffect, useRef, useState } from 'react'
import { Button } from '../../components/Button'

const HomeHeader = () => {
  return (
    <div className='flex justify-between items-center mb-14'>
      <div>
        <p className='text-xl text-neutral-800'>Welcome Back,</p>
        <p className='text-xl text-neutral-800'>Aditya</p>
        <p className='text-blue1'>Yay, you saved 10 meals</p>
      </div>
      <div>
        <div
          className='bg-yellow1 rounded-full'
          style={{ width: 70, height: 70 }}
        ></div>
      </div>
    </div>
  )
}

export const MealCard = ({
  collapsed,
  mealCardRef,
}: {
  collapsed?: boolean
  mealCardRef?: React.MutableRefObject<HTMLDivElement | null>
}) => {
  if (collapsed === undefined) {
    collapsed = true
  }

  // const top = useState<number>(0)

  // const mealCardRef = useRef<HTMLDivElement | null>(null)

  // useEffect(() => {
  //   if (!mealCardRef.current) return
  //   console.log(
  //     mealCardRef.current.getBoundingClientRect().top,
  //     mealCardRef.current.offsetTop,
  //   )
  // }, [top, mealCardRef.current?.offsetTop])

  const collapsedStyles = (collapsedS: string, nonCollapsed: string = '') => {
    if (collapsed) {
      return collapsedS
    }

    return nonCollapsed
  }

  return (
    <div
      ref={mealCardRef}
      className={`border-yellow1 border-simple rounded-md px-4 py-5 mb-3 flex anim ${
        collapsed ? 'flex-row' : 'flex-col'
      }`}
    >
      <div>
        <p
          className={`${
            collapsed ? 'text-2xl' : 'text-4xl'
          } text-transition font-bold text-`}
        >
          Breakfast
        </p>
        <p>7:30 am - 9:00 am</p>
        <p>23, Monday</p>

        <div className='mt-5 text-sm'>
          <p className='text-neutral-800 font-thin'>Aloo Paratha, Curd,</p>
          <p className='text-neutral-800 font-thin'>
            Milk, Tea, Coffee, Bournvita
          </p>
          <p className='text-neutral-800 font-thin'>Bread, Jam, Butter</p>
        </div>
      </div>

      <div
        className={`flex mt-9 mb-6 ${
          collapsed ? 'flex-col-reverse justify-center' : 'justify-between'
        }`}
      >
        <Button bg={`bg-red1 ${collapsedStyles('mt-1')}`}>Not Having</Button>
        <Button bg={`bg-green1 ${collapsedStyles('mb-1')}`}>Having</Button>
      </div>
    </div>
  )
}

const initialState = {
  firstCardCollapsed: false,
}

type HomeLocalState = typeof initialState

export const Home: React.FC = () => {
  const mealCardRef = useRef<HTMLDivElement | null>(null)

  const [localState, setLocalState] = useState<HomeLocalState>({
    ...initialState,
  })

  return (
    <div
      className='pt-14 px-5'
      onScroll={(r) => {
        if (!mealCardRef.current) return
        const top = mealCardRef.current.getBoundingClientRect().top

        setLocalState((ls) => ({ ...ls, firstCardCollapsed: top <= 40 }))
      }}
      style={{ height: '100vh', overflowY: 'scroll' }}
    >
      <HomeHeader />

      <MealCard
        mealCardRef={mealCardRef}
        collapsed={localState.firstCardCollapsed}
      />
      <MealCard />
      <MealCard />
      <MealCard />
      <MealCard />
      <MealCard />
      <MealCard />
      <MealCard />
    </div>
  )
}

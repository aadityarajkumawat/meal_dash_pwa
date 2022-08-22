import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'

const HomeHeader = () => {
  const pushTo = useNavigate()

  function pushToProfile() {
    return pushTo('/profile')
  }

  return (
    <div className='flex justify-between items-center mb-14'>
      <div>
        <p className='text-xl text-neutral-800'>Welcome Back,</p>
        <p className='text-xl text-neutral-800'>Aditya</p>
        <p className='text-blue1'>Yay, you saved 10 meals</p>
      </div>

      <div onClick={pushToProfile}>
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
  topRef,
}: {
  collapsed?: boolean
  mealCardRef?: React.MutableRefObject<HTMLDivElement | null>
  topRef?: React.MutableRefObject<number>
}) => {
  if (collapsed === undefined) {
    collapsed = true
  }

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
        collapsed ? 'flex-row justify-between' : 'flex-col'
      }`}
    >
      <div className='text-transition-all '>
        <p className={`${collapsed ? 'text-2xl' : 'text-4xl'} font-bold`}>
          Breakfast
        </p>
        <p
          className={`${collapsedStyles(
            'text-sm',
            'text-base text-stone-900',
          )}`}
        >
          7:30 am - 9:00 am
        </p>
        <p
          className={`${collapsedStyles(
            'text-sm',
            'text-base text-stone-900',
          )}`}
        >
          23, Monday
        </p>

        <div className={`mt-5 ${collapsedStyles('text-sm', 'text-xl')}`}>
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
        <Button
          size={collapsed ? 'sm' : 'base'}
          bg={`bg-red1 ${collapsedStyles('mt-1')}`}
          style={{ transform: `translate(${topRef?.current ?? 0 - 2})` }}
        >
          Not Having
        </Button>
        <Button
          size={collapsed ? 'sm' : 'base'}
          bg={`bg-green1 ${collapsedStyles('mb-1')}`}
        >
          Having
        </Button>
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
  const topRef = useRef<number>(0)

  const [localState, setLocalState] = useState<HomeLocalState>({
    ...initialState,
  })

  return (
    <div
      className='pt-14 px-5'
      onScroll={() => {
        if (!mealCardRef.current) return
        const top = mealCardRef.current.getBoundingClientRect().top

        topRef.current = top

        setLocalState((ls) => ({ ...ls, firstCardCollapsed: top <= 40 }))
      }}
      style={{ height: '100vh', overflowY: 'scroll' }}
    >
      <HomeHeader />

      <MealCard
        mealCardRef={mealCardRef}
        topRef={topRef}
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

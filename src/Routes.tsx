import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth } from './screens/Auth'
import { Home } from './screens/Home'
import { ManageLeaves } from './screens/ManageLeaves'
import { Profile } from './screens/Profile'
import { Support } from './screens/Support'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/support' element={<Support />} />
        <Route path='/manage-leaves' element={<ManageLeaves />} />
      </Routes>
    </BrowserRouter>
  )
}

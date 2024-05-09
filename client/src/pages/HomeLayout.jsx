import React from 'react'

import { Outlet } from 'react-router-dom';
import MainHeader from '../components/Navigation/MainHeader';
import MainNavigation from '../components/Navigation/MainNavigation';
export default function HomeLayout() {
  return (




    <div>
      <MainNavigation />

      <Outlet />
    </div>
  )
}

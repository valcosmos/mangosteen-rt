import * as React from 'react'

import WelcomeLayout from '../layouts/WelcomeLayout'
import Welcome1 from '../page/Welcome1'
import Welcome2 from '../page/Welcome2'
import Welcome3 from '../page/Welcome3'
import Welcome4 from '../page/Welcome4'

export const welcomeRoutes = {
  path: 'welcome',
  element: <WelcomeLayout />,
  children: [
    // { index: true, element: <div>welcome</div> },
    { path: '1', element: <Welcome1 /> },
    { path: '2', element: <Welcome2 /> },
    { path: '3', element: <Welcome3 /> },
    { path: '4', element: <Welcome4 /> },
  ],
}

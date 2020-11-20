import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

function Home(props) {
  const { route } = props;
  console.log(route);
  return (
    <div>
      <div>Home</div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default memo(Home)
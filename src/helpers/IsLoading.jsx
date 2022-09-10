import React from 'react'
import Loader from 'react-loader-spinner'
import { DivLoading } from './isLoadingStyles'

export default function IsLoading() {
  return (
    <div className={`center-align`}>
      <DivLoading>
        <Loader type="BallTriangle" color="#4DB6AC" height={80} width={80} />
      </DivLoading>
    </div>
  )
}

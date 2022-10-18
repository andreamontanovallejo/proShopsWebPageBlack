import React from 'react'
import { Divider } from '@material-ui/core'

import {
  DivStepper,
  StepOne,
  StepTwo,
  StepThree,
  DivStepperNames,
} from './steeperStyles'

export default function Steeper(props) {
  return (
    <>
      <DivStepper>
        <StepOne step={props.step}>
          <div onClick={() => props.goToStepOne()}>1</div>
          <Divider />
        </StepOne>
        <StepTwo step={props.step}>
          <div>2</div>
          <Divider />
        </StepTwo>
        <StepThree step={props.step}>
          <div>3</div>
        </StepThree>
      </DivStepper>
      <DivStepperNames>
        <StepOne>
          <spam>Aceptar</spam>
        </StepOne>
        <StepTwo>
          <spam>Despacho</spam>
        </StepTwo>
        <StepThree>
          <spam>Pago</spam>
        </StepThree>
      </DivStepperNames>
    </>
  )
}

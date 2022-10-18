import styled, { css } from 'styled-components'

export const DivStepper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 599px) {
    padding: 10%;
  }
  @media (min-width: 600px) {
    padding: 0 18%;
  }
`
export const StepOne = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  div {
    min-width: 27px !important;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;

    ${props =>
      css`
        background-color: ${props.step === 1 ? '#fecc01' : '#555555'};
        border: ${props.step === 1 ? '1px solid #fecc01' : '1px solid gray'};
        color: ${props.step === 1 ? '#555555' : 'white'};
        font-weight: ${props.step === 1 && 'bolder'};
      `};
  }

  hr {
    width: 100% !important;
    flex-shrink: 1;
    margin: 1%;
  }
`
export const StepTwo = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  align-items: center;
  div {
    min-width: 27px !important;
    border-radius: 15px;
    text-align: center;
    ${props =>
      css`
        background-color: ${props.step === 2 ? '#fecc01' : '#555555'};
        border: ${props.step === 2 ? '1px solid #fecc01' : '1px solid gray'};
        color: ${props.step === 2 ? '#555555' : 'white'};
        font-weight: ${props.step === 2 && 'bolder'};
      `};
  }

  hr {
    width: 100% !important;
    flex-shrink: 1;
    margin: 1%;
  }
`
export const StepThree = styled.div`
  width: 28px;
  height: 40px;
  display: flex;
  align-items: center;
  div {
    min-width: 27px !important;
    border-radius: 15px;
    text-align: center;
    ${props =>
      css`
        background-color: ${props.step === 3 ? '#fecc01' : '#555555'};
        border: ${props.step === 3 ? '1px solid #fecc01' : '1px solid gray'};
        color: ${props.step === 3 ? '#555555' : 'white'};
        font-weight: ${props.step === 3 && 'bolder'};
      `};
  }
`

export const DivStepperNames = styled.div`
  width: 100%;
  display: flex;

  div,
  spam {
    width: 100%;
    text-align: center;
  }

  div {
    width: 33% !important;
  }

  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
    padding: 0 3%;
  }
`

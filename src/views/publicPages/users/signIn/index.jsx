import React from 'react'
import { Link } from 'react-router-dom'
import { Colors } from '../../../../assets/styles/variables'
import Agent from '../../../../config'
import Button from '../../../../helpers/Button'
import InputText from '../../../../helpers/InputText'
import IsLoading from '../../../../helpers/IsLoading'
import { GetAdminRoute, AdminRoute } from '../../../../routes'
import { UserServices } from '../../../../services/index'
import { PublicPages } from '../../index'
import {
  DivButton,
  DivForgotPassword,
  DivForm,
  ErrorText,
  LoginText,
  SignUpTextLink,
  Title,
} from './signInStyles'

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.services = new UserServices()
    this.state = {
      errors: [],
      isLoading: false,
      userEmail: '',
      userPassword: '',
    }
  }

  componentDidMount() {
    this.loadCurrentUserInfo()
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      isLoading: true,
    })

    this.services
      .login(this.state.userEmail, this.state.userPassword)
      .then(user => {
        if (user) {
          this.props.activateAuth(user)
          if (
            (user.userType && user.userType === 'superAdmin') ||
            user.userType === 'general'
          ) {
            this.props.pushTo(GetAdminRoute(AdminRoute.init))
          }
          this.setState({
            errors: [],
            isLoading: false,
          })
        }
      })
      .catch(error => {
        if (error.response) {
          this.setState({
            errors: [error.response.data.errors],
            isLoading: false,
          })
        }
      })
  }

  loadCurrentUserInfo = () => {
    if (Agent.currentToken) {
      this.setState({
        isLoading: true,
      })

      this.services
        .getCurrentUser()
        .then(response => {
          if (
            (response.data.user && response.data.user === 'superAdmin') ||
            response.data.user === 'general'
          ) {
            this.props.pushTo(GetAdminRoute(AdminRoute.init))
          } else {
            Agent.logout()
          }
          this.setState({ isLoading: false })
        })
        .catch(error => {
          Agent.logout()
          this.setState({
            isLoading: false,
          })
        })
    } else {
      this.setState({ isLoading: false })
    }
  }
  render() {
    return (
      <PublicPages
        {...this.props}
        content={
          <>
            <DivForm>
              <Title>
                <LoginText>Inicia tu sesión</LoginText>
              </Title>
              {this.state.errors.length > 0 &&
                this.state.errors.map(e => (
                  <ErrorText key={e.error}>{e.error}</ErrorText>
                ))}
              <InputText
                error={''}
                name="userEmail"
                onChange={this.onChange}
                placeholder={'Email'}
                type={'email'}
              />
              <InputText
                error={''}
                name="userPassword"
                onChange={this.onChange}
                placeholder={'Contraseña'}
                type={'password'}
              />
              {this.state.isLoading ? (
                IsLoading()
              ) : (
                <DivButton>
                  <Button
                    editColor
                    editText
                    onClick={this.handleSubmit}
                    text={'Iniciar sesión'}
                  />
                </DivButton>
              )}
            </DivForm>
            <DivForgotPassword>Olvidé mi contraseña</DivForgotPassword>
            <SignUpTextLink>
              <Link to={'/views/users/signUp'}>
                <Button text={'Crear una cuenta'} background={Colors.green} />
              </Link>
            </SignUpTextLink>
          </>
        }
      />
    )
  }
}

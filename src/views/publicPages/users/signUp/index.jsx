import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../helpers/Button'
import InputPassword from '../../../../helpers/InputPassword'
import InputText from '../../../../helpers/InputText'
import IsLoading from '../../../../helpers/IsLoading'
import { GetUserRoute, UserRoute } from '../../../../routes'
import { UserServices } from '../../../../services/index'
import { PublicPages } from '../../index'
import {
  DivButton,
  DivCallToAction,
  DivContainer,
  DivForm,
  DivInput,
  DivLogInLink,
  DivNote,
  Errors,
  Image,
  LoginText,
  Logo,
  Text,
  Title,
} from './signUpStyles'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.services = new UserServices()
    this.state = {
      confirmUserPassword: '',
      errors: [],
      isLoading: false,
      userEmail: '',
      userLastName: '',
      userName: '',
      userPassword: '',
    }
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    this.services
      .signup({
        confirmUserPassword: this.state.confirmUserPassword,
        userEmail: this.state.userEmail,
        userLastName: this.state.userLastName,
        userName: this.state.userName,
        userPassword: this.state.userPassword,
      })
      .then(res => {
        this.props.pushTo(GetUserRoute(UserRoute.login))
      })
      .catch(error => {
        if (error.response) {
          this.setState({
            errors: error.response.data,
          })
        }
      })
  }

  render() {
    return (
      <PublicPages
        {...this.props}
        content={
          <DivContainer>
            <DivCallToAction>
              <Text>
                Crea tu cuenta y obtén
                <span> 1 mes gratis</span>
                , sin ingresar tarjetas y sin firmar contratos. <br />
                Crea tu tienda física con POS de ventas, manejo de inventario,
                informes en tiempo real, facturación electrónica, pedidos a
                proveedores y tienda online con carrito de compras.
              </Text>
            </DivCallToAction>
            <DivForm>
              <Title>
                <LoginText>Crea tu usuario</LoginText>
              </Title>
              <div>
                <ul>
                  {this.state.errors.length > 0 &&
                    this.state.errors.map(error => (
                      <Errors key={error.text}>{error.text}</Errors>
                    ))}
                </ul>
              </div>
              <DivInput>
                <InputText
                  error={''}
                  name="userName"
                  onChange={this.onChange}
                  placeholder={'Nombre'}
                  type={'text'}
                />
              </DivInput>

              <InputText
                error={''}
                name="userLastName"
                onChange={this.onChange}
                placeholder={'Apellido'}
                type={'text'}
              />
              <DivInput>
                <InputText
                  error={''}
                  name="userEmail"
                  onChange={this.onChange}
                  placeholder={'Correo Electrónico'}
                  type={'text'}
                />
              </DivInput>
              {this.state.userEmail && this.state.userEmail.length > 0 && (
                <DivNote>
                  Se enviará un email a este correo para validar la cuenta
                </DivNote>
              )}

              <DivInput>
                <InputPassword
                  name="userPassword"
                  onChange={this.onChange}
                  placeholder={'Contraseña'}
                />
              </DivInput>

              <DivInput>
                <InputPassword
                  name="confirmUserPassword"
                  onChange={this.onChange}
                  placeholder={'Confirma tu contraseña'}
                />
              </DivInput>

              {this.state.isLoading ? (
                IsLoading()
              ) : (
                <DivButton>
                  <Button
                    editColor
                    editText
                    onClick={this.handleSubmit}
                    text={'Crear usuario'}
                  />
                </DivButton>
              )}
            </DivForm>
            <Link to={'/views/users/signIn'}>
              <DivLogInLink>Ya tengo usuario, ingresar.</DivLogInLink>
            </Link>
          </DivContainer>
        }
      />
    )
  }
}

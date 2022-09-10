import React from 'react'

import MailIcon from '@material-ui/icons/Mail'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import InputText from '../../../helpers/InputText'
import InputMultiline from '../../../helpers/InputMultiline'
import Button from '../../../helpers/Button'

import { PublicPagesContactServices } from '../../../services/index'
import {
  DivContainer,
  DivContactInformation,
  Item,
  Title,
  Information,
  DivForm,
  DivMap,
  CardEvent,
  DivInput,
  DivButton,
  DivError,
} from './contactStyles'

export default class ContactPublicPage extends React.Component {
  constructor(props) {
    super(props)
    this.services = new PublicPagesContactServices()
    this.state = {
      isLoading: false,
      contactName: '',
      contactEmail: '',
      contactPhone: '',
      contactMessage: '',
    }
  }

  onChangeText = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  sendEmail = () => {
    if (
      this.state.contactName.trim() === '' ||
      this.state.contactEmail.trim() === '' ||
      this.state.contactMessage.trim() === ''
    ) {
      this.setState({
        errors: 'Ingrese toda la información solicitada',
      })
    } else if (
      !/^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.exec(
        this.state.contactEmail,
      )
    ) {
      this.setState({
        errors: 'El email debe contener @ y dominio',
      })
    } else {
      this.setState({
        isLoading: true,
      })
      this.services
        .sendEmail({
          contactName: this.state.contactName,
          contactEmail: this.state.contactEmail,
          contactMessage: this.state.contactMessage,
          contactPhone: this.state.contactPhone,
        })
        .then(res => {
          this.setState({
            isLoading: false,
            errors: '',
          })
          if (window.confirm('Su mensaje ha sido enviado exitosamente')) {
            window.location.reload()
          }
        })
    }
  }

  render() {
    return (
      <DivContainer>
        <DivContactInformation>
          <Title>Información de Contacto</Title>
          <Item>
            <Information>
              <MailIcon /> <div>emporiogorrono@gmail.com</div>
            </Information>
          </Item>

          <Item>
            <Information>
              <PhoneInTalkIcon /> <div>(+56) 9 5390 4343</div>
            </Information>
          </Item>

          <Item>
            <Information>
              <LocationOnIcon />
              <div>
                Paseo las Pataguas - Lo Barnechea, Av. Jose Alcalde Délano -
                Local 16
              </div>
            </Information>
          </Item>
        </DivContactInformation>
        <DivMap>
          <iframe
            title="mapaGoogleEmporioGorrono"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.606836869437!2d-70.53935668462755!3d-33.35521990001754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c9659088e72f%3A0xd6531a76eba2390e!2sLas%20Pataguas%20Paseo!5e0!3m2!1ses-419!2scl!4v1634767085205!5m2!1ses-419!2scl"
          ></iframe>
        </DivMap>
        <DivForm>
          <CardEvent className={`card`}>
            {this.state.errors !== '' && (
              <DivError>{this.state.errors}</DivError>
            )}
            <Title>Envíanos un mensaje</Title>
            <DivInput>
              <InputText
                type={'text'}
                name={'contactName'}
                placeholder={'Nombre (Requerido):'}
                defaultValue={this.state.contactName}
                onChange={this.onChangeText}
                error={[]}
              />
            </DivInput>
            <DivInput>
              <InputText
                type={'email'}
                name={'contactEmail'}
                placeholder={'Email (Requerido):'}
                defaultValue={this.state.contactEmail}
                onChange={this.onChangeText}
                error={[]}
              />
            </DivInput>
            <DivInput>
              <InputMultiline
                type={'text'}
                name={'contactPhone'}
                placeholder={'Telefono:'}
                defaultValue={this.state.contactPhone}
                onChange={this.onChangeText}
                error={[]}
              />
            </DivInput>
            <DivInput>
              <InputMultiline
                type={'text'}
                name={'contactMessage'}
                placeholder={'Mensaje (Requerido):'}
                defaultValue={this.state.contactMessage}
                onChange={this.onChangeText}
                error={[]}
              />
            </DivInput>
            <DivButton>
              <Button
                onClick={() => this.sendEmail()}
                text={'Enviar mensaje'}
              />
            </DivButton>
          </CardEvent>
        </DivForm>
      </DivContainer>
    )
  }
}

import React from 'react'
import Input from '../../../../helpers/InputText'
import InputMultiline from '../../../../helpers/InputMultiline'
import Select from '../../../../helpers/Select'
import Button from '../../../../helpers/Button'

import { DivInput, DivSend, DivSelect } from './formPersonalDataStyles'

export default function FormPersonalData(props) {
  const documentTypeOptions = [
    { englishName: 'Rut', spanishName: 'Rut' },
    { englishName: 'Id', spanishName: 'Documento de identidad' },
  ]

  const region = [
    { name: 'Metropolitana de Santiago' },
    { name: 'Arica y Parinacota' },
    { name: 'Tarapacá' },
    { name: 'Antofagasta' },
    { name: 'Atacama' },
    { name: 'Coquimbo' },
    { name: 'Valparaíso' },
    { name: 'Libertador General Bernardo OHiggins' },
    { name: 'Maule' },
    { name: 'Ñuble' },
    { name: 'Biobío' },
    { name: 'Araucanía' },
    { name: 'Los Ríos' },
    { name: 'Los Lagos' },
    { name: 'Aysén del General Carlos Ibáñez del Campo' },
    { name: 'Magallanes y de la Antártica Chilena' },
  ]

  const comuna = [
    { name: 'Cerrillos', deliveryPrice: 5000 },
    { name: 'Cerro Navia', deliveryPrice: 4500 },
    { name: 'Conchalí', deliveryPrice: 4500 },
    { name: 'Estación Central', deliveryPrice: 4500 },
    { name: 'Huechuraba', deliveryPrice: 4500 },
    { name: 'Independencia', deliveryPrice: 4500 },
    { name: 'La Cisterna', deliveryPrice: 5000 },
    { name: 'La Florida', deliveryPrice: 5000 },
    { name: 'La Granja', deliveryPrice: 5000 },
    { name: 'La Reina', deliveryPrice: 4000 },
    { name: 'Las Condes', deliveryPrice: 4000 },
    { name: 'Lo Barnechea', deliveryPrice: 4000 },
    { name: 'Lo Espejo', deliveryPrice: 5000 },
    { name: 'Lo Prado', deliveryPrice: 4500 },
    { name: 'Macul', deliveryPrice: 5000 },
    { name: 'Maipu', deliveryPrice: 6000 },
    { name: 'Ñuñoa', deliveryPrice: 4000 },
    { name: 'Pedro Agurre Cerda', deliveryPrice: 5000 },
    { name: 'Peñalolén', deliveryPrice: 5000 },
    { name: 'Providencia', deliveryPrice: 4000 },
    { name: 'Pudahuel', deliveryPrice: 6000 },
    { name: 'Puente Alto', deliveryPrice: 6000 },
    { name: 'Quilicura', deliveryPrice: 4500 },
    { name: 'Quinta Normal', deliveryPrice: 4500 },
    { name: 'Recoleta', deliveryPrice: 4500 },
    { name: 'Renca', deliveryPrice: 4500 },
    { name: 'San Bernardo', deliveryPrice: 6000 },
    { name: 'San Joaquín', deliveryPrice: 5000 },
    { name: 'San Miguel', deliveryPrice: 5000 },
    { name: 'San Ramón', deliveryPrice: 5000 },
    { name: 'Santiago Centro', deliveryPrice: 4500 },
    { name: 'Santiago', deliveryPrice: 4500 },
    { name: 'Vitacura', deliveryPrice: 4000 },
    { name: 'Otra comuna', deliveryPrice: 0 },
  ]

  return (
    <>
      <DivInput>
        <Input
          type={'text'}
          name={'customerName'}
          placeholder={'Ingrese su nombre y apellido'}
          error={[]}
          onChange={event => props.setCustomerName(event.target.value)}
          defaultValue={props.customerName}
        />
      </DivInput>

      <DivInput>
        <Input
          type={'text'}
          name={'customerEmail'}
          placeholder={'Escriba correctamente su email'}
          error={[]}
          onChange={event => props.setCustomerEmail(event.target.value)}
          defaultValue={props.customerEmail}
        />
      </DivInput>

      <DivSelect>
        <Select
          error={[]}
          placeholder={'Tipo de documento'}
          name={'customerDocumentType'}
          onChange={value => props.setCustomerDocumentType(value)}
          arrayOptions={documentTypeOptions}
          keyValueName={'englishName'}
          keyMessageName={'spanishName'}
          defaultValue={props.customerDocumentType}
        />
      </DivSelect>

      <DivInput>
        <Input
          type={'text'}
          name={'customerDocumentNumber'}
          placeholder={'Escriba su número de documento'}
          error={[]}
          onChange={event =>
            props.setCustomerDocumentNumber(event.target.value)
          }
          defaultValue={props.customerDocumentNumber}
        />
      </DivInput>

      <DivInput>
        <Input
          type={'number'}
          name={'customerPhone'}
          placeholder={'Escriba su teléfono:'}
          error={[]}
          onChange={event => props.setCustomerPhone(event.target.value)}
          defaultValue={props.customerPhone}
        />
      </DivInput>

      {props.shipment === 'sendHome' && (
        <>
          <DivSelect>
            <Select
              error={[]}
              placeholder={'Región'}
              name={'region'}
              onChange={value => props.setCustomerRegion(value)}
              arrayOptions={region}
              keyValueName={'name'}
              keyMessageName={'name'}
              defaultValue={props.customerRegion}
            />
          </DivSelect>

          {props.customerRegion === 'Metropolitana de Santiago' && (
            <DivSelect>
              <Select
                error={[]}
                placeholder={'Comuna'}
                name={'comuna'}
                onChange={value => {
                  props.setCustomerComuna(value)
                  props.setDeliveryPrice(
                    comuna.find(e => e.name === value).deliveryPrice,
                  )
                }}
                arrayOptions={comuna}
                keyValueName={'name'}
                keyMessageName={'name'}
                defaultValue={props.customerComuna}
              />
            </DivSelect>
          )}

          {(props.customerComuna === 'Otra comuna' ||
            props.customerRegion !== 'Metropolitana de Santiago') && (
            <DivInput>
              <Input
                type={'text'}
                name={'customerCity'}
                placeholder={'Escriba su ciudad y/o comuna'}
                error={[]}
                onChange={event => props.setCustomerCity(event.target.value)}
                defaultValue={props.customerCity}
              />
            </DivInput>
          )}

          <DivInput>
            <Input
              type={'text'}
              name={'customerAddress'}
              placeholder={'Escriba su dirección completa'}
              error={[]}
              onChange={event => props.setCustomerAddress(event.target.value)}
              defaultValue={props.customerAddress}
            />
          </DivInput>
        </>
      )}

      <DivInput>
        <InputMultiline
          type={'text'}
          name={'customerNotes'}
          placeholder={'Notas adicionales (opcional):'}
          error={[]}
          onChange={event => props.setCustomerNotes(event.target.value)}
          defaultValue={props.customerNotes}
        />
      </DivInput>
      <DivSend>
        <Button
          onClick={() =>
            !props.unauthorizedDelivery && props.checkInformationIscomplete()
          }
          text={'Ir a pagar'}
          background={'#fecc01'}
          textColor={'#555555'}
          disabled={props.unauthorizedDelivery}
        />
      </DivSend>
    </>
  )
}

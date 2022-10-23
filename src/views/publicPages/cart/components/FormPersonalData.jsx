import React, { useState, useEffect } from 'react'
import Input from '../../../../helpers/InputText'
import InputMultiline from '../../../../helpers/InputMultiline'
import Select from '../../../../helpers/Select'
import Button from '../../../../helpers/Button'
import { filterComunaOptions } from '../utils/filterComunaOptions'
import {
  DivInput,
  DivSend,
  DivSelect,
  TextAlert,
  TextError,
} from './formPersonalDataStyles'

export default function FormPersonalData(props) {
  const [comunaOptions, setComunaOptions] = useState(
    filterComunaOptions({
      chileanRegionsAndComunas:
        props.deliveryInformation.chileanRegionsAndComunas,
      comunaDeliveryPrices: props.deliveryInformation.comunaDeliveryPrices,
      comunaShipmentPrices: props.deliveryInformation.comunaShipmentPrices,
      customerRegion: props.customerRegion,
    }),
  )

  useEffect(() => {
    setComunaOptions(
      filterComunaOptions({
        chileanRegionsAndComunas:
          props.deliveryInformation.chileanRegionsAndComunas,
        comunaDeliveryPrices: props.deliveryInformation.comunaDeliveryPrices,
        comunaShipmentPrices: props.deliveryInformation.comunaShipmentPrices,
        customerRegion: props.customerRegion,
      }),
    )
  }, [
    props.deliveryInformation.chileanRegionsAndComunas,
    props.deliveryInformation.comunaDeliveryPrices,
    props.deliveryInformation.comunaShipmentPrices,
    props.customerRegion,
  ])

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
          arrayOptions={props.deliveryInformation.legalIdDocumentTypes}
          keyValueName={'_id'}
          keyMessageName={'name'}
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
              onChange={value => {
                props.setCustomerRegion(value)
                props.setCustomerComuna(undefined)
                props.setCollectorType(undefined)
              }}
              arrayOptions={props.deliveryInformation.chileanRegionsAndComunas.sort(
                (a, b) => a.number - b.number,
              )}
              keyValueName={'_id'}
              keyMessageName={'name'}
              defaultValue={props.customerRegion}
            />
          </DivSelect>

          {props.customerRegion && comunaOptions.length > 0 && (
            <DivSelect>
              <Select
                error={[]}
                placeholder={'Comuna'}
                name={'comuna'}
                onChange={value => {
                  props.setCustomerComuna(
                    comunaOptions.find(e => e._id === value).comunaId,
                  )
                  props.setDeliveryPrice(
                    comunaOptions.find(e => e._id === value).deliveryPrice,
                  )
                  props.setCollectorType(
                    comunaOptions.find(e => e._id === value).collectorType,
                  )
                }}
                arrayOptions={comunaOptions}
                keyValueName={'_id'}
                keyMessageName={'name'}
                defaultValue={
                  props.customerComuna
                    ? comunaOptions.find(
                        e => e.comunaId === props.customerComuna,
                      )._id
                    : undefined
                }
              />
            </DivSelect>
          )}
          {props.customerRegion &&
            comunaOptions.length > 0 &&
            props.customerComuna && (
              <DivInput>
                <Input
                  type={'text'}
                  name={'customerAddress'}
                  placeholder={'Escriba su dirección completa'}
                  error={[]}
                  onChange={event =>
                    props.setCustomerAddress(event.target.value)
                  }
                  defaultValue={props.customerAddress}
                />
              </DivInput>
            )}
        </>
      )}

      <DivInput>
        <InputMultiline
          type={'text'}
          name={'customerNotes'}
          placeholder={
            props.shipment !== 'searchInStore'
              ? 'Agregar nota para el despacho (opcional):'
              : 'Agregar nota para el retiro (opcional)'
          }
          error={[]}
          onChange={event => props.setCustomerNotes(event.target.value)}
          defaultValue={props.customerNotes}
        />
      </DivInput>

      {props.customerRegion && comunaOptions.length === 0 && (
        <TextError>Actualmente no tenemos despacho para esta región.</TextError>
      )}

      {props.customerRegion && comunaOptions.length > 0 && (
        <TextAlert>
          Si su comuna no se encuentra en la lista, actualmente no está en
          nuestra área de despacho.
        </TextAlert>
      )}

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

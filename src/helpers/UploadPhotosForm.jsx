import React from 'react'
import {
  Container,
  DivFiles,
  DivInput,
  DivTitle,
  EachFile,
  DivRowPhoto,
  DivPhoto,
  DeleteText,
} from './uploadPhotosFormStyles'

export default function UploadPhotosForm(props) {
  return (
    <Container className={`card `}>
      <form>
        <DivInput>
          <DivTitle titleColor={props.titleColor}>{props.title}</DivTitle>
          {props.allowsMultipleFiles ? (
            <input
              type="file"
              name="propertyImg"
              onChange={props.addNewPhoto}
              multiple
              value={''}
              accept={props.accept}
              disabled={
                props.maxFilesToCharge &&
                props.maxFilesToCharge === props.multiFiles.length
              }
            />
          ) : (
            <input
              type="file"
              name="propertyImg"
              onChange={props.addNewPhoto}
              value={''}
              accept={props.accept}
              disabled={
                props.maxFilesToCharge &&
                props.maxFilesToCharge === props.multiFiles.length
              }
            />
          )}
        </DivInput>
        <DivFiles>
          {props.multiFiles &&
            props.multiFiles.map((e, i) => (
              <>
                <EachFile key={i}>
                  <div className={`col s1`}>{i + 1}</div>
                  <div className={`col s11`}>
                    {'...' + e.name.substr(e.name.length - 30, e.name.length)}
                  </div>
                </EachFile>
                <DivRowPhoto>
                  <DivPhoto
                    key={i}
                    src={URL.createObjectURL(e)}
                    alt={'Logo cliente Pro Shop'}
                  />
                  <DeleteText key={i} onClick={() => props.deleteImage(e.name)}>
                    Eliminar imagen
                  </DeleteText>
                </DivRowPhoto>
              </>
            ))}
        </DivFiles>
      </form>
    </Container>
  )
}

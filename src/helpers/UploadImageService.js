const UploadImageService = async ({ companyId, image }) => {
  const data = new FormData()
  data.append('file', image)
  data.append('upload_preset', `${process.env.REACT_APP_CLOUDINARY_PRESETS}`)
  data.append('folder', companyId)
  data.append('cloud_name', 'Home')

  const request = await fetch(
    `${process.env.REACT_APP_CLOUDINARY_END_POINT_UPLOAD}`,
    {
      method: 'post',
      body: data,
    },
  )
    .then(resp => resp.json())
    .then(data => {
      return data
    })
    .catch(err => {
      return err
    })

  return request && request.public_id
    ? { imgId: request.public_id, url: request.url }
    : undefined
}

export default UploadImageService

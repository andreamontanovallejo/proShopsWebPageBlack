import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Transformation } from 'cloudinary-react'

import {
  DivContainer,
  DivCategories,
  EachCategory,
  CategoryName,
  DivImage,
} from './categoriesStyles'

export default function Categories(props) {
  const cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}`
  return (
    <DivContainer>
      <DivCategories>
        {props.categories &&
          props.categories
            .filter(e => e.cloudinaryUrl)
            .map(e => (
              <EachCategory key={e._id} className="card">
                <Link to={`/products/${e.location}/${e.sectionId}/${e._id}/0`}>
                  <DivImage>
                    <Image
                      className={`TechniqueImage`}
                      cloudName={cloudName}
                      id={'backgroundPaint1'}
                      publicId={e.cloudinaryUrl}
                      alt="categoría producto gourmet"
                      quality="auto"
                      loading="lazy"
                    >
                      <Transformation fetchFormat="auto" quality="auto" />
                    </Image>
                  </DivImage>

                  <CategoryName>{e.name}</CategoryName>
                </Link>
              </EachCategory>
            ))}
      </DivCategories>
    </DivContainer>
  )
}

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
            .filter(eachcategory => eachcategory.cloudinaryUrl)
            .sort((a, b) =>
              a.menuOrder > b.menuOrder
                ? 1
                : a.menuOrder < b.menuOrder
                ? -1
                : 0,
            )
            .map(eachcategory => (
              <EachCategory key={eachcategory._id} className="card">
                <Link
                  to={`/products/${eachcategory.department.id}/${eachcategory._id}/0`}
                >
                  <DivImage>
                    <Image
                      className={`TechniqueImage`}
                      cloudName={cloudName}
                      id={'backgroundPaint1'}
                      publicId={eachcategory.cloudinaryUrl}
                      alt="categoría producto gourmet"
                      quality="auto"
                      loading="lazy"
                    >
                      <Transformation fetchFormat="auto" quality="auto" />
                    </Image>
                  </DivImage>

                  <CategoryName>{eachcategory.name}</CategoryName>
                </Link>
              </EachCategory>
            ))}
      </DivCategories>
    </DivContainer>
  )
}

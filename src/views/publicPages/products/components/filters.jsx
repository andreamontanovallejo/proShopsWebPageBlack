import React, { useEffect } from 'react'
import {
  DivContainerFilters,
  DivSubcategories,
  DivTitleCategoryselected,
  EachCategory,
  EachCategoryName,
  EachSubcategory,
  TitleFilters,
  DivSearchInput,
  DivTitleSubcategorySelected,
  DivDisplay,
} from '../productsStyles'
import SearchInput from '../../../../helpers/SearchInput'
import { filterProductsBy } from '../utils/filterProductsBy'

export const Filters = props => {
  const {
    selectedCategory,
    selectedSubcategory,
    setSelectedCategory,
    setSelectedSubCategory,
  } = props

  const categoriesWithSubcategories = props.products.reduce(
    (box, eachProduct) => {
      eachProduct.categories &&
        eachProduct.categories.length > 0 &&
        eachProduct.categories.map(eachCategory => {
          const newCategory = {
            name: eachCategory.name,
            _id: eachCategory._id,
            subcategories: eachProduct.subCategoriesSelected.filter(
              e => e.categoryId === eachCategory._id && e.isActive === true,
            ),
          }

          const exist = box.find(e => e._id === newCategory._id)
          !exist && box.push(newCategory)

          const otherCategories =
            box.length > 0 && exist && box.filter(e => e._id !== exist._id)

          exist &&
            eachProduct.subCategoriesSelected.length > 0 &&
            eachProduct.subCategoriesSelected.map(e => {
              const finded = exist.subcategories.find(
                thissubcat => thissubcat.categoryId === e.categoryId,
              )

              !finded && exist.subcategories.push(e)

              box = [...otherCategories, exist]
            })
        })

      return box
    },
    [],
  )

  useEffect(() => {
    if (selectedCategory.id === undefined) {
      props.setFilteredProducts(props.products)
    } else {
      props.setFilteredProducts(
        filterProductsBy({
          filterBy: 'category',
          products: props.products,
          idSelected: selectedCategory.id,
        }),
      )
    }
  }, [selectedCategory])

  useEffect(() => {
    if (selectedSubcategory.id !== undefined) {
      props.setFilteredProducts(
        filterProductsBy({
          filterBy: 'subcategory',
          products: props.products,
          idSelected: selectedSubcategory.id,
        }),
      )
    }
  }, [selectedSubcategory])

  return (
    <>
      <TitleFilters>Filtra por categoría</TitleFilters>
      <DivContainerFilters className={'card'}>
        {categoriesWithSubcategories &&
          categoriesWithSubcategories.length > 0 &&
          categoriesWithSubcategories
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(eachCategry => (
              <EachCategory key={eachCategry._id}>
                <EachCategoryName
                  onClick={() => {
                    setSelectedCategory(
                      selectedCategory.id === eachCategry._id
                        ? {
                            name: undefined,
                            id: undefined,
                          }
                        : {
                            name: eachCategry.name,
                            id: eachCategry._id,
                          },
                    )

                    setSelectedSubCategory({
                      name: undefined,
                      id: undefined,
                    })
                  }}
                >
                  {eachCategry.name}
                </EachCategoryName>
                {selectedCategory.id === eachCategry._id &&
                  eachCategry.subcategories &&
                  eachCategry.subcategories.length > 0 && (
                    <DivSubcategories>
                      {eachCategry.subcategories
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(eachSubcategory => (
                          <EachSubcategory
                            key={eachSubcategory._id}
                            onClick={() => {
                              setSelectedSubCategory(
                                selectedSubcategory.id === eachSubcategory._id
                                  ? {
                                      name: undefined,
                                      id: undefined,
                                    }
                                  : {
                                      name: eachSubcategory.name,
                                      id: eachSubcategory._id,
                                    },
                              )
                            }}
                          >
                            {eachSubcategory.name}
                          </EachSubcategory>
                        ))}
                    </DivSubcategories>
                  )}
              </EachCategory>
            ))}
      </DivContainerFilters>
      <DivSearchInput>
        <SearchInput
          error={[]}
          autoFocus
          type={'text'}
          placeholder={'Buscar producto por nombre'}
          showIcon
          onChange={value => {
            if (value.trim() !== '') {
              props.setFilteredProducts(
                filterProductsBy({
                  filterBy: 'name',
                  products: props.products,
                  idSelected: value,
                }),
              )
              setSelectedSubCategory({
                name: undefined,
                id: undefined,
              })
            } else {
              props.setFilteredProducts(props.products)
            }
          }}
        />
      </DivSearchInput>
      <DivDisplay>
        <DivTitleCategoryselected>
          {`${selectedCategory.name || ''} `}
        </DivTitleCategoryselected>
        <DivTitleSubcategorySelected>
          {` ${selectedSubcategory.name ? '/' : ''}  ${
            selectedSubcategory.name || ''
          }`}
        </DivTitleSubcategorySelected>
      </DivDisplay>
    </>
  )
}

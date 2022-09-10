export const filterProductsBy = ({ filterBy, products, idSelected }) => {
  if (filterBy === 'category') {
    return products.reduce((acc, product) => {
      const include = product.categories.some(each => each._id === idSelected)

      include && acc.push(product)
      return acc
    }, [])
  }
  if (filterBy === 'subcategory') {
    return products.reduce((acc, product) => {
      const include = product.subCategoriesSelected.some(
        each => each._id === idSelected,
      )

      include && acc.push(product)
      return acc
    }, [])
  }
  if (filterBy === 'name') {
    return products.reduce((acc, product) => {
      const include = product.productName
        .toLowerCase()
        .replace(/\s+/g, '')
        .includes(idSelected.toLowerCase().replace(/\s+/g, ''))

      include && acc.push(product)
      return acc
    }, [])
  }
}

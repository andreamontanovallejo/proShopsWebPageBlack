export const filterProductsBySection = ({ products, sectionId }) => {
  return products.filter(product => product.section._id === sectionId)
}

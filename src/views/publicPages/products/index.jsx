import React from 'react'
import IsLoading from '../../../helpers/IsLoading'
import { PublicPageProductsServices } from '../../../services/index'
import { Filters } from './components/filters'
import { Product } from './components/eachProduct'
import {
  DivContainer,
  DivListOfProducts,
  Links,
  LinkTo,
} from './productsStyles'
import { filterProductsBy } from './utils/filterProductsBy'
import { filterProductsBySection } from './utils/filterProductsBySection'

export default class Products extends React.Component {
  constructor(props) {
    super(props)
    this.sectionId = this.props.match.params.id
    this.categoryToFilter = this.props.match.params.categoryId
    this.services = new PublicPageProductsServices()
    this.state = {
      isLoading: false,
      allProducts: [],
      productsFiltered: [],
      productBySection: [],
      currentSectionId: '',
      selectedCategory: {
        name: undefined,
        id: undefined,
      },
      selectedSubcategory: {
        name: undefined,
        id: undefined,
      },
    }
  }

  componentDidMount = () => {
    this.getAllProducts()
    this.setState({
      currentSectionId: this.props.match.params.id,
    })
  }

  componentDidUpdate() {
    if (this.props.match.params.id !== this.state.currentSectionId) {
      const productBySection = filterProductsBySection({
        products: this.state.allProducts,
        sectionId: this.props.match.params.id,
      })
      this.setState({
        currentSectionId: this.props.match.params.id,
        productsFiltered: productBySection,
        productBySection: productBySection,
        selectedCategory: {
          name: undefined,
          id: undefined,
        },
        selectedSubcategory: {
          name: undefined,
          id: undefined,
        },
      })
    }
  }

  getAllProducts = () => {
    this.setState({
      isLoading: true,
    })

    this.services
      .getAllProducts({
        companyId: process.env.REACT_APP_COMPANYID,
      })
      .then(res => {
        const productBySection = filterProductsBySection({
          products: res.data,
          sectionId: this.props.match.params.id,
        })
        this.setState({
          allProducts: res.data,
          productsFiltered: productBySection,
          productBySection: productBySection,
          isLoading: false,
        })
      })
      .finally(() => {
        if (this.categoryToFilter !== '0') {
          const productsFiltered = filterProductsBy({
            filterBy: 'category',
            products: this.state.productsFiltered,
            idSelected: this.categoryToFilter,
          })

          this.setState({
            productsFiltered: productsFiltered,
          })
        }
      })
  }

  setFilteredProducts = productsFiltered => {
    this.setState({
      productsFiltered: productsFiltered,
    })
  }

  setLikes = (productId, likeOrDislike) => {
    this.services
      .setLikes({
        sectionId: this.sectionId,
        productId,
        likeOrDislike: likeOrDislike,
      })
      .then(res => {
        this.setState({
          products: res.data,
          productsFiltered: res.data,
        })
      })
  }

  showAllProducts = () => {
    this.setState({
      productsFiltered: filterProductsBySection({
        products: this.state.allProducts,
        sectionId: this.props.match.params.id,
      }),
      selectedCategory: {
        name: undefined,
        id: undefined,
      },
      selectedSubcategory: {
        name: undefined,
        id: undefined,
      },
    })
  }

  setSelectedCategory = value => {
    this.setState({ selectedCategory: value })
  }

  setSelectedSubCategory = value => {
    this.setState({ selectedSubcategory: value })
  }

  render() {
    return (
      <DivContainer>
        {this.state.isLoading ? (
          IsLoading()
        ) : (
          <>
            <Links>
              <LinkTo onClick={() => this.showAllProducts()}>
                Todos los productos /
              </LinkTo>
            </Links>

            <Filters
              products={this.state.productBySection}
              selectedCategory={this.state.selectedCategory}
              selectedSubcategory={this.state.selectedSubcategory}
              setFilteredProducts={this.setFilteredProducts}
              setSelectedCategory={this.setSelectedCategory}
              setSelectedSubCategory={this.setSelectedSubCategory}
            />

            <DivListOfProducts>
              {this.state.productsFiltered &&
                this.state.productsFiltered.map(product => (
                  <Product
                    key={product._id}
                    product={product}
                    props={this.props}
                    setLikes={this.setLikes}
                  />
                ))}
            </DivListOfProducts>
          </>
        )}
      </DivContainer>
    )
  }
}

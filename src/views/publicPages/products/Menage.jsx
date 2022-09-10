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

export default class ProductsPage extends React.Component {
  constructor(props) {
    super(props)
    this.sectionId = this.props.match.params.id
    this.categoryToFilter = this.props.match.params.categoryId
    this.services = new PublicPageProductsServices()
    this.state = {
      isLoading: false,
      products: [],
      productsFiltered: [],
    }
  }

  componentDidMount = () => {
    this.getAllProducts()
  }

  getAllProducts = () => {
    this.setState({
      isLoading: true,
    })

    this.services
      .getAllProducts(this.sectionId)
      .then(res => {
        this.setState({
          isLoading: false,
          products: res.data,
          productsFiltered: res.data,
        })
      })
      .finally(() => {
        if (this.categoryToFilter !== '0') {
          const productsFiltered = filterProductsBy({
            filterBy: 'category',
            products: this.state.products,
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
      productsFiltered: this.state.products,
    })
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
              products={this.state.products}
              setFilteredProducts={this.setFilteredProducts}
            />

            <DivListOfProducts>
              {this.state.productsFiltered.map(product => (
                <Product
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

import React, { Component } from 'react'
import MainLayout from './Main'

import CustomRoute from '../CustomRoute'
import {
  AdminRoute,
  GetAdminRoute,
  GetPublicPageRoute,
  GetUserRoute,
  PublicPageRoute,
  UserRoute,
} from '../../routes'
//user creation
import SignIn from '../../views/publicPages/users/signIn'
import SignUp from '../../views/publicPages/users/signUp'
//Public Pages
import HomePublicPage from '../../views/publicPages/home/HomePublicPage'
import ContactPublicPage from '../../views/publicPages/contact/Contact'
import CartPublicPage from '../../views/publicPages/cart/Cart'
import ThanksPublicPage from '../../views/publicPages/cart/components/ThanksPublicPage'
import ShippingAndReturns from '../../views/publicPages/cart/components/ShippingAndReturns'
import Products from '../../views/publicPages/products'

export default class Dashboard extends Component {
  render() {
    return (
      <MainLayout>
        {/*user creation */}
        <CustomRoute
          component={SignIn}
          isPrivate={false}
          path={GetUserRoute(UserRoute.login)}
        />
        <CustomRoute
          component={SignUp}
          isPrivate={false}
          path={GetUserRoute(UserRoute.create)}
        />
        {/*Public direct routes*/}
        <CustomRoute
          isPrivate={false}
          path="/"
          exact
          component={HomePublicPage}
        />
        <CustomRoute
          isPrivate={false}
          path="/contact"
          exact
          component={ContactPublicPage}
        />
        <CustomRoute
          isPrivate={false}
          path="/cart"
          exact
          component={CartPublicPage}
        />
        <CustomRoute
          isPrivate={false}
          path="/thanks"
          component={ThanksPublicPage}
        />
        <CustomRoute
          isPrivate={false}
          path="/shippingAndReturns"
          component={ShippingAndReturns}
        />
        <CustomRoute
          isPrivate={false}
          path={GetPublicPageRoute(PublicPageRoute.products)}
          component={Products}
        />
        {/* <CustomRoute
          isPrivate={false}
          path="/shippingPrices"
          component={ShippingPrices}
        /> */}
      </MainLayout>
    )
  }
}

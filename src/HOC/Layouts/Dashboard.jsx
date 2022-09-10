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
/* import ShippingPrices from '../../views/publicPages/cart/components/ShippingPrices'
import GourmetProducts from '../../views/publicPages/products/GourmetProducts'
import AirFresheners from '../../views/publicPages/products/AirFresheners'
import Menage from '../../views/publicPages/products/Menage'
import Aperitivos from '../../views/publicPages/products/Aperitivos'
import Oneproduct from '../../views/publicPages/products/OneProduct' */

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
        {/* <CustomRoute
          isPrivate={false}
          path="/shippingPrices"
          component={ShippingPrices}
        /> */}

        {/*Products*/}
        {/* <CustomRoute
          isPrivate={false}
          path={GetPublicPageRoute(PublicPageRoute.gourmetProducts)}
          component={GourmetProducts}
        />
        <CustomRoute
          isPrivate={false}
          path={GetPublicPageRoute(PublicPageRoute.airFresheners)}
          component={AirFresheners}
        />
        <CustomRoute
          isPrivate={false}
          path={GetPublicPageRoute(PublicPageRoute.menage)}
          component={Menage}
        />
        <CustomRoute
          isPrivate={false}
          path={GetPublicPageRoute(PublicPageRoute.aperitivos)}
          component={Aperitivos}
        />
        <CustomRoute
          isPrivate={false}
          path={GetPublicPageRoute(PublicPageRoute.oneProduct)}
          component={Oneproduct}
        /> */}
        {/*user creation */}
      </MainLayout>
    )
  }
}

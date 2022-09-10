export const Base = {
  public: '/publicPages',
  views: '/views',
}

export const AdminRoute = {
  base: '/intranet',
  init: '/init',
  CreationCompany: '/creation-company',
}

export const GetAdminRoute = url => {
  return AdminRoute.base + url
}

export const PublicPageRoute = {
  base: '/products',
  oneProduct: '/product/:productId',
  /*   gourmetProducts: '/gourmetProducts/:id/:categoryId/:subcategoryId',
  airFresheners: '/airFresheners/:id/:categoryId/:subcategoryId',
  menage: '/menage/:id/:categoryId/:subcategoryId',
  aperitivos: '/aperitivos/:id/:categoryId/:subcategoryId', */
}

export const GetPublicPageRoute = url => {
  return PublicPageRoute.base + url
}

export const UserRoute = {
  base: '/users',
  login: '/signIn',
  create: '/signUp',
}

export const GetUserRoute = user => {
  return Base.views + UserRoute.base + user
}

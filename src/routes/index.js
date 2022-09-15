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
  products: '/:id/:categoryId/:subcategoryId',
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

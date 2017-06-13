export const PRODUCTS_REQUEST = 'products/PRODUCTS_REQUEST'
export const PRODUCTS_SUCCESS = 'products/PRODUCTS_SUCCESS'
export const PRODUCTS_FAILED = 'products/PRODUCTS_FAILED'

export function requestProducts() {
  return {
    type: PRODUCTS_REQUEST,
  }
}

export function requestProductsSuccess(products) {
  return {
    type: PRODUCTS_SUCCESS,
    payload: {
      products,
    },
  }
}

export function requestProductsFailed(error) {
  return {
    type: PRODUCTS_FAILED,
    payload: {
      error,
    },
  }
}

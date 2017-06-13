export const PRODUCT_SELECTED = 'pos/PRODUCT_SELECTED'
export const PRODUCT_DELETED = 'pos/PRODUCT_DELETED'
export const SALE_REQUESTED = 'pos/SALE_REQUESTED'
export const SALE_SUCCESS = 'pos/SALE_SUCCESS'
export const SALE_FAILED = 'pos/SALE_FAILED'

export function productSelected(product) {
  return {
    type: PRODUCT_SELECTED,
    payload: {
      product,
    },
  }
}

export function productDeleted(product) {
  return {
    type: PRODUCT_DELETED,
    payload: {
      product,
    },
  }
}

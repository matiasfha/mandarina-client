import { PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILED } from './actions'

const initialState = {
  products: [],
  requesting: false,
  error: null,
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case PRODUCTS_REQUEST:
      return { ...state, requesting: true }
    case PRODUCTS_SUCCESS:
      return { ...state, requesting: false, products: payload.products }
    case PRODUCTS_FAILED:
      return { ...state, error: payload.error }
    default:
      return state
  }
}

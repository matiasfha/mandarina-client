import { PRODUCT_SELECTED, PRODUCT_DELETED } from './actions'

const initialState = {
  selected: [],
  totalPrice: 0,
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case PRODUCT_SELECTED:
      const selected =  [...state.selected, payload.product ]
      const price = selected.reduce
      return { ...state, selected }
    case PRODUCT_DELETED:
      return { ...state, selected: state.selected.slice(0, payload.index) }
    default:
      return state
  }
}

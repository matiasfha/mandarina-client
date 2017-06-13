import { getToken } from '../auth/session'

const handleApiError = response => {
  if (response.ok) {
    return response
  }
  throw response
}

export const api = {
  get: location =>
    fetch(`/api/v1${location}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then(handleApiError)
      .then(response => response.json()),
}

export const Products = {
  getSuggestions: term => api.get(`/products?term=${term}`),
  get: () => api.get('/products'),
}

export const Providers = {
  getSuggestions: term => api.get(`/providers?term=${term}`),
  get: () => api.get('/providers'),
}

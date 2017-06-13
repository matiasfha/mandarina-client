export const PROVIDERS_SUGGESTION_REQUEST = 'providers/PROVIDERS_SUGGESTION_REQUEST'
export const PROVIDERS_SUGGESTION_SUCCESS = 'providers/PROVIDERS_SUGGESTION_SUCCESS'
export const PROVIDERS_SUGGESTION_FAILED = 'providers/PROVIDERS_SUGGESTION_FAILED'

export function requestSuggestion(term) {
  return {
    type: PROVIDERS_SUGGESTION_REQUEST,
    payload: {
      term,
    },
  }
}

export function suggestionSuccess(providers) {
  return {
    type: PROVIDERS_SUGGESTION_SUCCESS,
    payload: {
      providers,
    },
  }
}

export function suggestionFailed(error) {
  return {
    type: PROVIDERS_SUGGESTION_FAILED,
    payload: {
      error,
    },
  }
}

import axios from "axios"

export const OFFERS= "OFFERS"
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const DETAIL = "DETAIL"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const DELETE_PRODUCT = "DELETE_PRODUCT"
export const BUY_PRODUCTS = "BUY_PRODUCTS"
export const LOADING = "LOADING"
export const CATEGORIES = "CATEGORIES"
export const CLEAN_SEARCH = "CLEAN_SEARCH"

export function offers() {
    return async function (dispatch) {
        dispatch(loading())
        try {
            const URL = `https://api.mercadolibre.com/sites/MLA/search?q=ofertas`
            const { data: result } = await axios.get(URL)
            const offers = result.results?.sort(() => 0.5 - Math.random()).slice(0, 5)

            return dispatch({
                type: OFFERS,
                payload: offers
            })
    
        } catch (error) {
          console.log(error);
        }
      }
  }

export function searchProduct(title) {
  return async function (dispatch) {
    dispatch(loading())
    try {
      const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${title}`
      const { data: result } = await axios.get(URL)

      return dispatch({
        type: SEARCH_PRODUCT,
        payload: result.results
      })

    } catch (error) {
      console.log(error);
    }
  }
}

export function cleanSearch() {
  return{
    type: CLEAN_SEARCH,
  }
}

export function verDetail(id) {
    return async function (dispatch) {
      dispatch(loading())
      try {
        const URL = `https://api.mercadolibre.com/items/${id}`
        const { data: result } = await axios.get(URL)
  
        return dispatch({
          type: DETAIL,
          payload: result
        })
  
      } catch (error) {
        console.log(error);
      }
    }
  }


export function addProduct(payload) {
  return {
    type: ADD_PRODUCT,
    payload
  }
}

export function deleteProduct(payload) {
  return {
    type: DELETE_PRODUCT,
    payload
  }
}

export function categories() {
    return async function (dispatch) {
      dispatch(loading())
      try {
        const URL = `https://api.mercadolibre.com/sites/MLA/categories`
        const { data: result } = await axios.get(URL)
  
        return dispatch({
          type: CATEGORIES,
          payload: result
        })
  
      } catch (error) {
        console.log(error);
      }
    }
  }

export function loading() {
  return {
    type: LOADING,
  }
}



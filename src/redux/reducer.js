import { OFFERS, CATEGORIES, SEARCH_PRODUCT, DETAIL, ADD_PRODUCT, DELETE_PRODUCT, LOADING, CLEAN_SEARCH } from "./actions.js"
import hbo from "../assets/HBO.webp";
import paramount from "../assets/paramount_.jpg";
import widget from "../assets/Widget.jpg";
import moda from "../assets/zapatos.webp";
import libro from "../assets/libro.webp";
import xbox from "../assets/juego.webp";
import paco from "../assets/paco.webp";
import ofertas2 from "../assets/ofertas2.png";
import personal from "../assets/personal.png";
import bebes from "../assets/bebes.png";
import limpieza from "../assets/limpieza.png";
import bebidas from "../assets/bebidas.png";
import almacen from "../assets/almacen.png";
import mascotas from "../assets/mascotas.png";



const initialState = {
    offers: [],
    categories: [],
    searchProduct: [],
    productDetail: {},
    imageDetail: "",
    cart: [],
    benefits: [
        {
            background: widget,
            gradient: "to bottom, rgba(0, 0, 0, 0) 55%, rgba(16, 27, 58, 1)",
            text: "Sin cargo con el nivel 6",
            company: "Disney+ y Star+",
            logo: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/disneyplus/comboplus-square.jpg",
            id: 1
        },
        {
            background: hbo,
            gradient: "to bottom, rgba(0, 0, 0, 0) 55%, rgba(58, 4, 82, 1)",
            days: "7 DIAS GRATIS",
            text: "Hasta 50% OFF",
            company: "HBO Max",
            logo: "https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1",
            id: 2
        },
        {
            background: paramount,
            gradient: "to bottom, rgba(0, 0, 0, 0) 55%, rgba(0, 95, 243, 1)",
            days: "7 DIAS GRATIS",
            text: "Sin cargo con el nivel 6",
            company: "Paramount+",
            logo: "https://http2.mlstatic.com/resources/frontend/statics/loyal/paramount/logos/paramount-logo-vdp-56-x-56-filled@2x.png",
            id: 3
        }
    ],

    discover: [
        {
            category: ": MODA",
            text: "HASTA 40% OFF Y 6X SIN INTERES",
            image: moda,
            id: 1
        },
        {
            category: "",
            text: "HASTA 10% OFF EN LIBROS",
            image: libro,
            id: 2
        },
    ],

    interests: [
        {
            category: ": BELLEZA",
            text: "HASTA 40% OFF Y 6X SIN INTERES",
            image: paco,
            id: 1
        },
        {
            category: ": GAMING",
            text: "HASTA 25% OFF Y 6X SIN INTERES",
            image: xbox,
            id: 2
        },
    ],
    supermarket: [
        {
            text: "Ofertas",
            image: ofertas2,
            id: 1
        },
        {
            text: "Cuidado Personal",
            image: personal,
            id: 2
        },
        {
            text: "Bebes",
            image: bebes,
            id: 3
        },
        {
            text: "Limpieza",
            image: limpieza,
            id: 4
        },
        {
            text: "Bebidas",
            image: bebidas,
            id: 5
        },
        {
            text: "Almacen",
            image: almacen,
            id: 6
        },
        {
            text: "Mascotas",
            image: mascotas,
            id: 7
        },

    ],

    loading: false,
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {

        case OFFERS:
            return {
                ...state,
                offers: action.payload,
                loading: false,
            }
        
        case CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                loading: false,
            }
            
        case SEARCH_PRODUCT:
            return {
                ...state,
                searchProduct: action.payload,
                loading: false,
            }

        case DETAIL:
            return {
                ...state,
                productDetail: action.payload,
                imageDetail: action.payload.pictures[0]?.url
            }

        case ADD_PRODUCT:
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
            
        case DELETE_PRODUCT:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
                loading: false
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }

        case CLEAN_SEARCH:
            return{
                ...state,
                searchProduct: [],
                productDetail: {},
                imageDetail: ""
            } 

        default:
            return state
    }
}
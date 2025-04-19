import { get } from "../ApiHelper"
import { GET_PRODUCTS_LISTING } from "../UrlHelper"
export const getProductListApi=()=>get(GET_PRODUCTS_LISTING,{})
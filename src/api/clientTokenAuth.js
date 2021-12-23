import {create} from "apisauce";

const apiClientWithToken = (token) => create(
    {
        baseURL: window.location.hostname === 'https://fakestoreapi.com/products'||window.location.hostname==='https://fakestoreapi.com/products' ? 'https://fakestoreapi.com/products' : '',
        headers:{
            Authorization: "Bearer " + token
        }
    }
);

export default apiClientWithToken
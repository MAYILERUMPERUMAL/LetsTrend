import axios from "axios";

const axiosApi = axios.create({
    baseURL: ' http://localhost:3003/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });



  export async function post(url, data, config) {
    let headers = {...(await getHeaders())};
    console.log('data===>', data, 'url===>', url, 'config====>', {
      ...config,
      headers: headers,
    });
    return await axiosApi
      .post(url, data, {
        ...config,
        headers: headers,
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {});
  }


  export async function get(url, config) {
    let headers = {...(await getHeaders())};
    console.log('data===>', data, 'url===>', url, 'config====>', {
      ...config,
      headers: headers,
    });
    return await axiosApi
      .get(url, {
        ...config,
        headers: headers,
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {});
  }






import { useState, useEffect } from 'react';
import axios from 'axios';

const useAjax = () => {
  console.log("useAjax !!!")

  const [response, setResponse] = useState({});

  const setRequestParams = (options) => {

    const method = options.method;
    
    let req = { 
      method: options.method,
      url: options.url,
      headers: options.headers
    };

    if (method === /^post$||^put$/i) req = { ...req, body:  options.body };
    return req;
  };

  const useAxios = async (options) => {
    console.log("useAxios!!")
    console.log("options >>>> ", options)
    let results = await axios(
      options
    ).catch(function (error) {
      console.log("error: ");
      console.log(error)
    })
    console.log("results.data -->  ", results.data)
    setResponse(results.data);
  };

  return [useAxios, response];
};

export default useAjax;


// const useAjax = () => {

//   const getNote = async (url) => {
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (e) {
//       console.error("errrror-->", e)
//     }
//   }

//   const postNote = async (url, item) => {
//     try {
//       axios({
//         method: 'post',
//         url: url,
//         mode: 'cors',
//         cache: 'no-cache',
//         headers: { 'Content-Type': 'application/json' },
//         data: item,
//       });
//     } catch (e) {
//       console.error("errrror-->", e);
//     }
//   }

//   const putNote = async (url, data) => {
//     try {
//       await axios({
//         method: 'put',
//         url: url,
//         data: data,
//       });
//     } catch (e) {
//       console.error("errrror-->", e);
//     }
//   };
//   const deleteNote = async (url, _id) => {
//     try {
//       let id = { _id };
//       await axios({
//         method: 'delete',
//         url: url,
//         mode: 'cors',
//         data: id,
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return [getNote, postNote, putNote, deleteNote]

// };

// export default useAjax;
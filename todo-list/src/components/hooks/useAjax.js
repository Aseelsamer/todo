
import { useState, useCallback } from 'react';
import axios from 'axios';

const useAjax = () => {

  const todoAPI = 'https://husam278-api-server.herokuapp.com/api/todo';
  const handler = (url, method, body) => {
    return axios({
      method: method,
      url: url,
      data: body
    }).then(data => data.data)
  }

  return [handler,todoAPI]
}
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
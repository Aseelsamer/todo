function useList(handler, todoAPI, setList, list) {

    const toggleComplete = id => {
      let item = list.filter(i => i._id === id)[0] || {};
      let url = `${todoAPI}/${id}`;
  
      if (item._id) {
        item.complete = !item.complete;
        handler(url, 'put', item)
          .then(savedItem => {
            setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
          })
      }
    };
  
    const deleteItem = id => {
      let url = `${todoAPI}/${id}`;
      handler(url, 'delete', '')
        .then(() => {
          loader()
        })
    }
  
  
    const loader = () => {
      handler(todoAPI, 'get', '')
        .then(data => {
          setList(data.result)
        })
    }
  
    return [loader, toggleComplete, deleteItem]
  }
  
  export default useList;
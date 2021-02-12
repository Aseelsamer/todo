import {useState} from 'react';

const useForm = (callback) => {
    const [item, setItem] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        callback(item);
    }
    const handleInputChange = (e) => {
    
        setItem({ ...item, [e.target.name]: e.target.value });
        console.log("Generic Hook Change Handler", item)
    }
   
    return [handleSubmit, handleInputChange, item];
}

export default useForm;
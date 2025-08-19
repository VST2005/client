import axios from 'axios';
 const API = axios.create({
    baseURL :'https://serverapi-7wt0.onrender.com/api',
    withCredentials:true,  //agar cookies ka use ho rha hai
 });

export default API;

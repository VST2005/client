import axios from 'axios';
 const API = axios.create({
    baseURL :'http://localhost:3000/api',
    withCredentials:true,  //agar cookies ka use ho rha hai
 });

export default API;

import axios from 'axios';

export default axios.create({
    baseURL:' https://65f5-119-252-201-77.ngrok-free.app',
    headers: {'ngrok-skip-browser-warning':'true'}
});
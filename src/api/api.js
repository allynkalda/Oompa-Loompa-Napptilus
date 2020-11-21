import axios from 'axios';

const getOompas = () => {
    const results = axios.get('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas');
    return results;
}

const getOneOompa = (id) => {
    const results = axios.get(`https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`);
    return results;
}
export { getOompas, getOneOompa };
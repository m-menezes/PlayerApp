import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api-v3.igdb.com',
  headers: {
    'Content-Type': 'application/json',
    'user-key': 'df6f9bb21a35b3bbb3eabc28f33af300',
  }
});
export default Api;

//df6f9bb21a35b3bbb3eabc28f33af300
//7b1ad61d038c49f102d0d394fbe31e2a
import Api from '../utils/api';
import { useLocalStorage } from './useLocalStorage';

export const useApi = () => {
    const { readLS } = useLocalStorage();
    const config = {
        url : 'https://api.green-api.com/',
        idInstance: readLS('idInstance'),
        apiTokenInstance:readLS('apiTokenInstance'),
        stateInstance:readLS('stateInstance')
    };
  return new Api(config)
}
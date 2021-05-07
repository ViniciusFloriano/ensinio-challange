import { ItemProps } from '../interfaces/requestInterfaces';
import api from './api';

const getItems: () => Promise<ItemProps[]> = async () => {
  const items = await api.get('/items').then((response) => response.data);
  return items;
};

export default getItems;

import axios from 'axios';
import { TripProps } from '../interfaces';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/mariosanz92/dream-travels-data',
});

export const getTrips = async (): Promise<TripProps[]> => {
  const response = await api.get('/travels');
  return response.data;
};
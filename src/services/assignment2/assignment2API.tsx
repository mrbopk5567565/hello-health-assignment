import APIInstance from '../configApi';
import { IListEmployees } from 'models/assignment2'
import { AxiosResponse, AxiosStatic } from "axios";



export const getEmployees = async () => {
  const res = await APIInstance.get<IListEmployees[]>(`${process.env.REACT_APP_HELLO_HEALTH_API}/employees`)
  return res
}
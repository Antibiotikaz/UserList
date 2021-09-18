import * as types from "../types/userTypes";
import axios from "axios";
import {Action, Dispatch } from "redux";
const hostUrl = "https://reqres.in";

export interface UserInterface {
  id:number,
  email:string,
  first_name:string,
  last_name:string,
  avatar:string,
}

export interface GetUsers
  extends Action<typeof types.GET_USERS> {
    payload: {data:UserInterface, total_pages:number, page:number}
  }
  export interface EditUser
  extends Action<typeof types.EDIT_USER> {
    payload: {id:number,name: string, lastName:string, email: string, avatar:string}
  }
  export interface AddUser
  extends Action<typeof types.ADD_USER> {
    payload: UserInterface
  }

  export interface DeleteUser
  extends Action<typeof types.DELETE_USER> {
    payload: number
  }

export type Actions =
  | GetUsers | EditUser | AddUser | DeleteUser



export const getUsers = () => async (dispatch: Dispatch) => {
  try {
    const responseData = await axios.get(`${hostUrl}/api/users`);
    dispatch({
      type: types.GET_USERS,
      payload: responseData.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUsersForPagination = (index: number) => async (dispatch: Dispatch) => {
  try {
    const responseData = await axios.get(`${hostUrl}/api/users?page=${index}`);
    dispatch({
      type: types.GET_USERS,
      payload: responseData.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const editUser = (body:UserInterface) => async (dispatch: Dispatch) => {

  try {
    const responseData = await axios.put(`${hostUrl}/api/users/2`, body);
    dispatch({
      type: types.EDIT_USER,
      payload: responseData.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addUser = (body:UserInterface) => async (dispatch: Dispatch) => {

  try {
    const responseData = await axios.post(`${hostUrl}/api/users`, body);
    dispatch({
      type: types.ADD_USER,
      payload: responseData.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = (id:number) =>  (dispatch: Dispatch) => {
  try {
    dispatch({
      type: types.DELETE_USER,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};



import * as types from "../types/userTypes";
import {Actions} from '../Actions/userActions'
import {UserInterface} from "../Actions/userActions"
interface InitialStateInterface {
  users:  Array<UserInterface>,
  total_pages:number,
  page:number,
}

const initialState:InitialStateInterface = {
  users: [],
  total_pages: 0,
  page:1,
};

const playerReducer = (state = initialState, action: Actions) => {

  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload.data,
        total_pages: action.payload.total_pages,
        page:action.payload.page
      };
    case types.EDIT_USER:
        return {
          ...state,
          users: state.users.map((user) => user.id === action.payload.id ? 
          {...user, 
            id:action.payload.id,
            first_name: action.payload.name, 
            last_name: action.payload.lastName,
            email: action.payload.email,
            avatar: action.payload.avatar
          }
            : user)
            
         
        }
         
      case types.ADD_USER:
        return {
          ...state,
          users: [action.payload, ...state.users]
            
        }
      case types.DELETE_USER:
        return {
          ...state,
          users: [
            ...state.users.filter( user =>{
              return user.id !== action.payload
            })
          ]
    
          }
    default:
      return state;
  }
};



export default playerReducer;

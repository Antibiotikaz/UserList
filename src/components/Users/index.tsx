import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/Actions/userActions';
import User from '../../containers/UserList/User/index'
import {UserInterface} from '../../store/Actions/userActions'
import { RiUserAddLine } from 'react-icons/ri';
import Modal from 'simple-react-modal'
import AddModal from '../Modals/AddModal';

const Users = () => {
    const users = useSelector((state: any) => state.userData.users);
    const [openAddModal, setOpenAddModal] = useState<boolean>(false);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUsers());
    }, []);
    if (!users) {
      return <div>Loading...</div>;
    }
    
    const add = () => {
      setOpenAddModal(true)
  }

    const closeAdd= () => {
      setOpenAddModal(false)
  }
    return (
        <React.Fragment>
          <div style={{marginLeft:"1rem"}} >
        <RiUserAddLine data-testid="Add_user" cursor="pointer" size="2rem" color="green" onClick={() => add()}/>
          </div>
      
        <ul data-testid="user-list">
        {users.map((user: UserInterface, index:number) => {
          return <User key={index} user={user}/>
        })}
        </ul>
        <Modal show={openAddModal} onClose={closeAdd}  closeOnOuterClick={true}>
            <AddModal close={closeAdd}/>
        </Modal>
        </React.Fragment>
      
       
    )
}

export default Users

import classes from './User.module.scss'
import { BiEditAlt } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import Modal from 'simple-react-modal'
import React, { useState } from 'react';
import EditModal from '../../../components/Modals/EditModal'
import NoProfile from '../../../assets/images/no_profile.png'
import PopUp from '../../PopUp/index'

interface UserInterface {
    user: {
        first_name: string;
        last_name: string;
        avatar: string;
        email:string;
        id:number;
    }
}

const UserList = (props:UserInterface) => {
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [showPopUp, setShowPopUp] = useState<boolean>(false)

    const edit = () => {
        setOpenEditModal(true)
    }

    const closeEdit= () => {
        setOpenEditModal(false)
    }
    const removeUser = () => {
      
        setShowPopUp(true)
    }

    const closePopUp =() => {
        setShowPopUp(false)
    }


    return (
        <React.Fragment>
        <li className={classes.UserBox}>
            <div> <img onError={(e:any) => e.target.src = NoProfile} src={props.user.avatar} alt={`user-avatar-${props.user.first_name}`}  /></div>
            <div>    
            <p><span>Id:</span> {props.user.id}</p>
            <p><span>Name:</span> {props.user.first_name}</p>
            <p><span>Surname:</span> {props.user.last_name}</p>
            <p><span>Email: </span>{props.user.email}</p>
            </div>
            <div>  <BiEditAlt data-testid={`Edit_user${props.user.id}`} color="blue" onClick={() =>edit()}/>
            <MdDelete data-testid={`Delete_user${props.user.id}`} color="red"  onClick={() => removeUser()}/></div>
           
        
          

          
        </li>
        <Modal   show={openEditModal} onClose={closeEdit}  closeOnOuterClick={true}>
            <EditModal user={props.user} close={closeEdit}/>
        </Modal>
        {showPopUp? <PopUp closePop={closePopUp} name={props.user.first_name} userId={props.user.id} />: null}
        </React.Fragment>
       
    )
}

export default UserList
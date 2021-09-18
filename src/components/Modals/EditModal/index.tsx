import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editUser } from '../../../store/Actions/userActions';
import classes from '../Modals.module.scss'

interface UserInterface {
    user: {
        first_name: string;
        last_name: string;
        avatar: string;
        email:string;
        id:number;
    }
    close: () => void
}

const EditModal = (props:UserInterface) => {
const dispatch = useDispatch();
const [name, setName] = useState<string>(props.user.first_name)
const [lastName, setLastName] = useState<string>(props.user.last_name)
const [email, setEmail] = useState<string>(props.user.email)
const [error, setError] = useState<boolean>(false)
const [errorMsg, setErrorMsg] = useState<string>('')
const body = {
    id: props.user.id,
    name,
    lastName,
    email,
    avatar: props.user.avatar
}

const submit = () => {
    if(!email){
        setError(true)
        setErrorMsg("You forgot to enter name!")
    }else if(!name){
        setError(true)
        setErrorMsg("You forgot to enter lastname!")
    } else if(!lastName) {
        setError(true)
        setErrorMsg("You forgot to enter email!")
    }
    else {
        setError(false)
        dispatch(editUser(body))
        props.close()
    }
  
}
// reset error msg


return <div className={classes.ModalContainer}>
<h1>Edit user</h1>
<div className={classes.Form}>

<div className={classes.InputField}>
<label htmlFor="">Email</label>
<input name={`email${props.user.id}`} type="text" onChange={(e)=> setEmail(e.target.value)} value={email} maxLength={24}/>
</div>

<div className={classes.InputField}>
<label htmlFor="">First name</label>
<input name={`firstName${props.user.id}`} type="text" onChange={(e)=> setName(e.target.value)} value={name} maxLength={12}/>
</div>

<div className={classes.InputField}>
<label htmlFor="">Last name</label>
<input name={`lastName${props.user.id}`} type="text" onChange={(e)=> setLastName(e.target.value)} value={lastName} maxLength={12}/>
</div>

{error ?<div className={classes.Error}>{errorMsg}</div> : null}

<button type="submit" onClick={() => submit()}>Edit user</button>
</div>
</div>
}

export default EditModal
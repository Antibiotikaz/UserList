import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../../../store/Actions/userActions';
import classes from '../Modals.module.scss'

interface UserInterface {
 
    close: () => void
}

const AddModal = (props:UserInterface) => {
const dispatch = useDispatch();
const [name, setName] = useState<string>('')
const [lastName, setLastName] = useState<string>('')
const [email, setEmail] = useState<string>('')
const [error, setError] = useState<boolean>(false)
const [errorMsg, setErrorMsg] = useState<string>('')
const body = {
    // This is what I'm about to do is called  a pro developer move
    // Actualy I cant get at one time all users so can't increment id. From API I am getting total 12 witch never changes.
    id: Math.floor(Math.random() * (100 - 13) + 13),
    first_name :name,
    last_name: lastName,
    email,
    avatar: 'no-image'
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
        dispatch(addUser(body))
        props.close()
    }
  
}
// reset error msg


return <div className={classes.ModalContainer}>
<h1>Add new user</h1>
<div className={classes.Form}>

<div className={classes.InputField}>
<label htmlFor="">Email</label>
<input name="email" type="email" onChange={(e)=> setEmail(e.target.value)} maxLength={24}/>
</div>

<div className={classes.InputField}>
<label htmlFor="">First name</label>
<input name="firstName" type="text" onChange={(e)=> setName(e.target.value)} maxLength={12}/>
</div>

<div className={classes.InputField}>
<label htmlFor="">Last name</label>
<input name="lastName" type="text" onChange={(e)=> setLastName(e.target.value)} maxLength={12}/>
</div>

{error ?<div className={classes.Error}>{errorMsg}</div> : null}

<button type="submit" onClick={() => submit()}>Add user</button>
</div>
</div>
}

export default AddModal
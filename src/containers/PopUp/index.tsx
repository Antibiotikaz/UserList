import classes from './PopUp.module.scss'
import { RiAlarmWarningFill } from 'react-icons/ri';
import { deleteUser } from '../../store/Actions/userActions';
import { useDispatch } from 'react-redux';

interface PopUpInterface {
    name: string,
    userId:number,
    closePop: () => void
}


const PopUp = (props:PopUpInterface) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(deleteUser(props.userId))
        props.closePop();
    }
  return <div className={classes.PopUpContainer}>
      <RiAlarmWarningFill color="red" size="3rem"/>
      <h1>Are you sure you want to delete {props.name}?</h1>
      <div className={classes.Buttons}>
      
      <button data-testid="yes" onClick={() => deleteHandler()}>Yes</button>
      <button data-testid="no"  onClick={() => props.closePop()}>No</button>
      </div>
 
      </div>
}

export default PopUp
import React from 'react';
import {getUsersForPagination } from '../../store/Actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Pagination.module.scss'

const Pagination = () => {
  const totalPages = useSelector((state: any) => state.userData.total_pages);
  const currentPage = useSelector((state: any) => state.userData.page);
  
    const dispatch = useDispatch();
    const getUserPage = (index:number) => {
      dispatch(getUsersForPagination(index));
    }
    let maxPages: Array<number>= [];
    for (let index = 0; index < totalPages; index++) {
      maxPages.push(index + 1)
    }
    return (
        <div className={classes.PaginationContainer}>
          {currentPage > 1 ?<div onClick={() => getUserPage(currentPage -1)}>Previous</div> : null}
          
          {maxPages.map((page:number) => {
            return <div key={page} onClick={() => getUserPage(page)}>{page}</div>
          })}
          {currentPage === totalPages ?null :  <div onClick={() => getUserPage(currentPage + 1)}>Next</div> }
        
          {/* <div>Current page : {currentPage}</div> */}
        </div>
      
       
    )
}

export default Pagination
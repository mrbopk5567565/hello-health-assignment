import React, { useEffect, useState, MouseEvent } from "react";
import { getEmployees } from 'services/assignment2/assignment2API'
import './styles.scss';
import NextButton from './components/NextButton';
import PrevButton from './components/PrevButton';
import DecrementButton from './components/DecrementButton';
import IncrementButton from './components/IncrementButton';
import PageNumber from './components/PageNumber';

interface IListEmployees {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  position: string;
}

interface IPagination {
  todos: IListEmployees[],
  currentPage: number,
  todosPerPage: number,
  upperPageBound: number,
  lowerPageBound: number,
  isPrevBtnActive: string,
  isNextBtnActive: string,
  pageBound: number,
}

const initPagination: IPagination = {
  todos: [],
  currentPage: 1,
  todosPerPage: 5,
  upperPageBound: 3,
  lowerPageBound: 0,
  isPrevBtnActive: 'disabled',
  isNextBtnActive: '',
  pageBound: 3
}

const Assignment2: React.FC = () => {
  const [pagination, setPagination] = useState(initPagination)
  const [selectPage, setSelectPage] = useState<number>(1)
  useEffect(() => {
    const fetchEmployees = async () => {
      let fetchEmployees: any = await getEmployees()
      setPagination({
        ...pagination,
        todos: fetchEmployees
      })
    }

    fetchEmployees()
  }, [])

  const setPrevAndNextBtnClass = (listid, paginationFlag) => {
    // let paginationFlag = { ...pagination }
    let totalPage = Math.ceil(pagination.todos.length / pagination.todosPerPage);
    paginationFlag = {
      ...paginationFlag,
      isNextBtnActive: 'disabled',
      isPrevBtnActive: 'disabled',
    }
    if (totalPage === listid && totalPage > 1) {
      paginationFlag = {
        ...paginationFlag,
        isPrevBtnActive: '',
      }
    }
    else if (listid === 1 && totalPage > 1) {
      paginationFlag = {
        ...paginationFlag,
        isNextBtnActive: '',
      }
    }
    else if (totalPage > 1) {
      paginationFlag = {
        ...paginationFlag,
        isPrevBtnActive: '',
        isNextBtnActive: '',
      }
    }
    setPagination({ ...paginationFlag })
  }

  const btnPrevClick = () => {
    let paginationFlag = { ...pagination }
    if ((pagination.currentPage - 1) % pagination.pageBound === 0) {
      paginationFlag = {
        ...paginationFlag,
        upperPageBound: pagination.upperPageBound - pagination.pageBound,
        lowerPageBound: pagination.lowerPageBound - pagination.pageBound
      }
    }
    let listid = pagination.currentPage - 1;
    paginationFlag = {
      ...paginationFlag,
      currentPage: listid,
    }
    // setPagination({...paginationFlag})
    setPrevAndNextBtnClass(listid, paginationFlag);
  }

  const btnNextClick = () => {
    let paginationFlag = { ...pagination }
    if ((pagination.currentPage + 1) > pagination.upperPageBound) {
      paginationFlag = {
        ...paginationFlag,
        upperPageBound: pagination.upperPageBound + pagination.pageBound,
        lowerPageBound: pagination.lowerPageBound + pagination.pageBound
      }
    }
    let listid = pagination.currentPage + 1;
    paginationFlag = {
      ...paginationFlag,
      currentPage: listid,
    }
    // setPagination({...paginationFlag})
    setPrevAndNextBtnClass(listid, paginationFlag);
  }

  const btnDecrementClick = () => {
    let paginationFlag = { ...pagination }
    paginationFlag = {
      ...paginationFlag,
      upperPageBound: pagination.upperPageBound - pagination.pageBound,
      lowerPageBound: pagination.lowerPageBound - pagination.pageBound,
    }
    let listid = pagination.upperPageBound - pagination.pageBound;
    paginationFlag = {
      ...paginationFlag,
      currentPage: listid,
    }
    // setPagination({...paginationFlag})
    setPrevAndNextBtnClass(listid, paginationFlag);
  }

  const btnIncrementClick = () => {
    let paginationFlag = { ...pagination }
    paginationFlag = {
      ...paginationFlag,
      upperPageBound: pagination.upperPageBound + pagination.pageBound,
      lowerPageBound: pagination.lowerPageBound + pagination.pageBound,
    }
    let listid = pagination.upperPageBound + 1;
    paginationFlag = {
      ...paginationFlag,
      currentPage: listid,
    }
    // setPagination({...paginationFlag})
    setPrevAndNextBtnClass(listid, paginationFlag);
  }

  const handleClickPage = (event: MouseEvent<HTMLButtonElement>, number: number) => {
    let paginationFlag = { ...pagination }
    let listid = number;
    // setSelectPage
    paginationFlag = {
      ...paginationFlag,
      currentPage: listid,
    }
    // setPagination({...paginationFlag})
    // $("ul li.active").removeClass('active');
    // $('ul li#'+listid).addClass('active');
    setPrevAndNextBtnClass(listid, paginationFlag);
  }

  const indexOfLastTodo = pagination.currentPage * pagination.todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - pagination.todosPerPage;

  return (
    <div className="container">
      {pagination.todos.length !== 0 &&
        <>
          <div className="container--table">
            <table className="container--table__employee">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {pagination.todos.slice(indexOfFirstTodo, indexOfLastTodo).map((user, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.position}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="container--pagination">
            <PrevButton
              isPrevBtnActive={pagination.isPrevBtnActive}
              onClick={btnPrevClick}
            />
            <DecrementButton
              lowerPageBound={pagination.lowerPageBound}
              onClick={btnDecrementClick}
            />
            <PageNumber
              pageNumbers={Math.ceil(pagination.todos.length / pagination.todosPerPage)}
              upperPageBound={pagination.upperPageBound}
              onClick={(event, number) => handleClickPage(event, number)}
              currentPage={pagination.currentPage}
              lowerPageBound={pagination.lowerPageBound}
            />
            <IncrementButton
              pageNumbers={Math.ceil(pagination.todos.length / pagination.todosPerPage)}
              upperPageBound={pagination.upperPageBound}
              onClick={btnIncrementClick}
            />
            <NextButton
              isNextBtnActive={pagination.isNextBtnActive}
              onClick={btnNextClick}
            />
          </div>
        </>
      }
    </div>
  )
}

export default Assignment2;
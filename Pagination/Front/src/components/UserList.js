import React, {useState, useEffect} from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import ReactPaginate from 'react-paginate';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page,setPage] = useState(0);
    const [limit,setLimit] = useState(10);
    const [pages,setPages] = useState(0);
    const [rows,setRows] = useState(0);
    const [keyword,setKeyword] = useState("");

    useEffect(() => {
        getUsers();
    }, [page, keyword]);


    const getUsers = async () => {
    const response = await axios.get(`http://localhost:9000/users?search_query=${keyword}&page=${page}&limit=${limit}`);
    setUsers(response.data.result);
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
    };

    const changePage = ({selected}) => {
      setPage(selected);
    };
    
  return (
<div className='container items-center justify-center'>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.gender}</td>
        </tr>
        ))}
      </tbody>
    </Table>  
    <p>toal baris : {rows} page: {rows ? page + 1 : 0} of {pages} </p>

    <nav className='pagination' role="navigation" aria-label='pagination'>
      <ReactPaginate 
      previousLabel={"<=="}
      nextLabel={"==>"}
      pageCount={pages}
      onPageChange={changePage} 
      containerClassName={"pagination-list"} 
      pageLinkClassName={"pagination-link"}
      previousLinkClassName={"pagination-previous"}
      nextLinkClassName={"pagination-next"}
      activeLinkClassName={"pagination-link is-current"} 
      disabledLinkClassName={"pagination-link is-disable"}/>
      </nav>
</div>

  );
};

export default UserList
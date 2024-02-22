import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Table from '~/components/Table/Table';
import { showAll } from "~/services/showListStudentServices";

function Home() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
      let data = showAll();
      setStudents(data);
    }, []);

    return ( 
      <div className='ShowStudentList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Danh sách sinh viên</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/student/create'
              className='btn btn-lg btn-outline-warning float-right'
            >
              + Thêm sinh viên 
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>
            {students.length === 0 ? <h4>Danh sách trống !!!</h4> : <Table studentsData={students}></Table> }
        </div>
      </div>
    </div>
  );
}

export default Home;
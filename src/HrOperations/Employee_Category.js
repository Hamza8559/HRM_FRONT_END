import React, { useState } from 'react'
import Header from '../components/Includes/Header';
import Input from "../components/basic/input";
import { Button } from "../components/basic/button";
import { Space, Table, Tag, Tooltip } from 'antd';
import EmployeeCategoryForm from './form/EmployeeCategoryForm';
import './assets/css/EmployeeCategory.css'



const Employee_Category = () => {
  const [mode, setMode] = useState('read')

  const columns = [
    {
      title: 'Division Code',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Division Head',
      dataIndex: 'Division Head',
      key: 'Division Head',
    },
    {
      title: 'Short Key',
      dataIndex: 'Short Key',
      key: 'Short Key',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => setMode('Edit')} className="editBtn"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
          <button className="deleteBtn"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      Abbreviation: 'New York No. 1 Lake Park',
    },
  ];
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 maringClass">

            {mode == "read" && (
              <>
                <div className="EmployeeCategoryFlexBox">
                  <h4 className="text-dark">Employee Category</h4>
                  <div className="EmployeeCategorysearchBox">
                    <Input placeholder={'Search Here...'} type="search" />
                    <Button title="Create" onClick={() => setMode("create")} />
                  </div>
                </div>
                <hr />
              </>
            )}

            <div>
              {mode == "read" && (
                <Table columns={columns} dataSource={data} scroll={{ x: 10 }} />
              )}
              {mode == "create" && (
                <EmployeeCategoryForm cancel={setMode} />
              )}
              {mode == "Edit" && (
                <EmployeeCategoryForm cancel={setMode} />
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Employee_Category
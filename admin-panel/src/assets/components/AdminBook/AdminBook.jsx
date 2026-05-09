

import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import "./adminbook.css"

const AdminBook = () => {
  return (
    <div>
        <div className="DashboardContent">
                      <div className="DashboardText">
                        <h2>book</h2>
                      </div>
                      <div className="TableSearch">
                        <div className="serchinp">
                          <CiSearch  className='serchinpicon'/>
                          <input  placeholder='search' type="text" />
                        </div>
                        <div className="searchbtn">
                          <FaPlus className='searchbtnicon' />
                          <button>Add Book</button>
                        </div>
                      </div>
                    <div className="tablecontainer">
                        <table>
                        <thead>
                          <tr>
                            <th>Şəkil</th>
                            <th>Kitabın Adı</th>
                            <th>Müəllifin Adı</th>
                            <th>Yer</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td className='actionbtn'>
                              <button><MdModeEdit /></button>
                              <button><AiFillDelete /></button>
                            </td>
                          </tr>
                          <tr>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td className='actionbtn'>
                              <button><MdModeEdit /></button>
                              <button><AiFillDelete /></button>
                            </td>
                          </tr>
                          <tr>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td className='actionbtn'>
                              <button><MdModeEdit /></button>
                              <button><AiFillDelete /></button>
                            </td>
                          </tr>
                          <tr>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td className='actionbtn'>
                              <button><MdModeEdit /></button>
                              <button><AiFillDelete /></button>
                            </td>
                          </tr>
                          <tr>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td className='actionbtn'>
                              <button><MdModeEdit /></button>
                              <button><AiFillDelete /></button>
                            </td>
                          </tr>
                          <tr>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td>salam</td>
                            <td className='actionbtn'>
                              <button><MdModeEdit /></button>
                              <button><AiFillDelete /></button>
                            </td>
                          </tr>
                          
                         
                        </tbody>
                      </table>
                    </div>
                    </div>
    </div>
  )
}

export default AdminBook

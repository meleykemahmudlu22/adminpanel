
import { FaBookAtlas } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { IoIosBook } from "react-icons/io";
import { IoIosBookmark } from "react-icons/io";
// import { MdModeEdit } from "react-icons/md";
// import { AiFillDelete } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";


import "./admin.css"
import Adminpress from "../adminpress/Adminpress";
import AdminBook from "../AdminBook/AdminBook";
import { useState } from "react";

const Admin = () => {
  const [page,setPage]=useState("books")

  return (
    <div>
      <div className="AdminContainer">
        <div className="AdminDashbord">
         
            <div className="book">
               <div className="Adminprofile">
            <div className="profilimage">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5GX1lkI6T4INseXlhyZhaGMtq07LNid9Tw&s" alt="" />
            </div>
            <div className="profiletname">
              <h2>Məleykə Mahmudlu</h2>
            </div>
          </div>
              <div className="booktext">
                <div className="bookicon">
                  <FaBook />
                 <p onClick={()=>setPage("books")}>book</p>
              
              </div>
              <div className="bookicon">
                <FaBookAtlas />
                 <p>e-book</p>
              </div>
             <div className="bookicon">
              <IoIosBook />
                <p onClick={()=>setPage("metbuat")}>dövrü mətbuat</p>
             </div>
             <div className="bookicon">
              <IoIosBookmark />
              <p>e-dövrü-mətbuat</p>
             </div>
              </div>
            
              
            </div>
        </div>
        <div className="DashboardContent">
          {/* <div className="DashboardText">
            <h2>Kitablar</h2>
          </div> */}
          {/* <div className="TableSearch">
            <div className="serchinp">
              <CiSearch  className='serchinpicon'/>
              <input  placeholder='search' type="text" />
            </div>
            <div className="searchbtn">
              <FaPlus className='searchbtnicon' />
              <button>Add Book</button>
            </div>
          </div> */}
        <div className="tablecontainer">
          {page==="books"&&<AdminBook/>}
          {page==="metbuat"&&<Adminpress/>}
            {/* <table>
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
          </table> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Admin

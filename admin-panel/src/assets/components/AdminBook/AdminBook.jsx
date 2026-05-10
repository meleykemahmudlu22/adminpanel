

import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import "./adminbook.css"

const AdminBook = () => {
  const[bookopen,setBookopen]=useState(false)
  const [data, setData] = useState([])
  const [booksearch,setBooksearch]=useState("")
  const [title,setTitle]=useState("")
  const [image,setImage]=useState("")
  const [edit,setEdit]=useState(false)

  async function getAddBook (){
try {
  let {data}=await axios.get("https://678e58c7a64c82aeb1200f8c.mockapi.io/new")
  setData(data)
 
} catch (error) {
  console.error(error);
  
}
 }

  useEffect(()=>{
   getAddBook()
  },[])
const filteredbook = data
    .filter(item =>
      item.mehsul?.toLowerCase().includes(booksearch.toLowerCase()) 
    )

   async function getdataDelete (id){
await axios.delete(`https://678e58c7a64c82aeb1200f8c.mockapi.io/new/${id}`)
setData(data.filter(item=>item.id !==id))
    }
   async function getPost (){
await axios.post(`https://678e58c7a64c82aeb1200f8c.mockapi.io/new`,{
title,
image
})
getAddBook()
    }
  return (
    <div>
        <div className="DashboardContent">
                      <div className="DashboardText">
                        <h2>book</h2>
                      </div>
                      <div className="TableSearch">
                        <div className="serchinp">
                          <CiSearch  className='serchinpicon'/>
                          <input value={booksearch}
              onChange={(e) => setBooksearch(e.target.value)}  placeholder='search' type="text" />
                        </div>
                        <div className="searchbtn">
                          <FaPlus className='searchbtnicon' onClick={()=>setBookopen(!bookopen)} />
                          <button>Add Book</button>
                         {
                          bookopen&&(
                             <div className="addbokdropdown">
                           <div className="dropdowninp">
                            <h2>Add book</h2>
                            <input onChange={(e)=>setTitle(e.target.value)} placeholder="kitabın adı" type="text" />
                            <input  placeholder="author" type="text" />
                            <input value={image} onChange={(e)=>setImage(e.target.value)} placeholder="image" type="text" />
                            <input placeholder="plane" type="text" />
                            <button onClick={getPost}>Add</button>
                           </div>
                          </div>
                          )
                         }
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
      {filteredbook.map(item => (
        <tr key={item.id}>
          <td><img src={item.image} alt={item.mehsul} /></td>
          <td>{item.mehsul}</td>
          <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, nobis.</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, exercitationem.</td>
          <td className='actionbtn'>
            <button onClick={()=>setEdit(!edit)} ><MdModeEdit /></button>
          {
            edit&&(
                <div className="edirdropdown">
               
              <div className="editdiv">
               <h2>Edit book</h2>
                            <input  placeholder="kitabın adı" type="text" />
                            <input  placeholder="author" type="text" />
                            <input  placeholder="image" type="text" />
                            <input placeholder="plane" type="text" />
                            <button >Add</button>
              </div>
            </div>
            )
          }
            <button onClick={()=>getdataDelete(item.id)}><AiFillDelete /></button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

                    </div>
    </div>
  )
}

export default AdminBook

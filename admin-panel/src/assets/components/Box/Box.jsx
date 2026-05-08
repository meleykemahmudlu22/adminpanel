import React, { useEffect, useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import axios from 'axios';
import "./box.css"
import { Link } from 'react-router-dom'
const Box = () => {
      const [data,setData]= useState([])
      const [search,setSearch]=useState("")
      const [open,setOpen]=useState(false)
      const[category,setCategory]=useState("All")

      
     useEffect(() => {
     async function getdata(){
      let {data}= await axios.get("https://678e58c7a64c82aeb1200f8c.mockapi.io/new")
      setData(data)
     }
     getdata()
     }, [])

     const fileterdata=data.filter(item=>item.mehsul.toLowerCase().includes(search.toLowerCase())
     &&(category=== "All"||item.category===category))

  return (
    <div>
        <Link to="/admin">
        <button>admin</button>
        </Link>
        
    <div className="BoxContainer">
        <div className="Boxfilter">
            <div className="boxinp">
                <input value={search} onChange={(e)=>setSearch( e.target.value)} placeholder='search' type="text" />
            </div>
            <div className="BoxFilterBtn">
                < SlArrowDown className='filtericon' onClick={()=>setOpen(!open)}/>
                <button onClick={() => setOpen(!open)} >All Categories</button>
               {
                open&&(
                     <div className="filterdropdown">
                    <nav>
                        <ul>
                            <li onClick={()=>setCategory("All")}>All</li>
                            <li onClick={()=>setCategory("smartfon")}>Smartfon</li>
                            <li onClick={()=>setCategory("noutbuk")}>Noutbuk</li>
                            <li onClick={()=>setCategory("fotoaparat")}>Fotoaparatlar</li>
                        </ul>
                    </nav>
                </div>
                )
               }
            </div>
            <div className="BoxFilterBtn">
                <button>Price</button>
            </div>
        </div>
<div className="BoxsCommon">
    <div className="BoxTopText">
         <h2>Product Listing</h2>
            <hr />
    </div>

           <div className="BoxsbottmContainer">
             {
                fileterdata.slice(0,4).map(item=>(
                     <div className="Boxs">
           
            <div className="BoxImg">
                <img src={item.image} alt="" />
                {/* <img src="https://pyxis.nymag.com/v1/imgs/028/063/d1e1b78f6e19bc6394fba48efd8689d162-normal-people.2x.rsocial.w600.jpg" alt="" /> */}
            </div>
            <div className="BoxTitle">
                <p>Title: {item.mehsul}</p>
                <p>Price: 120$</p>
            </div>
            <div className="BoxBtn">
                <button>detail</button>
            </div>
        </div>
                ))
             }
             {/* <div className="Boxs">
           
            <div className="BoxImg">
                <img src="https://pyxis.nymag.com/v1/imgs/028/063/d1e1b78f6e19bc6394fba48efd8689d162-normal-people.2x.rsocial.w600.jpg" alt="" />
            </div>
            <div className="BoxTitle">
                <p>Title: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, suscipit?</p>
                <p>Price: 120$</p>
            </div>
            <div className="BoxBtn">
                <button>detail</button>
            </div>
        </div>
             <div className="Boxs">
           
            <div className="BoxImg">
                <img src="https://pyxis.nymag.com/v1/imgs/028/063/d1e1b78f6e19bc6394fba48efd8689d162-normal-people.2x.rsocial.w600.jpg" alt="" />
            </div>
            <div className="BoxTitle">
                <p>Title: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, suscipit?</p>
                <p>Price: 120$</p>
            </div>
            <div className="BoxBtn">
                <button>detail</button>
            </div>
        </div>
             <div className="Boxs">
           
            <div className="BoxImg">
                <img src="https://pyxis.nymag.com/v1/imgs/028/063/d1e1b78f6e19bc6394fba48efd8689d162-normal-people.2x.rsocial.w600.jpg" alt="" />
            </div>
            <div className="BoxTitle">
                <p>Title: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, suscipit?</p>
                <p>Price: 120$</p>
            </div>
            <div className="BoxBtn">
                <button>detail</button>
            </div>
        </div> */}
           </div>
</div>
       
    </div>
    </div>
  )
}

export default Box

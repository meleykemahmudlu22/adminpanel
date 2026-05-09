import React, { useEffect, useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import axios from 'axios';
import "./box.css"
import { Link } from 'react-router-dom'

const Box = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)          
  const [sortOpen, setSortOpen] = useState(false)  
  const [sort, setSort] = useState("")             
  const [category, setCategory] = useState("All")  

  useEffect(() => {
    async function getdata() {
      let { data } = await axios.get("https://678e58c7a64c82aeb1200f8c.mockapi.io/new")
      setData(data)
    }
    getdata()
  }, [])

  const filteredData = data
    .filter(item =>
      item.mehsul.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category)
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price
      if (sort === "high") return b.price - a.price
      return 0
    })

  return (
    <div>
      <Link to="/admin">
        <button>admin</button>
      </Link>

      <div className="BoxContainer">
        <div className="Boxfilter">
       
          <div className="boxinp">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='search'
              type="text"
            />
          </div>

         
          <div className="BoxFilterBtn">
            <SlArrowDown className='filtericon' onClick={() => setOpen(!open)} />
            <button onClick={() => setOpen(!open)}>All Categories</button>
            {open && (
              <div className="filterdropdown">
                <nav>
                  <ul>
                    <li onClick={() => setCategory("All")}>All</li>
                    <li onClick={() => setCategory("smartfon")}>Smartfon</li>
                    <li onClick={() => setCategory("noutbuk")}>Noutbuk</li>
                    <li onClick={() => setCategory("fotoaparat")}>Fotoaparatlar</li>
                  </ul>
                </nav>
              </div>
            )}
          </div>

          <div className="BoxFilterBtn">
            <SlArrowDown className='sorticon' onClick={() => setSortOpen(!sortOpen)} />
            <button onClick={() => setSortOpen(!sortOpen)}>Price</button>
            {sortOpen && (
              <div className='sortdropdown'>
                <nav>
                  <ul>
                    <li onClick={() => { setSort("low"); setSortOpen(false); }}>Low to High</li>
                    <li onClick={() => { setSort("high"); setSortOpen(false); }}>High to Low</li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>

     
        <div className="BoxsCommon">
          <div className="BoxTopText">
            <h2>Product Listing</h2>
            <hr />
          </div>

          <div className="BoxsbottmContainer">
            {filteredData.slice(0, 4).map(item => (
              <div className="Boxs" key={item.id}>
                <div className="BoxImg">
                  <img src={item.image} alt={item.mehsul} />
                </div>
                <div className="BoxTitle">
                  <p>Title: {item.mehsul}</p>
                  <p>Price: {item.price} AZN</p>
                </div>
                <div className="BoxBtn">
                  <button>detail</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Box

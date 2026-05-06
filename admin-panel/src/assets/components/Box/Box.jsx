import React from 'react'
import "./box.css"
const Box = () => {
  return (
    <div>
    <div className="BoxContainer">
        <div className="Boxfilter">
            <div className="boxinp">
                <input placeholder='search' type="text" />
            </div>
            <div className="BoxFilterBtn">
                <button>All Categories</button>
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
        </div>
           </div>
</div>
       
    </div>
    </div>
  )
}

export default Box

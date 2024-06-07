import React from 'react'

export default function BooksInfor({bookInfo}) {
  return (
    <div className='border-start border-1'>
        <h2>Book Details</h2>
        <div className='bg-body-secondary'>
          {bookInfo === null ?  <p className='m-0 p-3'>no books selected</p> :
          <>
           <p className='m-0 p-3'> title : {bookInfo.title}</p>
           <p className='m-0 p-3'> price : {bookInfo.price}</p>
           <p className='m-0 p-3'> description : {bookInfo.dd}</p>
           <p className='m-0 p-3'> author : {bookInfo.userName}</p>
           </>
           }
           
        </div>
    </div>
  )
}

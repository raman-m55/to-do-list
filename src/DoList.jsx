import React, { useState } from 'react'
import './dolist.css';


const DoList = ({item , index , dos , setDos}) => {
  const [editText , setEditText] = useState('');

  const handleEdit = () => {
    setEditText(item);
  }

  const handleDelete = () => {
    // از متغیر dos استفاده کرده و مورد موردنظر را حذف کنید
    const updatedDos = dos.filter((_, i) => i !== index);
    // با استفاده از setDos، لیست جدید را به‌روز کنید
    setDos(updatedDos);
  };
  
  const handleSave = () => {
    const updateDos = [...dos];
    updateDos[index] = editText ;
    setDos(updateDos);
  }

  const handleCancel = () => {
    setEditText('')
  }


  return (
    <div className='List'>
      <div className='btn'>
        <p>{item}</p>
        <button className='b1' onClick={handleDelete}>DELETE</button>
        <button className='b2' onClick={handleEdit}>EDIT</button>
      </div>

        {editText !== ""  ? (
          <div className='edi'>
            <input className='ine' value={editText} onChange={(e) => setEditText(e.target.value)}/>
            <div className='btns'>
              <button onClick={handleSave}>SAVE</button>
              <button onClick={handleCancel}>CANCEL</button>
            </div>

          </div>

        ) : undefined}
    </div>
  )
}

export default DoList

import React, { useState } from 'react'

const AddUserForm = props => {

  const initialFormState = {uuid: null, nickname: '',email:'',password:''}
  const [user,setUser]= useState(initialFormState)

  const handleInputChange = event => {
      const {name,value} = event.target
      setUser({...user, [name]:value})
  }


  return (
    <form
      onSubmit={event=>{
        event.preventDefault()
        if(!user.nickname || !user.email ||!user.password) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Nickname</label>
      <input type="text" name="nickname" value={user.nickname} onChange={handleInputChange} />
      <label>Email</label>
      <input type="text" name="email" value={user.email} onChange={handleInputChange}/>
      <label>Password</label>
      <input type="text" name="password" value={user.password} onChange={handleInputChange}/>
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm
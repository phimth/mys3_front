import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {

  const userData = [
    { uuid: 1, nickname: 'Tania', email: 'floppy@disket.te', password:'tania' },
    { uuid: 2, nickname: 'Craig', email: 'silicone@idol.on', password:'craig' },
    { uuid: 3, nickname: 'Ben', email: 'benis@phe.re',password:'ben' },
  ]

  const [users, setUsers] = useState(userData)
  const [editing,setEditing] = useState(false) 
  const initialFormState = {uuid:null, nickname:'',email:'',password:''}
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = user => {
    user.uuid = users.length+1
    setUsers([...users, user])
  }

  const deleteUser = uuid => {
    setEditing(false)
    setUsers(users.filter(user=>user.uuid !== uuid))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({uuid:user.uuid,nickname:user.nickname,email:user.email,password:user.password})
  }

  const updateUser = (uuid,updatedUser) =>{
    setEditing(false)
    setUsers(users.map(user=> user.uuid === uuid ? updatedUser : user))
  }

  return (
    <div className="container">
      <h1>My s3</h1>
      <div className="flex-row">
      <div className="flex-large">
  {editing ? (
    <div>
      <h2>Edit user</h2>
      <EditUserForm
        editing={editing}
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Add user</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users = {users} editRow={editRow} delete = {deleteUser}/>
        </div>
      </div>
    </div>
  )
}

export default App
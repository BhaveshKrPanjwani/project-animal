import './App.css';
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [form,setForm]=useState({
    id:'',name:''
  });
  const [submittedData, setSubmittedData] = useState([]);
useEffect(()=>{
    loadData();
  },[]);

  const loadData=async()=>{
    const response=await Axios.get('http://localhost:3003/users'); 
    setUsers(response.data);

  }

  const handle=(e)=>{
    setForm({
      ...form,[e.target.name]:e.target.value
    })

  }
  const handleSubmit=(e)=>{
    setSubmittedData([...submittedData,formData]);

  }
  return (
    <div>
  <form onSubmit={handleSubmit}>
    <input placeholder='enter name' type='text' value={form.name} onChange={handle}></input>
    <input placeholder='enter id' type='text' value={form.id} onChange={handle}></input>
  </form>

  <div>
    {
      submittedData.map((data,index)=>{
        {data.name} {data.id}
      }
      )

      }
    
  </div>
  </div>
  )
  // const [id,setId]=useState("");
  // const [name,setName]=useState("");
  // const [updated,setUpdated]=useState({id:"",name:""});
  // // {}

  // useEffect(()=>{
  //   loadData();
  // },[]);

  // const loadData=async()=>{
  //   const response=await Axios.get('http://localhost:3003/users'); 
  //   setUsers(response.data);

  // }

  // const addUser=(e)=>{
  //   e.preventDefault();
  //   Axios.post('http://localhost:3003/users',{id,name}).then(()=>{
  //     // why e.id and e.name is not here
  //     setId("");setName("");setTimeout(()=>loadData(),500);
  //   }).catch((err)=>{
  //     console.error("hi");
  //   });

  // }
  // const DeleteUser=(id)=>{
  //   Axios.delete(`http://localhost:3003/users/${id}`).then(()=>{
  //     setTimeout(()=>
  //       loadData(),500)
  //   }
  //   )
  // }

  // const UpdateUser=()=>{
  //   Axios.put(`http://localhost:3003/users/${updated.id}`,
  //    { id:updated.id,name:updated.name}
  //   ).then(()=>{
  //     console.log("ers");
  //   }).catch((e) => {console.log(e)}) ;
  //   setTimeout(()=>
  //     loadData(),500)
  // }
  // return(
  // <div>

  // <input placeholder='enter id' value={id} onChange={(e)=>{setId(e.target.value)}}></input>
  // <input placeholder='enter name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
  // <button onClick={addUser}>Add</button>
  // {
    
  //   users.map(e => ( 
  //     <div key={e.id}> 
  //       {e.id} {e.name}  <button onClick={() => {DeleteUser(e.id)}}>Delete</button>

  //      <input type='text' placeholder='enter updated id'onChange={(e)=>{setUpdated({...updated,id:e.target.value})}}></input>
  //      <input  type='text' placeholder='enter updated name'  onChange={(e)=>{setUpdated({...updated,name:e.target.value})}}></input>
  //      <button onClick={UpdateUser}>Update</button>
  //      </div>
       
  // ))}

  // </div>
  // )
}

export default App;
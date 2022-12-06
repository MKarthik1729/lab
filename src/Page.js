import React, { useRef, useState } from 'react';
import './page.css'

function Page({toggle,setToggle}) {
    const [detail,setDetail] = useState()
    const name = useRef()
    const mobno = useRef()
    const dob = useRef()
    const address = useRef()
    const gmail = useRef()
    function data(){
        console.log(name.current.value)
        console.log(mobno.current.value)
        console.log(dob.current.value)
        console.log(address.current.value)
        console.log(gmail.current.value)
        if(detail){
        setDetail([
            ...detail,
            {
            name:name.current.value,
            mobno:mobno.current.value,
            dob:dob.current.value,
            address:address.current.value,
            gmail:gmail.current.value,
        }])}
        else{
            setDetail([
                {
                name:name.current.value,
                mobno:mobno.current.value,
                dob:dob.current.value,
                address:address.current.value,
                gmail:gmail.current.value,
            }])} 
        }
    


    function popup(e){
        e.preventDefault()
        alert("SUBMITTED SUCCESSFULLY")
        data()
    }

  return (
    <div>
     <h1 className='head'>PERSONAL INFORMATION</h1>
     <button onClick={()=>setToggle(0)}>form</button>
     <button onClick={()=>setToggle(1)}>View Details</button>
      {(toggle===0) && <form className='form'>
      <label className='abc'>Enter your name:
        <input type="text" ref={name}  required/>
      </label><br></br>
      <label className='abc'>Enter your mobile number:
        <input type="tel" ref={mobno} required />
      </label><br></br>
      <label className='abc'>Enter your date of birth:
        <input type="date" ref={dob} required/>
      </label><br></br>
      <label className='abc'>Enter your address:
        <input type="text" ref={address} required/>
      </label ><br></br>
      <label className='abc'>Enter your gmail:
        <input type="gmail" ref={gmail} required/>
      </label><br></br>
      <label className='abc'>select your gender:<br></br>
        <input type="radio" id="male" name="a" value="male" />
        <label for="male" >Male</label><br></br>
        <input type="radio" id="female" name="a" value="female" />
        <label for="female" >Female</label><br></br>
        <input type="radio" id="other" name="a" value="other" />
        <label for="other" >Other</label><br></br>
      </label><br></br>
      <label className='abc'>select your interests:<br></br>
        <input type="checkbox" id="male" value="male" />
        <label for="reading" >reading</label><br></br>
        <input type="checkbox" id="female" value="female" />
        <label for="playing" >playing</label><br></br>
        <input type="checkbox" id="other" value="other" />
        <label for="sleeping" >sleeping</label><br></br>
      </label><br></br>
      <button type="submit" onClick={popup}>SUBMIT</button>

      </form>}
      {(toggle===1) && 
      <table border='1'>
          <thead>
              <th>Name</th>
              <th>mobile</th>
              <th>DOB</th>
              <th>Address</th>
              <th>Gmail</th>
          </thead>
      {detail && detail.map((ele)=>{return<tr>
          <td>{ele.name}</td>
          <td>{ele.mobno}</td>
          <td>{ele.dob}</td>
          <td>{ele.address}</td>
          <td>{ele.gmail}</td>
          </tr>})}
          </table>
}
    </div>
      
  )
}
export default Page;
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Select from 'react-select'
const AddEmp=()=>{

    //employee inputs
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role,setRole]= useState('')
    const [dept,setDept]= useState('')

    //After adding employee navigate to Employees page
     const navigate= useNavigate()

     const Department =[
        { label: "House Cleaning",value:1},
        { label: "Carpentry",value:2},
        { label: "Salon",value:3},
        {label:"Electrician",value:4},
        {label:"Plumber",value:5 },
        {label:"Pest Control",value:6}
     ];

     const addemp=()=>{
       //check if admin has entered all the input data

       if (firstName.length===0) {
           toast.error('please enter the first name')
       } else if (lastName.length===0) {
           toast.error('please enter the last name')
       }else if (email.length===0){
          toast.error('please enter email id')
       }else if(phone.length===0){
           toast.error('please enter phone number')
       }else if (role.length===0){
           toast.error('please assign role')
       }else if(dept.length===0){
           toast.error('Assign Department')
       }else {
           //make API call to  backend using axios
       }
     }

    function changeValue(value){
        console.log(value)
    }
     
    return (
        <div  style = {{marginTop :20}}>
                <h1 style = {{textAlign: 'center', color:'Red'}} >Add Employee</h1>
            <div style = { styles.container}>
                <div className = 'mb-3'>
                    <label>First Name</label>
                    <input
                    onChange = {(e)=>{
                        setFirstName(e.target.value)
                    }}
                    className='form-control'
                    type ='text'
                    />
                </div>
                <div className = 'mb-3'>
                    <label>Last Name</label>
                    <input
                    onChange = {(e)=>{
                        setLastName(e.target.value)
                    }}
                    className='form-control'
                    type ='text'
                    />
                </div>
                <div className = 'mb-3'>
                    <label>Email</label>
                    <input
                    onChange = {(e)=>{
                        setEmail(e.target.value)
                    }}
                    className='form-control'
                    type ='email'
                    />
                </div>
                <div className = 'mb-3'>
                    <label>Phone Number</label>
                    <input
                    onChange = {(e)=>{
                        setPhone(e.target.value)
                    }}
                    className='form-control'
                    type ='tel'
                    />
                </div>
                <div className = 'mb-3'>
                    <label>Role</label>
                    <input
                    onChange = {(e)=>{
                        setRole(e.target.value)
                    }}
                    className='form-control'
                    type ='text'
                    />
                </div>
                <div className = 'mb-3'>
                    <label>Department</label>
                    <Select onChange={changeValue} options={ Department } />
                                     
                </div>
                <div className ='mb-3' style ={{marginTop :40}}>
                    <button onClick={addemp} style={styles.Button}>
                     Submit
                    </button>

                </div>

            </div>

        </div>
    )
}
const styles = {
    container: {
      width: 400,
      height: 580,
      padding: 20,
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      marginTop: 20,
      borderColor: 'navy',
      borderRadius: 10,
      broderWidth: 1,
      borderStyle: 'solid',
      boxShadow: '1px 1px 20px 5px #C9C9C9',
    },
    Button: {
      position: 'relative',
      width: '100%',
      height: 40,
      backgroundColor: 'Brown',
      color: 'white',
      borderRadius: 5,
      border: 'none',
      marginTop: 10,
    },
  }


export default AddEmp
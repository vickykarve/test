import {useNavigate} from 'react-router-dom'
import Images from "../../images/image1_location.png"
import {toast} from 'react-toastify'
import {useState} from 'react'
const Next =()=>{
    const  [Securityquestion, setSecurityquestion] = useState('')
    const  [Houseno, setHouseno] = useState('')
    const  [Street, setStreet]= useState('')
    const  [City, setCity] = useState('')
    const  [State, setState]= useState('')
    const  [Pincode, setPincode] = useState('')
    
    const navigate = useNavigate()
    
    const next=()=>{
        if(Securityquestion.length===0){
            toast.error('please enter Security code')
        }else if(Houseno.length===0){
            toast.error('please enter House no')
        }else if(Street.length===0){
            toast.error('please enter Street')
        }else if(City.length===0){
            toast.error('please enter city')
        }else if(State.length===0){
            toast.error('please enter state')
        }else if(Pincode.length===0){
            toast.error('please enter pincode')
        }else{

            navigate('/signin')
        }
    }
    return (
     <div style={styles.container1}>
    <div style={{marginTop: 0}}>
     <div style={styles.container}>

     <div className='mb-3'>
          <label>Security Question (Your Hobby)?</label>
          <input onChange ={(e)=>{setSecurityquestion(e.target.value)}}
          className='form-control' type='password' placeholder="WARNING: password recovery code "/>
      </div>

      <div className='mb-3'>
          <label>House No</label>
          <input onChange ={(e)=>{setHouseno(e.target.value)}}
          className='form-control' type='text' placeholder="Your House no"/>
      </div>

      <div className='mb-3'>
          <label>Street</label>
          <input onChange ={(e)=>{setStreet(e.target.value)}}
          className='form-control' type='text' placeholder="Street/Landmark"/>
      </div>

      <div className='mb-3'>
          <label>City</label>
          <input onChange ={(e)=>{setCity(e.target.value)}}
          className='form-control' type='text' placeholder="City Name"/>
      </div>

      <div className='mb-3'>
          <label>State</label>
          <input onChange ={(e)=>{setState(e.target.value)}}
          className='form-control' type='text' placeholder="your state"/>
      </div>

      <div className='mb-3'>
          <label>Pincode</label>
          <input onChange ={(e)=>{setPincode(e.target.value)}}
          className='form-control' type='text' placeholder="Pincode"/>
      </div>

           <button style={styles.Button}
           onClick={next}className=''>Sign Up</button>
           </div>
       </div>
    </div>
    
)
}

const styles ={
    container:{
        width:400, 
        height:600, 
        padding: 20,
        position: 'relative',
        backgroundColor:'white',
         top:50, 
         left: 0, 
         right:0, 
         bottom:0, 
         margin: "auto",
         borderColor: '#663399',
         borderRadius:10,
         borderWidth: 1,
         borderStyle: 'solid',
         boxShadow: '1px 1px 10px 1px white'
        
        },

        container1:{
        backgroundImage: `url(${Images})`,
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        width:'100%',
        height: '100vh',
        },

        Button: {
            position: 'relative',
            width: '100%',
            height: 40,
            backgroundColor: 'navy',
            color: 'white',
            borderRadius: 5,
            border: 'none',
            marginTop: 10,
          },
    
}

export default Next
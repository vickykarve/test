import {useNavigate} from 'react-router-dom'

const Servicepage =()=>{

    const navigate = useNavigate()

    const addservices=()=>{
        //will transfer to add employee page to add employee details by the admon
          navigate('/addnewservice')
    }
    const bookservices=()=>{
        //will transfer to add employee page to add employee details by the admon
          navigate('/available-services')
    }


    return (<div className='container' >
    <h1 style = {{textAlign: 'center', color:'navy'}} >Welcome</h1>
           <div className = 'row'>  
             <div className='card col mb-4' 
                 style={{
                   margin: 20,
                   display: 'inline-block',
                   cursor: 'pointer',
                   border:0,
                   marginTop:70
                 }}>
                 <img src="https://icon-library.com/images/home-service-icon/home-service-icon-5.jpg"
                  alt= "employee image"
                  className="rounded mx-auto d-block"
                  style={{ height: 300,width:300, display: 'block' }}  />
                 <div className='card-body'>
                   <button onClick={addservices}  style ={styles.Button}>
                      Add Services
                   </button>
                 </div>
               </div>
               <div className='card col mb-4  '
                 style={{
                   margin: 20,
                   display: 'inline-block',
                   cursor: 'pointer',
                   border:0,
                   marginTop:70
                 }}>
                 <img src="https://www.chartlogic.com/wp-content/uploads/2020/08/Addressing-Physician-Burnout-and-EHR-Messaging-05.jpg" 
                 alt= "list of employee image"
                 className="rounded mx-auto d-block"
                 style={{ height: 300,width:300, display: 'block' }}  />
                 <div className='card-body'width='300'>
                   <button onClick={bookservices}  style ={styles.Button}>
                       Book Service
                   </button>
                 </div>
               </div>
           
           
                 </div>
       </div>
       )


}

const styles = {

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


export default Servicepage;
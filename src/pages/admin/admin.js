import {useNavigate} from 'react-router-dom'
const Admin =()=>{

const navigate= useNavigate()

    const Employee=()=>{
      navigate('/employees')
        //add and remove employees
        
    }
    const Services=()=>{

        //add and remove Services
        navigate('/services')
    }
    const Orders=()=>{
        navigate('/admin-order-list')
      //view and accept orders
      
  }
    return (<div className='container' >
 <h1 style = {{textAlign: 'center', color:'navy'}} >Admin Page</h1>
        <div className = 'row' >  
          <div className='card col mb-4' 
              style={{
                margin: 20,
                display: 'inline-block',
                cursor: 'pointer',
                border:0,
                marginTop:90
              }}>
              <img src="https://cdn-icons-png.flaticon.com/512/1869/1869679.png"
               alt= "employee image"
               className="rounded mx-auto d-block"
               style={{ height: 300,width:300, display: 'block' }}  />
              <div className='card-body'>
                <button onClick={Employee}  style ={styles.Button}>
                    Service Provider
                </button>
              </div>
            </div>
            {/* <div className='card col mb-4  '
              style={{
                margin: 20,
                display: 'inline-block',
                cursor: 'pointer',
                border:0,
                marginTop:90
              }}>
              <img src="https://images.assetsdelivery.com/compings_v2/lvnl/lvnl2102/lvnl210200039.jpg" 
              alt= "Services image"
              className="rounded mx-auto d-block"
              style={{ height: 300,width:300, display: 'block' }}  />
              <div className='card-body'width='300'>
                <button onClick={Services}  style ={styles.Button}>
                    Services
                </button>
              </div>
            </div> */}

            <div className='card col mb-4  '
              style={{
                margin: 20,
                display: 'inline-block',
                cursor: 'pointer',
                border:0,
                marginTop:90
              }}>
              <img src="https://freepikpsd.com/file/2020/04/cart-png-Images-Free-Transparent.png" 
              alt= "Orders image"
              className="rounded mx-auto d-block"
              style={{ height: 300,width:300, display: 'block' }}  />
              <div className='card-body'width='300'>
                <button onClick={Orders}  style ={styles.Button}>
                Orders
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


export default Admin
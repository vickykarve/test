import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";


const Cart = ()=>{
    //alert("please sign in first")
    const navigate=useNavigate();
    const foo=()=>{
        navigate("/signin")
    }
   
 
    const styles ={
        container:{
            width:400, 
            height:350, 
            padding: 20,
            position: 'relative',
            backgroundColor:'white',
             top:100, 
             left: 0, 
             right:0, 
             bottom:0, 
             margin: "auto",
             borderColor: 'grey',
             borderRadius:10,
             borderWidth: 1,
             borderStyle: 'solid',
             boxShadow: '1px 1px 10px 1px white'
            
            },
            Button: {
                position: 'relative',
                width: '100%',
                height: 40,
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 5,
                border: 'none',
                marginTop: 10,
              }
        }
        
    
   return(
        <div>
            <div>
           <h1 style = {{textAlign: 'center', color:'black',marginTop:20}} >Cart</h1>
           </div>
          <div style={styles.container1}>
           <div style={{marginTop: 0}}>
            <div style={styles.container}>
              <div className='mb3' style={{marginTop: 40}}>
              <div>Don't have an account? 
             <Link to='/signup'>Signup here</Link>
             </div>
             <p>Sign in and book your service now </p>
           <button style={styles.Button}
            onClick={foo}className=''>Signin
            </button>
            </div>
            </div>
           </div>
          </div>
          
           
        
        </div>
            
    
        )
        
                     

 }
        
export default Cart;

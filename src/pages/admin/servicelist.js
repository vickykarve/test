import axios from 'axios'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const ServiceList =()=>{

  const [MyServices, setMyServices] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    // load all the services created by user
    servicelist()
  }, [])
  
  //get all services
  const servicelist=()=>{
    //create axios api to send data to server
    axios.get('http://localhost:8080/getavailableservice')
    .then(resp=>{
      setMyServices(resp.data)
    })
  }

  //delete any services
  const deletservice=()=>{

  }
  //edit any services
  const editservice=()=>{

  }
  return(
    <div className='container'>
    <h1 style = {{textAlign: 'center', color:'navy'}} >Available Services</h1>
    <table className='table table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Charges</th>
                <th>Title</th>
                <th>Tag Line</th>
                <th>Short Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MyServices.map((MyService) => {
                return (
                  <tr>
                    <td>{MyService.id}</td>
                    <td>{MyService.rent}</td>
                    <td>{MyService.title}</td>
                    <td>{MyService.tagline}</td>
                    <td>{MyService.shortDescription}</td>
                    <td>
                      <button
                        onClick={() => editservice(MyService.id)}
                        style={styles.button}
                        className='btn btn-sm btn-success'>
                        Edit
                      </button>
                      <button
                        onClick={() => deletservice(MyService.id)}
                        style={styles.button}
                        className='btn btn-sm btn-danger'>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
    </div>
  )
}

const styles = {
  h3: {
    textAlign: 'center',
    margin: 20,
  },
  button: {
    marginRight: 10,
  },
}
export default ServiceList


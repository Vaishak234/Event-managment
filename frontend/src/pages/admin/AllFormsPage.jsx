import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllForm } from '../../features/form/formActions'

const AllFormsPage = () => {

    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(getAllForm())

    },[dispatch])

    console.log();
    


  return (
    <div>
      
    </div>
  )
}

export default AllFormsPage

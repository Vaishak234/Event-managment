import { Box } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import router from "./route"
import SelectedItemState from "./context/SelectedFormContext"

function App() {
 

  return (
    <Box >
       <SelectedItemState>
        
        <RouterProvider router={router} />

       </SelectedItemState>

    </Box>
  )
}

export default App

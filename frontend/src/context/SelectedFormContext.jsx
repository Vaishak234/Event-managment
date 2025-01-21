/* eslint-disable react-refresh/only-export-components */
import { useContext, useState } from "react"
import { createContext } from "react"
import PropTypes from 'prop-types'


const selectedContext = createContext(null)

const SelectedItemState = ({ children }) => {

    const [selectedItem, setSelectedItem] = useState('')
     

    return (
        <selectedContext.Provider value={{ selectedItem, setSelectedItem }}>
            {children}
        </selectedContext.Provider>
    )

}

export const useSelectedItem = () => {
    return useContext(selectedContext)
}

SelectedItemState.propTypes = {
    children: PropTypes.node.isRequired,
}

export default SelectedItemState

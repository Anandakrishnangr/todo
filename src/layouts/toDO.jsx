import { Box } from '@mui/material'
import React from 'react'
import TodoList from '../pages/Todo'

const ToDo = () => {
    return (
        <Box sx={{
            overflow: "hidden",
            height:'100vh'

        }}
        >
           
            <Box sx={{
                margin: "20px",
                padding: "20px",
                boxShadow: "box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            }}>
                <TodoList />
            </Box>
        </Box>
    )
}

export default ToDo
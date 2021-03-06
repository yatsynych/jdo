import React from 'react'
import { Box, Link } from '@mui/material'
import { useDispatch } from 'react-redux'
import { signInError } from '../store/auth/authActions'

export const Logout = () => {

  const dispatch = useDispatch()

  return (
    <Box className="logout" component="div">
      <Link
        component="button"
        variant="body1"
        onClick={() => {
          dispatch(signInError({text: '', type: ''}))
        }}
      >
        Log Out
      </Link>
    </Box>
  )
}
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect: React.FC<{ to: string }> = ({ to }) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(to, { replace: true })
  }, [to])

  return (
    <>
    </>
  )
}

export default Redirect

import React from 'react'

const Logo: React.FC<{ width?: string }> = ({ width }) => {
  return (
    <div style={{ width: width || 'fit-content' }}>
      <img
        src={require('@/images/logo.png').default}
        style={{ width }}
      />
    </div>
  )
}

export default Logo

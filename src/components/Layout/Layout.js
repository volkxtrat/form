import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`

export default function Layout({children}) {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  )
}

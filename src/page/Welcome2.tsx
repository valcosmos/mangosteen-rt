import type { FC } from 'react'
import styled from 'styled-components'

interface Welcome1Props {}

const Box = styled.div`
  border: 1px solid red;
  &:hover {
    color: red;
  }
`

const BlueBox = styled(Box)`
  border-color: blue;
`

const Welcome2: FC<Welcome1Props> = () => {
  return (
    <div>
      <Box>hello</Box> <BlueBox>world</BlueBox>
    </div>
  )
}

export default Welcome2

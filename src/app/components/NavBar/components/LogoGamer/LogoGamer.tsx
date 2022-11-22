import { Box } from "@mui/material"


const LogoGamer = ({img}: {img: string}) => {
  return (
    <Box>
      <img src={img} alt='img not found'/>
    </Box>
  )
}

export default LogoGamer
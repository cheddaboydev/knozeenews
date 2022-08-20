import { Facebook, Reddit, Twitter } from "@mui/icons-material"
import { Box, IconButton, Stack, Typography } from "@mui/material"

export const Footer = ()=> {



    return(
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center',  my: 5, bgcolor: 'background.paper'}}>
            <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
                <IconButton>
                    <Twitter />
                </IconButton>
                <IconButton>
                    <Facebook />
                </IconButton>
                <IconButton>
                    <Reddit />
                </IconButton>
            </Box>
                <Typography>© 2022 Knozee News, Inc. </Typography>
        </Box>
    )
}
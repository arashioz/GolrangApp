import { Box, Collapse, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'


interface IAlertItem {
  alertMode: 'error' | 'warning' | "info" | "success";
  alertText: string;

}
const AlertItem = (props: IAlertItem, key: number) => {

  const { alertMode, alertText } = props
  const [isOpen, setIsOpen] = React.useState<boolean>(true)



  return (
    <Box sx={{ mt: 1, p: 0 }} key={key}>
      <Collapse in={isOpen}>
        <Alert
          variant="filled"
          severity={alertMode}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }

        >
          {alertText}
        </Alert>
      </Collapse>
    </Box>
  )
}

export default AlertItem
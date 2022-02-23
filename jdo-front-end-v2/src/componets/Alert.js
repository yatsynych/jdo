import * as React from 'react';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const Alert = ({text, severity = "error", variant="outlined"}) => {

  const alertProps = {
    text: text,
    title: severity.charAt(0).toUpperCase() + severity.slice(1),
    severity: severity,
    variant: variant
  }

  return (
      <MuiAlert
        variant={alertProps.variant}
        severity={alertProps.severity}
        sx={{mb: 2}}
      >
        <AlertTitle>
          {alertProps.title}
        </AlertTitle>
        {alertProps.text}
      </MuiAlert>
  )

}
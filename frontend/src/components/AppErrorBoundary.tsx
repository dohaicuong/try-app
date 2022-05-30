import { Alert, Backdrop, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const AppErrorBoundary = () => {
  const navigate = useNavigate()

  return (
    <Backdrop
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={true}
    >
      <Alert
        severity='error'
        sx={{ minWidth: '20vw' }}
        action={
          <Button color='inherit' size='small' onClick={() => navigate(-1)}>
            back
          </Button>
        }
      >
        Something went wrong!
      </Alert>
    </Backdrop>
  )
}

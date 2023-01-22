import { useNavigate } from 'react-router-dom'

import { Button } from '@mantine/core';
import { IconArrowNarrowLeft } from '@tabler/icons';

const ReturnButton = () => {
  const navigate = useNavigate()

  const handleOnClick = () => { navigate(-1) }

  return (
    <Button
      leftIcon={<IconArrowNarrowLeft />}
      variant="outline"
      onClick={handleOnClick}
      compact
      uppercase
    >
      Return
    </Button>
  )
}

export default ReturnButton

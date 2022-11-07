
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import { FC } from 'react';
import { AlertInterfaceProps } from './AlertInterface';

const AlertMessage: FC<AlertInterfaceProps> = ({title, message, status="error"}) => {
    return <Alert status={status as any}>
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
    </Alert>
}

export default AlertMessage;
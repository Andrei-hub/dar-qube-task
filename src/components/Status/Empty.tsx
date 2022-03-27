import {FC} from 'react';
import {Text} from './Status.styled'

interface Props {
    type:string;
}

const Empty:FC<Props> = ({type}) => {
    return (
        <Text>{type}</Text>
    );
};

export default Empty;
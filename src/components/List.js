import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function List() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === null) {
            navigate('/list');
        }
    }, []);

    return (
        <h2>Hola</h2>
    );
}

export default List;
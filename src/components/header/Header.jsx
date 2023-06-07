import React, { useContext } from 'react';
import { AuthContex } from '../../provider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContex)
    console.log(user);
    return (
        <div>
            header
        </div>
    );
};

export default Header;
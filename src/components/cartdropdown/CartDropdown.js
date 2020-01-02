import React from 'react';
import CustomButton from '../custombutton/CustomButton';

import './cartdropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-itmes' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;

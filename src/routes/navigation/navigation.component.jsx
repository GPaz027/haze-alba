import { Fragment } from "react";
import { Outlet } from 'react-router-dom';

import { NavigationContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <NavLinks>
                    
                </NavLinks>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
}
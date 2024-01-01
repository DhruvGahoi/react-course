import React from 'react'

const UserContext = React.createContext()

export default UserContext;

/* 
1. At first we create a context which will pass the value to the desired component. We don't have to pass the value to every nested component
to pass the value to the desired one.
2. Next we have to wrap the context  <UserContext>*pass the components between these*<UserContext/> now this will become provider(has access to context) 
 */


import React from 'react';
import SideBar from './users/SideBar';
import ContentWrapperUsers from './products/ContentWrapperUsers';


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapperUsers />
        </div>
    </React.Fragment>
  );
}

export default App;

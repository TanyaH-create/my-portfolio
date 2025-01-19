import React from 'react'

//Page will display the content of the navbar component that is selected. 
//The navbar component is passed down as a child
function Page({children}) {
  return (
    <section>
       {children}
    </section>
  );
}

export default Page

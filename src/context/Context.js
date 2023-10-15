import React from 'react'

const MyContext =createContext();
function Context({children}) {
    const [totalItemPrice,setTotalItemPrice]=useState(0);
    const [count, setCount] = useState(0);
    const [cartItems,setCartItems]=useState([]);


  return (
    <MyContext.Provider value={
        {
          count,
           setCount,
           cartItems,
           setCartItems,
           fetchItemsData,
           totalItemPrice,
           setTotalItemPrice
          }
        }>
        {children}
      </MyContext.Provider>
  )
}

export {Context,MyContext};

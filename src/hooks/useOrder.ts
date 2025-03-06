import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"



export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])  // Creando la funcion order y setOrder, donde vamos almacenar los productos agregados en la orden y setOrder nos permite modificar esa lista de productsto. 
    const [tip, setTip] = useState(0)  // Creando una funcion para las propinas

    // Codigo para agregar productos y para evitar duplicados del mismo producto. 
    const addItem = (item: MenuItem) => {
      const itemExist = order.find(orderItem => orderItem.id === item.id)
      if(itemExist) {
        const updatedOrder = order.map(orderItem => orderItem.id === item.id ? 
          {...orderItem, quantity: orderItem.quantity + 1} : 
          orderItem
        )
        setOrder(updatedOrder)
      } else {
        const  newItem = {...item, quantity: + 1}
        setOrder([...order, newItem])
      }
    }
    
    //Codigo para eliminar productos de mi consumo
    const removeItem  = (id: MenuItem['id']) => {
         setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
      setOrder([])
      setTip(0)
    } 
  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
   
}

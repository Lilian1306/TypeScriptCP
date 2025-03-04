import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"



export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])


    // Codigo para agregar productos y tambien para evitar duplicados del mismo producto. 
    const addItem = (item: MenuItem) => {
      const itemExist = order.find(orderItem => orderItem.id === item.id)
      if(itemExist) {
        const updatedOrder = order.map(orderItem => orderItem.id === item.id ? 
          {...orderItem, quantity: + 1} : 
          orderItem
        )
        setOrder(updatedOrder)
      } else {
        const  newItem = {...item, quantity: 1}
        setOrder([...order, newItem])
      }
    }
    
  return {
    order,
    addItem
  }
   
}

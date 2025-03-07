import { useCallback } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotal({order, tip, placeOrder} : OrderTotalProps)  {

    const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0 ), [order])
    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
    const totalPay = useCallback(() => subtotalAmount() + tipAmount(), [tip, order] )

    return (
      <>
        <div className="space-y-3">
          <h1 className='font-black text-2xl'>Totales y propinas: </h1>
          <p>Subtotal a pagar: {''}
             <span className="font-bold">{formatCurrency(subtotalAmount ())}</span>
          </p>
          <p>Propinas: {''}
             <span className="font-bold">{formatCurrency(tipAmount())}</span>
          </p>
          <p>Total a Pagar: {''}
             <span className="font-bold">{formatCurrency(totalPay())}</span>
          </p>
        </div>
         <button 
           className="w-full bg-black p-3 uppercse text-white font-bold mt-10 disabled:opacity-10"
           disabled={totalPay() === 0}
           onClick={placeOrder}
         >
            Guardar Orden
         </button>

      </>
    )
}
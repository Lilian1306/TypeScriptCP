import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number
}

export default function OrderTotal({order, tip} : OrderTotalProps)  {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0 ), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalPay = useMemo(() => subtotalAmount + tipAmount, [tip, order] )

    return (
      <>
        <div className="space-y-3">
          <h1 className='font-black text-2xl'>Totales y propinas: </h1>
          <p>Subtotal a pagar: {''}
             <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
          </p>
          <p>Propinas: {''}
             <span className="font-bold">{formatCurrency(tipAmount)}</span>
          </p>
          <p>Total a Pagar: {''}
             <span className="font-bold">{formatCurrency(totalPay)}</span>
          </p>
        </div>
         <button></button>

      </>
    )
}
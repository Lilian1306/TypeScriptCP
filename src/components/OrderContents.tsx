import { formatCurrency } from "../helpers";
import type { MenuItem, OrderItem } from "../types";

type orderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem['id']) => void
};

export default function OrderContents({ order, removeItem }: orderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl"> Consumo </h2>

      <div className="space-y-3 mt-10">
        {order.length === 0 ? (
          <p className="text-center">La orden esta vacia</p>
        ) : (
          order.map((item) => (
            <div
              key={item.id} //Agregando el key en el primer elemento hijo
              className="flex justify-between items-center border-t border-purple-200 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>

              <button 
                 className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                 onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

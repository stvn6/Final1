import Store from '../../store/Store.jsx';

export default function Cart() {
    const cart = Store((state) => state.cart);  // Obtener carrito desde el estado
    const removeFromCart = Store((state) => state.removeFromCart);  // Obtener acción para eliminar productos
    const total = cart.reduce((acc, item) => acc + item.price, 0);  // Calcular el total

    return (
        <div className="container mx-auto max-w-[1170px]">
            <h2 className="text-[30px] font-bold">Carrito</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between my-2 items-center">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4"/>
                                <span>{item.name}</span>
                                <span>${item.price}</span>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500">X</button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 font-bold">
                        <span>Total: $ {total.toFixed(2)}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

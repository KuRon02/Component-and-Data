export default function OrderInfo({product, quantity, price}) {

    const totalPrice = quantity * price;

    return (
        <div class="order_info">
            <h1>Order info</h1>
            <div class="grid_container">
                <div class="grid-item">Product</div>
                <div class="grid-item">Quantity</div>
                <div class="grid-item">Total</div>
                <div id="item4">{product}</div>
                <div id="item5">{quantity}</div>
                <div id="item6">{totalPrice}</div>
            </div>
        </div>
    )
}
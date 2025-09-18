import axios from "axios"

export async function checkout(cart, authUser) {
  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.cost * item.quantity, 0);
  };
  if (authUser) {
    console.log(cart)
    const token = await authUser.getIdToken(true)
    try {
      const response = await axios.post('/api/order', {
        cart,
        total: getTotal()
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    } catch (e) {
      console.error(e)
    }
  }
}

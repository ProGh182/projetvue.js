import { ref, computed } from 'vue'

export const useMenuStore = () => {
  const menu = ref([
    {
      id: 1,
      name: 'Coq au Vin',
      description: 'Poulet braisé au vin rouge avec légumes',
      price: 18.50,
      isNew: true,
      image: '[01]'
    },
    {
      id: 2,
      name: 'Bouillabaisse',
      description: 'Soupe de poisson provençale traditionnelle',
      price: 22.00,
      isNew: false,
      image: '[02]'
    },
    {
      id: 3,
      name: 'Cassoulet',
      description: 'Haricots avec canard et saucisse',
      price: 19.50,
      isNew: true,
      image: '[03]'
    },
    {
      id: 4,
      name: 'Steak Frites',
      description: 'Steak tendre accompagné de frites dorées',
      price: 24.00,
      isNew: false,
      image: '[04]'
    },
    {
      id: 5,
      name: 'Sole Meunière',
      description: 'Poisson délicat à la beurre noir',
      price: 26.50,
      isNew: false,
      image: '[05]'
    },
    {
      id: 6,
      name: 'Crème Brûlée',
      description: 'Dessert sucré avec sucre caramélisé',
      price: 7.50,
      isNew: false,
      image: '[06]'
    }
  ])

  return {
    menu
  }
}

export const useOrderStore = () => {
  const cart = ref([])
  const orders = ref([])

  const addToCart = (dish) => {
    const existingItem = cart.value.find(item => item.id === dish.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.value.push({
        ...dish,
        quantity: 1
      })
    }
  }

  const removeFromCart = (dishId) => {
    cart.value = cart.value.filter(item => item.id !== dishId)
  }

  const updateQuantity = (dishId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(dishId)
    } else {
      const item = cart.value.find(item => item.id === dishId)
      if (item) {
        item.quantity = quantity
      }
    }
  }

  const getCartTotal = computed(() => {
    return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
  })

  const clearCart = () => {
    cart.value = []
  }

  const addOrder = (customerName, items) => {
    const order = {
      id: Date.now(),
      customerName,
      items: JSON.parse(JSON.stringify(items)),
      total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2),
      status: 'en_cours',
      createdAt: new Date().toLocaleString('fr-FR')
    }
    orders.value.push(order)
    clearCart()
    return order
  }

  const updateOrderStatus = (orderId, status) => {
    const order = orders.value.find(o => o.id === orderId)
    if (order) {
      order.status = status
    }
  }

  return {
    cart,
    orders,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart,
    addOrder,
    updateOrderStatus
  }
}

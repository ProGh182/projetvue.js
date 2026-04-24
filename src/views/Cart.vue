<template>
  <div class="cart-page">
    <h1>Mon Panier</h1>

    <div v-if="cart.length === 0" class="empty-cart">
      <p>Votre panier est vide</p>
      <router-link to="/menu" class="btn-back">Retour au menu</router-link>
    </div>

    <div v-else class="cart-content">
      <div class="items-section">
        <h2>Articles du panier</h2>
        <PanierItem 
          v-for="item in cart"
          :key="item.id"
          :item="item"
          @update-quantity="handleUpdateQuantity"
          @remove-item="handleRemoveItem"
        />
      </div>

      <div class="cart-summary">
        <h2>Résumé</h2>
        <div class="summary-row">
          <span>Sous-total:</span>
          <span>{{ getCartTotal }} €</span>
        </div>
        <div class="summary-row">
          <span>Frais de livraison:</span>
          <span>0 €</span>
        </div>
        <div class="summary-total">
          <span>Total:</span>
          <span>{{ getCartTotal }} €</span>
        </div>

        <div class="checkout-section">
          <input 
            v-model="customerName"
            type="text"
            placeholder="Votre nom"
            class="input-customer"
          />
          <button 
            @click="handleCheckout"
            :disabled="!customerName || cart.length === 0"
            class="btn-checkout"
          >
            Finaliser la commande
          </button>
        </div>

        <router-link to="/menu" class="btn-continue">
          Continuer les achats
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, inject } from 'vue'
import PanierItem from '../components/PanierItem.vue'
import { useOrderStore } from '../stores/store.js'

export default {
  name: 'Cart',
  components: {
    PanierItem
  },
  setup() {
    const { cart, getCartTotal, updateQuantity, removeFromCart, addOrder } = useOrderStore()
    const showNotification = inject('showNotification')
    const customerName = ref('')

    const handleUpdateQuantity = (dishId, quantity) => {
      updateQuantity(dishId, quantity)
    }

    const handleRemoveItem = (dishId) => {
      removeFromCart(dishId)
      showNotification('Article retiré du panier')
    }

    const handleCheckout = () => {
      if (!customerName.value || cart.value.length === 0) return
      
      const order = addOrder(customerName.value, cart.value)
      showNotification(`Commande #${order.id} confirmée!`)
      customerName.value = ''
    }

    return {
      cart,
      getCartTotal,
      customerName,
      handleUpdateQuantity,
      handleRemoveItem,
      handleCheckout
    }
  }
}
</script>

<style scoped>
.cart-page {
  width: 100%;
}

.cart-page h1 {
  text-align: center;
  color: #2c3e50;
  font-size: 32px;
  margin: 0 0 32px 0;
}

.empty-cart {
  text-align: center;
  padding: 60px 20px;
  color: #7f8c8d;
}

.empty-cart p {
  font-size: 18px;
  margin-bottom: 20px;
}

.btn-back {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 10px 24px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn-back:hover {
  background-color: #2980b9;
}

.cart-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 24px;
}

.items-section h2,
.cart-summary h2 {
  color: #2c3e50;
  font-size: 20px;
  margin: 0 0 16px 0;
}

.cart-summary {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  height: fit-content;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  color: #7f8c8d;
  font-size: 14px;
  border-bottom: 1px solid #ecf0f1;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 18px;
  font-weight: 600;
  color: #27ae60;
}

.checkout-section {
  margin: 20px 0;
  padding-top: 20px;
  border-top: 1px solid #ecf0f1;
}

.input-customer {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.btn-checkout {
  width: 100%;
  background-color: #27ae60;
  color: white;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-checkout:hover:not(:disabled) {
  background-color: #229954;
}

.btn-checkout:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.btn-continue {
  display: block;
  text-align: center;
  color: #3498db;
  padding: 8px 0;
  margin-top: 12px;
  font-size: 14px;
  transition: color 0.3s;
}

.btn-continue:hover {
  color: #2980b9;
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }
  
  .cart-summary {
    position: static;
  }
}
</style>

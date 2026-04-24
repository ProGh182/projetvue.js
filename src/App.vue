<template>
  <div class="app">
    <header class="header">
      <div class="header-content">
        <h1>Le Gourmet</h1>
        <nav class="nav">
          <router-link to="/" class="nav-link">Accueil</router-link>
          <router-link to="/menu" class="nav-link">Menu</router-link>
          <router-link to="/cart" class="nav-link cart-link">
            Panier ({{ cartItemsCount }})
          </router-link>
          <router-link to="/admin" class="nav-link admin-link">Admin</router-link>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <p>&copy; 2026 Le Gourmet Restaurant. Tous droits réservés.</p>
    </footer>

    <div v-if="notification" class="toast">
      {{ notification }}
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, provide } from 'vue'
import { useOrderStore } from './stores/store.js'

export default {
  name: 'App',
  setup() {
    const { cart } = useOrderStore()
    const notification = ref('')

    const cartItemsCount = computed(() => {
      return cart.value.reduce((sum, item) => sum + item.quantity, 0)
    })

    const showNotification = (message) => {
      notification.value = message
      setTimeout(() => {
        notification.value = ''
      }, 3000)
    }

    provide('showNotification', showNotification)

    onMounted(() => {
      console.log('Les moules sont prêtes')
    })

    return {
      cartItemsCount,
      notification
    }
  }
}
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  font-size: 28px;
  font-weight: 600;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  transition: color 0.3s;
  padding: 8px 12px;
  border-radius: 4px;
}

.nav-link:hover {
  color: #3498db;
}

.nav-link.router-link-active {
  background-color: #3498db;
}

.cart-link {
  background-color: #e74c3c;
  padding: 8px 16px;
}

.cart-link:hover {
  background-color: #c0392b;
  color: white;
}

.admin-link {
  background-color: #f39c12;
}

.admin-link:hover {
  background-color: #d68910;
  color: white;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
}

.footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}

.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #27ae60;
  color: white;
  padding: 12px 20px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

<template>
  <div class="admin-page">
    <h1>Gestion des Commandes</h1>
    
    <div v-if="orders.length === 0" class="no-orders">
      <p>Aucune commande pour le moment</p>
    </div>

    <div v-else class="orders-section">
      <div class="filters">
        <button 
          @click="filterStatus = 'all'"
          :class="{ active: filterStatus === 'all' }"
          class="filter-btn"
        >
          Toutes ({{ orders.length }})
        </button>
        <button 
          @click="filterStatus = 'en_cours'"
          :class="{ active: filterStatus === 'en_cours' }"
          class="filter-btn"
        >
          En cours ({{ getFilteredOrders('en_cours').length }})
        </button>
        <button 
          @click="filterStatus = 'prete'"
          :class="{ active: filterStatus === 'prete' }"
          class="filter-btn"
        >
          Prêtes ({{ getFilteredOrders('prete').length }})
        </button>
      </div>

      <div class="commandes-list">
        <CommandeItem 
          v-for="order in filteredOrders"
          :key="order.id"
          :order="order"
          @update-status="handleUpdateStatus"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, provide } from 'vue'
import CommandeItem from '../components/CommandeItem.vue'
import { useOrderStore } from '../stores/store.js'

export default {
  name: 'Admin',
  components: {
    CommandeItem
  },
  setup() {
    const { orders, updateOrderStatus } = useOrderStore()
    const filterStatus = ref('all')

    const getFilteredOrders = (status) => {
      if (status === 'all') return orders.value
      return orders.value.filter(o => o.status === status)
    }

    const filteredOrders = computed(() => {
      if (filterStatus.value === 'all') {
        return orders.value
      }
      return orders.value.filter(o => o.status === filterStatus.value)
    })

    const handleUpdateStatus = (orderId, newStatus) => {
      updateOrderStatus(orderId, newStatus)
    }

    provide('orders', orders)

    return {
      orders,
      filterStatus,
      filteredOrders,
      getFilteredOrders,
      handleUpdateStatus
    }
  }
}
</script>

<style scoped>
.admin-page {
  width: 100%;
}

.admin-page h1 {
  text-align: center;
  color: #2c3e50;
  font-size: 32px;
  margin: 0 0 32px 0;
}

.no-orders {
  text-align: center;
  padding: 60px 20px;
  color: #7f8c8d;
  font-size: 16px;
}

.filters {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  justify-content: center;
}

.filter-btn {
  background-color: white;
  color: #2c3e50;
  padding: 8px 16px;
  border-radius: 4px;
  border: 2px solid #ecf0f1;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover {
  border-color: #3498db;
  color: #3498db;
}

.filter-btn.active {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
}

.commandes-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

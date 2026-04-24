<template>
  <div class="commande-item" :class="`status-${order.status}`">
    <div class="order-header">
      <div class="order-info">
        <h4>Commande #{{ order.id }}</h4>
        <p class="customer-name">Client: {{ order.customerName }}</p>
        <p class="order-time">{{ order.createdAt }}</p>
      </div>
      <div class="order-status">
        <span class="badge" :class="`badge-${order.status}`">
          {{ statusLabel }}
        </span>
      </div>
    </div>

    <div class="order-items">
      <p v-for="item in order.items" :key="item.id" class="item-line">
        {{ item.name }} x{{ item.quantity }} - {{ (item.price * item.quantity).toFixed(2) }} €
      </p>
    </div>

    <div class="order-footer">
      <div class="order-total">
        Total: {{ parseFloat(order.total).toFixed(2) }} €
      </div>
      <button 
        v-if="order.status === 'en_cours'"
        @click="markAsReady"
        class="btn-ready"
      >
        Marquer comme prête
      </button>
      <button 
        v-else
        disabled
        class="btn-ready disabled"
      >
        Commande prête
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommandeItem',
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  emits: ['update-status'],
  computed: {
    statusLabel() {
      return this.order.status === 'en_cours' ? 'En cours' : 'Prête'
    }
  },
  methods: {
    markAsReady() {
      this.$emit('update-status', this.order.id, 'prete')
    }
  }
}
</script>

<style scoped>
.commande-item {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  border-left: 4px solid #3498db;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.commande-item.status-prete {
  border-left-color: #27ae60;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.order-info h4 {
  margin: 0;
  color: #2c3e50;
  font-size: 16px;
}

.customer-name {
  margin: 4px 0;
  color: #7f8c8d;
  font-size: 14px;
}

.order-time {
  margin: 4px 0 0 0;
  color: #95a5a6;
  font-size: 12px;
}

.order-status {
  display: flex;
  gap: 8px;
}

.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  color: white;
}

.badge-en_cours {
  background-color: #f39c12;
}

.badge-prete {
  background-color: #27ae60;
}

.order-items {
  background-color: #f8f9fa;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.item-line {
  margin: 4px 0;
  color: #2c3e50;
  font-size: 14px;
}

.item-line:first-child {
  margin-top: 0;
}

.item-line:last-child {
  margin-bottom: 0;
}

.order-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #ecf0f1;
}

.order-total {
  font-weight: 600;
  color: #27ae60;
  font-size: 16px;
}

.btn-ready {
  background-color: #27ae60;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn-ready:hover {
  background-color: #229954;
}

.btn-ready.disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.btn-ready.disabled:hover {
  background-color: #95a5a6;
}
</style>

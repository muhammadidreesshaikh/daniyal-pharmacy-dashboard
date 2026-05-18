export const dashboardData = {
  summary: {
    totalSales: '$128,450',
    totalMedicines: '2,481',
    lowStock: '18',
    todayRevenue: '$4,860',
  },
  charts: {
    revenue: [
      { month: 'Jan', sales: 3200, purchases: 2400 },
      { month: 'Feb', sales: 4200, purchases: 2600 },
      { month: 'Mar', sales: 5100, purchases: 3000 },
      { month: 'Apr', sales: 4700, purchases: 3100 },
      { month: 'May', sales: 6200, purchases: 3900 },
      { month: 'Jun', sales: 7300, purchases: 4200 },
    ],
    categories: [
      { name: 'Antibiotics', value: 34 },
      { name: 'Supplements', value: 22 },
      { name: 'Pain Relief', value: 18 },
      { name: 'Vitamins', value: 26 },
    ],
  },
  tables: {
    recentSales: [
      { id: '1', invoice: 'INV-1001', customer: 'Sarah Khan', amount: '$125.80', status: 'Paid' },
      { id: '2', invoice: 'INV-1002', customer: 'Michael Brown', amount: '$58.40', status: 'Pending' },
      { id: '3', invoice: 'INV-1003', customer: 'Emily Stone', amount: '$244.00', status: 'Paid' },
    ],
    topMedicines: [
      { id: '1', name: 'Amoxicillin 500mg', sold: '248', stock: '58' },
      { id: '2', name: 'Paracetamol 650mg', sold: '198', stock: '14' },
      { id: '3', name: 'Cetirizine 10mg', sold: '170', stock: '40' },
    ],
  },
};
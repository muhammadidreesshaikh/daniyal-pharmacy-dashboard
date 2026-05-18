import { ModulePage } from './ModulePage';

const rows = [
  { id: '1', warehouse: 'Main Store', lowStock: 6, outOfStock: 2, expiringSoon: 4 },
  { id: '2', warehouse: 'Branch Store', lowStock: 3, outOfStock: 1, expiringSoon: 2 },
];

export default function InventoryPage() {
  return <ModulePage title="Inventory" description="Monitor stock, alerts, adjustments, and store locations." rows={rows} columns={[{ key: 'warehouse', label: 'Warehouse' }, { key: 'lowStock', label: 'Low Stock' }, { key: 'outOfStock', label: 'Out of Stock' }, { key: 'expiringSoon', label: 'Expiring Soon' }]} />;
}
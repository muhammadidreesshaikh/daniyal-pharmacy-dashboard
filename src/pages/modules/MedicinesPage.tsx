import { ModulePage } from './ModulePage';
import { medicineSeed } from '../../data/mockData';

export default function MedicinesPage() {
  return (
    <ModulePage
      title="Medicines"
      description="Add, edit, filter, and track medicine stock and expiry data."
      rows={medicineSeed.map((item) => ({ id: item.id, name: item.name, category: item.category, stock: item.stock, batch: item.batch, expiry: item.expiry, price: `$${item.price}` }))}
      columns={[
        { key: 'name', label: 'Medicine' },
        { key: 'category', label: 'Category' },
        { key: 'stock', label: 'Stock' },
        { key: 'batch', label: 'Batch' },
        { key: 'expiry', label: 'Expiry' },
        { key: 'price', label: 'Price' },
      ]}
    />
  );
}
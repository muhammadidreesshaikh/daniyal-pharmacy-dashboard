import { ModulePage } from './ModulePage';
import { supplierSeed } from '../../data/mockData';

export default function SuppliersPage() {
  return <ModulePage title="Suppliers" description="Manage supplier profiles and purchase history." rows={supplierSeed.map((item) => ({ ...item }))} columns={[{ key: 'name', label: 'Supplier' }, { key: 'phone', label: 'Phone' }, { key: 'purchases', label: 'Purchases' }]} />;
}
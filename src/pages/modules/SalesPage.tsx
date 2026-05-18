import { ModulePage } from './ModulePage';
import { salesSeed } from '../../data/mockData';

export default function SalesPage() {
  return <ModulePage title="Sales" description="View invoices, refunds, discounts, and sales history." rows={salesSeed.map((item) => ({ ...item }))} columns={[{ key: 'invoice', label: 'Invoice' }, { key: 'customer', label: 'Customer' }, { key: 'total', label: 'Total' }, { key: 'status', label: 'Status' }]} />;
}
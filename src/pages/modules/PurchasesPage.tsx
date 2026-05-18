import { ModulePage } from './ModulePage';
import { purchaseSeed } from '../../data/mockData';

export default function PurchasesPage() {
  return <ModulePage title="Purchases" description="Track supplier purchases, invoices, and payments." rows={purchaseSeed.map((item) => ({ ...item }))} columns={[{ key: 'invoice', label: 'Invoice' }, { key: 'supplier', label: 'Supplier' }, { key: 'total', label: 'Total' }, { key: 'status', label: 'Status' }]} />;
}
import { ModulePage } from './ModulePage';
import { customerSeed } from '../../data/mockData';

export default function CustomersPage() {
  return <ModulePage title="Customers" description="Search customers, view history, and manage loyalty points." rows={customerSeed.map((item) => ({ ...item }))} columns={[{ key: 'name', label: 'Customer' }, { key: 'phone', label: 'Phone' }, { key: 'loyalty', label: 'Loyalty Points' }]} />;
}
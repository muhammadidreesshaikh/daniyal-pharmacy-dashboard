import { ModulePage } from './ModulePage';
import { employeeSeed } from '../../data/mockData';

export default function EmployeesPage() {
  return <ModulePage title="Employees" description="Super admins can manage staff, roles, permissions, and activity logs." rows={employeeSeed.map((item) => ({ ...item }))} columns={[{ key: 'name', label: 'Employee' }, { key: 'role', label: 'Role' }, { key: 'status', label: 'Status' }]} />;
}
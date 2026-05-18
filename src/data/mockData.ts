import type { AuthUser } from '../types/auth';

export const authSeedUsers: AuthUser[] = [
  { id: 'u-1', name: 'Dr. Amina Ali', email: 'admin@pharmacy.com', role: 'SUPER_ADMIN' },
  { id: 'u-2', name: 'John Carter', email: 'employee@pharmacy.com', role: 'EMPLOYEE' },
];

export const medicineSeed = [
  { id: 'm-1', name: 'Amoxicillin 500mg', category: 'Antibiotic', stock: 58, batch: 'B-2401', expiry: '2027-02-16', price: 9.5 },
  { id: 'm-2', name: 'Paracetamol 650mg', category: 'Analgesic', stock: 14, batch: 'B-2415', expiry: '2026-07-09', price: 4.2 },
  { id: 'm-3', name: 'Vitamin C', category: 'Supplement', stock: 0, batch: 'B-2499', expiry: '2025-11-01', price: 6.0 },
];

export const customerSeed = [
  { id: 'c-1', name: 'Sarah Khan', phone: '+1-202-555-0102', loyalty: 120 },
  { id: 'c-2', name: 'Michael Brown', phone: '+1-202-555-0198', loyalty: 45 },
];

export const supplierSeed = [
  { id: 's-1', name: 'HealthPlus Distribution', phone: '+1-202-555-0144', purchases: 18 },
  { id: 's-2', name: 'MediCore Supplies', phone: '+1-202-555-0177', purchases: 11 },
];

export const employeeSeed = [
  { id: 'e-1', name: 'Ava Taylor', role: 'Inventory Manager', status: 'Active' },
  { id: 'e-2', name: 'Noah Wilson', role: 'Cashier', status: 'Active' },
];

export const salesSeed = [
  { id: 'so-1', invoice: 'INV-1001', customer: 'Sarah Khan', total: 125.8, status: 'Paid' },
  { id: 'so-2', invoice: 'INV-1002', customer: 'Michael Brown', total: 58.4, status: 'Pending' },
];

export const purchaseSeed = [
  { id: 'po-1', invoice: 'PUR-2201', supplier: 'HealthPlus Distribution', total: 980, status: 'Received' },
  { id: 'po-2', invoice: 'PUR-2202', supplier: 'MediCore Supplies', total: 610, status: 'Due' },
];
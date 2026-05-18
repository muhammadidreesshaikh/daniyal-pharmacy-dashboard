import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ProtectedRoute } from './ProtectedRoute';
import { routePaths } from './routePaths';
import { AuthLayout } from '../layouts/AuthLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';

const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const SignupPage = lazy(() => import('../pages/auth/SignupPage'));
const ForgotPasswordPage = lazy(() => import('../pages/auth/ForgotPasswordPage'));
const ResetPasswordPage = lazy(() => import('../pages/auth/ResetPasswordPage'));
const DashboardPage = lazy(() => import('../pages/dashboard/DashboardPage'));
const MedicinesPage = lazy(() => import('../pages/modules/MedicinesPage'));
const InventoryPage = lazy(() => import('../pages/modules/InventoryPage'));
const SalesPage = lazy(() => import('../pages/modules/SalesPage'));
const PosPage = lazy(() => import('../pages/modules/PosPage'));
const PurchasesPage = lazy(() => import('../pages/modules/PurchasesPage'));
const SuppliersPage = lazy(() => import('../pages/modules/SuppliersPage'));
const CustomersPage = lazy(() => import('../pages/modules/CustomersPage'));
const ReportsPage = lazy(() => import('../pages/modules/ReportsPage'));
const EmployeesPage = lazy(() => import('../pages/modules/EmployeesPage'));
const SettingsPage = lazy(() => import('../pages/modules/SettingsPage'));
const ProfilePage = lazy(() => import('../pages/modules/ProfilePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={routePaths.login} element={<LoginPage />} />
        <Route path={routePaths.signup} element={<SignupPage />} />
        <Route path={routePaths.forgotPassword} element={<ForgotPasswordPage />} />
        <Route path={routePaths.resetPassword} element={<ResetPasswordPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path={routePaths.dashboard} element={<DashboardPage />} />
          <Route path={routePaths.medicines} element={<MedicinesPage />} />
          <Route path={routePaths.inventory} element={<InventoryPage />} />
          <Route path={routePaths.sales} element={<SalesPage />} />
          <Route path={routePaths.pos} element={<PosPage />} />
          <Route path={routePaths.purchases} element={<PurchasesPage />} />
          <Route path={routePaths.suppliers} element={<SuppliersPage />} />
          <Route path={routePaths.customers} element={<CustomersPage />} />
          <Route path={routePaths.reports} element={<ReportsPage />} />
          <Route element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']} />}>
            <Route path={routePaths.employees} element={<EmployeesPage />} />
            <Route path={routePaths.settings} element={<SettingsPage />} />
          </Route>
          <Route path={routePaths.profile} element={<ProfilePage />} />
        </Route>
      </Route>

      <Route path={routePaths.home} element={<Navigate to={routePaths.dashboard} replace />} />
      <Route path={routePaths.notFound} element={<NotFoundPage />} />
    </Routes>
  );
}
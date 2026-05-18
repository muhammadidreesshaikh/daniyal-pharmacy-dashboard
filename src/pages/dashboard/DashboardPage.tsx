import { Grid, Stack } from '@mui/material';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/common/StatCard';
import { RevenueChart } from '../../components/charts/RevenueChart';
import { CategoryChart } from '../../components/charts/CategoryChart';
import { DataTable } from '../../components/tables/DataTable';
import { dashboardData } from '../../data/dashboardData';
import { Helmet } from 'react-helmet-async';

export default function DashboardPage() {
  return (
    <Stack spacing={3}>
      <Helmet>
        <title>Dashboard | Pharmacy Management</title>
      </Helmet>
      <PageHeader title="Dashboard" subtitle="Overview of sales, inventory, and pharmacy activity." />
      <Grid container spacing={3}>
        {[
          { label: 'Total Sales', value: dashboardData.summary.totalSales, change: '+12.4% vs last month', color: '#0B6E4F' },
          { label: 'Total Medicines', value: dashboardData.summary.totalMedicines, change: '+38 items this week', color: '#0D47A1' },
          { label: 'Low Stock Medicines', value: dashboardData.summary.lowStock, change: 'Requires replenishment', color: '#D97706' },
          { label: "Today's Revenue", value: dashboardData.summary.todayRevenue, change: '+8.1% vs yesterday', color: '#B91C1C' },
        ].map((item) => (
          <Grid item key={item.label} xs={12} sm={6} lg={3}>
            <StatCard {...item} />
          </Grid>
        ))}
        <Grid item xs={12} lg={8}>
          <RevenueChart data={dashboardData.charts.revenue} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <CategoryChart data={dashboardData.charts.categories} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <DataTable
            title="Recent Sales"
            rows={dashboardData.tables.recentSales}
            columns={[
              { key: 'invoice', label: 'Invoice' },
              { key: 'customer', label: 'Customer' },
              { key: 'amount', label: 'Amount' },
              { key: 'status', label: 'Status' },
            ]}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <DataTable
            title="Top Selling Medicines"
            rows={dashboardData.tables.topMedicines}
            columns={[
              { key: 'name', label: 'Medicine' },
              { key: 'sold', label: 'Sold' },
              { key: 'stock', label: 'Stock' },
            ]}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
import { Alert, Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { DataTable } from '../../components/tables/DataTable';

const cartItems = [
  { id: '1', medicine: 'Amoxicillin 500mg', qty: 2, subtotal: '$19.00' },
  { id: '2', medicine: 'Paracetamol 650mg', qty: 4, subtotal: '$16.80' },
];

export default function PosPage() {
  return (
    <Stack spacing={3}>
      <Typography variant="h4" fontWeight={900}>
        POS Billing
      </Typography>
      <Alert severity="info">This page is ready for API-backed cart and invoice workflows.</Alert>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Typography fontWeight={800} gutterBottom>
                Cart Items
              </Typography>
              <DataTable
                rows={cartItems}
                columns={[
                  { key: 'medicine', label: 'Medicine' },
                  { key: 'qty', label: 'Qty' },
                  { key: 'subtotal', label: 'Subtotal' },
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card>
            <CardContent>
              <Stack spacing={2}>
                <Typography fontWeight={800}>Invoice Summary</Typography>
                <Typography>Subtotal: $35.80</Typography>
                <Typography>Discount: $3.00</Typography>
                <Typography>Tax: $2.86</Typography>
                <Typography variant="h6" fontWeight={900}>
                  Total: $35.66
                </Typography>
                <Button variant="contained">Print Invoice</Button>
                <Button variant="outlined">Download PDF</Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
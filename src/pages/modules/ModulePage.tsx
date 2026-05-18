import { Alert, Card, CardContent, Stack, Typography } from '@mui/material';
import { PageHeader } from '../../components/common/PageHeader';
import { DataTable } from '../../components/tables/DataTable';
import { SkeletonTable } from '../../components/common/SkeletonTable';

export function ModulePage({
  title,
  description,
  rows,
  columns,
  note,
}: {
  title: string;
  description: string;
  rows: { id: string; [key: string]: string | number | boolean | null | undefined }[];
  columns: { key: string; label: string }[];
  note?: string;
}) {
  return (
    <Stack spacing={3}>
      <PageHeader title={title} subtitle={description} />
      {note && <Alert severity="info">{note}</Alert>}
      <Card>
        <CardContent>
          <DataTable
            rows={rows}
            columns={columns as never}
          />
        </CardContent>
      </Card>
    </Stack>
  );
}
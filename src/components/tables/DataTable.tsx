import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import type { ReactNode } from 'react';

export type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
};

export function DataTable<T extends { id: string }>({
  title,
  rows,
  columns,
}: {
  title?: string;
  rows: T[];
  columns: Column<T>[];
}) {
  return (
    <Paper sx={{ overflow: 'hidden' }}>
      {title && (
        <Box sx={{ px: 2, py: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
          <Typography fontWeight={800}>{title}</Typography>
        </Box>
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={String(column.key)} sx={{ fontWeight: 700 }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} hover>
                {columns.map((column) => {
                  const value = row[column.key];
                  return (
                    <TableCell key={String(column.key)}>
                      {column.render ? column.render(value, row) : String(value ?? '-')}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
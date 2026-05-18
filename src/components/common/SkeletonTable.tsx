import { Skeleton, Stack } from '@mui/material';

export function SkeletonTable({ rows = 4 }: { rows?: number }) {
  return (
    <Stack spacing={1.5}>
      {Array.from({ length: rows }).map((_, index) => (
        <Skeleton key={index} variant="rounded" height={56} />
      ))}
    </Stack>
  );
}
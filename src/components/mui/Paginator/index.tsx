import Pagination from '@mui/material/Pagination';
import { PaginatorProps } from '../../../interfaces/props-interfaces';

export function Paginator({ count, page, handleChange }: PaginatorProps) {
  return (
    <Pagination count={count} page={page} onChange={handleChange} />
  );
}

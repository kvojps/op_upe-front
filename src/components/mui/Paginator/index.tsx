import Pagination from '@mui/material/Pagination';
import { PaginatorProps } from '../../../interfaces/props-interfaces';

export function Paginator({ 
  count, page, handleChange,
  disabled 
}: PaginatorProps) {
  return (
    <Pagination
      disabled={disabled}
      aria-disabled={disabled}
      count={count} 
      page={page} 
      onChange={handleChange} 
    />
  );
}

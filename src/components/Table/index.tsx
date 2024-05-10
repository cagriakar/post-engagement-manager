import MOCK_DATA from '@/mock/postEngagementList';
import { PlatformType, PostEngagement } from '@/types';
import {
  ColumnDef,
  PaginationState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Checkbox from '../Checkbox';
import { BackArrow, DoubleBackArrow, DoubleNextArrow, DownArrow, NextArrow, UpArrow } from '../icons';
import { getPlatformIcon } from './utils';

export default function Table() {
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10
  });
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<PostEngagement>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <div className='px-1'>
            <Checkbox
              indeterminate={table.getIsSomeRowsSelected()}
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className='px-1'>
            <input
              type='checkbox'
              className='checkbox checkbox-sm'
              checked={row.getIsSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          </div>
        )
      },
      {
        id: 'platform',
        accessorKey: 'platform',
        header: () => <div className='px-1'></div>,
        cell: (info) => <img className='h-3.5 w-3.5' src={getPlatformIcon(info.getValue() as PlatformType) ?? ''} />
      },
      {
        id: 'name',
        accessorKey: 'name',
        header: (info) => (
          <div className='cursor-pointer select-none'>
            Name
            {{
              asc: <UpArrow />,
              desc: <DownArrow />
            }[info.column.getIsSorted() as string] ?? null}
          </div>
        ),
        cell: (info) => info.getValue()
      },
      {
        id: 'engaged',
        accessorKey: 'engaged_unique',
        header: () => <div className='px-1'>Engaged / Unique</div>,
        cell: (info) => <div className='px-1'>{(info.getValue() as string[])?.join(' / ')}</div>
      },
      {
        id: 'acquired',
        accessorKey: 'acquired',
        header: () => <div className='px-1'>Acquired</div>,
        cell: (info) => <div className='px-1'>{info.getValue() as string}</div>
      },
      {
        id: 'conversion',
        accessorKey: 'conversion',
        header: () => <div className='px-1'>Conversion</div>,
        cell: (info) => <div className='px-1'>{`${(info.getValue() as number) * 100}%`}</div>
      },
      {
        id: 'action',
        accessorKey: 'id',
        header: () => <div className='px-1'>Action</div>,
        cell: (info) => (
          <div role='listbox' className='dropdown dropdown-bottom dropdown-end'>
            <label tabIndex={0}>
              <button className='btn btn-xs btn-outline'>Actions</button>
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-xs z-[1]'
              role='menu'
            >
              <li role='menuitem'>
                <Link to={`${info.getValue()}/edit`}>Edit</Link>
              </li>
              <li role='menuitem'>
                <a>Rename</a>
              </li>
              <li role='menuitem'>
                <a>Delete</a>
              </li>
            </ul>
          </div>
        )
      }
    ],
    []
  );

  const table = useReactTable<PostEngagement>({
    data: MOCK_DATA,
    columns: columns,
    state: { pagination, rowSelection, sorting },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting
  });

  return (
    <>
      <div className='overflow-y-hidden overflow-x-scroll'>
        <table className='table table-sm bg-base-100 px-6'>
          <thead>
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((h, i) => (
                  <th
                    key={h.id}
                    colSpan={1}
                    style={[0, 1, 6].includes(i) ? { width: '20px' } : { width: '150px' }}
                    className='min-w-10'
                    onClick={h.column.getToggleSortingHandler()}
                  >
                    {flexRender(h.column.columnDef.header, h.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='flex items-center justify-center gap-4 py-3.5'>
        <button
          className='btn btn-circle btn-primary btn-sm'
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <DoubleBackArrow />
        </button>
        <button
          className='btn btn-circle btn-primary btn-sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <BackArrow />
        </button>
        <button
          className='btn btn-circle btn-primary btn-sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <NextArrow />
        </button>
        <button
          className='btn btn-circle btn-primary btn-sm'
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          <DoubleNextArrow />
        </button>
        <span className='flex items-center gap-1'>
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
          </strong>
        </span>
        <span className='hidden items-center gap-1 md:flex'>
          · Go to page:
          <input
            type='number'
            className='input w-16 p-1 input-sm input-bordered focus:outline-offset-0'
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </span>
      </div>
    </>
  );
}

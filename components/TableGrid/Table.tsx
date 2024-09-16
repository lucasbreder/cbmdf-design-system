import { getAllKeys } from "@/helpers/getAllKeys"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table"
import { ReactNode } from "react"
import Image from "next/image"

type TableProps = {
    jsonData: string
    includedKeys?: string[]
    hideColumns?: string[]
    actions?: ReactNode[]
    showItemOver?: showItemOverProps
}

type TableInnerProps = {
    data: any[]
    columns: ColumnDef<any>[]
    showItemOver?: showItemOverProps
    hideColumns?: string[]
}


type showItemOverProps = {
    columnIndex: number
    dataItem: string
}

const TableGrid = ({ jsonData, includedKeys, hideColumns, actions, showItemOver }: TableProps) => {

    const data = JSON.parse(jsonData);
    const keysData = includedKeys ?? getAllKeys(data)

    const columns: ColumnDef<any>[] = []



    keysData.forEach((key) => {

        columns.push({
            accessorKey: key,
            header: () => {
                return <span className="capitalize">{key}</span>
            },
        })
    })

    const actionsData: ColumnDef<any> = {
        id: "actions",
        cell: () => {
            return (
                <span className="flex gap-4 justify-end">
                    {actions?.map((item) => {
                        return item
                    })}
                </span>
            )
        },
    }

    columns.push(actionsData)

    return (
        <TableGridInner data={data} columns={columns} showItemOver={showItemOver} hideColumns={hideColumns} />
    )
}



const TableGridInner = ({ data, columns, showItemOver, hideColumns }: TableInnerProps) => {



    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })



    return (
        <>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="border-0">
                            {headerGroup.headers.map((header) => {
                                if (!hideColumns?.includes(header.id)) {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                }
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row, index) => (

                            <TableRow
                                className="odd:bg-slate-100 border-0"
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => {
                                    if (!hideColumns?.includes(cell.getContext().column.id)) {
                                        const value: any = cell.getValue()

                                        if (cell.getContext().column.id === 'image' && value) {
                                            return (
                                                <TableCell className="first:font-bold relative py-0 px-0" key={cell.id}>
                                                    <span className="flex items-center justify-center"><Image className="rounded-full overflow-hidden" src={value} alt="" width={50} height={50} /></span>
                                                </TableCell>
                                            )
                                        }
                                        return (
                                            <TableCell className="first:font-bold relative" key={cell.id}>
                                                {
                                                    <span className="flex flex-col">
                                                        {cell.getContext().column.getIndex() === showItemOver?.columnIndex &&
                                                            <span className="text-xs font-light">#{row.getValue(showItemOver.dataItem)}</span>}
                                                        <span>{flexRender(cell.column.columnDef.cell, cell.getContext())}</span>
                                                    </span>}
                                            </TableCell>
                                        )
                                    }

                                })}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                Nada Encontrado.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
}

export default TableGrid
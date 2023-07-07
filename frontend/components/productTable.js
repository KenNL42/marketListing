import DataTable from "react-data-table-component";

export default function ProductTable({columns, data}) {
    return (
        <div>
            <DataTable
            columns={columns}
            data={data}
            // pagination // <-- add if more than 10?
            />
         </div>
    )
};

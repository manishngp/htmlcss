import { useState, useMemo } from "react";

export default function DataTable({ data, columns }) {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = useMemo(() => {
    let sortable = [...data];
    if (sortConfig.key) {
      sortable.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];
        return (valA > valB ? 1 : -1) * (sortConfig.direction === "asc" ? 1 : -1);
      });
    }
    return sortable;
  }, [data, sortConfig]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, pageSize, currentPage]);

  const totalPages = Math.ceil(data.length / pageSize);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div >
      <div >
        <label>Page Size: </label>
        <select value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value))}}>
         <option value="10">10</option>
         <option value="25">10</option>
         <option value="50">10</option>
        </select>
      </div>
      <table >
        <thead>
          <tr >
     {columns.map((col) => (
        <th
            key={col.key}
         onClick={() => handleSort(col.key)}
        >
         {col.label} {sortConfig.key === col.key ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, id) => (
            <tr key={id} >
              {columns.map((col) => (
                <td key={col.key} >{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div >
        <button onClick={() => setCurrentPage(p => p-1)} disabled={currentPage === 1}>Prev</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(p =>  p + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

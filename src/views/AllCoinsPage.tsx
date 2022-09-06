import { Table } from "../components/CoinsTable/Table";
import { Pagination } from "../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypesSelector";

export const AllCoinsPage = () => {
  const [paginationCount, setPaginationCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setPaginationCount((currentPage - 1) * 10);
  }, [currentPage]);
  const { assets, loading, error } = useTypedSelector((state) => state.assets);
  return (
    <div style={{display:'flex', flexDirection:'column', justifyItems: 'center'}}>
      {loading ? (
        "Loading..."
      ) : error ? (
        error
      ) : (
        <Table assets={assets.slice(paginationCount, paginationCount + 10)} />
      )}
      <div style={{display:'flex', justifyContent: 'center'}}>
        <Pagination
            countPages={10}
            currentPage={currentPage}
            handler={(newPage) => setCurrentPage(newPage)}
        />
      </div>
    </div>
  );
};

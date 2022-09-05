import { Button } from "../components/Button/Button";
import { Table } from "../components/CoinsTable/Table";
import { Pagination } from "../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypesSelector";
import { useActions } from "../hooks/useActions";

export const AllCoinsPage = () => {
  const { fetchAssets } = useActions();
  const [paginationCount, setPaginationCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPaginationCount((currentPage - 1) * 10);
  }, [currentPage]);

  useEffect(() => {
    fetchAssets();
  }, []);

  const { assets, loading, error } = useTypedSelector((state) => state.assets);
  return (
    <>
      <h3>All Coins Info</h3>
      <Button type={"delete"}>delete</Button>
      <Button type={"primary"}>primary</Button>
      <Button type={"secondary"}>secondary</Button>
      {loading ? (
        "Loading..."
      ) : error ? (
        error
      ) : (
        <Table assets={assets.slice(paginationCount, paginationCount + 10)} />
      )}
      <Pagination
        countPages={10}
        currentPage={currentPage}
        handler={(newPage) => setCurrentPage(newPage)}
      />
    </>
  );
};

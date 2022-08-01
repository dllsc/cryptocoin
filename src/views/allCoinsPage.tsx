import { Button } from "../components/button/Button";
import { Table } from "../components/allCoinTable/Table";
import { Pagination } from "../components/pagination/Pagination";

export const AllCoinsPage = () => {
  return (
    <>
      <h3>All Coins Info</h3>
      <Button type={"delete"}>delete</Button>
      <Button type={"primary"}>primary</Button>
      <Button type={"secondary"}>secondary</Button>
      <Table />
      <Pagination
        countPages={10}
        currentPage={1}
        handler={() => console.log("pagination handler")}
      />
    </>
  );
};

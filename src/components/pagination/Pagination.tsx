import { Button } from "../button/Button";
interface PaginationProps {
  countPages: number;
  currentPage: number;
  handler: (nextPage: number) => void;
}
export function Pagination({
  currentPage,
  countPages,
  handler,
}: PaginationProps) {
  const buttons = [];
  for (let i = 1; i <= countPages; i++) {
    const isCurrent = currentPage === i;
    const type = isCurrent ? "primary" : "secondary";
    buttons.push(
      <Button
        key={i}
        type={type}
        disabled={isCurrent}
        onClick={() => handler(i)}
      >
        {i}
      </Button>
    );
  }

  return (
    <div>
      <Button
        disabled={currentPage === 1}
        type={"secondary"}
        onClick={() => handler(currentPage - 1)}
      >
        {"«"}
      </Button>
      {buttons}
      <Button
        disabled={currentPage === countPages}
        type={"secondary"}
        onClick={() => handler(currentPage + 1)}
      >
        {"»"}
      </Button>
    </div>
  );
}

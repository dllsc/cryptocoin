import { Dispatch, ReactNode } from "react";
import "./Modal.scss";

interface ModalProps {
  active: boolean;
  setActive: Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

export const Modal = ({ active, setActive, children }: ModalProps) => {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? "modal modal-active" : "modal"}
    >
      <div
        className={
          active ? "modal-content modal-content-active" : "modal-content"
        }
        onClick={(e) => e.stopPropagation()}
      >{children}</div>
    </div>
  );
};

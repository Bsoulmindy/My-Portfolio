import { ReactNode } from "react";
import "../styles/Control.css";

function Control({ isActive, children, onClick }: Readonly<ControlProps>) {
    return (
        <button
            className={"control" + (isActive ? " control_active" : "")}
            onClick={onClick}
            data-testid="control0">
            {children}
        </button>
    );
}

type ControlProps = {
    isActive: boolean;
    children: ReactNode;
    onClick: () => void;
};

export default Control;

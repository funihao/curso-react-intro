import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./delete.svg";

import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckSVG className="icon__svg" fill={color} />,
  delete: (color) => <DeleteSVG className="icon__svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`icon icon__${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };

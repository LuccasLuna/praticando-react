import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "../../icon/icon";
import { SideBarProps } from "../sidebar";
import "./option.scss";

export interface OptionProps {
  icon: string;
  name: string;
  route?: string;
  state: "open" | "closed";
  subItems?: SideBarProps[];
  className?: string;
}

export function Option({
  icon,
  name,
  route,
  state,
  subItems,
  className,
}: OptionProps) {
  const location = useLocation();

  let isSubItemActive = false;

  if (subItems) {
    isSubItemActive = subItems?.some(
      (subitem) => location.pathname === subitem.route
    );
  }

  const [subItemsOpen, setSubItemsOpen] = useState(true);

  const toggleSubItems = () => {
    setSubItemsOpen(!subItemsOpen);
  };

  useEffect(() => {
    if (state === "closed") {
      setSubItemsOpen(false);
    } else if (isSubItemActive) {
      setSubItemsOpen(true);
    }
  }, [state, route]);

  return (
    <div>
      {route ? (
        <NavLink
          key={name}
          className={`option option--${state} ${
            isSubItemActive ? "option__content--active" : ""
          } ${className}`}
          to={route}
        >
          <div
            className={`option__content ${
              location.pathname === route ? "option__content--active" : ""
            } d-row-center`}
          >
            <Icon name={icon} />
            <p>{state === "open" ? name : ""}</p>
          </div>
        </NavLink>
      ) : (
        <div className={`option`} onClick={toggleSubItems}>
          <div
            className={`option__content d-flex d-space-between ${
              subItemsOpen || isSubItemActive ? "option__content--active" : ""
            }`}
          >
            <div className="d-row-center gap-8">
              <Icon name={icon} />
              <p>{state === "open" ? name : ""}</p>
            </div>
            <Icon
              pointer
              name={subItemsOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
            />
          </div>

          <div
            className={`d-column option__subitems ${
              subItemsOpen ? "option__subitems--open" : ""
            }`}
          >
            {subItemsOpen &&
              subItems?.map((subitem) => (
                <NavLink
                  key={subitem.name}
                  className="navlink"
                  to={subitem.route || "/"}
                >
                  <div
                    className={`option__subitems__content d-flex d-space-between ${
                      location.pathname === subitem.route
                        ? "option__subitems__content--active"
                        : ""
                    }`}
                  >
                    <p>{state === "open" ? subitem.name : ""}</p>
                  </div>
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

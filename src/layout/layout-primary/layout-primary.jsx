import background from "./../../assets/images/background.png";
import { Sidebar } from '../../ui/sidebar/sidebar';
import "./layout-primary.scss";


export function LayoutPrimary({children}) {
  return (
    <>
      <div className="layout-primary">
        <img
          className="layout-primary__background"
          src={background}
          alt="Background"
        />
        <Sidebar/>
        <div className="layout-primary__container d-column">
          <div className="layout-primary__container__content">{children}</div>
        </div>
      </div>
    </>
  );
}

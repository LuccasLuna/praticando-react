import "./icon.scss";

export interface IconProps {
  name: string;
  weight?: string;
  size?: string;
  color?: string;
  filled?: boolean;
  pointer?: boolean;
  onClick?: () => void;
  className?: string;
}

const Icon = (props: IconProps) => {
  return (
    <i onClick={props.onClick}
       className={"material-symbols-outlined" + (props.filled ? " filled" : " unfilled") + ` ${props.className}`}
       style={{
        fontSize: props.size,
        color: props.color,
        cursor: props.pointer ? "pointer" : "default",
        userSelect: "none"
      }}>
      {props.name}
    </i>
  );
};

export default Icon;

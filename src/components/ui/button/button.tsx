import './button.scss';
import * as React from 'react';
import cx from 'classnames';

const COMPONENT_NAME = 'btn';
const COMPONENT_DISABLED_NAME = `${COMPONENT_NAME}--disabled`;
const COMPONENT_HIDDEN_NAME = `${COMPONENT_NAME}--hidden`;

interface IButtonProps {
  className?: string;
  children?;
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  hidden?: boolean;
}

const Button: React.FunctionComponent<IButtonProps> = ({ children, label, type = 'button', disabled = false, hidden, className }) => {
  const btnClassName = cx({
    [`${className}`]: true,
    [`${COMPONENT_NAME}`]: true,
    [`${COMPONENT_DISABLED_NAME}`]: disabled,
    [`${COMPONENT_HIDDEN_NAME}`]: hidden
  });

  switch (type) {
    case 'submit':
      return (
        <button className={btnClassName} type="submit" disabled={disabled}>
          {label || children}
        </button>
      );
    default:
      return (
        <button className={btnClassName} type="button" disabled={disabled}>
          {label || children}
        </button>
      );
  }
};

export default Button;

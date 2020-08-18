import './button.scss';
import * as React from 'react';
import * as cx from 'classnames';

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
    btn: true,
    'btn--disabled': disabled,
    'btn--hidden': hidden
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

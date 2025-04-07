import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

type Props = ComponentProps<'button'>;

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={clsx(styles.wrapper, className, styles.primary)}
      {...props}
    >
      {children}
    </button>
  );
};

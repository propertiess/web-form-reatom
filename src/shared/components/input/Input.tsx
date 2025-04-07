import { ComponentProps, forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Input.module.css';

type Props = ComponentProps<'input'>;

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className, type, ...props },
  ref
) {
  const style = clsx(className, type !== 'checkbox' && styles.wrapper);

  return <input className={style} ref={ref} type={type} {...props} />;
});

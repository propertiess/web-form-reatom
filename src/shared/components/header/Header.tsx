import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './Header.module.css';

type Props = ComponentProps<'header'>;

export const Header = ({ className, ...props }: Props) => {
  return (
    <header className={clsx(styles.header, className)} {...props}>
      <h1 className='text-4xl'>Web-form</h1>
    </header>
  );
};

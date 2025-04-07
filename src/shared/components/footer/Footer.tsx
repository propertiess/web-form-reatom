import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './Footer.module.css';

type Props = ComponentProps<'footer'>;

export const Footer = ({ className, ...props }: Props) => {
  return (
    <footer className={clsx(styles.footer, className)} {...props}>
      &copy; {new Date().getFullYear()}
    </footer>
  );
};

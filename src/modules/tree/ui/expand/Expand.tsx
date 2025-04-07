import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

import styles from './Expand.module.css';

type Props = {
  isBranch: boolean;
  isExpanded: boolean;
};

export const Expand = ({ isBranch, isExpanded }: Props) => {
  return (
    <>
      {isBranch && (
        <>
          {isExpanded ? (
            <ArrowUpIcon className={styles.icon} />
          ) : (
            <ArrowDownIcon className={styles.icon} />
          )}
        </>
      )}
    </>
  );
};

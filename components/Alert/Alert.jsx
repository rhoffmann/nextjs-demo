import styles from './Alert.module.css';
import clsx from 'clsx';

export default function Alert(props) {
  const { type, children } = props;
  return (
    <div
      className={clsx(styles.root, {
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}

import { useContext } from 'react';
import styles from './styles.module.css';
import { TaskContext, useTaskContext } from '../../contexts/TaskContext/useTaskContext';
type HeadingProps = {
  children: React.ReactNode;
}

export function Heading({children}:HeadingProps){
    return (
        <h1 className={styles.heading}>{children}</h1>
    );
}
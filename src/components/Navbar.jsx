import { useEffect } from 'react';
import { useView } from '../contexts/ViewContext';
import OrderView from '../views/OrderView';
import styles from './Navbar.module.css';

// Component export
export default () => {
    const { setView } = useView();

    return <div className={styles.navbar}>
        <ul>
            <li onClick={() => setView(<OrderView />)}>Orders</li>
            <li onClick={() => setView(null)}>Products</li>
            <li onClick={() => setView(null)}>Report</li>
        </ul>
    </div>;
}
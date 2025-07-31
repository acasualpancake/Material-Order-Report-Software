// Functional imports
import Navbar from "../components/Navbar";

// Style imports
import generalStyles from './GeneralView.module.css';

// Functions
const content = () => {
    // TODO: Add contents
    return <p>Hello World! - Orders</p>;
}

// Component export
export default () => {
    return (
        <>
            <Navbar />
            <div className={generalStyles.container}>{content()}</div>
        </>
    );
}
import Navbar from "../components/Navbar";

const content = () => {
    // TODO: Add contents
    return <p>Null</p>;
}

// Component export
export default () => {
    return (
        <>
            <Navbar />
            {content()}
        </>
    );
}
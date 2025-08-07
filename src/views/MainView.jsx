// Functional imports
import { useState } from "react";
import Navbar from "../components/Navbar";
import FileUpload, { parseExcel } from "../logic/Parser";

// Style imports
import generalStyles from './GeneralView.module.css';



// Functions
const Content = () => {
    const [ tableData, setTableData ] = useState([]);

    const fileChosen = async (file) => {
        const [headers, ...dataRows] = await parseExcel(file);
        const objects = dataRows.map(row => Object.fromEntries(headers.map((key, i) => [key, row[i]])))
        setTableData(objects)
    }

    // TODO: Add contents
    return (
        <>
            <FileUpload onFileChosen={fileChosen} />
            {tableData.length > 0 ? (
                <div style={{ marginTop: '20px' }}>
                    <h3>Parsed Table</h3>
                    <table border="1" style={{ borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                {Object.keys(tableData[0]).map((key) => (
                                    <th style={{ color: '#FFFFFF', backgroundColor: '#404040' }} key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, i) => (
                                <tr key={i}>
                                    {Object.values(row).map((cell, j) => (
                                        <td style={{ padding: '10px' }} key={j}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p style={{ marginTop: '20px' }}>No content</p>
            )}
        </>
    );
}

// Component export
export default () => {
    return (
        <>
            <Navbar />
            <div className={generalStyles.container}><Content /></div>
        </>
    );
}
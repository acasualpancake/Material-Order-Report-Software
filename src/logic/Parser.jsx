import React from "react"
import ExcelJS from 'exceljs'

export default function FileUpload({ onFileChosen }) {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onFileChosen(file);
        }
    }

    return <input type="file" accept=".xlsx,.xls" onChange={handleFileChange} />;
}

export const parseExcel = async (file) => {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file);

    const data = [];

    workbook.worksheets.forEach((worksheet) => {
        worksheet.eachRow((row, rowNumber) => {
            // row.values is like: [empty, val1, val2, ...]
            const values = row.values;

            // Some rows may be empty (especially row 2), so guard against undefined
            const cleanRow = values.slice(1); // remove first empty item

            // Push only non-empty rows (optional)
            if (cleanRow.some(cell => cell !== null && cell !== undefined && cell !== "")) {
                data.push(cleanRow);
            }
        });
    });

    console.log("Parsed rows:", data);
    return data;
}
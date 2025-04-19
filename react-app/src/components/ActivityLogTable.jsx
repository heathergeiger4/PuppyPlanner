import React from 'react';

function ActivityLogTable({data}) {
    return(
        <div style={{ padding: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={thStyle}>Activity</th>
                        <th style={thStyle}>Date</th>
                        <th style={thStyle}>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="3" style={tdStyle}>No data available</td>
                        </tr>
                    ) : (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td style={tdStyle}>{item.activity}</td>
                                <td style={tdStyle}>{item.date}</td>
                                <td style={tdStyle}>{item.time}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
  
const thStyle = {
    textAlign: 'left',
    padding: '0.5rem',
    borderBottom: '2px solid #ccc',
    backgroundColor: '#f2f2f2'
};

const tdStyle = {
    padding: '0.5rem',
    borderBottom: '1px solid #eee'
};
  
export default ActivityLogTable;

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
  const socket = io.connect("http://localhost:5000")
  

    socket.on('table',(event) => {
        const newData = JSON.parse(event.data);
          setData((prevData) => [...prevData, newData]);

    })

    // socket.onmessage = (event) => {
    //   const newData = JSON.parse(event.data);
    //   setData((prevData) => [...prevData, newData]);
    // };

    return () => {
      socket.close();
      console.log("data",data)
    };
  }, []);
  
  
  return (
    <div>
     <h1>hii</h1>
       <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Battery</th>
          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.col1}</td>
            <td>{row.col2}</td>
            <td>{row.col3}</td>
          </tr>
        ))}
      </tbody>
    </table>

   

    </div>
  );
}

export default App;









import React from "react";
import { CLIENTS_PER_PAGE} from "../utils/constants"

const Table=({clients,page})=>{
    const startIndex=( page-1)* CLIENTS_PER_PAGE
    const selectedClients= clients.slice(startIndex, startIndex + CLIENTS_PER_PAGE);
   
    console.log(selectedClients)

    return(

        <div className="table-completed mt-5">
        <div className="col-md-12">
          <table className="table" id="clients-list">
            <thead className="table-head">
           
              <tr>
                  
               <th >Id</th>
                <th>Vorname </th>
                <th >Nachname</th>
                <th >Alter</th>
                <th >Land</th> 
              </tr>
            </thead>
            <tbody className="table-body">
              {selectedClients.map((client) => (
                  
                <tr key={client.id}>
                  <td >{client.id}</td>
                  <td>{client.vorname}</td>
                  <td>{client.nachname}</td>
                  <td>{client.alter}</td>
                  <td>{client.land}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>



    )

}

export default Table;
import React from "react";

function rightSection() {
  return (
    <table id="table" className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Description</th>
          <th>Start date</th>
          <th>End date</th>
          <th>Start time</th>
          <th>End time</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Learning React</td>
          <td>Have to complete the topic react hook</td>
          <td>15-04-2024</td>
          <td>17-04-2024</td>
          <td>12:00 PM</td>
          <td>01:00 PM</td>       
          <td className="bg-warning bg-gradient text-light">Pending</td>
          <td>
            <div class="dropdown">
                <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Change Status
                </button>
                <ul class="dropdown-menu">
                    <li>Action</li>
                    <li>Another action</li>
                    <li>Something else here</li>
                </ul>
            </div>
           </td>
        </tr>
        <tr>
          <td>Learning React</td>
          <td>Have to complete the topic react hook</td>
          <td>15-04-2024</td>
          <td>17-04-2024</td>
          <td>12:00 PM</td>
          <td>01:00 PM</td>
          <td className="bg-success bg-gradient text-light">Completed</td>
          <td>
            <div class="dropdown">
                <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Change Status
                </button>
                <ul class="dropdown-menu">
                    <li>Action</li>
                    <li>Another action</li>
                    <li>Something else here</li>
                </ul>
            </div>
           </td>         
        </tr>
      </tbody>
    </table>
  );
}
export default rightSection;

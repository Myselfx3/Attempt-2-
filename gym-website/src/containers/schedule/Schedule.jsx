import React from 'react';
import './schedule.css';


const Schedule = () => {
  return (
    <div className="schedule">
        <h2 className="schedule-title">Class Schedule</h2>
        <table className="schedule-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9:00</td>
                <td>Cardio Blast</td>
                <td>Yoga Fusion</td>
                <td>CrossFit Challenge</td>
                <td>Zumba Party</td>
                <td>Spin Cycle</td>
              </tr>
              <tr>
                <td>10:30</td>
                <td>Total Body Sculpt</td>
                <td>Pilates Core</td>
                <td>HIIT Extreme</td>
                <td>Strength Training</td>
                <td>Dance Cardio</td>
              </tr>
              <tr>
                <td>12:00</td>
                <td>Lunch Break</td>
                <td>Lunch Break (vegan)</td>
                <td>Lunch Break</td>
                <td>Lunch Break</td>
                <td>Lunch Break</td>
              </tr>
              <tr>
                <td>1:30</td>
                <td>Powerlifting Basics</td>
                <td>Kickboxing Circuit</td>
                <td>Bodyweight Bootcamp</td>
                <td>Spin &amp; Sculpt</td>
                <td>Yoga Flow</td>
              </tr>
              <tr>
                <td>3:00</td>
                <td>Functional Fitness</td>
                <td>TRX Suspension</td>
                <td>Cardio Kick</td>
                <td>Core Conditioning</td>
                <td>Aquatic Aerobics</td>
              </tr>
              <tr>
                <td>4:30</td>
                <td>Flexibility Fusion</td>
                <td>Kettlebell Conditioning</td>
                <td>Barre Sculpt</td>
                <td>Tabata Intervals</td>
                <td>Dance Fusion</td>
              </tr>
            </tbody>
            </table>
        </div>
  )
}

export default Schedule

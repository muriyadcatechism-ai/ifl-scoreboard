"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnTvBQY6C2O474tuOmtFyFKyIFKyAWXFuVCX1ZE7NaceiQTn1oZ5ayL4TIpolmpgeozY24VizPteZlpxCaiAAsTm1XTcbdU1N5XzeuytlGALw2Wwzskccny3KU59k-q4dnFW30kcIbWeyLNOWRtxjr51jULq9FZtCPpKu2wIccgM-Ho8dm4ei-S-7WOVh7Kwq9DaJ3eD2n25ZiNZIQHeLgdE8_KTMvv0Dhh7fyaDMxTnBZEmDvKpxccgxQCWBGLk_6xrBTnwicJzhuLqywN1rSPi4zfi1g&lib=MI2NjEzJ7Zd24Yk0gx-NWrqfNC5efjK-h"
    )
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <h2>MURIYAD CATECHISM UNIT</h2>
          <h1>IFL FAITH CLUB SCORE BOARD</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h2>Current Task</h2>
          <p>{data.currentTask}</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h2>Leaderboard</h2>

          <table width="100%" border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Faith Club</th>
                <th>Points</th>
              </tr>
            </thead>

            <tbody>
              {data.leaderboard.map((club, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{club.club}</td>
                  <td>{club.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Task History</h2>

          <table width="100%" border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Date</th>
                <th>Faith Club</th>
                <th>Task</th>
                <th>Points</th>
              </tr>
            </thead>

            <tbody>
              {data.history.map((item, index) => (
                <tr key={index}>
                  <td>
  {new Date(item[0]).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}
</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
"use client";

import Image from "next/image";
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
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e8f1ff, #f5f7ff)",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            marginBottom: "20px",
          }}
        >
          <Image
            src="/logo.png"
            alt="Catechism Logo"
            width={120}
            height={120}
            priority
          />

          <h1
            style={{
              color: "#0f2f6b",
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            MURIYAD CATECHISM UNIT
          </h1>

          <h2
            style={{
              color: "#b91c1c",
              marginTop: "0",
            }}
          >
            IFL FAITH CLUB SCORE BOARD
          </h2>
        </div>

        {/* Current Task */}
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            marginBottom: "20px",
          }}
        >
          <h2>📌 Current Task</h2>
          <p>{data.currentTask}</p>
        </div>

        {/* Leaderboard */}
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            marginBottom: "20px",
          }}
        >
          <h2>🏆 Leaderboard</h2>

          <table
            width="100%"
            border="1"
            cellPadding="10"
            style={{ borderCollapse: "collapse" }}
          >
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
                  <td>
                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : index + 1}
                  </td>
                  <td>{club.club}</td>
                  <td>{club.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* History */}
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>📜 Task History</h2>

          <table
            width="100%"
            border="1"
            cellPadding="10"
            style={{ borderCollapse: "collapse" }}
          >
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
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
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background: "#ffffff",
            padding: "35px",
            borderRadius: "25px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            marginBottom: "25px",
            borderTop: "6px solid #2d3192",
          }}
        >
          <Image
            src="/logo.png"
            alt="Catechism Logo"
            width={180}
            height={180}
            priority
            style={{
              margin: "0 auto",
              display: "block",
            }}
          />

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "48px",
              color: "#2d3192",
              marginTop: "20px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            MURIYAD CATECHISM UNIT
          </h1>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "32px",
              color: "#c4a13b",
              marginTop: "0",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            IFL FAITH CLUB SCORE BOARD
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "18px",
              letterSpacing: "2px",
              marginTop: "10px",
            }}
          >
            FAITH • HOPE • LOVE
          </p>
        </div>

        {/* CURRENT TASK */}
        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            marginBottom: "25px",
            borderTop: "6px solid #c4a13b",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#2d3192",
              fontFamily: "Georgia, serif",
              fontSize: "30px",
              marginBottom: "15px",
            }}
          >
            CURRENT TASK
          </h2>

          <hr
  style={{
    width: "80%",
    border: "none",
    borderTop: "3px solid #c4a13b",
    margin: "20px auto",
  }}
/>

          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {data.currentTask}
          </p>
        </div>

        {/* LEADERBOARD */}
        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            marginBottom: "25px",
            borderTop: "6px solid #2d3192",
          }}
        >
          <h2
            style={{
              color: "#2d3192",
              fontFamily: "Georgia, serif",
              fontSize: "30px",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            LEADERBOARD
          </h2>

          <hr
  style={{
    width: "80%",
    border: "none",
    borderTop: "3px solid #c4a13b",
    margin: "20px auto",
  }}
/>

          <table
            width="100%"
            cellPadding="12"
            style={{
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#2d3192",
                  color: "white",
                }}
              >
                <th>Rank</th>
                <th>Faith Club</th>
                <th>Points</th>
              </tr>
            </thead>

            <tbody>
              {data.leaderboard.map((club, index) => (
                <tr
                  key={index}
                  style={{
                    background:
                      index === 0
                        ? "#fff8dc"
                        : index % 2 === 0
                        ? "#f8f9ff"
                        : "#ffffff",
                  }}
                >
                  <td style={{ padding: "12px" }}>
                    {index === 0
                      ? "🥇"
                      : index === 1
                      ? "🥈"
                      : index === 2
                      ? "🥉"
                      : "🔹"}
                  </td>

                  <td style={{ padding: "12px", fontWeight: "600" }}>
                    {club.club}
                  </td>

                  <td style={{ padding: "12px", fontWeight: "bold" }}>
                    {club.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TASK HISTORY */}
        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            borderTop: "6px solid #2d3192",
          }}
        >
          <h2
            style={{
              color: "#2d3192",
              fontFamily: "Georgia, serif",
              fontSize: "30px",
              textAlign: "center",
              marginBottom: "15px",
            }}
          >
            TASK HISTORY
          </h2>

          <hr
  style={{
    width: "80%",
    border: "none",
    borderTop: "3px solid #c4a13b",
    margin: "20px auto",
  }}
/>

          <table
            width="100%"
            cellPadding="12"
            style={{
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#2d3192",
                  color: "white",
                }}
              >
                <th>Date</th>
                <th>Faith Club</th>
                <th>Task</th>
                <th>Points</th>
              </tr>
            </thead>

            <tbody>
              {data.history.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    background:
                      index % 2 === 0 ? "#f8f9ff" : "#ffffff",
                  }}
                >
                  <td>
  {isNaN(Date.parse(item[0]))
    ? item[0]
    : new Date(item[0]).toLocaleDateString("en-GB", {
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

        {/* FOOTER */}
        <div
          style={{
            textAlign: "center",
            marginTop: "35px",
            color: "#555",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            ST. JOSEPH'S CHURCH CATECHISM UNIT
          </p>

          <p>Muriyad</p>

          <p
            style={{
              color: "#c4a13b",
              letterSpacing: "2px",
              fontWeight: "bold",
            }}
          >
            FAITH • HOPE • LOVE
          </p>
        </div>
      </div>
    </main>
  );
}
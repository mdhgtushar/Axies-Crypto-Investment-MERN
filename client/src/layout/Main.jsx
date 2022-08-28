import React, { useEffect, useState } from "react";
import Header from "./Header";

const Main = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const sette = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => {
      clearInterval(sette);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="content-page">
          <div className="content">
            {loading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "80vh",
                }}
              >
                <div className="text-center">
                  <div className="spinner-border" role="status"></div>
                </div>
              </div>
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

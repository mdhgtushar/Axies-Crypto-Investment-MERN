import React, { useContext, useEffect } from "react";
import Main from "../layout/Main";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Loading = () => {
  const navigate = useNavigate();

  const ifLogin = useContext(AuthContext);
  useEffect(() => {
    const datareload = setInterval(() => {
      if (ifLogin == undefined) {
        console.log("Loading");
      } else if (ifLogin) {
        return navigate("/dashboard");
      } else if (ifLogin == false) {
        return navigate("/login");
      }
    }, 3000);
    return () => {
      clearInterval(datareload);
    };
  }, [ifLogin, navigate]);

  return (
    <Main>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <div class="text-center">
          <div class="spinner-border" role="status"></div>
        </div>
      </div>
    </Main>
  );
};

export default Loading;

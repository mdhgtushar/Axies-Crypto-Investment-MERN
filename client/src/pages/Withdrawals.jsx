import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Main from "../layout/Main";

export default function Withdrawals() {
  const [deposits, setDeposits] = useState([]);
  const getDeposits = async () => {
    const fetchdata = await axios.get(
      "http://localhost:5000/api/user/widthdrows"
    );
    if (fetchdata) {
      setDeposits(fetchdata.data);
    }
  };
  useEffect(() => {
    getDeposits();
    console.log(deposits);
  }, []);
  const getList = deposits.map((e, key) => {
    let status = <span class="text-danger">Rejected</span>;
    if (e.status === 0) {
      status = <span class="text-warning">Panding</span>;
    } else if (e.status === 1) {
      status = <span class="text-success">Accepted</span>;
    } else if (e.status === 2) {
      status = <span class="text-danger">Rejected</span>;
    }
    return (
      <tr>
        <td>{key + 1}</td>
        <td>{e.ammount}</td>
        <td>{e.wallet_adress}</td>
        <td>{status}</td>
        <td>
          {e.status === 0 ? (
            <>
              <a type="button" class="text-danger">
                Cancel
              </a>{" "}
            </>
          ) : (
            " "
          )}
        </td>
      </tr>
    );
  });
  return (
    <Main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <h4 class="page-title">Withdrawals</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="row mb-4">
              <div class="col-sm-12">
                <div>
                  <Link class="btn btn-primary" to="/withdrawals/add">
                    <i class="fa fa-plus"></i>Withdrawal Request
                  </Link>
                </div>
              </div>
            </div>

            {deposits.length > 0 ? (
              <div class="row bg-black">
                <div class="col-sm-12">
                  <div class="table-responsive">
                    <table class="align-middle table-striped table-nowrap table">
                      <thead>
                        <tr>
                          <th>Serial</th>
                          <th>Ammount</th>
                          <th>Wallet Address</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>{getList}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              <div class="row">
                <div class="col-sm-12">
                  <p class="text-danger">
                    <b>
                      <i class="fa fa-exclamation-circle"></i> No subscriptions
                      available for now.
                    </b>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Main>
  );
}

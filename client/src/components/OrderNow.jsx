import React from "react";

export default function OrderNow() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Place IMEI Order</h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <div class="col-lg-12">
                <p class="font-weight-bold text-muted">IMEI Service:</p>
                <select
                  class="form-control select2"
                  id="select2"
                  data-toggle="select2"
                >
                  <option value="0">Select</option>
                  <optgroup label="Check Service">
                    <option value="25">
                      iPhone All in One check by IMEI - Full Apple Details (with
                      Blacklist Pro + Carrier)
                    </option>
                  </optgroup>
                  <optgroup label="MinaTool">
                    <option value="1">
                      Bypass iPhone 5s MEID/GSM with Signal (Mina Tool)
                    </option>
                    <option value="2">
                      Bypass iPhone 6/6p MEID/GSM with Signal (Mina Tool)
                    </option>
                    <option value="3">
                      Bypass iPhone 5se/6s/6sp MEID/GSM with Signal (Mina Tool)
                    </option>
                    <option value="4">
                      Bypass iPhone 7/7p MEID/GSM with Signal (Mina Tool)
                    </option>
                    <option value="5">
                      Bypass iPhone 8/8p MEID/GSM with Signal (Mina Tool)
                    </option>
                    <option value="6">
                      Bypass iPhone X MEID/GSM with Signal (Mina Tool)
                    </option>
                    <option value="7">
                      Bypass iPad MEID/GSM with Signal (Mina Tool)
                    </option>
                    <option value="8">
                      Mina USB Patcher v3.2- Support 6s/6s+/7/7+
                    </option>
                    <option value="9">
                      iCloud/MDM Bypass for MacOS Devices T2
                    </option>
                    <option value="10">
                      Remove iCloud for iPhone, iPad Active Menu with Proxy -
                      iPhone 5s-&gt;12 Pro Max, iPad - Support iOS 12-&gt;15
                    </option>
                    <option value="27">
                      Bypass GSM/MEID/Baseband For iPhone/iPad Support to iOS
                      14.8 No Signal
                    </option>
                    <option value="28">
                      Passcode/Disable &gt; FMI ON to OFF - iPhone
                      6s/6s+/7/7+/8/8+/X/iPad - Support iOS14
                    </option>
                    <option value="29">
                      MDM Bypass Tool (without jailbreak)
                    </option>
                    <option value="30">
                      kBypass No Meid Services (with signal supported ios
                      14.5.1)
                    </option>
                  </optgroup>
                  <optgroup label="iRemoveTool"></optgroup>
                  <optgroup label="Remote Bypass iCloud (Windows) ">
                    <option value="11">
                      iCloud Bypass (With Signal) for MEID/NO MEID Devices [
                      Without Mac ] - iPhone 5s
                    </option>
                    <option value="13">
                      iCloud Bypass (With Signal) for MEID/NO MEID Devices [
                      Without Mac ] - iPhone 6/6p
                    </option>
                    <option value="14">
                      iCloud Bypass (With Signal) for MEID/NO MEID Devices [
                      Without Mac ] - 5se/6s/6sp
                    </option>
                    <option value="15">
                      iCloud Bypass (With Signal) for MEID/NO MEID Devices [
                      Without Mac ] - 7/7p
                    </option>
                    <option value="16">
                      iCloud Bypass (With Signal) for MEID/NO MEID Devices [
                      Without Mac ] - 8/8p
                    </option>
                    <option value="17">
                      iCloud Bypass (With Signal) for MEID/NO MEID Devices [
                      Without Mac ] - X
                    </option>
                    <option value="18">
                      iCloud Bypass (With Signal) for MEID/NO MEID Devices [
                      Without Mac ] - iPad{" "}
                    </option>
                  </optgroup>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body"></div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="card">
            <div class="card-body">
              <p>
                <strong>Check Service</strong>
              </p>
              <a href="https://minacriss.org/user/placeimeiorder?imei_service_id=25">
                iPhone All in One check by IMEI - Full Apple Details (with
                Blacklist Pro + Carrier) - 0.85$
              </a>
              <hr />
              <p>
                <strong>MinaTool</strong>
              </p>

              <p>
                <strong>iRemoveTool</strong>
              </p>
              <p>
                <strong>Remote Bypass iCloud (Windows) </strong>
              </p>
              <a href="https://minacriss.org/user/placeimeiorder?imei_service_id=11">
                iCloud Bypass (With Signal) for MEID/NO MEID Devices [ Without
                Mac ] - iPhone 5s - 25$
              </a>
              <hr />
              <a href="https://minacriss.org/user/placeimeiorder?imei_service_id=18">
                iCloud Bypass (With Signal) for MEID/NO MEID Devices [ Without
                Mac ] - iPad - 50$
              </a>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'

export default function Header2() {
  return (
    <div className="header_top_section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="header_top_main">
              <div className="call_text">
                <a href="#">
                  <i
                    className="fa fa-phone"
                    aria-hidden="true"></i>{" "}
                  +01-40-114-6855
                </a>
              </div>
              <div className="call_text_2">
                <a href="#">
                  <i
                    className="fa fa-envelope"
                    aria-hidden="true"></i>{" "}
                  demo@gmail.com
                </a>
              </div>
              <div className="call_text_1">
                <a href="#">
                  <i
                    className="fa fa-map-marker"
                    aria-hidden="true"></i>{" "}
                  Mordern Tawon Mosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const DownloadButton = () => {
  return (
    <div className="container download-button-wrapper">
      <div
        className="d-flex align-items-center "
        style={{ paddingBottom: "2rem" }}
      >
        <div className="text-danger-dot"></div>
        <h5 className="mb-0">Download PDF</h5>
      </div>
      <div className="flex">
        <div class="card  flex-row post-card post-card-width h-100">
          <div class="card-body d-flex flex-column justify-content-between p-0">
            <div>
              <h6
                class="card-title fw-semibold "
                style={{ cursor: "pointer", paddingBottom: "1rem" }}
              >
                Artificial Intelligence
              </h6>
              <p class="card-description mb-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div class="card flex-row post-card post-card-width h-100">
          <div class="card-body d-flex flex-column justify-content-between p-0">
            <div>
              <h6
                class="card-title fw-semibold "
                style={{ cursor: "pointer", paddingBottom: "1rem" }}
              >
                Online Courses for Students
              </h6>
              <p class="card-description mb-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadButton;

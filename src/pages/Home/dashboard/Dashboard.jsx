import React from "react";
import WeatherCard from "./WeatherCard";
import FeatureCard from "./FeatureCard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container-md container-fluid-xs">
        <div className=" row">
          <div className="col-lg-6 col-12 left-panel">
            <WeatherCard />
          </div>
          <div className="col-lg-6 col-12 right-panel d-flex flex-lg-row flex-column gap-3">
            {/* Left side with two stacked cards */}
            <div className="d-flex flex-column gap-3 w-100 w-lg-50">
              {/* <FeatureCard
                title="Dose of Wisdom"
                colorClass="orange"
                bgImg="featureImg1"
                link="https://animetrixlabs.com/knowledgecentre/quiz/"
              >
                
               
                 <svg
                width="124"
                height="124"
                viewBox="0 0 124 124"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M62 0C27.7722 0 0 27.7722 0 62C0 96.2279 27.7722 124 62 124C96.1605 124 124 96.2279 124 62C124 27.7722 96.1605 0 62 0ZM102.952 28.5792C110.349 37.59 114.788 49.0889 114.922 61.5292C113.174 61.1932 95.6896 57.629 78.0716 59.8482C77.6682 58.974 77.3318 58.0324 76.9285 57.0912C75.8524 54.536 74.6422 51.9134 73.4316 49.4252C92.9326 41.4904 101.809 30.0586 102.952 28.5792ZM62 9.14535C75.449 9.14535 87.7548 14.1887 97.1021 22.4599C96.1605 23.8048 88.1582 34.4968 69.3296 41.5574C60.655 25.6204 51.0392 12.5748 49.5597 10.5575C53.5269 9.61605 57.6964 9.14535 62 9.14535ZM39.4731 14.1215C40.8851 16.0043 50.2994 29.1171 59.1085 44.7179C34.3623 51.3081 12.5076 51.1736 10.154 51.1736C13.5835 34.7657 24.6789 21.115 39.4731 14.1215ZM9.01085 62.0674C9.01085 61.5292 9.01085 60.9913 9.01085 60.4535C11.2972 60.5205 36.9848 60.8569 63.4121 52.922C64.959 55.8806 66.371 58.9066 67.716 61.9326C67.0433 62.1345 66.3036 62.3364 65.6313 62.5379C38.3297 71.3469 23.8048 95.4207 22.5944 97.438C14.1887 88.0912 9.01085 75.6509 9.01085 62.0674ZM62 114.989C49.7612 114.989 38.4642 110.82 29.5206 103.826C30.462 101.876 41.2211 81.165 71.078 70.742C71.2124 70.6746 71.2799 70.6746 71.4143 70.6075C78.8783 89.9066 81.9047 106.113 82.7115 110.753C76.3232 113.51 69.3296 114.989 62 114.989ZM91.5205 105.911C90.9827 102.683 88.1582 87.217 81.232 68.1864C97.8418 65.5639 112.366 69.8678 114.182 70.4731C111.896 85.1996 103.423 97.9089 91.5205 105.911Z"
                  fill="white"
                />
              </svg>

              </FeatureCard> */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <FeatureCard
                      title="Dose of Wisdom"
                      colorClass="orange"
                      bgImg="featureImg1"
                      link="https://animetrixlabs.com/knowledgecentre/quiz/"
                    >
                      <svg
                        width="124"
                        height="124"
                        viewBox="0 0 124 124"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M62 0C27.7722 0 0 27.7722 0 62C0 96.2279 27.7722 124 62 124C96.1605 124 124 96.2279 124 62C124 27.7722 96.1605 0 62 0ZM102.952 28.5792C110.349 37.59 114.788 49.0889 114.922 61.5292C113.174 61.1932 95.6896 57.629 78.0716 59.8482C77.6682 58.974 77.3318 58.0324 76.9285 57.0912C75.8524 54.536 74.6422 51.9134 73.4316 49.4252C92.9326 41.4904 101.809 30.0586 102.952 28.5792ZM62 9.14535C75.449 9.14535 87.7548 14.1887 97.1021 22.4599C96.1605 23.8048 88.1582 34.4968 69.3296 41.5574C60.655 25.6204 51.0392 12.5748 49.5597 10.5575C53.5269 9.61605 57.6964 9.14535 62 9.14535ZM39.4731 14.1215C40.8851 16.0043 50.2994 29.1171 59.1085 44.7179C34.3623 51.3081 12.5076 51.1736 10.154 51.1736C13.5835 34.7657 24.6789 21.115 39.4731 14.1215ZM9.01085 62.0674C9.01085 61.5292 9.01085 60.9913 9.01085 60.4535C11.2972 60.5205 36.9848 60.8569 63.4121 52.922C64.959 55.8806 66.371 58.9066 67.716 61.9326C67.0433 62.1345 66.3036 62.3364 65.6313 62.5379C38.3297 71.3469 23.8048 95.4207 22.5944 97.438C14.1887 88.0912 9.01085 75.6509 9.01085 62.0674ZM62 114.989C49.7612 114.989 38.4642 110.82 29.5206 103.826C30.462 101.876 41.2211 81.165 71.078 70.742C71.2124 70.6746 71.2799 70.6746 71.4143 70.6075C78.8783 89.9066 81.9047 106.113 82.7115 110.753C76.3232 113.51 69.3296 114.989 62 114.989ZM91.5205 105.911C90.9827 102.683 88.1582 87.217 81.232 68.1864C97.8418 65.5639 112.366 69.8678 114.182 70.4731C111.896 85.1996 103.423 97.9089 91.5205 105.911Z"
                          fill="white"
                        />
                      </svg>
                    </FeatureCard>
                  </div>
                  <div className="flip-card-back">
                    <FeatureCard
                      title="— Nelson Mandela"
                      colorClass="orange"
                      bgImg="featureImg1"
                      link="#"
                    >
                      <p style={{ color: "white", fontWeight: "bold" }}>
                        Education is the most powerful weapon which you can use
                        to change the world.
                      </p>
                    </FeatureCard>
                  </div>
                </div>
              </div>

              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <FeatureCard
                      title="Did You Know"
                      colorClass="pink"
                      bgImg="featureImg4"
                      link="https://animetrixlabs.com/knowledgecentre/quiz/"
                    >
                      {/* SVG */}
                      <svg
                        width="124"
                        height="124"
                        viewBox="0 0 124 124"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M62 0C27.7722 0 0 27.7722 0 62C0 96.2279 27.7722 124 62 124C96.1605 124 124 96.2279 124 62C124 27.7722 96.1605 0 62 0ZM102.952 28.5792C110.349 37.59 114.788 49.0889 114.922 61.5292C113.174 61.1932 95.6896 57.629 78.0716 59.8482C77.6682 58.974 77.3318 58.0324 76.9285 57.0912C75.8524 54.536 74.6422 51.9134 73.4316 49.4252C92.9326 41.4904 101.809 30.0586 102.952 28.5792ZM62 9.14535C75.449 9.14535 87.7548 14.1887 97.1021 22.4599C96.1605 23.8048 88.1582 34.4968 69.3296 41.5574C60.655 25.6204 51.0392 12.5748 49.5597 10.5575C53.5269 9.61605 57.6964 9.14535 62 9.14535ZM39.4731 14.1215C40.8851 16.0043 50.2994 29.1171 59.1085 44.7179C34.3623 51.3081 12.5076 51.1736 10.154 51.1736C13.5835 34.7657 24.6789 21.115 39.4731 14.1215ZM9.01085 62.0674C9.01085 61.5292 9.01085 60.9913 9.01085 60.4535C11.2972 60.5205 36.9848 60.8569 63.4121 52.922C64.959 55.8806 66.371 58.9066 67.716 61.9326C67.0433 62.1345 66.3036 62.3364 65.6313 62.5379C38.3297 71.3469 23.8048 95.4207 22.5944 97.438C14.1887 88.0912 9.01085 75.6509 9.01085 62.0674ZM62 114.989C49.7612 114.989 38.4642 110.82 29.5206 103.826C30.462 101.876 41.2211 81.165 71.078 70.742C71.2124 70.6746 71.2799 70.6746 71.4143 70.6075C78.8783 89.9066 81.9047 106.113 82.7115 110.753C76.3232 113.51 69.3296 114.989 62 114.989ZM91.5205 105.911C90.9827 102.683 88.1582 87.217 81.232 68.1864C97.8418 65.5639 112.366 69.8678 114.182 70.4731C111.896 85.1996 103.423 97.9089 91.5205 105.911Z"
                          fill="white"
                        />
                      </svg>
                    </FeatureCard>
                  </div>
                  <div className="flip-card-back">
                    <FeatureCard
                      // title="Back Side"
                      colorClass="pink"
                      bgImg="featureImg4"
                      link="#"
                    >
                      <p style={{ color: "white", fontWeight: "bold" }}>
                        Did you know? Octopuses have three hearts and blue
                        blood!
                      </p>
                    </FeatureCard>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side with tall card */}
            <div className="w-100 w-lg-50">
              <div className="h-100">
                <div className="flip-card h-100">
                  <div className="flip-card-inner h-100">
                    <div className="flip-card-front h-100">
                      <FeatureCard
                        title="Mind Twister"
                        colorClass="green"
                        bgImg="featureImg3"
                        link="https://animetrixlabs.com/knowledgecentre/quiz/"
                      >
                        {/* SVG */}
                        <svg
                          width="131"
                          height="131"
                          viewBox="0 0 131 131"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M46.4473 0.918094C52.4599 0.853512 58.0727 3.63032 61.7539 8.34485L67.4365 15.9015C69.2449 18.1619 71.958 19.5187 74.8643 19.5187H94.6914C118.522 19.5188 130.148 32.2416 130.083 58.3331V89.7853C130.083 114.714 114.711 130.085 89.7178 130.085H41.2158C16.3514 130.085 0.916016 114.714 0.916016 89.7198V41.2179C0.916111 14.4806 12.7995 0.918094 36.2432 0.918094H46.4473ZM35.5977 77.0616C32.8853 77.0616 30.7541 79.1931 30.7539 81.9054C30.7539 84.5533 32.8852 86.7491 35.5977 86.7491H95.4014C98.0493 86.7491 100.181 84.5533 100.181 81.9054C100.18 79.1931 98.0492 77.0616 95.4014 77.0616H35.5977Z"
                            fill="white"
                          />
                        </svg>
                      </FeatureCard>
                    </div>
                    <div className="flip-card-back h-100">
                      <FeatureCard
                        // title="Back Side"
                        colorClass="green"
                        bgImg="featureImg3"
                        link="#"
                      >
                        <p style={{ color: "white", fontWeight: "bold" }}>
                          What has to be broken before you can use it?
                        </p>
                      </FeatureCard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import "./Home.css";
import slogan from "../../final project design we run/slogan1.png";
import videos from "../../final project design we run/trailer.mp4";
import slogan2 from "../../final project design we run/slogan2.png";
import imgh from "../../final project design we run/gal2.jpg";
import gal1 from "../../final project design we run/gal4.jpg";
import gal2 from "../../final project design we run/gal8.jpg";
import gal3 from "../../final project design we run/gal6.jpg";
import gal4 from "../../final project design we run/gal7.jpg";

const Home = () => {
  return (
    <div>
      <div className="bg-main">
        <div className="slogan">
          <div className="social">
            <svg
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.86267 23.996V13.068H12.5493L13.0973 8.78934H8.86267V6.06401C8.86267 4.82934 9.20667 3.98401 10.9787 3.98401H13.224V0.169345C12.1315 0.0522667 11.0334 -0.00426431 9.93467 1.19319e-05C6.676 1.19319e-05 4.43867 1.98934 4.43867 5.64134V8.78134H0.776001V13.06H4.44667V23.996H8.86267Z"
                fill="white"
              />
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.465 0.066C7.638 0.012 8.012 0 11 0C13.988 0 14.362 0.013 15.534 0.066C16.706 0.119 17.506 0.306 18.206 0.577C18.939 0.854 19.604 1.287 20.154 1.847C20.714 2.396 21.146 3.06 21.422 3.794C21.694 4.494 21.88 5.294 21.934 6.464C21.988 7.639 22 8.013 22 11C22 13.988 21.987 14.362 21.934 15.535C21.881 16.705 21.694 17.505 21.422 18.205C21.146 18.9391 20.7133 19.6042 20.154 20.154C19.604 20.714 18.939 21.146 18.206 21.422C17.506 21.694 16.706 21.88 15.536 21.934C14.362 21.988 13.988 22 11 22C8.012 22 7.638 21.987 6.465 21.934C5.295 21.881 4.495 21.694 3.795 21.422C3.06092 21.146 2.39582 20.7133 1.846 20.154C1.28638 19.6047 0.853315 18.9399 0.577 18.206C0.306 17.506 0.12 16.706 0.066 15.536C0.012 14.361 0 13.987 0 11C0 8.012 0.013 7.638 0.066 6.466C0.119 5.294 0.306 4.494 0.577 3.794C0.853723 3.06008 1.28712 2.39531 1.847 1.846C2.39604 1.2865 3.06047 0.853443 3.794 0.577C4.494 0.306 5.294 0.12 6.464 0.066H6.465ZM15.445 2.046C14.285 1.993 13.937 1.982 11 1.982C8.063 1.982 7.715 1.993 6.555 2.046C5.482 2.095 4.9 2.274 4.512 2.425C3.999 2.625 3.632 2.862 3.247 3.247C2.88205 3.60205 2.60118 4.03428 2.425 4.512C2.274 4.9 2.095 5.482 2.046 6.555C1.993 7.715 1.982 8.063 1.982 11C1.982 13.937 1.993 14.285 2.046 15.445C2.095 16.518 2.274 17.1 2.425 17.488C2.601 17.965 2.882 18.398 3.247 18.753C3.602 19.118 4.035 19.399 4.512 19.575C4.9 19.726 5.482 19.905 6.555 19.954C7.715 20.007 8.062 20.018 11 20.018C13.938 20.018 14.285 20.007 15.445 19.954C16.518 19.905 17.1 19.726 17.488 19.575C18.001 19.375 18.368 19.138 18.753 18.753C19.118 18.398 19.399 17.965 19.575 17.488C19.726 17.1 19.905 16.518 19.954 15.445C20.007 14.285 20.018 13.937 20.018 11C20.018 8.063 20.007 7.715 19.954 6.555C19.905 5.482 19.726 4.9 19.575 4.512C19.375 3.999 19.138 3.632 18.753 3.247C18.3979 2.88207 17.9657 2.60121 17.488 2.425C17.1 2.274 16.518 2.095 15.445 2.046ZM9.595 14.391C10.3797 14.7176 11.2534 14.7617 12.0669 14.5157C12.8805 14.2697 13.5834 13.7489 14.0556 13.0422C14.5278 12.3356 14.7401 11.4869 14.656 10.6411C14.572 9.79534 14.197 9.00497 13.595 8.405C13.2112 8.02148 12.7472 7.72781 12.2363 7.54515C11.7255 7.36248 11.1804 7.29536 10.6405 7.34862C10.1006 7.40187 9.57915 7.57418 9.1138 7.85313C8.64845 8.13208 8.25074 8.51074 7.9493 8.96185C7.64786 9.41296 7.45019 9.92529 7.37052 10.462C7.29084 10.9986 7.33115 11.5463 7.48854 12.0655C7.64593 12.5847 7.91648 13.0626 8.28072 13.4647C8.64496 13.8668 9.09382 14.1832 9.595 14.391ZM7.002 7.002C7.52702 6.47697 8.15032 6.0605 8.8363 5.77636C9.52228 5.49222 10.2575 5.34597 11 5.34597C11.7425 5.34597 12.4777 5.49222 13.1637 5.77636C13.8497 6.0605 14.473 6.47697 14.998 7.002C15.523 7.52702 15.9395 8.15032 16.2236 8.8363C16.5078 9.52228 16.654 10.2575 16.654 11C16.654 11.7425 16.5078 12.4777 16.2236 13.1637C15.9395 13.8497 15.523 14.473 14.998 14.998C13.9377 16.0583 12.4995 16.654 11 16.654C9.50046 16.654 8.06234 16.0583 7.002 14.998C5.94166 13.9377 5.34597 12.4995 5.34597 11C5.34597 9.50046 5.94166 8.06234 7.002 7.002ZM17.908 6.188C18.0381 6.06527 18.1423 5.91768 18.2143 5.75397C18.2863 5.59027 18.3248 5.41377 18.3274 5.23493C18.33 5.05609 18.2967 4.87855 18.2295 4.71281C18.1622 4.54707 18.0624 4.39651 17.936 4.27004C17.8095 4.14357 17.6589 4.04376 17.4932 3.97652C17.3275 3.90928 17.1499 3.87598 16.9711 3.87858C16.7922 3.88119 16.6157 3.91965 16.452 3.9917C16.2883 4.06374 16.1407 4.1679 16.018 4.298C15.7793 4.55103 15.6486 4.88712 15.6537 5.23493C15.6588 5.58274 15.7992 5.91488 16.0452 6.16084C16.2911 6.40681 16.6233 6.54723 16.9711 6.5523C17.3189 6.55737 17.655 6.42669 17.908 6.188Z"
                fill="white"
              />
            </svg>
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.464516 22.0505H5.10968V6.75297H0.464516V22.0505ZM2.7871 0C1.23871 0 0 1.10253 0 2.48068C0 3.85884 1.23871 4.96136 2.7871 4.96136C4.33548 4.96136 5.57419 3.85884 5.57419 2.48068C5.57419 1.10253 4.33548 0 2.7871 0ZM13.0065 9.09583V6.75297H8.36129V22.0505H13.0065V14.195C13.0065 9.78491 19.3548 9.50928 19.3548 14.195V22.0505H24V12.679C24 5.23699 15.1742 5.51263 13.0065 9.09583Z"
                fill="white"
              />
            </svg>
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 2.61559C23.1174 3.05759 22.1693 3.35624 21.1726 3.49123C22.201 2.79573 22.9704 1.70109 23.3373 0.41156C22.371 1.06021 21.3135 1.51679 20.2107 1.76145C19.4691 0.86654 18.4868 0.273377 17.4164 0.0740559C16.3459 -0.125265 15.2472 0.0804081 14.2907 0.659143C13.3343 1.23788 12.5737 2.1573 12.127 3.27465C11.6803 4.39201 11.5725 5.64479 11.8203 6.83848C9.86244 6.72738 7.94711 6.15225 6.19863 5.15041C4.45016 4.14857 2.90761 2.74241 1.6711 1.02319C1.2483 1.84746 1.0052 2.80314 1.0052 3.82094C1.00473 4.73719 1.20437 5.6394 1.58641 6.44753C1.96846 7.25566 2.52109 7.94473 3.19528 8.45358C2.4134 8.42546 1.64877 8.18669 0.965031 7.75713V7.8288C0.964952 9.11388 1.35827 10.3594 2.07823 11.3541C2.7982 12.3487 3.80048 13.0312 4.915 13.2857C4.18968 13.5076 3.42923 13.5403 2.69109 13.3813C3.00555 14.487 3.61807 15.4539 4.44291 16.1467C5.26776 16.8394 6.26363 17.2233 7.29111 17.2446C5.5469 18.7921 3.39282 19.6315 1.17537 19.6278C0.782575 19.6279 0.39011 19.602 0 19.5502C2.25083 21.1858 4.87097 22.0538 7.5469 22.0505C16.6053 22.0505 21.5573 13.5712 21.5573 6.2173C21.5573 5.97838 21.552 5.73707 21.5425 5.49815C22.5057 4.71088 23.3372 3.736 23.9979 2.61917L24 2.61559Z"
                fill="white"
              />
            </svg>
          </div>

          <img src={slogan} alt="slogan" />
        </div>
        <div className="savoir">
          <button className="btn-sav">Know more</button>
        </div>
      </div>
      <div className="bg-test sec-home">
        <div className="title">
          <p>Presentation</p>
          <h1>Our Sport</h1>
          <video width="487" height="278" controls>
            <source src={videos} type="video/mp4" />
          </video>
        </div>
        <div className="title-ab">
          <p>About Us</p>
          <h1>Who we are</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            in fermentum dolor. Cras convallis, tellus ac tempor lobortis, enim
            ex rhoncus purus, a bibendum ligula diam nec dolor. Nam tempus erat
            nunc, et ullamcorper nisl finibus non.
          </h5>
          <h5>
            Cras ullamcorper erat nisl, et pretium ante sodales id. Praesent a
            nibh eget diam pellentesque venenatis non eget diam. Nam in massa
            metus. Donec porta, ligula non feugiat vulputate, odio leo
            condimentum sapien, et rhoncus tellus est nec odio.
          </h5>
          <button className="btn-lea">Learn More</button>
        </div>
      </div>
      <div className="bg-main-t th-home">
        <div className="title-fea">
          <div className="title-p">
            <p>Awsome Featurs</p>
            <h1>why choose us</h1>
          </div>
          <div className="title-par">
            <div className="title-para">
              <div className="descrip">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8134 16.6667C19.92 15.7867 20 14.9067 20 14C20 13.0934 19.92 12.2134 19.8134 11.3334H24.32C24.5334 12.1867 24.6667 13.08 24.6667 14C24.6667 14.92 24.5334 15.8134 24.32 16.6667H19.8134ZM17.4534 24.08C18.2534 22.6 18.8667 21 19.2934 19.3334H23.2267C21.9349 21.5577 19.8855 23.2427 17.4534 24.08ZM17.12 16.6667H10.88C10.7467 15.7867 10.6667 14.9067 10.6667 14C10.6667 13.0934 10.7467 12.2 10.88 11.3334H17.12C17.24 12.2 17.3334 13.0934 17.3334 14C17.3334 14.9067 17.24 15.7867 17.12 16.6667ZM14 24.6134C12.8934 23.0134 12 21.24 11.4534 19.3334H16.5467C16 21.24 15.1067 23.0134 14 24.6134ZM8.66669 8.66669H4.77335C6.05183 6.43631 8.09975 4.74867 10.5334 3.92002C9.73335 5.40002 9.13335 7.00002 8.66669 8.66669ZM4.77335 19.3334H8.66669C9.13335 21 9.73335 22.6 10.5334 24.08C8.10485 23.2422 6.05981 21.557 4.77335 19.3334ZM3.68002 16.6667C3.46669 15.8134 3.33335 14.92 3.33335 14C3.33335 13.08 3.46669 12.1867 3.68002 11.3334H8.18669C8.08002 12.2134 8.00002 13.0934 8.00002 14C8.00002 14.9067 8.08002 15.7867 8.18669 16.6667H3.68002ZM14 3.37335C15.1067 4.97335 16 6.76002 16.5467 8.66669H11.4534C12 6.76002 12.8934 4.97335 14 3.37335ZM23.2267 8.66669H19.2934C18.876 7.0153 18.2581 5.42121 17.4534 3.92002C19.9067 4.76002 21.9467 6.45335 23.2267 8.66669ZM14 0.666687C6.62669 0.666687 0.666687 6.66669 0.666687 14C0.666687 17.5362 2.07144 20.9276 4.57193 23.4281C5.81004 24.6662 7.2799 25.6484 8.89757 26.3184C10.5152 26.9885 12.2491 27.3334 14 27.3334C17.5362 27.3334 20.9276 25.9286 23.4281 23.4281C25.9286 20.9276 27.3334 17.5362 27.3334 14C27.3334 12.2491 26.9885 10.5152 26.3184 8.89757C25.6484 7.2799 24.6662 5.81004 23.4281 4.57193C22.19 3.33382 20.7201 2.35169 19.1025 1.68163C17.4848 1.01156 15.751 0.666687 14 0.666687Z"
                    fill="white"
                  />
                </svg>

                <h3>PRO WEB SITE</h3>
              </div>
              <p>
                Duis sed scelerisque nibh. Fusce efficitur ante sit tincidunt.
              </p>
              <div className="descrip">
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.70335 12.4627C1.58005 12.2027 1.46576 11.9385 1.36069 11.6707C0.928687 10.5647 0.666687 9.40268 0.666687 8.20002C0.666687 4.22335 3.92269 1.00002 7.94002 1.00002C10.4694 1.00002 12.6974 2.27868 14 4.21868C14.6681 3.22571 15.5704 2.4126 16.6274 1.85123C17.6843 1.28985 18.8633 0.997503 20.06 1.00002C24.078 1.00002 27.3334 4.22335 27.3334 8.20002C27.3334 13.3767 22.4847 17.8 20.06 20.2C18.4447 21.8 16.424 23.4 14 25C11.576 23.4 9.55535 21.8 7.94002 20.2C7.69535 19.9587 7.42669 19.696 7.14069 19.4147"
                    stroke="white"
                    stroke-width="1.16667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.33337 16.982L10.7427 9.69335L15.052 14.1374L21.508 7.54602"
                    stroke="white"
                    stroke-width="1.16667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <h3>MORE EVENT</h3>
              </div>
              <p>
                Duis sed scelerisque nibh. Fusce efficitur ante sit tincidunt.
              </p>
            </div>
            <div className="title-para two">
              <div className="description">
                <div className="descrip">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14C10 13.4696 9.78929 12.9609 9.41421 12.5858C9.03914 12.2107 8.53043 12 8 12C7.46957 12 6.96086 12.2107 6.58579 12.5858C6.21071 12.9609 6 13.4696 6 14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16ZM14 16C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14C16 13.4696 15.7893 12.9609 15.4142 12.5858C15.0391 12.2107 14.5304 12 14 12C13.4696 12 12.9609 12.2107 12.5858 12.5858C12.2107 12.9609 12 13.4696 12 14C12 14.5304 12.2107 15.0391 12.5858 15.4142C12.9609 15.7893 13.4696 16 14 16ZM22 14C22 14.5304 21.7893 15.0391 21.4142 15.4142C21.0391 15.7893 20.5304 16 20 16C19.4696 16 18.9609 15.7893 18.5858 15.4142C18.2107 15.0391 18 14.5304 18 14C18 13.4696 18.2107 12.9609 18.5858 12.5858C18.9609 12.2107 19.4696 12 20 12C20.5304 12 21.0391 12.2107 21.4142 12.5858C21.7893 12.9609 22 13.4696 22 14ZM28 14C28 21.732 21.732 28 14 28C6.268 28 0 21.732 0 14C0 6.268 6.268 0 14 0C21.732 0 28 6.268 28 14ZM26 14C26 7.373 20.627 2 14 2C7.373 2 2 7.373 2 14C2 20.627 7.373 26 14 26C20.627 26 26 20.627 26 14Z"
                      fill="white"
                    />
                  </svg>

                  <h3>TO KEEP YOU HEALTHY</h3>
                </div>
                <p>
                  Duis sed scelerisque nibh. Fusce efficitur ante sit tincidunt.
                </p>
              </div>
              <div className="descrip">
                <svg
                  width="22"
                  height="29"
                  viewBox="0 0 22 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.10669 9.72L6.66669 10.608V15.3333H4.00002V8.73333H4.02002L11.044 6.176C11.3694 6.052 11.724 5.98933 12.0867 6.00133C12.8114 6.0194 13.5124 6.26281 14.0924 6.69771C14.6723 7.13261 15.1023 7.7374 15.3227 8.428C15.5707 9.20533 15.7974 9.73067 16.0027 10.004C16.6232 10.8315 17.4281 11.503 18.3534 11.9652C19.2787 12.4274 20.299 12.6675 21.3334 12.6667V15.3333C19.9564 15.3348 18.5963 15.031 17.3508 14.4438C16.1054 13.8566 15.0056 13.0006 14.1307 11.9373L13.356 16.3333L16 18.8933V28.6667H13.3334V20.6853L10.6 18.036L9.33736 23.7667L0.145355 22.1467L0.609355 19.52L7.17469 20.6773L9.10669 9.72ZM14 5.33333C13.2928 5.33333 12.6145 5.05238 12.1144 4.55228C11.6143 4.05219 11.3334 3.37391 11.3334 2.66667C11.3334 1.95942 11.6143 1.28115 12.1144 0.781048C12.6145 0.280951 13.2928 0 14 0C14.7073 0 15.3855 0.280951 15.8856 0.781048C16.3857 1.28115 16.6667 1.95942 16.6667 2.66667C16.6667 3.37391 16.3857 4.05219 15.8856 4.55228C15.3855 5.05238 14.7073 5.33333 14 5.33333Z"
                    fill="white"
                  />
                </svg>

                <h3>PURELY SPORTS</h3>
              </div>
              <p>
                Duis sed scelerisque nibh. Fusce efficitur ante sit tincidunt.
              </p>
            </div>
          </div>
        </div>
        <div className="slogan-2">
          <img src={slogan2} alt="slogan2" />
        </div>
      </div>
      <div className="bg-tes">
        <div className="tuto">
          <div className="tuto-1">
            <svg
              width="53"
              height="54"
              viewBox="0 0 53 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.9863 5.66658H39.726V2.99992C39.726 2.29267 39.4489 1.6144 38.9557 1.1143C38.4624 0.614203 37.7935 0.333252 37.0959 0.333252C36.3983 0.333252 35.7294 0.614203 35.2361 1.1143C34.7429 1.6144 34.4658 2.29267 34.4658 2.99992V5.66658H18.6849V2.99992C18.6849 2.29267 18.4078 1.6144 17.9146 1.1143C17.4213 0.614203 16.7524 0.333252 16.0548 0.333252C15.3573 0.333252 14.6883 0.614203 14.195 1.1143C13.7018 1.6144 13.4247 2.29267 13.4247 2.99992V5.66658H8.1644C6.07173 5.66658 4.06477 6.50944 2.58503 8.00973C1.1053 9.51002 0.273987 11.5449 0.273987 13.6666V45.6666C0.273987 47.7883 1.1053 49.8231 2.58503 51.3234C4.06477 52.8237 6.07173 53.6666 8.1644 53.6666H44.9863C47.079 53.6666 49.0859 52.8237 50.5657 51.3234C52.0454 49.8231 52.8767 47.7883 52.8767 45.6666V13.6666C52.8767 11.5449 52.0454 9.51002 50.5657 8.00973C49.0859 6.50944 47.079 5.66658 44.9863 5.66658V5.66658ZM47.6165 45.6666C47.6165 46.3738 47.3394 47.0521 46.8461 47.5522C46.3529 48.0523 45.6839 48.3332 44.9863 48.3332H8.1644C7.46684 48.3332 6.79786 48.0523 6.30461 47.5522C5.81136 47.0521 5.53426 46.3738 5.53426 45.6666V26.9999H47.6165V45.6666ZM47.6165 21.6666H5.53426V13.6666C5.53426 12.9593 5.81136 12.2811 6.30461 11.781C6.79786 11.2809 7.46684 10.9999 8.1644 10.9999H13.4247V13.6666C13.4247 14.3738 13.7018 15.0521 14.195 15.5522C14.6883 16.0523 15.3573 16.3333 16.0548 16.3333C16.7524 16.3333 17.4213 16.0523 17.9146 15.5522C18.4078 15.0521 18.6849 14.3738 18.6849 13.6666V10.9999H34.4658V13.6666C34.4658 14.3738 34.7429 15.0521 35.2361 15.5522C35.7294 16.0523 36.3983 16.3333 37.0959 16.3333C37.7935 16.3333 38.4624 16.0523 38.9557 15.5522C39.4489 15.0521 39.726 14.3738 39.726 13.6666V10.9999H44.9863C45.6839 10.9999 46.3529 11.2809 46.8461 11.781C47.3394 12.2811 47.6165 12.9593 47.6165 13.6666V21.6666Z"
                fill="#F4AF00"
              />
            </svg>
            <h1>365</h1>
            <h3>WORKING DAYS</h3>
          </div>
          <div className="tuto-2">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.9949 12C46.0158 12 49.2752 9.31375 49.2752 6C49.2752 2.68625 46.0158 0 41.9949 0C37.9741 0 34.7147 2.68625 34.7147 6C34.7147 9.31375 37.9741 12 41.9949 12ZM17.9837 39.6838L15.739 43.9987H5.59365C2.9136 43.9987 0.740143 45.79 0.740143 47.9987C0.740143 50.2075 2.9136 51.9987 5.59365 51.9987H17.3406C20.2603 51.9987 22.8888 50.5687 24.0309 48.3625L25.3641 45.7975L23.7458 45.01C21.1188 43.7312 19.1865 41.8388 17.9837 39.6838ZM58.9822 27.9988H52.3041L48.3515 21.3425C46.4556 18.1488 42.9747 15.8138 38.9812 14.975L28.2004 12.3325C23.908 11.4825 19.4383 12.2638 15.9392 14.475L9.92237 18.2763C7.79441 19.62 7.39096 22.13 9.02447 23.8838C10.658 25.6375 13.702 25.9663 15.8285 24.6238L21.8483 20.8225C23.0117 20.0863 24.4935 19.8225 25.6811 20.055L27.9107 20.6012L22.229 31.525C20.3149 35.21 22.0303 39.5263 26.218 41.5638L39.1071 47.835L34.9407 58.8013C34.1398 60.9088 35.564 63.1525 38.1212 63.8125C38.6051 63.9375 39.0934 63.9975 39.5742 63.9975C41.6385 63.9975 43.5526 62.9012 44.2033 61.1912L49.0022 48.5588C49.8986 45.9625 48.5638 43.1737 45.72 41.76L36.4316 37.2425L41.1805 27.4575L44.2548 32.6362C45.4682 34.6787 48.0345 35.9975 50.7934 35.9975H58.9822C61.6622 35.9975 63.8357 34.2062 63.8357 31.9975C63.8357 29.7887 61.6622 27.9988 58.9822 27.9988Z"
                fill="#F4AF00"
              />
            </svg>

            <h1>250</h1>
            <h3>MARATHON AND TRAIL</h3>
          </div>
          <div className="tuto-3">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.179 27.9269L28.9775 37.9159H18.6174L26.999 44.0899L23.7955 54.0779L32.179 47.9059L40.5606 54.0779L37.3571 44.0899L45.7387 37.9159H35.3786L32.179 27.9269V27.9269ZM34.9781 43.0469L36.7061 48.4429L32.179 45.1069L27.648 48.4429L29.3799 43.0469L24.8508 39.7109H30.449L32.179 34.3149L33.909 39.7109H39.5053L34.9781 43.0469Z"
                fill="#F4AF00"
              />
              <path
                d="M44.6617 26.519V17.821C44.6617 17.457 44.4654 17.151 44.1872 16.961L53.8767 2H35.2997L32.179 6.746L29.0584 2H10.4794L20.1678 16.96C20.0249 17.0526 19.9068 17.1798 19.8241 17.33C19.7415 17.4803 19.6969 17.649 19.6944 17.821V26.519C15.2748 30.187 12.452 35.758 12.452 42C12.452 53.045 21.2843 62 32.178 62H32.179C32.8507 62 33.5145 61.965 34.1684 61.898C44.1271 60.887 51.9041 52.365 51.9041 42C51.9041 35.758 49.0813 30.187 44.6617 26.519ZM40.8831 3H47.1245L38.4203 16.239L35.2997 11.493L40.8831 3ZM41.541 20.985L42.5007 19.527C42.552 19.652 42.5815 19.788 42.5815 19.931V24.15C42.5793 24.4135 42.4739 24.6653 42.2886 24.85C39.3297 23.052 35.8786 22 32.178 22C28.6149 22.0008 25.1194 22.9865 22.0675 24.851C21.8821 24.6659 21.7768 24.4138 21.7745 24.15V19.931C21.7745 19.788 21.8041 19.651 21.8554 19.527L22.8151 20.986H41.541V20.985ZM17.2316 3H23.4729L34.6418 19.985H28.4005L17.2316 3ZM32.178 59C22.9186 59 15.4109 51.389 15.4109 42C15.4109 32.611 22.9186 25 32.178 25C41.4374 25 48.9452 32.611 48.9452 42C48.9452 51.389 41.4374 59 32.178 59Z"
                fill="#F4AF00"
              />
            </svg>

            <h1>400</h1>
            <h3>SUCCESFUL EVENTS</h3>
          </div>
          <div className="tuto-4">
            <svg
              width="53"
              height="54"
              viewBox="0 0 53 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7808 27C12.5064 26.9996 12.235 27.0572 11.9838 27.1692C11.7327 27.2812 11.5073 27.4451 11.3222 27.6503C11.137 27.8556 10.9962 28.0978 10.9086 28.3614C10.821 28.6251 10.7886 28.9043 10.8135 29.1813C11.5499 37.3787 17.5203 44.3333 26.589 44.3333C35.6577 44.3333 41.6255 37.3787 42.3646 29.1813C42.3895 28.9043 42.3571 28.6251 42.2695 28.3614C42.1819 28.0978 42.041 27.8556 41.8558 27.6503C41.6707 27.4451 41.4453 27.2812 41.1942 27.1692C40.943 27.0572 40.6716 26.9996 40.3972 27H12.7782H12.7808ZM26.589 40.3333C20.6528 40.3333 16.4078 36.3867 15.1006 31H38.0775C36.7729 36.3867 32.5279 40.3333 26.589 40.3333Z"
                fill="#F4AF00"
              />
              <path
                d="M35.1369 18.3331C34.0638 18.3331 33.2695 19.0985 33.1433 19.9598C33.0665 20.4846 32.7873 20.9569 32.3671 21.273C31.9468 21.5891 31.42 21.7229 30.9024 21.6451C30.3848 21.5673 29.9189 21.2843 29.6072 20.8582C29.2954 20.4321 29.1634 19.8979 29.2401 19.3731C29.6662 16.4665 32.1938 14.3331 35.1369 14.3331C38.08 14.3331 40.6076 16.4665 41.0337 19.3731C41.1104 19.8979 40.9784 20.4321 40.6667 20.8582C40.3549 21.2843 39.889 21.5673 39.3714 21.6451C38.8538 21.7229 38.327 21.5891 37.9067 21.273C37.4865 20.9569 37.2073 20.4846 37.1306 19.9598C37.0043 19.0985 36.21 18.3331 35.1369 18.3331V18.3331Z"
                fill="#F4AF00"
              />
              <path
                d="M16.0474 19.9598C16.1737 19.0985 16.968 18.3331 18.0411 18.3331C19.1168 18.3331 19.9085 19.0985 20.0347 19.9598C20.1114 20.4846 20.3906 20.9569 20.8109 21.273C21.2311 21.5891 21.758 21.7229 22.2756 21.6451C22.7932 21.5673 23.2591 21.2843 23.5708 20.8582C23.8825 20.4321 24.0146 19.8979 23.9378 19.3731C23.5144 16.4665 20.9842 14.3331 18.0411 14.3331C15.0979 14.3331 12.5704 16.4665 12.1443 19.3731C12.0676 19.8979 12.1996 20.4321 12.5113 20.8582C12.823 21.2843 13.289 21.5673 13.8065 21.6451C14.3241 21.7229 14.851 21.5891 15.2712 21.273C15.6915 20.9569 15.9707 20.4846 16.0474 19.9598V19.9598Z"
                fill="#F4AF00"
              />
              <path
                d="M26.589 0.33313C12.0628 0.33313 0.287628 12.2718 0.287628 26.9998C0.287628 41.7278 12.0628 53.6665 26.589 53.6665C41.1152 53.6665 52.8904 41.7278 52.8904 26.9998C52.8904 12.2718 41.1152 0.33313 26.589 0.33313ZM4.23283 26.9998C4.23283 20.9882 6.58821 15.2229 10.7808 10.972C14.9734 6.72122 20.6598 4.33313 26.589 4.33313C32.5182 4.33313 38.2046 6.72122 42.3972 10.972C46.5898 15.2229 48.9452 20.9882 48.9452 26.9998C48.9452 33.0114 46.5898 38.7767 42.3972 43.0275C38.2046 47.2784 32.5182 49.6665 26.589 49.6665C20.6598 49.6665 14.9734 47.2784 10.7808 43.0275C6.58821 38.7767 4.23283 33.0114 4.23283 26.9998V26.9998Z"
                fill="#F4AF00"
              />
            </svg>

            <h1>300</h1>
            <h3>HAPPY CLIENT</h3>
          </div>
        </div>
      </div>
      <div className="bottom-gl">
        <h1>Photo Events We Run</h1>
        <section id="slider">
          <input type="radio" name="slider" id="s1" />
          <input type="radio" name="slider" id="s2" />
          <input
            type="radio"
            name="slider"
            id="s3"
            onChange={(e) => e.target.checked}
          />
          <input type="radio" name="slider" id="s4" />
          <input type="radio" name="slider" id="s5" />
          <label for="s1" id="slide1">
            <img src={imgh} width="100%" height="100%" />
          </label>
          <label for="s2" id="slide2">
            <img src={gal1} width="100%" height="100%" />
          </label>
          <label for="s3" id="slide3">
            <img src={gal2} width="100%" height="100%" />
          </label>
          <label for="s4" id="slide4">
            <img src={gal3} width="100%" height="100%" />
          </label>
          <label for="s5" id="slide5">
            <img src={gal4} width="100%" height="100%" />
          </label>
        </section>
      </div>
    </div>
  );
};

export default Home;

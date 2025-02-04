import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

// dersler

import caro from "../assets/carousel.png";

import "./Carousel.css";

const ACarousel = () => {
  return (
    <div
      className="mt-1"
      style={{
        padding: 30,
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <h4>
        ODTÜ mezunundan üniversite öğrencilerine Mathematic, Calculus, Linear
        Algebra, Differential Equations ve Numerical Methods for Engineers
        dersleri verilir
      </h4>
      <Carousel variant="dark" className="slidetext baslik">
        {/* Carousel.Item */}
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: 450 }}
            src={caro}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3> Mathematic </h3>
            <h4>Özel Ders</h4>
            <p>Yüz yüze </p>
            {/*          <p>
              <i
                className="bi bi-whatsapp"
                style={{ backgroundColor: "green" }}
              ></i>
              {""} {""} {""} {""} {""}
              <span>
                0544 223 6441 whatsApp üzerinden iletişime geçebilirsiniz.
              </span>
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        {/*  */}
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: 450 }}
            src={caro}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Calculus 1</h3>
            <h4>Özel Ders</h4>
            <p>Yüz yüze </p>
            {/*           <p>
              <i
                className="bi bi-whatsapp"
                style={{ backgroundColor: "green" }}
              ></i>
              {""} {""} {""} {""} {""}
              <span>
                0544 223 6441 whatsApp üzerinden iletişime geçebilirsiniz.
              </span>
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        {/*  */}
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: 450 }}
            src={caro}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Calculus 2 </h3>
            <h4>Özel Ders</h4>
            <p>Yüz yüze </p>
            {/*          <p>
              <i
                className="bi bi-whatsapp"
                style={{ backgroundColor: "green" }}
              ></i>
              {""} {""} {""} {""} {""}
              <span>
                0544 223 6441 whatsApp üzerinden iletişime geçebilirsiniz.
              </span>
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: 450, backgroundClip: "border-box" }}
            src={caro}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Differential Equations </h3>
            <h4>Özel Ders</h4>
            <p>Yüz yüze </p>
            {/*        <p>
              <i
                className="bi bi-whatsapp"
                style={{ backgroundColor: "green" }}
              ></i>
              {""} {""} {""} {""} {""}
              <span>
                0544 223 6441 whatsApp üzerinden iletişime geçebilirsiniz.
              </span>
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: 450, backgroundClip: "border-box" }}
            src={caro}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Linear Algebra </h3>
            <h4>Özel Ders</h4>
            <p>Yüz yüze </p>
            {/*      <p>
              <i
                className="bi bi-whatsapp"
                style={{ backgroundColor: "green" }}
              ></i>
              {""} {""} {""} {""} {""}
              <span>
                0544 223 6441 whatsApp üzerinden iletişime geçebilirsiniz.
              </span>
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: 450, backgroundClip: "border-box" }}
            src={caro}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Applied Mathematic </h3>
            <h4>Özel Ders</h4>
            <p>Yüz yüze </p>
            {/*      <p>
              <i
                className="bi bi-whatsapp"
                style={{ backgroundColor: "green" }}
              ></i>
              {""} {""} {""} {""} {""}
              <span>
                0544 223 6441 whatsApp üzerinden iletişime geçebilirsiniz.
              </span>
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            style={{ height: 450, backgroundClip: "border-box" }}
            src={caro}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3> Numerical Methods for Engineers </h3>
            <h4>Özel Ders</h4>
            <p>Yüz yüze </p>
            {/*      <p>
              <i
                className="bi bi-whatsapp"
                style={{ backgroundColor: "green" }}
              ></i>
              {""} {""} {""} {""} {""}
              <span>
                 0544 223 6441 whatsApp üzerinden iletişime geçebilirsiniz.
              </span>
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>

        {/* <Carousel.Item interval={5000}>
          <div className="container">
            <video
              style={{ height: 450 }}
              className="videoSliderBackground"
              // loop="loop"
              loop="no"
              autoPlay
              // playsInline
              src={vid}
              muted
              id="video-slider-background"
            ></video>
          </div>
          <Carousel.Caption>
            <h3>Linear Özel Ders</h3>
            <p>Yüz yüze </p>
            <p>
              <i
                className="bi bi-whatsapp"
                style={{ backgroundColor: "green" }}
              ></i>
              {""} {""} {""} {""} {""}
              <span>
                0544 223 6441 whatsApp üzerinden iletişime geçebilirsiniz.
              </span>
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>

      {/* ///// */}
    </div>
  );
};
export default ACarousel;

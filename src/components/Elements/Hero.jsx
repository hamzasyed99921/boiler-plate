import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { BsMastodon } from "react-icons/bs";
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
  return (
    <>
      <div className="container main">
        <div className="hero_text">
          <p>
            Gnosis builds new market mechanisms for decentralized finance. Our
            three interoperable product lines allow you to securely{" "}
            <span style={{ color: "#009cb4" }}>create</span>,
            <span style={{ color: "#e8663d" }}>trade</span>, and{" "}
            <span style={{ color: "#0d8e74" }}>hold</span> digital assets on
            Ethereum.
          </p>
        </div>
      </div>

      <div className="container sec_section">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="left_heading">
              <h1>
                Build on <br /> Gnosis
              </h1>
            </div>
          </div>
          <div className="col-md-6">
            The Gnosis Developer Portal provides introductions, technical
            documentation, and tutorials, and the
            <span style={{ fontWeight: "bold" }}>
              Gnosis Ecosystem Fund (GECO)
            </span>
            provides teams with mentoring, marketing, and funding up to $100,000
            to build on Gnosis.
            <div className="col-md-12">
              <a href="" className="btn bg-dark text-white mt-3">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container third_section">
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="logo_2">
              <img src="assets/logo.png" alt="" />
              <a
                href=""
                style={{ background: "#001428", backgroundColor: "#001428" }}
                className="btn bg-dark text-white mt-5"
              >
                Visit Forum
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="mb-5">
              Participate in <br /> GnosisDAO
            </h1>
            <div className="col-md-12">
              <p>
                GnosisDAO is the prediction market-driven collective, stewarding
                the Gnosis ecosystem through futarchy: governance by prediction
                markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
        <div className="row ">
          <div className="col-md-6">
            <h1>
              Join <br /> the Community
            </h1>
            <div className="col-md-12 rounded_icons">
              <div>
                <BsMastodon size={"6em"} style={{ marginRight: "25px" }} />
              </div>
              <div>
                <AiFillTwitterCircle
                  size={"6em"}
                  style={{ marginRight: "25px" }}
                />
              </div>
              <div>
                <SiDiscord size={"6em"} />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card ">
              <div className="card-body card_1">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="">DappCon <span><BsArrowRight/></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

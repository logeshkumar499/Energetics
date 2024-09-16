import React from "react";
import Logo from "../../assets/icons/logo.png";
import "./footer.css";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { FooterContent } from "../../contents";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <section className="container-fluid pb-3">
        <div className="footer-section">
          <Row>
            <Col sm={12} md={6}>
              <a className="navbar-brand" href="/#/home">
                <img src={Logo} width="" height="40" alt="logo" />
              </a>
            </Col>
            <Col sm={12} md={6} className="mb-3 mt-2">
              <Row>
                {FooterContent.map((x) => (
                  <div className="col-sm-12 col-md-6" key={x.id}>
                    <div className="footer-link">
                      <h3>{x.title}</h3>
                      <ul>
                        {x.subContent.map((y, i) => (
                          <li key={y.subTitle + i}>
                            {y?.isLink == false ? (
                              <span>{y.subTitle}</span>
                            ) : (
                              <Link to={y.link}>{y.subTitle}</Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </Row>
            </Col>
            <Col sm={12} md={12}>
              <div className="copyright-section">
                <p className="copyright-txt mb-2">
                  © <b>energetics ai pvt ltd</b> {year}. All rights reserved.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Footer;

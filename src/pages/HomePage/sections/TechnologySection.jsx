import React, { useState } from "react";
import { TechnologyTabs, TechnologyTabsContent } from "../../../contents";
import {
  Card,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState(1);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <>
      <section className="container-fluid mt-2 pb-3">
        <div className="technology-section">
          <div className="col-md-12 pt-3 pb-3 pr-2 pl-2">
            <div className="row">
              <div className="col-md-12 mb-3 mt-3">
                <h6 className="technology-title">
                  Energizing Technology with Precision
                </h6>
                <div className="w-100 d-flex flex-wrap justify-content-center">
                  <p className="technology-subtitle w-90">
                    At Energetics AI, we’ve helped business find the formula for
                    success: combining expertise, speed, and innovation to
                    deliver transformative software solutions.{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-12 mt-3">
                <Nav tabs justified>
                  {TechnologyTabs.map((x, i) => (
                    <NavItem key={i}>
                      <NavLink
                        active={activeTab === x.id}
                        onClick={() => {
                          toggle(x.id);
                        }}
                      >
                        {x.title}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                <TabContent activeTab={activeTab}>
                  {TechnologyTabsContent.map((x) => (
                    <TabPane tabId={x.id} key={x.id}>
                      <Row>
                        <Col sm="6" md="7">
                          <div className="h-100 d-flex flex-column justify-content-center">
                            <h5 className="tab-title">{x.title}</h5>
                            <p className="mt-2 tab-subtitle text-start">
                              {x.describtion}
                            </p>
                          </div>
                        </Col>
                        <Col sm="6" md="5">
                          <div className="tab-img-container">
                            <img src={x.imgSource} alt="imgsource" />
                          </div>
                        </Col>
                      </Row>
                    </TabPane>
                  ))}
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologySection;

import React from "react";
import Header from "../../layout/Header";
import "./contactpage.css";
import Footer from "../../layout/Footer";
import { Col, Row } from "reactstrap";
import CommonButton from "../../components/Button";
import Input from "../../components/Input";
import Description from "../../components/Input/Description";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserIcon from "../../assets/icons/user.png";
import EmailIcon from "../../assets/icons/email.png";
import PhoneIcon from "../../assets/icons/phone.png";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {},
    validationSchema: ContactSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = async (value) => {
    // console.log(value);
    try {
      const data = await emailjs.send(
        "service_xq4fail",
        "template_jrrhz7h",
        value,
        {
          publicKey: "F_G3D_o_Yo3XqVhD3",
        }
      );
      formik.setSubmitting(false);
      formik.setValues({});
      formik.resetForm({});
    } catch (error) {
      console.log("FAILED...", error);
    }
  };

  return (
    <>
      <section className="container-fluid mb-3">
        <div className="contact-section">
          <Header />
          <div className="w-100 mt-5 mb-5 h-100 d-flex justify-content-center align-items-center">
            <div className="contact-form">
              <h5 className="contact-title">Get in Touch</h5>
              <p className="contact-subtitle">You can reach us anytime</p>
              {/* <p className="contact-subtitle">We don’t just talk about innovation—we live it. Ready to transform your business?</p> */}
              <Row>
                <Col sm={12} md={6}>
                  <Input
                    type="text"
                    id="first_name"
                    label={"First Name"}
                    placeholder="Your first name"
                    formik={formik}
                    icon={UserIcon}
                  />
                </Col>
                <Col sm={12} md={6}>
                  <Input
                    type="text"
                    id="last_name"
                    label={"Last Name"}
                    placeholder="Your last name"
                    formik={formik}
                    icon={UserIcon}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    type="text"
                    id="email"
                    label={"Email"}
                    placeholder="Your Email"
                    formik={formik}
                    icon={EmailIcon}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    type="text"
                    id="mobile_number"
                    label={"Phone Number"}
                    placeholder="Your Phone Number with country code"
                    formik={formik}
                    isNumber={true}
                    icon={PhoneIcon}
                  />
                </Col>
                <Col sm={12}>
                  <Description
                    id="message"
                    label={"Tell Us"}
                    placeholder="Tell us what can we help you"
                    formik={formik}
                  />
                </Col>
              </Row>
              <CommonButton
                className="w-100"
                onClick={() => formik.handleSubmit()}
              >
                Contact us
              </CommonButton>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;

const ContactSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "First name is too short!")
    .max(50, "First name is too long!")
    .required("First name is required"),
  last_name: Yup.string()
    .min(2, "Last name is too short!")
    .required("Last name is required")
    .max(50, "Last name is too long!"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string(),
  mobile_number: Yup.string()
    .required("Email is required")
    .min(4, "Please enter the correct number of digits.")
    .max(14, "Phone number must be at most 14")
    .required("Phone number is required"),
});

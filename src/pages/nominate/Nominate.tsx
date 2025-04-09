import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import cn from "classnames";
import styles from "./nominate.module.scss";
import { PageTitle, Input, Textarea, Button } from "../../components";
// @ts-ignore
import { INominateProps } from "./nominate.props";

const initialForm = {
  yourFirstName: "",
  yourLastName: "",
  email: "",
  firstName: "",
  lastName: "",
  theirEmail: "",
  link: "",
  message: "",
};
export const Nominate: FC<INominateProps> = () => {
  const [formData, setFormData] = useState(initialForm);
  const [filledFields, setFilledFields] = useState(0);
  const [isSuccessfully, setIsSuccessfully] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
        process.env.REACT_APP_EMAILJS_NOMINATE_TEMPLATE_ID || "",
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        (result) => {
          setIsSuccessfully(true);
          setFormData(initialForm);
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setFormData(initialForm);
        }
      );
  };

  useEffect(() => {
    const count = Object.values(formData).filter((value) => value.trim() !== "").length;
    setFilledFields(count);
  }, [formData]);

  return (
    <motion.section className={styles.contacts_wrapper} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PageTitle>Nominate</PageTitle>
      {isSuccessfully ? (
        <div className={styles.stub}>
          <h2>We are super pumped!</h2>
          <p> Your nomination has been submitted.</p>
        </div>
      ) : (
        <div className={styles.contacts}>
          <div className={styles.contacts_info}>
            We all have someone who has <span>inspired</span> us, believed in us, and made a lasting impact on our
            journey. Now it's your chance to share <span>their story</span> and inspire others! Nominate a podcast guest
            and help us
            <span> spotlight</span> the voices that deserve to be heard.
          </div>
          <form onSubmit={sendEmail} className={styles.contacts_form}>
            Your Name
            <div className={styles.contacts_form_group}>
              <div className={styles.contacts_form_input_wrapper}>
                <Input
                  type="text"
                  name="yourFirstName"
                  placeholder="first name"
                  value={formData.yourFirstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.contacts_form_input_wrapper}>
                <Input
                  type="text"
                  name="yourLastName"
                  placeholder="last name"
                  value={formData.yourLastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            Your Email
            <div className={styles.contacts_form_input_wrapper}>
              <Input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            Whom would you like to nominate?
            <div className={styles.contacts_form_group}>
              <div className={styles.contacts_form_input_wrapper}>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.contacts_form_input_wrapper}>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            Their Email
            <div className={styles.contacts_form_input_wrapper}>
              <Input
                type="text"
                name="theirEmail"
                placeholder="email"
                value={formData.theirEmail}
                onChange={handleChange}
              />
            </div>
            What's their IG account?
            <div className={styles.contacts_form_input_wrapper}>
              <Input
                type="text"
                name="link"
                placeholder="account"
                value={formData.link}
                onChange={handleChange}
                required
              />
            </div>
            Why do you think they would be an inspiring guest?
            <div className={cn(styles.contacts_form_input_wrapper, styles.contacts_form_input_area)}>
              <Textarea
                name="message"
                placeholder="text"
                rows={10}
                value={formData.message}
                onChange={handleChange}
                required></Textarea>
            </div>
            <Button
              percentageFilled={15 * filledFields}
              type="submit"
              variant={filledFields < 7 ? "outline" : "primary"}>
              Send
            </Button>
          </form>
        </div>
      )}
    </motion.section>
  );
};

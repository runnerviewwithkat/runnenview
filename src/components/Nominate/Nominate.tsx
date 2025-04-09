import React, { useEffect, useState } from "react";
import { Modal } from "@mantine/core";
import styles from "../../pages/contacts/contacts.module.scss";
import { Button, Input, Textarea } from "../_ui";
import cn from "classnames";
import emailjs from "@emailjs/browser";

const initialForm = {
  name: "",
  email: "",
  firstName: "",
  lastName: "",
  link: "",
  message: "",
}

export const Nominate = ({isOpen, closeModal}: any) => {
  const [formData, setFormData] = useState(initialForm);
  const [filledFields, setFilledFields] = useState(0);

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
        process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
        process.env.REACT_APP_EMAILJS_NOMINATE_TEMPLATE_ID || '',
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormData(initialForm)
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          setFormData(initialForm)
        }
      );
  };

  useEffect(() => {
    const count = Object.values(formData).filter((value) => value.trim() !== "").length;
    setFilledFields(count);
  }, [formData]);
  return (
    <Modal
      opened={isOpen}
      onClose={closeModal}
      title="Nominate"
    >
      <form onSubmit={sendEmail} className={styles.contacts_form}>
        <h4 style={{marginBottom: '0.5rem', color: "#bababa"}}>Your Name and email</h4>
        <div className={styles.contacts_form_group}>
          <div className={styles.contacts_form_input_wrapper}>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.contacts_form_input_wrapper}>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <h4 style={{marginBottom: '0.5rem', color: "#bababa"}}>Whom would you like to nominate?</h4>
        <div className={styles.contacts_form_group}>
          <div className={styles.contacts_form_input_wrapper}>
            <Input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.contacts_form_input_wrapper}>
            <Input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.contacts_form_input_wrapper}>
          <Input
            type="text"
            name="link"
            placeholder="What's their Instagram handle?"
            value={formData.link}
            onChange={handleChange}
            required
          />
        </div>
        <div className={cn(styles.contacts_form_input_wrapper, styles.contacts_form_input_area)}>
          <Textarea
            name="message"
            placeholder="Why do you think they would be an inspiring guest?"
            rows={10}
            value={formData.message}
            onChange={handleChange}
            required></Textarea>
        </div>
        <Button percentageFilled={17 * filledFields} type="submit"
                variant={filledFields < 6 ? 'outline' : 'primary'}>Send</Button>
      </form>
    </Modal>
  );
};

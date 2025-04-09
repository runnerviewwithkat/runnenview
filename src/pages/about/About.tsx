import { motion } from "framer-motion";
import React, { FC } from "react";

import styles from "./about.module.scss";
import { PageTitle } from "../../components";

export const About: FC = () => (
  <motion.section className={styles.wrapper} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <PageTitle>About</PageTitle>
    <div className={styles.description}>
      <p>
        Many things in life begin with a thought, and this podcast is no exception. I started running when I moved to
        Houston 15 years ago. What began as a way to add movement to my sedentary life, became a way to make lasting
        friendships. The more I got into running, the more I found myself surrounded by people who were moving
        forward—not
        just in a race, but in life! I wanted to be a part of this movement.
      </p>
      <p>
        The running community is uplifting! It makes you disciplined and trains your brain to become more resistant to
        discomfort. Running unites! Regardless of age, race, religion, or political views, we are all equal when we run.
        In these times, running helps us disconnect from screens and connect with real people. And yes, you can talk
        when
        you run!
      </p>
      <p>
        Every person has a story to tell. Running uncovers those stories and connects us with like-minded individuals.
        Join me on our morning run to hear inspiring stories of ordinary people and learn how running is intertwined
        with
        their success.
      </p>
    </div>
  </motion.section>
);

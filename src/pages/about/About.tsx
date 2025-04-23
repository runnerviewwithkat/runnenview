import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { FC, useRef } from "react";

import styles from "./about.module.scss";
import img from './img.jpg'
import bg from './bg.jpg'
import { Grid, Image, Stack, Title, Text, useMantineTheme, Card } from "@mantine/core";

const MotionImage = motion(Image);

export const About: FC = () => {
  const theme = useMantineTheme();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-300, 300]), {
    stiffness: 60,
    damping: 12,
  });

  return (
    <motion.section className={styles.wrapper} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/*<PageTitle>About</PageTitle>*/}
      {/*<div className={styles.description}>*/}
      {/*  <p>*/}
      {/*    Many things in life begin with a thought, and this podcast is no exception. I started running when I moved to*/}
      {/*    Houston 15 years ago. What began as a way to add movement to my sedentary life, became a way to make lasting*/}
      {/*    friendships. The more I got into running, the more I found myself surrounded by people who were moving*/}
      {/*    forward—not*/}
      {/*    just in a race, but in life! I wanted to be a part of this movement.*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    The running community is uplifting! It makes you disciplined and trains your brain to become more resistant to*/}
      {/*    discomfort. Running unites! Regardless of age, race, religion, or political views, we are all equal when we run.*/}
      {/*    In these times, running helps us disconnect from screens and connect with real people. And yes, you can talk*/}
      {/*    when*/}
      {/*    you run!*/}
      {/*  </p>*/}
      {/*  <p>*/}
      {/*    Every person has a story to tell. Running uncovers those stories and connects us with like-minded individuals.*/}
      {/*    Join me on our morning run to hear inspiring stories of ordinary people and learn how running is intertwined*/}
      {/*    with*/}
      {/*    their success.*/}
      {/*  </p>*/}
      {/*</div>*/}
      <div className={styles.description}>
        <Grid gutter={0} align="center" style={{ position: 'relative', overflow: 'hidden' }}>
          <Grid.Col
            xs={12}
            md={6}
            style={{
              height: '100%',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <MotionImage
              src={img}
              alt="About us"
              radius="lg"
              fit="cover"
              height="100%"
              style={{
                minHeight: '400px',
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                marginTop: 100,
                y, // параллакс смещение
              }}
            />
          </Grid.Col>

          <Grid.Col
            xs={12}
            md={6}
            style={{
              marginTop: '-100px',
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : '#fff',
              padding: '32px',
              zIndex: 2,
              borderRadius: '1rem',
              boxShadow: theme.shadows.lg,
            }}
          >
            <Stack spacing="md">
              <Title order={2} style={{ color: "hsl(244, 24%, 26%)" }}>
                About
              </Title>
              <p>
                Many things in life begin with a thought, and this podcast is no exception. I started running when I
                moved to
                Houston 15 years ago. What began as a way to add movement to my sedentary life, became a way to make
                lasting
                friendships. The more I got into running, the more I found myself surrounded by people who were moving
                forward—not
                just in a race, but in life! I wanted to be a part of this movement.
              </p>
              <p>
                The running community is uplifting! It makes you disciplined and trains your brain to become more
                resistant to
                discomfort. Running unites! Regardless of age, race, religion, or political views, we are all equal when
                we run.
                In these times, running helps us disconnect from screens and connect with real people. And yes, you can
                talk
                when
                you run!
              </p>
              <p>
                Every person has a story to tell. Running uncovers those stories and connects us with like-minded
                individuals.
                Join me on our morning run to hear inspiring stories of ordinary people and learn how running is
                intertwined
                with
                their success.
              </p>
            </Stack>
          </Grid.Col>
        </Grid>
      </div>
    </motion.section>
  )
};

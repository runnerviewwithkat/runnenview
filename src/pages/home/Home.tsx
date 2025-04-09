import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./home.module.scss";
import { IHomeProps } from "./home.props";
import { Button, Socials,  Nominate} from "../../components";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";

export const Home: FC<IHomeProps> = () => {
  const navigate = useNavigate();
  const [isOpenNominateModal, setOpenNominateModal] = useState(false)

  function closeModal() {
    setOpenNominateModal(false);
  }

  return (
    <motion.section className={styles.home} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Nominate isOpen={isOpenNominateModal} closeModal={closeModal}/>
      <BackgroundVideo/>
      <div className={styles.intro}>
        <h1 className={styles.home_name}>Runnerview With Kat </h1>
        <Socials />
        <Button onClick={() => navigate("/nominate")}>nominate a guest</Button>
      </div>
    </motion.section>
  );
};

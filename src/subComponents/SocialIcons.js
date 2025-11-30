import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import LinkedIn from "../assets/Images/linkedin.png";
import Github from "../assets/Images/github.png";
import Instagram from "../assets/Images/instagram.png";
import YouTube from "../assets/Images/youtube.png";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a style={{ color: "inherit" }} href="https://github.com/AnveshSrivastava">
          <img src={Github} width={25} height={25} alt="github" />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a style={{ color: "inherit" }} href="https://www.linkedin.com/in/anvesh-srivastava/">
          <img src={LinkedIn} width={25} height={25} alt="linkedin" />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a style={{ color: "inherit" }} href="https://instagram.com/_notanvesh_">
          <img src={Instagram} width={25} height={25} alt="instagram" />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a style={{ color: "inherit" }} href="https://www.youtube.com/@the_flying_saucer">
          <img src={YouTube} width={25} height={25} alt="youtube" />
        </a>
      </motion.div>

      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;

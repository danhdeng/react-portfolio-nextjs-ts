import React from 'react';
import {
  SideBarMainContainer,
  GithubIconContainer,
  GitHubContainer,
} from './SideBarStyles';
import Image from 'next/image';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export const SideBar = () => {
  return (
    <SideBarMainContainer>
      <Image
        src="/../public/p.jpg"
        width="80px"
        height="100px"
        alt="Dan Deng"
      ></Image>
      <h3>Dan Deng</h3>
      <p>Full Stack Developer</p>
      <p>Downlaod Resume</p>
      {/* <GithubIconContainer
        href="https://www.linkedin.com/in/danhuideng/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </GithubIconContainer> */}
      <div
        style={{
          background: 'LightBlue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FaGithub />
      </div>
      <GitHubContainer>
        <div>
          <FaGithub />
        </div>
      </GitHubContainer>
    </SideBarMainContainer>
  );
};

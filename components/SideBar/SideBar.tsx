import React from 'react';
import { SideBarMainContainer, GithubIconContainer } from './SideBarStyles';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';

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
      <GithubIconContainer>
        <AiFillGithub />
      </GithubIconContainer>
    </SideBarMainContainer>
  );
};

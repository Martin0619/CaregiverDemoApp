"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa6";
import Button from "~/components/button/button.component";
import FlexContainer from "~/components/flex-container/flex-container.component";
import css from "./page.module.scss";

export default function SignInPage() {
  return (
    <FlexContainer as="section" className={css.signin}>
      <Button className={css.signinButton} onClick={() => signIn("github")}>
        <FlexContainer>
          <FaGithub />
          <span>Sign in with GitHub</span>
        </FlexContainer>
      </Button>
    </FlexContainer>
  );
}

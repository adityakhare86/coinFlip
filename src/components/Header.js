import styled from "@emotion/styled";

import { ConnectButton } from "./ConnectButton";

const Logo = styled.h1`
  font-size: 1.56em;
  font-family: ${({ theme }) => theme.fonts.logo};
  margin: 0;
`;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.space.m}px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Header = () => (
  <StyledHeader>
    <Logo>CoinFlip - Double up your ETH!</Logo>
    <ConnectButton />
  </StyledHeader>
);

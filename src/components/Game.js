import { useWeb3React } from "@web3-react/core";
import styled from "@emotion/styled";

import { Button } from "./Button";
import { Eth } from "./Eth";
import { NumberInput } from "./NumberInput";
import { useBetResult, useGame } from "../hooks";
import { useAppContext } from "../AppContext";
import { ReactComponent as EthereumLogo } from "../ethereumLogo.svg";
import { ReactComponent as TailsLogo } from "../tailsLogo.svg";

const StyledCoin = styled.button`
  height: 7.1rem;
  width: 7.1rem;
  border-radius: 50%;
  border: 0;
  background-color: ${({ theme }) => theme.cardBackground};
  color: white;
  font-size: 3.3rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ marginRight, theme }) => (marginRight ? `${theme.space.l}px` : undefined)};
  cursor: pointer;
  outline: 0;
  transition:
    transform 150ms ease-in-out,
    background-color 150ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledCoinWrapper = styled.div`
  display: flex;
  margin-top: ${({ theme }) => `${theme.space.m}px`};
  margin-bottom: ${({ theme }) => `${theme.space.m}px`};
`;

export const Game = () => {
  const { account } = useWeb3React();
  const { balance, profit } = useAppContext();
  const { betAmount, setBetAmount, handleBet, collectFunds } = useGame();

  useBetResult(account);

  return (
    <>
      <h2>Hi, {account.substring(0, 5) + "..." + account.substring(account.length - 5)}</h2>
      <p>Choose heads or tails and risk doubling your money or losing it all.</p>
      <p
        style={{
          fontStyle: "italic",
          fontSize: "0.7em",
          fontWeight: "500",
          opacity: 0.91,
          color: "#e04a52",
        }}
      >
        Note: The result might take up to a few minutes. Once the transaction is processed, you will soon be notified
        about the bet results. It's nothing to worry about.
      </p>
      <p style={{ fontWeight: 700 }}>
        Account balance: <Eth>{balance}</Eth>
      </p>
      <p style={{ color: "green", fontWeight: 700 }}>
        Your profit: <Eth>{profit}</Eth> {profit && profit !== "0.0" && <Button onClick={collectFunds}>Collect</Button>}
      </p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <NumberInput onChange={setBetAmount} value={betAmount} />
        <p
          style={{
            marginTop: 2,
            fontStyle: "italic",
            fontSize: "0.7em",
            opacity: 0.91,
          }}
        >
          Minimum required bet: <Eth>0.001</Eth>
        </p>
        <StyledCoinWrapper>
          <div
            role="button"
            tabIndex="0"
            onClick={() => handleBet(0)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleBet(0);
              }
            }}
          >
            <HeadsCoin />
          </div>
          <div
            role="button"
            tabIndex="0"
            onClick={() => handleBet(1)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleBet(1);
              }
            }}
          >
            <TailsCoin />
          </div>
        </StyledCoinWrapper>
      </div>
    </>
  );
};

const TailsCoin = () => {
  return (
    <StyledCoin>
      <TailsLogo />
    </StyledCoin>
  );
};

const HeadsCoin = () => {
  return (
    <StyledCoin marginRight>
      <EthereumLogo />
    </StyledCoin>
  );
};

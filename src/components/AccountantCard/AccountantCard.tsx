import React from "react";
import { AccountantType } from "../../utils/types";
import { styled } from "styled-components";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const StyledCard = styled.div`
  border-radius: 16px;
  border: 1px solid rgba(228, 230, 232, 1);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12);
  opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  padding: 24px;
  width: 340px;
`;

const AccountantHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AccountantContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 0;
`;

const AccountantFooter = styled.div``;

const AccountantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryText = styled.div`
  opacity: 1;
  color: rgba(84, 88, 92, 1);
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-align: left;
  line-height: 24px;
`;

const PrimaryText = styled.div<{ $underline?: boolean; $bold?: boolean }>`
  opacity: 1;
  color: rgba(0, 0, 0, 1);
  font-family: "Roboto";
  font-size: ${(props) => (props.$bold ? "24px" : "16px")};
  font-weight: ${(props) => (props.$bold ? "700" : "400")};
  font-style: normal;
  letter-spacing: 0px;
  text-align: left;
  line-height: ${(props) => (props.$bold ? "32px" : "24px")};
  text-decoration: ${(props) => (props.$underline ? "underline" : "none")};
`;

const AccountantPicture = styled.img`
  border-radius: 8px;
  opacity: 1;
  background-size: 100%;
`;

const AccountantCard: React.FC<AccountantType> = ({
  cell,
  email,
  login,
  name,
  picture,
}) => {
  return (
    <StyledCard>
      <AccountantHeader>
        <AccountantPicture src={picture.medium} />
        <AccountantInfo>
          <SecondaryText>{"Twoja księgowa"}</SecondaryText>
          <PrimaryText $bold>{`${name.first} ${name.last}`}</PrimaryText>
        </AccountantInfo>
      </AccountantHeader>
      <AccountantContent>
        <div>
          <SecondaryText>{"E-mail"}</SecondaryText>
          <PrimaryText $underline>{email}</PrimaryText>
        </div>
        <div>
          <SecondaryText>{"Telefon"}</SecondaryText>
          <PrimaryText>{cell}</PrimaryText>
        </div>
        <div>
          <SecondaryText>{"Średnia cena netto usługi / m-c"}</SecondaryText>
          <PrimaryText>{"350,00 PLN"}</PrimaryText>
        </div>
      </AccountantContent>
      <AccountantFooter>
        <PrimaryButton>{"Dowiedz się więcej"}</PrimaryButton>
      </AccountantFooter>
    </StyledCard>
  );
};

export default AccountantCard;

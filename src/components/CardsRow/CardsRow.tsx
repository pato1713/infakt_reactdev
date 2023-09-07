import React, { useLayoutEffect, useRef } from "react";
import { AccountantResponseType } from "../../utils/types";
import { styled } from "styled-components";
import AccountantCard from "../AccountantCard/AccountantCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";

const CardsLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;

  @media (min-width: 800px) and (max-width: 1550px) {
    max-width: 1000px;
  }
`;

interface CardsRowProps {
  page: number;
  onMountCallback: (page: number) => void;
}

const CardsRow: React.FC<CardsRowProps> = ({ page, onMountCallback }) => {
  const cardRef = useRef(null);
  const { data, loading, error } = useFetch<AccountantResponseType>(
    `https://randomuser.me/api/?seed=abc&page=${page}&results=4`
  );

  useLayoutEffect(() => {
    if (data) {
      // timeout added to avoid losing scroll precision
      window.setTimeout(() => onMountCallback(page), 100);
    }
  }, [data, onMountCallback, page]);

  if (loading)
    return (
      <CardsLayout>
        <Loading />
      </CardsLayout>
    );

  if (!data || error) return <></>;

  return (
    <CardsLayout ref={cardRef}>
      {React.Children.toArray(
        data?.results.map((accountant) => <AccountantCard {...accountant} />)
      )}
    </CardsLayout>
  );
};

export default CardsRow;

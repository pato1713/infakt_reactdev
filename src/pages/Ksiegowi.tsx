import { useMemo, useState } from "react";
import { styled } from "styled-components";
import PrimaryButton from "../components/PrimaryButton/PrimaryButton";
import CardsRow from "../components/CardsRow/CardsRow";

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
`;

const NextPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Ksiegowi = () => {
  const [page, setPage] = useState(1);

  const rows = useMemo(() => {
    const rows = [];
    for (let i = 1; i <= page; i++) {
      rows.push(<CardsRow page={i} key={`cards_row_${i}`} />);
    }
    return rows;
  }, [page]);

  return (
    <PageLayout>
      {rows}
      <NextPageContainer>
        <PrimaryButton onClick={() => setPage((prev) => prev + 1)}>
          {"Załaduj więcej"}
        </PrimaryButton>
      </NextPageContainer>
    </PageLayout>
  );
};

export default Ksiegowi;

import { useCallback, useMemo, useRef, useState } from "react";
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
  padding-bottom: 24px;
`;

const Ksiegowi = () => {
  const nextPageRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  /** To let parent component know when row data was fetched
   *  and row component was displayed */
  const mountCardRowHandler = useCallback(
    (_page: number) => {
      if (page === _page && nextPageRef.current) {
        nextPageRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    },
    [page]
  );

  const rows = useMemo(() => {
    const rows = [];
    for (let i = 1; i <= page; i++) {
      rows.push(
        <CardsRow
          page={i}
          key={`cards_row_${i}`}
          onMountCallback={mountCardRowHandler}
        />
      );
    }
    return rows;
  }, [page, mountCardRowHandler]);

  return (
    <PageLayout>
      {rows}
      <NextPageContainer ref={nextPageRef}>
        <PrimaryButton onClick={() => setPage((prev) => prev + 1)}>
          {"Załaduj więcej"}
        </PrimaryButton>
      </NextPageContainer>
    </PageLayout>
  );
};

export default Ksiegowi;

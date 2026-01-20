import CardGrid from "../card-grid/card-grid";
import type { LinkCard } from "../../types/link-card";

interface ProtocolsListProps {
  linkCards: LinkCard[];
}

export const ProtocolsList = ({ linkCards }: ProtocolsListProps) => {
  return (
    <>
      <CardGrid cardData={linkCards} />
    </>
  );
};

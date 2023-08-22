import { Heading, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !data) throw error;

  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae
        recusandae nobis officiis similique qui assumenda corrupti,
        necessitatibus accusantium natus magni earum provident labore magnam
        laborum dolor aliquam voluptatibus nostrum ut doloremque unde sed?
        Voluptatem soluta consectetur, harum provident deleniti, nam labore
        facere aliquam tempore excepturi quos culpa commodi? Enim corporis
        necessitatibus quasi totam, modi asperiores harum sequi assumenda velit
        quia commodi labore optio magnam unde! Vero facilis facere quam possimus
        eligendi qui enim pariatur, temporibus dicta sit aliquam, quod a quidem
        corrupti nihil perferendis, animi ullam ea. Eligendi ipsam sint, commodi
        eaque nobis cumque eveniet. Illo sit vero eveniet!
      </ExpandableText>
      <GameAttributes game={data} />
    </>
  );
};

export default GameDetailPage;

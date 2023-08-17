import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreListContainer = ({ children }: Props) => {
  return (
    <Box width="100%" height="40px" marginY="5px">
      {children}
    </Box>
  );
};

export default GenreListContainer;

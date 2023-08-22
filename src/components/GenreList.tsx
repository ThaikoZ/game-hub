import {
  HStack,
  List,
  ListItem,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import GenreListContainer from "./GenreListContainer";
import useGameQueryStore from "../store";

const GenreList = () => {
  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genre);
  const setGenre = useGameQueryStore((s) => s.setGenre);
  const { data, error, isLoading } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  if (error) return;
  //if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} paddingBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GenreListContainer key={skeleton}>
              <GenreListSkeleton />
            </GenreListContainer>
          ))}
        {data?.results.map((genre) => (
          <GenreListContainer key={genre.id}>
            <ListItem>
              <HStack paddingY="5px">
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  onClick={() => setGenre(genre)}
                  fontSize="lg"
                  variant="link"
                  overflow="hidden"
                  objectFit="cover"
                  justifyContent="start"
                  fontWeight={
                    selectedGenre?.name === genre.name ? "bold" : "normal"
                  }
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          </GenreListContainer>
        ))}
      </List>
    </>
  );
};

export default GenreList;

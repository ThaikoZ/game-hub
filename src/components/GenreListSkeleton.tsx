import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card overflow="hidden" height="100%">
      <HStack>
        <Skeleton width="32px" />
        <CardBody position="relative" top="-10px" right="15px">
          <SkeletonText height="100%" />
        </CardBody>
      </HStack>
    </Card>
  );
};

export default GameCardSkeleton;

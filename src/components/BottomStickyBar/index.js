/** @jsx jsx */
import * as React from "react";
import {
  jsx,
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Label,
  Select,
  Text,
} from "theme-ui";

const BottomStickyBar = ({ data }) => {
  return (
    <Flex
      sx={{
        pt: 5,
        position: "fixed",
        bottom: "0px",
        bg: "background",
        justifyContent: "space-around",
        width: "100%",
        borderTopColor: "muted",
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        display: ["none", "flex"],
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          width: "200px",
          height: "73px",
        }}
      >
        <Text sx={{ color: "primary", fontWeight: 500 }}>
          {data.scholarship.company.name}
        </Text>
        <Text sx={{ fontWeight: 300 }}>{data.scholarship.position}</Text>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          width: "144px",
          height: "73px",
        }}
      >
        <Text sx={{ color: "primary", fontWeight: 500 }}>Location</Text>
        <Text sx={{ fontWeight: 300 }}>{data.scholarship.location.name}</Text>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          width: "144px",
          height: "73px",
        }}
      >
        <Text sx={{ color: "primary", fontWeight: 500 }}>Duration</Text>
        <Text sx={{ fontWeight: 300 }}>{data.scholarship.duration} Year</Text>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          width: "144px",
          height: "73px",
        }}
      >
        <Text sx={{ color: "primary", fontWeight: 500 }}>End date</Text>
        <Text sx={{ fontWeight: 300 }}>
          3 Aug 2020
          {/* {data.scholarship.scholarship_end_date} */}
        </Text>
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          width: "144px",
          height: "73px",
        }}
      >
        <Text sx={{ color: "primary", fontWeight: 500 }}>Start date</Text>
        <Text sx={{ fontWeight: 300 }}>
          30 June 2020
          {/* {data.scholarship.scholarship_start_date} */}
        </Text>
      </Flex>
    </Flex>
  );
};

export default BottomStickyBar;

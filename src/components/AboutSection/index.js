/** @jsx jsx */
import * as React from "react";
import { jsx, Box, Button, Flex, Heading, Text } from "theme-ui";

import pattern from "../../images/pattern.svg";
import student from "../../images/student_photo.png";

const AboutSection = ({ data }) => {
  return (
    <section
      sx={{
        display: "flex",
        maxWidth: "1080px",
        minWidth: "334px",
        mx: [6, "auto"],
        mt: [11, 13],
        position: "relative",
        "::before": {
          content: '""',
          display: ["block", "none"],
          width: "100vw",
          height: "400px",
          position: "absolute",
          top: "25%",
          left: "-24px",
          bg: "primary",
          zIndex: "-10",
        },
      }}
    >
      {/* TODO: This section breaks around 860px, may need another breakpoint */}
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          justifyContent: ["center", "space-between"],
          width: "100%",
        }}
      >
        {/* Student photo and frame */}
        <Box
          sx={{
            flexShrink: 0,
            borderTopLeftRadius: ["334px", "438px"],
            borderTopRightRadius: ["334px", "438px"],
            borderBottomLeftRadius: ["0px", "438px"],
            borderBottomRightRadius: ["0px", "438px"],
            borderLeftStyle: "solid",
            borderRightStyle: "solid",
            borderTopStyle: "solid",
            borderBottomStyle: ["none", "solid"],
            borderWidth: "1px",
            backgroundImage: `url(${pattern})`,
            backgroundSize: "40px",
            bg: "background",
            borderColor: "muted",
            width: ["334px", "438px"],
            height: ["168px", "438px"],
            position: "relative",
            mx: ["auto", 6],
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: ["40px", "26px"],
              left: ["40px", "26px"],
              borderRadius: "100%",
              borderWidth: "1px",
              width: ["252px", "380px"],
              height: ["252px", "380px"],
              overflow: "hidden",
            }}
          >
            <img
              sx={{
                width: ["380px", "580px"],
                position: "absolute",
                left: "-18%",
              }}
              src={student}
              alt="student photo"
            />
          </Box>
        </Box>
        {/* Description */}
        <Flex
          sx={{
            borderStyle: ["solid", "none"],
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
            borderColor: "muted",
            borderWidth: "1px",
            pt: ["180px", "0px"],
            px: [5, 0],
            pb: [8, 0],
            maxWidth: ["768px", "480px"],
            minWidth: "334px",
            justifyContent: "flex-end",
            flexDirection: "column",
            bg: "background",
          }}
        >
          <Heading
            as="h2"
            sx={{
              color: "primary",
              fontSize: ["2.188em", "3em"],
              fontWeight: 500,
              mb: [7, 8],
            }}
          >
            About the apprenticeship
          </Heading>
          <Text
            sx={{
              fontSize: ["1.125em", "1.375em"],
              fontWeight: 300,
              mb: 5,
              lineHeight: ["26px", "32px"],
            }}
          >
            {data.scholarship.about}
          </Text>
        </Flex>
      </Flex>
    </section>
  );
};

export default AboutSection;

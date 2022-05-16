/** @jsx jsx */
import * as React from "react";
import { jsx, Box, Button, Flex, Heading, Text } from "theme-ui";

import icon from "../../images/id_icon.png";
import logo from "../../images/Zeptolab_icon.svg";
import pattern from "../../images/pattern.svg";

import Card from "../Card";

const IntroSection = ({ data }) => {
  return (
    <section sx={{ display: "flex", maxWidth: "1080px", mx: 6 }}>
      <Flex
        sx={{
          flexDirection: ["column"],
          width: "100%",
        }}
      >
        {/* Title and employer */}
        <Flex
          sx={{
            flexDirection: ["column", "row"],
            justifyContent: ["flex-start", "space-between"],
            position: "relative",
          }}
        >
          {/* TODO: Re-implement the icon element in a better way */}
          <Heading
            as="h1"
            sx={{
              fontSize: ["2.188em", "3em"],
              pl: [0, 8],
              maxWidth: ["768px", "480px"],
              zIndex: "100",
              "&:after": {
                position: "absolute",
                left: ["50%", "250px"],
                top: "-100px",
                zIndex: "99",
                content: `url(${icon})`,
              },
            }}
          >
            {data.scholarship.name}
          </Heading>
          <Flex
            sx={{
              flexDirection: ["column-reverse", "row"],
              mt: [8, 0],
              maxWidth: ["768px", "480px"],
              flexBasis: 0,
              flexGrow: 1,
            }}
          >
            <Box>
              <img src={logo} alt="Zeptolab logo" />
            </Box>
            <Flex
              sx={{
                flexDirection: ["row", "column"],
                fontWeight: 300,
                mb: [2, 0],
                ml: [0, 8],
                mr: "auto",
              }}
            >
              <Text
                sx={{ fontSize: ["14px", "18px"], opacity: 0.5, py: [0, 2] }}
              >
                Powered by:&nbsp;
              </Text>
              <Text sx={{ fontSize: ["14px", "27px"] }}>
                {data.scholarship.company.name}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* Description and Cards */}
        <Flex
          sx={{
            flexDirection: ["column-reverse", "row"],
            justifyContent: ["flex-start", "space-between"],
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              mt: 8,
              mr: [6, 0],
              ml: [6, 0],
              pl: [0, 8],
              maxWidth: ["768px", "480px"],
            }}
          >
            <Text
              sx={{ fontSize: ["1.125em", "1.375em"], fontWeight: 500, mb: 8 }}
            >
              A fully funded work-study program to launch your tech career
            </Text>
            <Text
              sx={{ fontSize: ["1.125em", "1.375em"], fontWeight: 300, mb: 8 }}
            >
              {data.scholarship.description}
            </Text>
            <Text
              sx={{ fontSize: ["1.125em", "1.375em"], fontWeight: 500, mb: 8 }}
            >
              Position: {data.scholarship.position}
            </Text>
            <Button sx={{ mr: "auto" }}>Apply Now</Button>
          </Flex>
          <Flex
            sx={{
              flexDirection: "column",
              mt: [8, 0],
              maxWidth: ["768px", "480px"],
              flexBasis: 0,
              flexGrow: 1,
              position: "relative",
            }}
          >
            <Card
              sx={{
                px: [6, 8],
                py: 6,
              }}
            >
              <Text sx={{ color: "primary", fontWeight: 500 }}>
                Application closes in
              </Text>
              <br />
              <br />
              {/* TODO: Replace hard-coded text with countdown to current time */}
              <Text sx={{ fontSize: ["20px", "27px"], fontWeight: 300 }}>
                6 Day : 22 Hrs : 56 Min : 13 Seg
              </Text>
            </Card>
            <Card
              sx={{
                mt: 8,
                px: [6, 8],
                py: 6,
              }}
            >
              <Flex sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
                <Flex
                  sx={{
                    flexDirection: "column",
                    width: "144px",
                    height: "73px",
                  }}
                >
                  <Text sx={{ color: "primary", fontWeight: 500 }}>
                    Location
                  </Text>
                  <Text sx={{ fontWeight: 300 }}>
                    {data.scholarship.location.name}
                  </Text>
                </Flex>
                <Flex
                  sx={{
                    flexDirection: "column",
                    width: "144px",
                    height: "73px",
                  }}
                >
                  <Text sx={{ color: "primary", fontWeight: 500 }}>
                    Duration
                  </Text>
                  <Text sx={{ fontWeight: 300 }}>
                    {data.scholarship.duration} Year
                  </Text>
                </Flex>
                <Flex
                  sx={{
                    flexDirection: "column",
                    width: "144px",
                    height: "73px",
                  }}
                >
                  <Text sx={{ color: "primary", fontWeight: 500 }}>
                    Start date
                  </Text>
                  <Text sx={{ fontWeight: 300 }}>
                    30 June 2020
                    {/* {data.scholarship.scholarship_start_date} */}
                  </Text>
                </Flex>
                <Flex
                  sx={{
                    flexDirection: "column",
                    width: "144px",
                    height: "73px",
                  }}
                >
                  <Text sx={{ color: "primary", fontWeight: 500 }}>
                    End date
                  </Text>
                  <Text sx={{ fontWeight: 300 }}>
                    3 Aug 2020
                    {/* {data.scholarship.scholarship_end_date} */}
                  </Text>
                </Flex>
              </Flex>
            </Card>
            <Box
              sx={{
                zIndex: -1,
                position: "absolute",
                display: ["none", "block"],
                width: "560px",
                height: "250px",
                backgroundImage: `url(${pattern})`,
                backgroundSize: "40px",
                bg: "background",
                bottom: "-50px",
                left: "80px",
                borderColor: "muted",
                borderWidth: "1px",
                borderStyle: "solid",
              }}
            ></Box>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};

export default IntroSection;

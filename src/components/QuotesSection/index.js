/** @jsx jsx */
import * as React from "react";
import { jsx, Box, Button, Flex, Heading, Text } from "theme-ui";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import Card from "../Card";
import Divider from "../Divider";

import arrowLeft from "../../images/arrow_l.svg";
import arrowRight from "../../images/arrow_r.svg";
import drag from "../../images/drag.svg";
import linkedin from "../../images/linkedin.svg";
import pattern from "../../images/pattern.svg";

const QuotesSection = ({ data }) => {
  return (
    <section
      sx={{
        maxWidth: "1120px",
      }}
    >
      <Box
        sx={{
          bg: ["primary", "background"],
          backgroundImage: `url(${pattern})`,
          backgroundSize: "40px",
          overflow: "visible",
          height: ["375px", "400px"],
          width: "100%",
          maxWidth: "1120px",
          position: "relative",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "muted",
        }}
      >
        {/* TODO: Add transition to cursor interaction */}
        <Box
          sx={{
            position: "absolute",
            top: ["90px", "120px"],
            width: "100%",
            cursor: ["grab", `url(${drag}), grab`],
          }}
        >
          <Splide
            aria-label="Quotes"
            hasTrack={false}
            options={{
              gap: "20px",
              padding: "20px",
              perPage: 1,
              start: 1,
              pagination: false,
              rewind: true,
              focus: "center",
              trimSpace: true,
            }}
            sx={{
              mx: "auto",
              maxWidth: "800px",
            }}
          >
            <SplideTrack sx={{ overflow: "visible" }}>
              {data.scholarship.quotes.items.map((item, index) => (
                <SplideSlide key={index}>
                  <Card>
                    <Flex
                      sx={{
                        justifyContent: "space-between",
                        py: "32px",
                        px: "24px",
                        alignItems: "center",
                      }}
                    >
                      <Flex sx={{ alignItems: "center" }}>
                        <Box
                          sx={{
                            width: ["48px", "80px"],
                            height: ["48px", "80px"],
                            borderRadius: "80px",
                            bg: "primary",
                          }}
                        >
                          {/* Avatar placeholder */}
                        </Box>
                        <Flex sx={{ flexDirection: "column", ml: 4 }}>
                          <Text sx={{ color: "primary", fontWeight: 500 }}>
                            {item.author}
                          </Text>
                          <Text
                            sx={{
                              fontWeight: 300,
                            }}
                          >
                            {item.cohort}
                          </Text>
                        </Flex>
                      </Flex>
                      <Box sx={{ with: "30px", height: "30px", mr: [0, 8] }}>
                        <img src={linkedin} alt="Linkedin" />
                      </Box>
                    </Flex>
                    <Flex
                      sx={{
                        bg: "#fbfbfb",
                        pt: "48px",
                        pb: "32px",
                        px: ["24px", "120px"],
                        flexDirection: "column",
                      }}
                    >
                      <Text
                        sx={{
                          fontSize: ["1.5em", "1.625em"],
                          fontWeight: 300,
                          mb: [8, 7],
                        }}
                      >
                        {item.quote}
                      </Text>
                      <Text sx={{ fontWeight: 300 }}>
                        Education{"   "}·{"   "}
                        {item.education}
                      </Text>
                    </Flex>
                  </Card>
                </SplideSlide>
              ))}
            </SplideTrack>
            <div
              sx={{
                width: "auto",
                m: "20px",
                display: ["block", "none"],
                textAlign: "right",
                color: "text",
              }}
              className="splide__arrows"
            >
              <Button
                variant="slider"
                className="splide__arrow splide__arrow--prev"
              >
                <img src={arrowLeft} alt="Left" />
              </Button>
              <Button
                variant="slider"
                className="splide__arrow splide__arrow--next"
              >
                <img src={arrowRight} alt="Right" />
              </Button>
            </div>
          </Splide>
        </Box>
      </Box>
    </section>
  );
};

export default QuotesSection;

/** @jsx jsx */
import * as React from "react";
import { jsx, Box, Button, Flex, Heading, Text } from "theme-ui";
import Card from "../Card";

import Divider from "../Divider";

const StatsSection = ({ data }) => {
  return (
    <section
      sx={{
        display: "flex",
        maxWidth: "1080px",
        minWidth: "334px",
        mx: [6, 8],
        mt: [11, 13],
        mb: ["128px", "170px"],
      }}
    >
      <Flex sx={{ flexDirection: ["column", "row"] }}>
        {/* Scholarship value */}
        <Flex
          sx={{
            flexDirection: "column",
            borderStyle: ["none", "solid"],
            borderWidth: "1px",
            borderRadius: 1,
            borderColor: "muted",
            px: [0, 8],
            py: [0, 7],
            height: "100%",
            justifyContent: "space-between",
            mr: [0, 8],
            flexBasis: 0,
            flexGrow: 0.5,
          }}
        >
          <Flex
            sx={{
              flexDirection: "column",
              width: "144px",
              height: "73px",
            }}
          >
            <Text sx={{ color: "primary", fontWeight: 500 }}>
              Scholarship value
            </Text>
            <Text
              sx={{ fontWeight: 300, fontSize: ["24px", "48px"], mt: [2, 7] }}
            >
              €{data.scholarship.total_value.toLocaleString()}
            </Text>
          </Flex>
          <Flex sx={{ flexDirection: "column" }}>
            <Divider sx={{ mb: [0, 9], display: ["none", "block"] }} />
            <Flex>
              <Flex
                sx={{
                  flexDirection: "column",
                  width: "144px",
                  height: "73px",
                }}
              >
                <Text sx={{ color: "primary", fontWeight: 500 }}>Tuition</Text>
                <Text
                  sx={{
                    fontWeight: 300,
                    fontSize: ["24px", "1em"],
                    mt: [2, 1],
                  }}
                >
                  €{data.scholarship.tuition.toLocaleString()}
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
                  Remaining
                </Text>
                <Text
                  sx={{
                    fontWeight: 300,
                    fontSize: ["24px", "1em"],
                    mt: [2, 1],
                  }}
                >
                  €{data.scholarship.remaining.toLocaleString()}
                </Text>
              </Flex>
            </Flex>
            <Flex
              sx={{
                flexDirection: "column",
                width: "144px",
                height: "73px",
              }}
            >
              <Text sx={{ color: "primary", fontWeight: 500 }}>
                Living stipend
              </Text>
              <Text
                sx={{ fontWeight: 300, fontSize: ["24px", "1em"], mt: [2, 1] }}
              >
                €{data.scholarship.stipend_per_year.toLocaleString()}&nbsp;(€
                {data.scholarship.stipend_per_month.toLocaleString()}/month)
              </Text>
            </Flex>
          </Flex>
        </Flex>
        {/* Time commitment */}
        <Flex sx={{ flexDirection: "column", flexBasis: 0, flexGrow: 1 }}>
          <Flex sx={{ flexDirection: ["column", "row"] }}>
            <Card sx={{ px: 6, pt: [7, 8], pb: [8, 7], mt: [10, 0] }}>
              <Flex
                sx={{
                  flexDirection: "column",
                }}
              >
                <Text sx={{ color: "primary", fontWeight: 500 }}>
                  Study Commitment
                </Text>
                <Text
                  sx={{
                    fontWeight: 300,
                    fontSize: ["24px", "1em"],
                    mt: [2, 1],
                    mb: [7, 5],
                  }}
                >
                  {data.scholarship.study_commitment}&nbsp;hours / day
                </Text>
                <Divider variant="short" />
                <Text
                  sx={{
                    fontWeight: 300,
                    fontSize: "1em",
                    mt: [2, 1],
                  }}
                >
                  You will complete 15 modules to graduate. Daily classes
                  are&nbsp;
                  {data.scholarship.study_commitment}&nbsp; hours, plus
                  coursework to complete in your own time.
                </Text>
              </Flex>
            </Card>
            <Card
              sx={{ px: 6, pt: [7, 8], pb: [8, 7], ml: [0, 8], mt: [7, 0] }}
            >
              <Flex
                sx={{
                  flexDirection: "column",
                }}
              >
                <Text sx={{ color: "primary", fontWeight: 500 }}>
                  Work Commitment
                </Text>
                <Text
                  sx={{
                    fontWeight: 300,
                    fontSize: ["24px", "1em"],
                    mt: [2, 1],
                    mb: [7, 5],
                  }}
                >
                  {data.scholarship.internship_commitment}&nbsp;hours / day
                </Text>
                <Divider variant="short" />
                <Text
                  sx={{
                    fontWeight: 300,
                    fontSize: "1em",
                    mt: [2, 1],
                  }}
                >
                  Immerse yourself in the professional world during your
                  apprenticeship. You'll learn the ropes from the best and get
                  to apply your newly acquired knowledge in the field from day
                  one.
                </Text>
              </Flex>
            </Card>
          </Flex>
          <Flex sx={{ flexDirection: "column" }}>
            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "center",
                my: [7, 6],
              }}
            >
              <Divider sx={{ display: "inline-block", width: "100%" }} />
              <Text
                sx={{
                  fontSize: "1em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  px: 5,
                  minWidth: "auto",
                }}
              >
                Graduation
              </Text>
              <Divider sx={{ display: "inline-block", width: "100%" }} />
            </Flex>
            <Card sx={{ px: 6, pt: [7, 8], pb: [8, 7] }}>
              <Flex
                sx={{
                  flexDirection: "column",
                }}
              >
                <Text sx={{ color: "primary", fontWeight: 500 }}>
                  A full-time contract
                </Text>
                <Text
                  sx={{
                    fontWeight: 300,
                    fontSize: ["24px", "1em"],
                    mt: [2, 1],
                    mb: [7, 5],
                  }}
                >
                  {data.scholarship.duration}&nbsp;year / Full-Time
                </Text>
                <Divider variant="short" />
                <Text
                  sx={{
                    fontWeight: 300,
                    fontSize: "1em",
                    mt: [2, 1],
                  }}
                >
                  {data.scholarship.duration_text}
                </Text>
              </Flex>
            </Card>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
};

export default StatsSection;

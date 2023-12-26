import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import StoryData from "../../storybook-components-to-next.config";
import { Center, GluestackUIProvider } from "@gluestack-ui/themed";
import { getAllComponents } from "@/utils/generateCombination";
import { GluestackUILogo } from "@/brandAssets/GluestackLogo";
import { config } from "@gluestack-ui/config";
import { View, Text as RNText, StyleSheet } from "react-native";

interface ExplorePageProps {
  slug: string;
}

const ComponentFrame = ({
  allCombinations,
  Story,
  component,
  clusterOrderSortedCombinations,
  state_props,
  isStateComponent,
  colorMode,
}: any) => {
  return (
    <View
      style={{
        backgroundColor: colorMode === "light" ? "white" : "black",
        padding: 16,
        flexDirection: "column",
      }}
    >
      <RNText
        style={{
          fontSize: 24,
          padding: 32,
          color: colorMode === "light" ? "black" : "white",
        }}
      >
        {`${colorMode} mode`.toUpperCase()}{" "}
      </RNText>
      <Center>
        {allCombinations.length === 0 && (
          <Story
            dataSet={{
              "component-props": JSON.stringify({
                "component-name": component[0],
                colorMode: colorMode,
              }),
            }}
            colorMode={colorMode}
          />
        )}
        {allCombinations.length > 0 && (
          <View style={{ padding: 16, gap: 32 }}>
            {Object.keys(clusterOrderSortedCombinations).map(
              (clusterFirstOrder: any) => {
                let variantSortedCombination =
                  clusterOrderSortedCombinations[clusterFirstOrder];
                return (
                  <View
                    style={{
                      gap: 16,
                      padding: 16,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {clusterFirstOrder === "default" ? (
                      <></>
                    ) : (
                      <RNText
                        style={{
                          padding: 32,
                          color: colorMode === "light" ? "black" : "white",
                        }}
                      >
                        {clusterFirstOrder}
                      </RNText>
                    )}
                    {Object.keys(variantSortedCombination).map(
                      (variantName: any, index) => {
                        let stateSortedCombination =
                          variantSortedCombination[variantName];

                        return (
                          <View style={{ gap: 16, flexDirection: "column" }}>
                            {variantName === "default" ? (
                              <></>
                            ) : (
                              <RNText
                                style={{
                                  color:
                                    colorMode === "light" ? "black" : "white",
                                }}
                              >
                                {variantName}
                              </RNText>
                            )}
                            {/* <Text bold>{variantName}</Text> */}
                            {variantName === "default" ? (
                              <View
                                style={{
                                  flexWrap: "wrap",
                                  gap: 16,
                                  flexDirection: "row",
                                }}
                              >
                                {Array.isArray(stateSortedCombination) &&
                                  stateSortedCombination.map((props: any) => {
                                    props = {
                                      ...props,
                                      // orientation: clusterFirstOrder,
                                      // clusterFirstOrder: variantName,
                                    };
                                    const dataProps: any = {
                                      ...props,
                                    };
                                    dataProps["component-name"] = component[0];

                                    state_props.forEach((state: string) => {
                                      if (props[state]) {
                                        isStateComponent = true;
                                        dataProps["state"] = state;
                                        delete dataProps[state];
                                      }
                                    });

                                    if (
                                      !dataProps["state"] &&
                                      isStateComponent
                                    ) {
                                      dataProps["state"] = "default";
                                    }

                                    if (
                                      dataProps.uri &&
                                      dataProps.uri === "https://broken.link"
                                    ) {
                                      dataProps.uri = "BrokenLink";
                                    } else if (dataProps.uri) {
                                      dataProps.uri = "ImageLink";
                                    }

                                    if (dataProps.as) {
                                      dataProps.as = dataProps.as.displayName;
                                    }

                                    dataProps.colorMode = colorMode;

                                    props.dataSet = {
                                      "component-props":
                                        JSON.stringify(dataProps),
                                    };

                                    return (
                                      <Center key={index}>
                                        <Story
                                          {...props}
                                          colorMode={colorMode}
                                        />
                                      </Center>
                                    );
                                  })}
                              </View>
                            ) : (
                              <View
                                style={{ gap: 16, flexDirection: "column" }}
                              >
                                {Array.isArray(stateSortedCombination) &&
                                  stateSortedCombination.map((props: any) => {
                                    props = {
                                      ...props,
                                      // clusterFirstOrder,
                                      // variant: variantName,
                                    };
                                    const dataProps: any = {
                                      ...props,
                                    };
                                    dataProps["component-name"] = component[0];

                                    state_props.forEach((state: any) => {
                                      if (props[state]) {
                                        isStateComponent = true;
                                        dataProps["state"] = state;
                                        delete dataProps[state];
                                      }
                                    });

                                    if (
                                      !dataProps["state"] &&
                                      isStateComponent
                                    ) {
                                      dataProps["state"] = "default";
                                    }

                                    if (
                                      dataProps.uri &&
                                      dataProps.uri === "https://broken.link"
                                    ) {
                                      dataProps.uri = "BrokenLink";
                                    } else if (dataProps.uri) {
                                      dataProps.uri = "ImageLink";
                                    }

                                    if (dataProps.as) {
                                      dataProps.as = dataProps.as.displayName;
                                    }

                                    dataProps.colorMode = colorMode;

                                    props.dataSet = {
                                      "component-props":
                                        JSON.stringify(dataProps),
                                    };

                                    return (
                                      <Center key={index}>
                                        <Story
                                          {...props}
                                          colorMode={colorMode}
                                        />
                                      </Center>
                                    );
                                  })}
                              </View>
                            )}
                          </View>
                        );
                      }
                    )}
                  </View>
                );
              }
            )}
          </View>
        )}
      </Center>
    </View>
  );
};

const ExplorePage: React.FC<ExplorePageProps> = ({ slug: component }) => {
  if (component === "") {
    return <div>Append component name</div>;
  }

  const Story = StoryData[component]["story"];
  const StoryArgs = StoryData[component]["meta"];

  let {
    allCombinations,
    clusterOrderSortedCombinations,
    isStateComponent,
    state_props,
    metaInfo,
  } = getAllComponents(StoryArgs);

  return (
    <View
      style={{
        gap: 32,
        backgroundColor: "#000000",
      }}
    >
      <View style={{ padding: 48, gap: 22 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <RNText
            style={{
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 90,
              color: "#F5F5F5",
            }}
          >
            {component[0].toUpperCase()}
          </RNText>
          <GluestackUILogo />
        </View>
        <View
          style={{
            width: 800,
          }}
        >
          <RNText
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 32,
              color: "#DBDBDB",
            }}
          >
            {metaInfo.componentDescription}
          </RNText>
        </View>
      </View>
      <View>
        <View style={styles.light}>
          <GluestackUIProvider config={config} colorMode="light">
            <ComponentFrame
              allCombinations={allCombinations}
              Story={Story}
              component={component}
              clusterOrderSortedCombinations={clusterOrderSortedCombinations}
              state_props={state_props}
              isStateComponent={isStateComponent}
              colorMode="light"
            />
          </GluestackUIProvider>
        </View>
        {component[0] !== "Shadow" && (
          <View style={styles.dark}>
            <GluestackUIProvider
              config={config}
              colorMode="dark"
              // @ts-ignore
              _experimentalNestedProvider
            >
              <ComponentFrame
                allCombinations={allCombinations}
                Story={Story}
                component={component}
                clusterOrderSortedCombinations={clusterOrderSortedCombinations}
                state_props={state_props}
                isStateComponent={isStateComponent}
                colorMode="dark"
              />
            </GluestackUIProvider>
          </View>
        )}
      </View>
    </View>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filePaths = ["", ...Object.keys(StoryData)];
  const paths: { params: { slug: string[] } }[] = [];

  filePaths?.forEach((filename) => {
    const slug = filename;
    paths.push({
      params: {
        slug: [slug],
      },
    });
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ExplorePageProps> = async (
  context
) => {
  const { slug } = context.params as { slug: string };
  return {
    props: {
      slug: slug || "",
    },
  };
};

export default ExplorePage;

const styles = StyleSheet.create({
  dark: {
    $$css: true,
    gs: "gs gs-dark",
  },
  light: {
    $$css: true,
    gs: "gs gs-light",
  },
});

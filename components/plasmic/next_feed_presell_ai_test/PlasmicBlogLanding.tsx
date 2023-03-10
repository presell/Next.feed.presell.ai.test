// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fK4qwMyg2PyiHXLCzS8ypM
// Component: f93wHpeHtU4ZP
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_next_feed_presell_ai_test.module.css"; // plasmic-import: fK4qwMyg2PyiHXLCzS8ypM/projectcss
import sty from "./PlasmicBlogLanding.module.css"; // plasmic-import: f93wHpeHtU4ZP/css

export type PlasmicBlogLanding__VariantMembers = {};
export type PlasmicBlogLanding__VariantsArgs = {};
type VariantPropType = keyof PlasmicBlogLanding__VariantsArgs;
export const PlasmicBlogLanding__VariantProps = new Array<VariantPropType>();

export type PlasmicBlogLanding__ArgsType = {};
type ArgPropType = keyof PlasmicBlogLanding__ArgsType;
export const PlasmicBlogLanding__ArgProps = new Array<ArgPropType>();

export type PlasmicBlogLanding__OverridesType = {
  root?: p.Flex<"div">;
  httpApiFetcher?: p.Flex<typeof DataFetcher>;
  columns?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultBlogLandingProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicBlogLanding__RenderFunc(props: {
  variants: PlasmicBlogLanding__VariantsArgs;
  args: PlasmicBlogLanding__ArgsType;
  overrides: PlasmicBlogLanding__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <div
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            <div className={classNames(projectcss.all, sty.freeBox___2Dt)}>
              <DataFetcher
                data-plasmic-name={"httpApiFetcher"}
                data-plasmic-override={overrides.httpApiFetcher}
                className={classNames("__wab_instance", sty.httpApiFetcher)}
                dataName={"fetchedData" as const}
                errorDisplay={
                  <ph.DataCtxReader>
                    {$ctx => "Error fetching data"}
                  </ph.DataCtxReader>
                }
                headers={{
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  Authorization: "Bearer keyVDvhyVSx5Ntbl3"
                }}
                loadingDisplay={
                  <ph.DataCtxReader>{$ctx => "Loading..."}</ph.DataCtxReader>
                }
                method={"GET" as const}
                noLayout={false}
                url={
                  "https://api.airtable.com/v0/appmM1mMqcDvugXhY/PlasmicCMS " as const
                }
              >
                <ph.DataCtxReader>
                  {$ctx => (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__wZ5QU)}
                    >
                      {(
                        (() => {
                          try {
                            return $ctx.fetchedData.records;
                          } catch (e) {
                            if (e instanceof TypeError) {
                              return [];
                            }
                            throw e;
                          }
                        })() ?? []
                      ).map((currentItem, currentIndex) => (
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__xt7Ob
                          )}
                          key={currentIndex}
                        >
                          <div
                            data-plasmic-name={"columns"}
                            data-plasmic-override={overrides.columns}
                            className={classNames(projectcss.all, sty.columns)}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__fmAv
                              )}
                            >
                              <p.PlasmicImg
                                alt={""}
                                className={classNames(sty.img__bwwXv)}
                                displayHeight={"auto" as const}
                                displayMaxHeight={"none" as const}
                                displayMaxWidth={"100%" as const}
                                displayMinHeight={"0" as const}
                                displayMinWidth={"0" as const}
                                displayWidth={"auto" as const}
                                loading={"lazy" as const}
                                src={(() => {
                                  try {
                                    return currentItem.fields.heroImage[0].url;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}
                              />
                            </div>

                            <div
                              className={classNames(
                                projectcss.all,
                                sty.column__vz8Nn
                              )}
                            >
                              <p.PlasmicImg
                                alt={""}
                                className={classNames(sty.img__ikhn3)}
                                displayHeight={"auto" as const}
                                displayMaxHeight={"none" as const}
                                displayMaxWidth={"100%" as const}
                                displayMinHeight={"0" as const}
                                displayMinWidth={"0" as const}
                                displayWidth={"auto" as const}
                                loading={"lazy" as const}
                                src={(() => {
                                  try {
                                    return currentItem.fields.logo[0].url;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}
                              />

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__t6L3
                                )}
                              >
                                {(() => {
                                  try {
                                    return currentItem.fields.heroHeadline;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return "Enter some text";
                                    }
                                    throw e;
                                  }
                                })()}
                              </div>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__vimlh
                                )}
                              >
                                {(() => {
                                  try {
                                    return currentItem.fields.heroSubHeadline;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return "Enter some text";
                                    }
                                    throw e;
                                  }
                                })()}
                              </div>

                              <p.PlasmicLink
                                data-plasmic-name={"link"}
                                data-plasmic-override={overrides.link}
                                className={classNames(
                                  projectcss.all,
                                  projectcss.a,
                                  projectcss.__wab_text,
                                  sty.link
                                )}
                                component={Link}
                                href={`/Article/${(() => {
                                  try {
                                    return currentItem.id;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return "value";
                                    }
                                    throw e;
                                  }
                                })()}`}
                                id={(() => {
                                  try {
                                    return currentItem.id;
                                  } catch (e) {
                                    if (e instanceof TypeError) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}
                                platform={"nextjs"}
                              >
                                {"Read More"}
                              </p.PlasmicLink>
                            </div>
                          </div>
                        </p.Stack>
                      ))}
                    </div>
                  )}
                </ph.DataCtxReader>
              </DataFetcher>
            </div>
          </div>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "httpApiFetcher", "columns", "link"],
  httpApiFetcher: ["httpApiFetcher", "columns", "link"],
  columns: ["columns", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  httpApiFetcher: typeof DataFetcher;
  columns: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBlogLanding__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBlogLanding__VariantsArgs;
    args?: PlasmicBlogLanding__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBlogLanding__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBlogLanding__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicBlogLanding__ArgProps,
          internalVariantPropNames: PlasmicBlogLanding__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicBlogLanding__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBlogLanding";
  } else {
    func.displayName = `PlasmicBlogLanding.${nodeName}`;
  }
  return func;
}

export const PlasmicBlogLanding = Object.assign(
  // Top-level PlasmicBlogLanding renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpApiFetcher: makeNodeComponent("httpApiFetcher"),
    columns: makeNodeComponent("columns"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicBlogLanding
    internalVariantProps: PlasmicBlogLanding__VariantProps,
    internalArgProps: PlasmicBlogLanding__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicBlogLanding;
/* prettier-ignore-end */

import React from "react";
import { useLoaderData } from "@tanstack/react-router";
import InnerBlog from "./InnerBlog";
import MumbaiSEODetail from "./MumbaiSEODetail";
import { WPPost } from "../services/wordpress";

interface LoaderData {
  type?: "blog" | "seo";
  post?: WPPost;
  slug?: string;
}

export default function DynamicSlugRoute() {
  const loaderData = useLoaderData({ strict: false }) as LoaderData | undefined;
  const routeType = loaderData?.type || "seo";

  if (routeType === "blog") {
    return <InnerBlog />;
  }

  return <MumbaiSEODetail />;
}

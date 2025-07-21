import { SEO_OBJ, blogPostsObj } from "Essential";
import { Metadata } from "next";
import React from "react";

export function CustomMetaData(props: any) {
  const { presentURL } = props;
  const SEO_OBJ_VALUES = Object.values(SEO_OBJ);

  const filteredURL = SEO_OBJ_VALUES.map((singleOBJ) => singleOBJ.absoluteURL).filter(
    (singleOBJURL) => singleOBJURL === presentURL
  );

  const filteredOBJ = SEO_OBJ_VALUES.filter((singleOBJ) => {
    return singleOBJ.absoluteURL === presentURL;
  });
  // console.log({ filteredOBJ, filteredURL });

  const keywords = [
    "SettlePe",
    "Online bill payment",
    "BBPS payment app",
    "Rent payment platform",
    "Utility bill payment India",
    "Book flights online",
    "Book bus tickets online",
    "Pay rent using credit card",
    "Fast bill payment app",
    "Pay bills securely online",
    "BBPS integrated platform",
    "Electricity bill payment online",
    "Water bill payment app",
    "Broadband and DTH recharge",
    "BBPS electricity payment",
    "Pay rent with low charges",
    "Rent payment using credit card",
    "Monthly rent payment app",
    "Credit card to bank account rent",
    "Online flight booking India",
    "Bus ticket booking app",
    "Cheapest flight booking app",
    "Book tickets with cashback",
    "Credit card bill payment app",
    "Use credit card to pay rent",
    "Pay bills with credit card",
    "Manage credit card payments online",
    "Best app to pay bills in India",
    "How to pay rent using credit card",
    "Easy rent and bill payment online",
    "Secure payment gateway India",
    "Unified bill payment solution",
  ];

  const metaDataOBJ: Metadata = {
    metadataBase: new URL(filteredOBJ[0].absoluteURL),
    title: filteredOBJ[0].title,
    description: filteredOBJ[0].description,
    verification: {
      google: process.env.GOOGLE_ANALYTICS_TAG,
    },
    category: filteredOBJ[0].category,
    keywords: keywords,
    creator: "Karunakar Patel",
    openGraph: {
      title: filteredOBJ[0].title,
      description: filteredOBJ[0].description,
      type: "article",
      publishedTime: filteredOBJ[0].publishedTime,
      modifiedTime: filteredOBJ[0].lastUpdateTime,
      authors: ["Karunakar Patel"],
      images: [filteredOBJ[0].ogImageURL],
    },

    twitter: {
      card: "summary_large_image",
      site: "https://twitter.com/Karna_Patel_",
      creator: "@Karna_Patel_",
      creatorId: "https://twitter.com/Karna_Patel_",
    },

    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
  // console.log(metaDataOBJ, "META DATA OBJ");
  return metaDataOBJ;
}

import settlePeFeaturedImg from "@Public/settlePeFeaturedImg.png";

export const DateMonthYearForBlogPost = (lastUpdateTime: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(lastUpdateTime);
  const day = date.getDate();
  const month = months[date.getMonth()]; // Months are 0-based in JavaScript Dates
  const year = date.getFullYear();
  // console.log(`${day}/${month}/${year}`, "DATE");
  return `${day}, ${month}, ${year}`;
};

export const dynamicLastUpdatedTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
  return formattedDate;
};

interface Base_Url_Props {
  HOME_PAGE_BASE_URL: string;
  DASHBOARD_PAGE_BASE_URL: string;
}

export const BASE_URLS: Base_Url_Props = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
  DASHBOARD_PAGE_BASE_URL: `${process.env.HOME_PAGE_BASE_URL}/dashboard`,
};

interface Blog_Post_URL_Props {
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  LOGIN_PAGE_ABSOLUTE: string;
  LOGIN_PAGE_RELATIVE: string;

  REGISTRATION_PAGE_ABSOLUTE: string;
  REGISTRATION_PAGE_RELATIVE: string;

  DASHBOARD_PAGE_ABSOLUTE: string;
  DASHBOARD_PAGE_RELATIVE: string;

  TERMS_AND_CONDITIONS_PAGE_ABSOLUTE: string;
  TERMS_AND_CONDITONS_PAGE_RELATIVE: string;

  REFUND_AND_CANCELLATION_PAGE_ABSOLUTE: string;
  REFUND_AND_CANCELLATION_PAGE_RELATIVE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;
}

export const blogPostURLS: Blog_Post_URL_Props = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  LOGIN_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/login`,
  LOGIN_PAGE_RELATIVE: "/login",

  REGISTRATION_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/register`,
  REGISTRATION_PAGE_RELATIVE: "/register",

  DASHBOARD_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/dashboard`,
  DASHBOARD_PAGE_RELATIVE: "/dashboard",

  TERMS_AND_CONDITIONS_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/terms-and-conditions`,
  TERMS_AND_CONDITONS_PAGE_RELATIVE: "/terms-and-conditions",

  REFUND_AND_CANCELLATION_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/refund-and-cancellation-policy`,
  REFUND_AND_CANCELLATION_PAGE_RELATIVE: "/refund-and-cancellation-policy",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact-us",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",
};

interface blogPostsObjProps {
  id: number;
  url: string;
  title: string;
  subtitle?: string;
  description?: string;
  lastUpdateTime: string;
  publishedTime: string;
  tags: { tag: string; href: string }[];
  featuredImage: any;
  featuredImageAltText: string;
  ogImageURL: string;
}

interface SEO_OBJ_Props {
  [key: string]: {
    absoluteURL: string;
    relativeURL: string;
    title: string;
    subtitle?: string;
    description?: string;
    lastUpdateTime: string;
    publishedTime: string;
    tags?: { tag: string; href: string }[];
    featuredImage: any;
    featuredImageAltText: string;
    ogImageURL: string;
    changeFrequency?: "weekly" | "daily" | "monthly" | "yearly";
    category?: string;
  };
}

export const SEO_OBJ: SEO_OBJ_Props = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "SettlePe: Settle Your Bills in Time",
    description:
      "At SettlePe, we offer a seamless platform where users can pay utility bills, book flight and bus tickets, pay rent at low service charges, and even make payments using credit cards. With integrated BBPS payment services, SettlePe simplifies all your financial transactions—fast, secure, and reliable.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-07-21T10:07:55+00:00",
    featuredImage: settlePeFeaturedImg,
    featuredImageAltText: "settlePe-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/settlePeFeaturedImg.png`,
    changeFrequency: "daily",
    tags: [{ tag: "HomePage", href: "/" }],
  },

  LOGIN_PAGE: {
    absoluteURL: blogPostURLS.LOGIN_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.LOGIN_PAGE_RELATIVE,
    title: "Login to Your SettlePe Account: SettlePe.",
    description:
      "Access all SettlePe services in one place — pay bills, book tickets, and manage your transactions securely. Log in to continue.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-07-21T10:07:55+00:00",
    featuredImage: settlePeFeaturedImg,
    featuredImageAltText: "settlePe-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/settlePeFeaturedImg.png`,
    changeFrequency: "daily",
    tags: [{ tag: "LoginPage", href: "/login" }],
  },

  REGISTRATION_PAGE: {
    absoluteURL: blogPostURLS.REGISTRATION_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.REGISTRATION_PAGE_RELATIVE,
    title: "Create Your SettlePe Account: SettlePe",
    description:
      "Sign up in minutes to start paying bills, booking travel, and managing finances — all in one secure platform. Join SettlePe and simplify your transactions.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-07-21T10:07:55+00:00",
    featuredImage: settlePeFeaturedImg,
    featuredImageAltText: "settlePe-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/settlePeFeaturedImg.png`,
    changeFrequency: "daily",
    tags: [{ tag: "RegistrationPage", href: "/register" }],
  },

  DASHBOARD_PAGE: {
    absoluteURL: blogPostURLS.DASHBOARD_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DASHBOARD_PAGE_RELATIVE,
    title: "Dashboard: SettlePe",
    description:
      "Login to view SettlePe's dashboard page where you can view all ther services integrated with the settlepe's system.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-07-21T10:07:55+00:00",
    featuredImage: settlePeFeaturedImg,
    featuredImageAltText: "settlePe-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/settlePeFeaturedImg.png`,
    changeFrequency: "daily",
    tags: [{ tag: "SettlePayDashboardPage", href: "/dashboard" }],
  },

  TERMS_AND_CONDITIONS_PAGE: {
    absoluteURL: blogPostURLS.TERMS_AND_CONDITIONS_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.TERMS_AND_CONDITONS_PAGE_RELATIVE,
    title: "Terms and Conditions: SettlePe",
    description:
      "Please read our terms carefully before using SettlePe. These conditions govern your use of our services, rights, and responsibilities, ensuring a transparent experience for all users.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-07-21T10:07:55+00:00",
    featuredImage: settlePeFeaturedImg,
    featuredImageAltText: "settlePe-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/settlePeFeaturedImg.png`,
    changeFrequency: "daily",
    tags: [{ tag: "TermsAndConditions", href: "/terms-and-conditions" }],
  },

  REFUND_AND_CANCELLATION_PAGE: {
    absoluteURL: blogPostURLS.REFUND_AND_CANCELLATION_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.REFUND_AND_CANCELLATION_PAGE_RELATIVE,
    title: "Refund and Cancellation Policy: SettlePe",
    description:
      "Learn about SettlePe's policies for cancellations and refunds. We’re committed to fair practices and ensuring customer satisfaction for every transaction you make.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-07-21T10:07:55+00:00",
    featuredImage: settlePeFeaturedImg,
    featuredImageAltText: "settlePe-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/settlePeFeaturedImg.png`,
    changeFrequency: "daily",
    tags: [{ tag: "RefundAndCancellation", href: "/refund-and-cancellation-policy" }],
  },

  PRIVACY_POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy - Your Data, Your Control: SettlePe",
    description:
      "At SettlePe, we value your privacy. Learn how we collect, use, and protect your personal information, and how your consent drives our services.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-07-21T10:07:55+00:00",
    featuredImage: settlePeFeaturedImg,
    featuredImageAltText: "settlePe-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/settlePeFeaturedImg.png`,
    changeFrequency: "daily",
    tags: [{ tag: "PrivacyPolicyPage", href: "/privacy" }],
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us: SettlePe",
    description:
      "Have questions, feedback, or need support? We’re here to help. Reach out to the SettlePe team for assistance with payments, bookings, or any of our services.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-07-21T10:07:55+00:00",
    featuredImage: settlePeFeaturedImg,
    featuredImageAltText: "settlePe-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/settlePeFeaturedImg.png`,
    changeFrequency: "daily",
    tags: [{ tag: "PrivacyPolicyPage", href: "/privacy" }],
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer - Transparency You Can Trust: SettlePe",
    description:
      "The information and services provided by SettlePe are for general guidance. Read our disclaimer to understand your rights and our limitations, especially concerning third-party APIs and financial data.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2025-07-21T10:07:55+00:00",
    featuredImage: settlePeFeaturedImg,
    featuredImageAltText: "settlePe-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/settlePeFeaturedImg.png`,
    changeFrequency: "daily",
    tags: [{ tag: "PrivacyPolicyPage", href: "/privacy" }],
  },
};

export const blogPostsObj: blogPostsObjProps[] = [
  {
    id: 0,
    url: `${blogPostURLS.HOME_PAGE_ABSOLUTE}`,
    title: `${SEO_OBJ.HOME_PAGE.title}`,
    description: `${SEO_OBJ.HOME_PAGE.description}`,
    lastUpdateTime: `${SEO_OBJ.HOME_PAGE.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.HOME_PAGE.publishedTime}`,
    tags: SEO_OBJ.HOME_PAGE.tags!,
    featuredImage: SEO_OBJ.HOME_PAGE.featuredImage,
    featuredImageAltText: `${SEO_OBJ.HOME_PAGE.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.HOME_PAGE.ogImageURL}`,
  },
];

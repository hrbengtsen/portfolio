import Head from "next/head";
import { useRouter } from "next/router";

type MetaDataProps = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
};

export const MetaData = (props: MetaDataProps) => {
  // Insert your own default metadata here
  const baseUrl = "https://mikkelbengtsen.com";
  const siteName = "Mikkel Bengtsen";

  const meta = {
    title: "Mikkel Bengtsen",
    description:
      "I'm a student, developer and designer passionate about making digital products and creating digital experiences.",
    image: `${baseUrl}/og.png`,
    type: "website",
    ...props,
  };
  const router = useRouter();

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${baseUrl}${router.asPath}`} />
      <link rel="canonical" href={`${baseUrl}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </Head>
  );
};

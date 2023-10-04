import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Scott Wattenbarger is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Scott Wattenbarger, Scott, Wattenbarger, web developer portfolio, Scott web developer, Scott developer, mern stack, Scott Wattenbarger portfolio"
      />
      <meta property="og:title" content="Scott Wattenbarger's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Scott Wattenbarger',
};

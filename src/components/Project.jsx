import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Lightbox from 'react-image-lightbox';
import Text from './Text';
import Button from './Button';
import 'react-image-lightbox/style.css';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { disablePageScrolling } from '../utils/helpers';
import clsx from 'clsx';

const clickableImgStyle = 'rounded overflow-hidden border border-gray-200 p-0 cursor-pointer';
const screenshotImgWrapperStyle = {
  width: '60px',
  height: '60px',
};
const reactModalProps = { shouldReturnFocusAfterClose: false };

function Project({
  href,
  title,
  description,
  bannerImgData,
  tags,
  screenshotListImgData = [],
  githubUrl,
}) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          image
        }
      }
    }
  `);

  const [isLightboxVisible, setLightboxVisibility] = React.useState(false);
  const [lightboxImgIndex, setLightboxImgIndex] = React.useState(null);

  const showLightboxFromIndex = index => {
    setLightboxImgIndex(index);
    setLightboxVisibility(true);
    disablePageScrolling(true);
  };

  const imageSrcList = [
    bannerImgData.originalImg,
    ...screenshotListImgData.map(imgSharp => imgSharp.originalImg),
  ];

  return (
    <article className="box-border flex w-full flex-row-reverse py-14 max-lg:w-full max-lg:flex-col lg:flex-row-reverse">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'http://schema.org/',
            '@type': 'CreativeWork',
            headline: title,
            about: description,
            url: href,
            thumbnailUrl: bannerImgData.originalImg,
            image: bannerImgData.originalImg,
            keywords: tags.join(','),
            sameAs: githubUrl,
            creator: {
              '@type': 'Person',
              name: 'Aggelos Arvanitakis',
              url: '/',
              image: site.siteMetadata.image,
            },
          })}
        </script>
      </Helmet>
      <div className="lg:w-1/2 lg:pl-3">
        <header>
          <a href={href} rel="noopener noreferrer" target="_blank">
            <h2 className="mb-3 text-3xl font-bold text-gray-700 hover:underline">{title}</h2>
          </a>
          {!!tags.length && (
            <ul className="mt-8 flex flex-wrap">
              {tags.map(tag => (
                <li
                  key={tag}
                  className="mb-3 mr-3 rounded-[25px] bg-gray-200 px-3 py-1 text-center text-sm text-gray-700"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          )}
        </header>
        <Text>{description}</Text>
        {githubUrl && (
          <div className="mb-12 w-full md:w-auto">
            <a href={githubUrl} rel="noopener noreferrer" target="_blank">
              <Button>View on Github</Button>
            </a>
          </div>
        )}
      </div>
      <div className="lg:w-1/2 lg:pr-3">
        <button
          className={clsx(clickableImgStyle, 'm-0 max-h-[350px] w-full')}
          onClick={() => showLightboxFromIndex(0)}
        >
          <div className="max-h-inherit">
            <Img alt="Project Banner" fluid={bannerImgData} />
          </div>
        </button>
        <ul className="-mx-2 flex flex-wrap">
          {screenshotListImgData.map((screenshotImgData, index) => (
            <li key={index}>
              <button
                className={clsx(clickableImgStyle, 'm-2')}
                onClick={() => showLightboxFromIndex(index + 1)}
              >
                <Img
                  style={screenshotImgWrapperStyle}
                  alt="Project Screenshot"
                  fluid={screenshotImgData}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isLightboxVisible && (
        <Lightbox
          enableZoom={false}
          imagePadding={100}
          reactModalProps={reactModalProps}
          mainSrc={imageSrcList[lightboxImgIndex]}
          nextSrc={imageSrcList[(lightboxImgIndex + 1) % imageSrcList.length]}
          prevSrc={imageSrcList[(lightboxImgIndex + imageSrcList.length - 1) % imageSrcList.length]}
          onCloseRequest={() => {
            setLightboxVisibility(false);
            disablePageScrolling(false);
          }}
          onMoveNextRequest={() =>
            setLightboxImgIndex((lightboxImgIndex + 1) % imageSrcList.length)
          }
          onMovePrevRequest={() =>
            setLightboxImgIndex((lightboxImgIndex + imageSrcList.length - 1) % imageSrcList.length)
          }
        />
      )}
    </article>
  );
}

Project.propTypes = {
  href: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  bannerImgData: PropTypes.object.isRequired,
  screenshotListImgData: PropTypes.arrayOf(PropTypes.object),
};

Project.defaultProps = {
  tags: [],
  githubUrl: null,
};

export default Project;

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

const clickableImgStyle = 'rounded overflow-hidden border border-lightgrey p-0 cursor-pointer';

const ProjectBox = ({ children }) => (
  <article
    className="
    py-14 w-full box-border flex flex-row-reverse lg:flex-row-reverse
    max-lg:w-full max-lg:flex-col
  "
  >
    {children}
  </article>
);

const ProjectHeading = ({ children, ...props }) => (
  <h2 className="text-3xl font-bold text-black mb-3 hover:underline" {...props}>
    {children}
  </h2>
);

const BannerWrapper = ({ children, ...props }) => (
  <button className={`${clickableImgStyle} w-full max-h-[350px] m-0`} {...props}>
    <div className="max-h-inherit">{children}</div>
  </button>
);

const ScreenshotListItem = ({ children, ...props }) => (
  <li>
    <button className={`${clickableImgStyle} m-2`} {...props}>
      {children}
    </button>
  </li>
);

const ScreenshotList = ({ children }) => <ul className="-mx-2 flex flex-wrap">{children}</ul>;

const TagContainer = ({ children }) => <ul className="flex flex-wrap mt-8">{children}</ul>;

const Tag = ({ children }) => (
  <li
    className="
    text-sm mr-3 mb-3 rounded-[25px] bg-lightgrey text-black text-center 
    px-3 py-1
  "
  >
    #{children}
  </li>
);

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
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            image
          }
        }
      }
    `
  );

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
    <ProjectBox>
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
      <div className="lg:pl-3 lg:w-1/2">
        <header>
          <a href={href} rel="noopener noreferrer" target="_blank">
            <ProjectHeading>{title}</ProjectHeading>
          </a>
          {!!tags.length && (
            <TagContainer>
              {tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagContainer>
          )}
        </header>
        <Text>{description}</Text>
        {githubUrl && (
          <a href={githubUrl} rel="noopener noreferrer" target="_blank">
            <Button className="mb-12 md:w-auto w-full">View on Github</Button>
          </a>
        )}
      </div>
      <div className="lg:pr-3 lg:w-1/2">
        <BannerWrapper onClick={() => showLightboxFromIndex(0)}>
          <Img alt="Project Banner" fluid={bannerImgData} />
        </BannerWrapper>
        <ScreenshotList>
          {screenshotListImgData.map((screenshotImgData, index) => (
            <ScreenshotListItem key={index} onClick={() => showLightboxFromIndex(index + 1)}>
              <Img
                style={screenshotImgWrapperStyle}
                alt="Project Screenshot"
                fluid={screenshotImgData}
              />
            </ScreenshotListItem>
          ))}
        </ScreenshotList>
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
    </ProjectBox>
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

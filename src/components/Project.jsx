import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import Lightbox from 'react-image-lightbox';
import Text from './Text';
import Button from './Button';
import 'react-image-lightbox/style.css';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { disablePageScrolling } from '../utils/helpers';

const clickableImgStyle = css`
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #f1f1f1;
  padding: 0;
  cursor: pointer;
`;

const ProjectBox = styled.article`
  padding: ${({ theme }) => `${theme.spacing.xl} 0`};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row-reverse; // for proper tab focusing

  @media only screen and (max-width: 1199px) {
    width: 100%;
    flex-direction: column;
  }

  ${Text} {
    text-align: justify;
  }
`;

const ImagesContainer = styled.div`
  @media only screen and (min-width: 1200px) {
    padding-right: ${({ theme }) => theme.spacing.sm};
    width: 50%;
  }
`;

const DetailsBox = styled.div`
  @media only screen and (min-width: 1200px) {
    padding-left: ${({ theme }) => theme.spacing.sm};
    width: 50%;
  }
`;

const TagContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const Tag = styled.li`
  font-size: 0.8rem;
  margin-right: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.lightgrey};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
`;

const ProjectHeading = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  &:hover {
    text-decoration: underline;
  }
`;

const BannerWrapper = styled.button`
  ${clickableImgStyle};
  width: 100%;
  max-height: 350px;
  margin: 0;

  .gatsby-image-wrapper {
    max-height: inherit;
  }
`;

const ScreenshotListItem = styled(props => (
  <li>
    <button {...props} />
  </li>
))`
  ${clickableImgStyle};
  margin: ${({ theme }) => theme.spacing.xs};
`;

const ScreenshotList = styled.ul`
  margin: ${({ theme }) => `${theme.spacing.xs} -${theme.spacing.xs}`};
  display: flex;
  flex-wrap: wrap;
`;

const GithubButton = styled(Button)`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

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
  screenshotListImgData,
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
      <DetailsBox>
        <header>
          <a href={href} rel="noopener noreferrer" target="_blank">
            <ProjectHeading>{title}</ProjectHeading>
          </a>
          {!!tags.length && (
            <TagContainer>
              {tags.map(tag => (
                <Tag key={tag}>#{tag}</Tag>
              ))}
            </TagContainer>
          )}
        </header>
        <Text>{description}</Text>
        {githubUrl && (
          <a href={githubUrl} rel="noopener noreferrer" target="_blank">
            <GithubButton>View on Github</GithubButton>
          </a>
        )}
      </DetailsBox>
      <ImagesContainer>
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
      </ImagesContainer>
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

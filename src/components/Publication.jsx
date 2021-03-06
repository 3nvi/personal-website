import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import Text from './Text';
import { graphql, useStaticQuery } from 'gatsby';

const ArticleWell = styled.article`
  padding: 20px;
  border: ${({ theme }) => `1px solid ${theme.colors.lightgrey}`};
  border-radius: 2px;
  width: 550px;
  box-sizing: border-box;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const ArticleHeading = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.black};
  margin: ${({ theme }) => `${theme.spacing.sm} 0`};
  line-height: 1.5rem;
`;

const ArticleBanner = styled(Img)`
  border-radius: 4px;
  min-height: 200px;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
`;

const Separator = styled.span`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  margin: ${({ theme }) => `0 ${theme.spacing.xs}`};
  background-color: ${({ theme }) => theme.colors.black};
`;

const Anchor = styled.a`
  &:hover {
    ${ArticleHeading} {
      text-decoration: underline;
    }
  }
`;

function Publication({
  href,
  title,
  createdAt,
  timeInMinutes,
  description,
  bannerImgData,
  publisher,
}) {
  const creationDateToIso = createdAt.replace(/\//, '-');
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            image
            logo
          }
        }
      }
    `
  );

  return (
    <ArticleWell>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'http://schema.org/',
            '@type': 'Article',
            articleBody: description,
            articleSection: 'Web development',
            headline: title,
            dateCreated: creationDateToIso,
            dateModified: creationDateToIso,
            datePublished: creationDateToIso,
            url: href,
            timeRequired: `PT${timeInMinutes}M`,
            thumbnailUrl: bannerImgData.originalImg,
            image: bannerImgData.originalImg,
            publisher: {
              '@type': 'Organization',
              name: publisher,
              logo: site.siteMetadata.logo,
            },
            author: {
              '@type': 'Person',
              name: 'Aggelos Arvanitakis',
              url: '/',
              image: site.siteMetadata.image,
            },
          })}
        </script>
      </Helmet>
      <header>
        <Anchor href={href} rel="noopener noreferrer" target="_blank">
          <ArticleBanner alt="Article Banner" fluid={bannerImgData} />
          <ArticleHeading>{title}</ArticleHeading>
        </Anchor>
      </header>
      <Meta>
        <date>{dayjs(createdAt).format('DD MMM YYYY')}</date>
        <Separator />
        <time>{timeInMinutes} min</time>
      </Meta>
      <Text>{description}</Text>
    </ArticleWell>
  );
}

Publication.propTypes = {
  href: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  timeInMinutes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  bannerImgData: PropTypes.object.isRequired,
};

Publication.defaultProps = {};

export default Publication;

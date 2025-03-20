import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Img from 'gatsby-image';
import Text from './Text';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

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
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          image
          logo
        }
      }
    }
  `);

  return (
    <article className="box-border w-[550px] rounded-sm border border-lightgrey p-5 max-md:w-full">
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
      <a href={href} target="_blank" rel="noopener noreferrer" className="group">
        <Img fluid={bannerImgData} alt={title} className="min-h-[200px] rounded" />

        <h2 className="my-3 text-xl font-bold leading-6 text-black group-hover:underline">
          {title}
        </h2>
      </a>

      <div className="flex items-center text-sm">
        <time>{dayjs(createdAt).format('MMM DD, YYYY')}</time>
        <span className="mx-2 h-[3px] w-[3px] rounded-full bg-black" />
        <span>{timeInMinutes} min read</span>
      </div>

      <Text>{description}</Text>
    </article>
  );
}

Publication.propTypes = {
  href: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  timeInMinutes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  bannerImgData: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Publication;

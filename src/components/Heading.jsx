import styled from "@emotion/styled"

const Heading = styled.h1`
  font-family: 'Playfair Display', 'FuturaNew', sans-serif;
  font-size: 4rem;

  @media only screen and (min-width: 768px) {
    font-size: 6.5rem;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 8rem;
  }

  @media only screen and (min-width: 1600px) {
    font-size: 10rem;
  }
`;

export default Heading;
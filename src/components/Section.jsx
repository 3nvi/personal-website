import styled from "@emotion/styled"

const Section = styled.section`
  margin: ${({ theme }) => `${theme.spacing.xxl} 0`};
`;

const SectionHeader = styled.header`
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightgrey}`};
`;

Section.Header = SectionHeader;

export default Section;
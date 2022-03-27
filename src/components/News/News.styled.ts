import styled from 'styled-components';

export const NewsContainer = styled('section')`
	display: flex;
	gap: 1.5rem;
	margin: auto;
      @media (max-width: 1023px) {
        flex-wrap: wrap;
      }
     
`;
export const CardContainer = styled('div')`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	grid-auto-rows: min-content;
	grid-gap: 1.125rem;
`;
export const LatestResearch = styled('div')`
	max-width: 478px;
	width: 100%;
      @media (min-width: 481px) and (max-width: 1023px) {
        max-width: 1023px;
        article{
          max-width: 1023px;
        }
      }
`;

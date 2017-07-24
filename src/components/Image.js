import styled, { css } from 'styled-components';

export default styled.img`
  width: 100%;
  max-width: 500px;
  border: 1px solid grey;

  ${props => props.horizontal && css`
  		max-width: 750px;
  	`}

    ${props => props.vertical && css`
    		max-width: 400px;
    	`}
`

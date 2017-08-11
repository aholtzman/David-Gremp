import styled from 'styled-components';

const TextWrap = styled.div`
  padding-right: 50px;
  padding-left: 50px;
  padding-bottom: 40px;
  max-width: 900px;
  margin: auto;
  margin-top: 80px;

  p {
    line-height: 150%;
  }

  @media (max-width: 850px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`
export default TextWrap

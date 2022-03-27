import styled from "styled-components";
const Button = styled.button`
  background: ${({ theme }) => theme.complementary};
  border: none;
  color: ${({ theme }) => theme.complementary};
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;
export default Button
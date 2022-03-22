import styled from "styled-components";
const Button = styled.button`
  background: ${({ theme }) => theme.complementary};
  border: 2px solid ${({ theme }) => theme.primaryborder};
  color: ${({ theme }) => theme.complementary};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;
export default Button
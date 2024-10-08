import styled from "styled-components";

type AlertProps = {
  children: React.ReactNode;
};

// Styles
const AlertBox = styled.div`
  background: var(--color-danger);
  border-radius: 10px;
  color: var(--color-white);
  font-size: 14px;
  padding: 10px 16px;
`;

const Alert = (props: AlertProps): JSX.Element => {
  const { children } = props;

  return <AlertBox>{children}</AlertBox>;
};

export default Alert;

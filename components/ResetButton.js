import styled from 'styled-components';

const StyledResetButton = styled.div`
  .button {
    background-color: #a5de5e !important;
    color: #fff !important;
    margin: 10px;
  }
`;

const ResetButton = (props) => {
  return (
    <StyledResetButton>
      <button className="ui circular icon button" onClick={props.onClick}>
        <i className="sync icon"></i>
      </button>
    </StyledResetButton>
  );
};

export default ResetButton;

import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';

const StyledCounter = styled.div`
  .icon {
    margin: 0 !important;
  }

  .list > .item {
    margin-right: 0 !important;
  }

  .history {
    margin-top: -0.5rem !important;
  }

  .history .header,
  .history .content {
    color: ${(props) => props.colors.history} !important;
  }

  .ui.card,
  .ui.cards > .card {
    background-color: ${(props) => props.colors.card};
  }

  .statistic > .value {
    color: #fff;
  }

  .button {
    background-color: ${(props) => props.colors.button} !important;
    color: #fff !important;
  }
`;

const renderHistory = (history) => {
  const lastHistory = history.slice(Math.max(history.length - 6, 0));

  if (lastHistory.length < history.length) {
    lastHistory.unshift('…');
  }

  let i = 0;
  const items = lastHistory.flatMap((value, j) => {
    const subItems = [];

    if (j > 0) {
      subItems.push(
        <div className="item" key={i}>
          <div className="content">
            <i className="caret right icon"></i>
          </div>
        </div>
      );

      i++;
    }

    subItems.push(
      <div className="item" key={i}>
        <div className="content">
          <div className="header">{value}</div>
        </div>
      </div>
    );

    i++;

    return subItems;
  });

  return items;
};

const initialCount = 20;

const Counter = (props, ref) => {
  const [count, setCount] = useState(initialCount);
  const [history, setHistory] = useState([initialCount]);
  const [futureHistory, setFutureHistory] = useState([]);

  useImperativeHandle(ref, () => ({
    reset() {
      setCount(initialCount);
      setHistory([initialCount]);
      setFutureHistory([]);
    }
  }));

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(props.name));
    if (data) {
      setCount(data.count);
      setHistory(data.history);
      setFutureHistory(data.futureHistory);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      props.name,
      JSON.stringify({
        count,
        history,
        futureHistory
      })
    );
  }, [count, history]);

  return (
    <StyledCounter className={props.className} colors={props.colors}>
      <div className="ui card">
        <div
          className="ui bottom attached button"
          onClick={() => setCount(count + 1)}
          aria-hidden="true">
          <i className="plus big icon"></i>
        </div>
        <div className="center aligned content">
          <div className="description">
            <div className="ui huge statistic">
              <div className="value">{count}</div>
            </div>
          </div>
        </div>
        <div
          className="ui bottom attached button"
          onClick={() => setCount(count - 1)}
          aria-hidden="true">
          <i className="minus big icon"></i>
        </div>
      </div>
      <div className="history ui center aligned grid">
        <div className="ui horizontal list">{renderHistory(history)}</div>
      </div>
      <div className="ui center aligned grid">
        <div className="ui big buttons">
          <button
            className={`ui button ${history.length === 1 ? 'disabled' : ''}`}
            onClick={() => {
              if (history.length === 1) return;

              const slicedHistory = history.slice(0, history.length - 1);
              setHistory(slicedHistory);
              setFutureHistory([...futureHistory, count]);
              setCount(slicedHistory[slicedHistory.length - 1]);
            }}>
            <i className="backward icon"></i>
          </button>
          <button
            className={`ui button ${history[history.length - 1] === count ? 'disabled' : ''}`}
            onClick={() => {
              if (history[history.length - 1] === count) return;

              setFutureHistory([]);
              setHistory([...history, count]);
            }}>
            Save
          </button>
          <button
            className={`ui button ${futureHistory.length === 0 ? 'disabled' : ''}`}
            onClick={() => {
              if (futureHistory.length === 0) return;

              const value = futureHistory[futureHistory.length - 1];
              setCount(value);
              setHistory([...history, value]);

              const slicedFutureHistory = futureHistory.slice(0, futureHistory.length - 1);
              setFutureHistory(slicedFutureHistory);
            }}>
            <i className="forward icon"></i>
          </button>
        </div>
      </div>
    </StyledCounter>
  );
};

export default forwardRef(Counter);

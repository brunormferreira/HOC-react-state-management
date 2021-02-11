import React, { useState, useMemo, memo, useContext } from 'react';

import actions from './actions';

const changeState = (setData) => ({ label, value }) => {
  setData((data) => ({
    ...data,
    [label]: value,
  }));
};

export const initialState = {
  loading: false,
  arr: [],
  error: false,
};

export const ExampleContext = React.createContext();

export const useExamples = () => useContext(ExampleContext);

export default function WithExamplesProvider(WrappedComponent) {
  const WithExamples = (props) => {
    const [data, setData] = useState(initialState);

    const value = useMemo(
      () => ({
        data,
        actions: actions(data, changeState(setData)),
      }),
      [data]
    );

    return (
      <ExampleContext.Provider value={value}>
        <WrappedComponent {...props} />
      </ExampleContext.Provider>
    );
  };

  return memo(WithExamples);
}

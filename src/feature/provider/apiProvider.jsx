//  ApiProvider.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store/store';

// const store = configureStore({
//     reducer: {
//         [postsApi.reducerPath]: postsApi.reducer,
//         [usersApi.reducerPath]: usersApi.reducer,
//         // other reducers...
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(postsApi.middleware, usersApi.middleware),
// });

const ApiProvider = ({ children }) => (
    <Provider store={store}>
        {children}
    </Provider>
);

export default ApiProvider;
// import useMountedState from './useMountedState';
// import { useCallback } from 'react';

// const useCancelablePromise = () => {
//     const isMounted = useMountedState();

//     return useCallback((promise, onCancel) => new Promise((resolve, reject) => {
//         promise
//             .then((result) => {
//                 if (isMounted()) {
//                     resolve(result);
//                 }
//             })
//             .catch((error) => {
//                 if (isMounted()) {
//                     reject(error);
//                 }
//             })
//             .finally(() => {
//                 if (!isMounted() && onCancel) {
//                     onCancel();
//                 }
//             });
//     }),
//         [isMounted],
//     );
// };

// export default useCancelablePromise;
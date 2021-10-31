/* eslint-disable no-undef */
useEffect(() => {
  let isMounted = true; // note mutable flag
  someAsyncOperation().then((data) => {
    if (isMounted) setState(data); // add conditional check
  });
  return () => {
    isMounted = false;
  }; // cleanup toggles value, if unmounted
}, []);

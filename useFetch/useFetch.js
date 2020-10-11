import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {

   const isMounted = useRef(true);

   const [state, setState] = useState({

      data: null,
      loading: true,
      error: null,

   });

   useEffect(() => {

      return () => {
         isMounted.current = false;
      }

   }, []);

   useEffect(() => {

      setState({
         error: null,
         loading: true,
         data: null,
      })

      fetch(url)
         .then((resp) => resp.json())
         .then((data) => {

            if (isMounted.current) {
               setState({
                  error: null,
                  loading: false,
                  data: data,
               })
            } else {
               console.log(('setState no se llamo'));
            }

         })

   }, [url]);

   return state;

}
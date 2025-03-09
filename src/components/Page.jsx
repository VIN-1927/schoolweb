import React, { useEffect } from 'react';

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | DinaalDeSilva`;
  }, [props.title]);

  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export default Page;

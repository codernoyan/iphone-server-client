/* eslint-disable linebreak-style */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Phone() {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <div>
      <img src={phone.image} alt="" />
      <h2>
        Name:
        {' '}
        {phone.name}
      </h2>
      <p>
        <code>
          Price:
          {' '}
          {phone.price}
        </code>
      </p>
    </div>
  );
}

export default Phone;

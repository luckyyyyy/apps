'use client';

import React, { useState } from 'react';
import { rpc } from '@web/rpc/app';

export default function Home() {
  const [text, setText] = useState('');

  const onClick = async () => {
    const response = await rpc.hello();
    if (response.status === 200) {
      setText(response.body);
    }
  };

  return (
    <div>
      <button onClick={onClick}>Click me</button>
      <p>client side - {text}</p>
    </div>
  );
}

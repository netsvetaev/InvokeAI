import React from 'react';
import ImageToImagePanel from './ImageToImagePanel';
import ImageToImageDisplay from './ImageToImageDisplay';
import InvokeWorkarea from 'features/tabs/InvokeWorkarea';

export default function ImageToImageWorkarea() {
  return (
    <InvokeWorkarea optionsPanel={<ImageToImagePanel />}>
      <ImageToImageDisplay />
    </InvokeWorkarea>
  );
}
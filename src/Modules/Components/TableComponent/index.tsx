import React from 'react';

type Props = {
  valuesPost: any; // Consider defining a more specific type if possible
};

const TableComponent: React.FC<Props> = ({  valuesPost = { text: '' } }: Props) => {
  // Conditional rendering to check if valuesPost and valuesPost.text are defined
  if (!valuesPost || !valuesPost.text) {
    return <div>AI will write content here!</div>;
  }

  const content = valuesPost.text.split('\n').filter((line: string) => line.trim() !== '');

  return (
    <div>
      {content.map((line: string, index: number) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};

export default TableComponent;

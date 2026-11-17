import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardBody, CardHeader } from './Card';

describe('Card', () => {
  it('renders header and body content', () => {
    render(
      <Card>
        <CardHeader>Title</CardHeader>
        <CardBody>Content</CardBody>
      </Card>,
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('uses semantic article markup', () => {
    render(<Card>Hello</Card>);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});

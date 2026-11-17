import type { HTMLAttributes } from 'react';

type CardPartProps = HTMLAttributes<HTMLElement>;

export function Card({ className = '', ...rest }: CardPartProps) {
  return <article className={`rounded-card border border-border bg-surface ${className}`} {...rest} />;
}

export function CardHeader({ className = '', ...rest }: CardPartProps) {
  return <header className={`border-b border-border p-4 ${className}`} {...rest} />;
}

export function CardBody({ className = '', ...rest }: CardPartProps) {
  return <div className={`p-4 ${className}`} {...rest} />;
}

import cn from 'classnames'
import React from 'react'
import s from './Loader.module.scss'

interface LoaderProps extends React.HTMLProps<HTMLDivElement> {
  isSecondary?: boolean
}

export const Loader: React.FC<LoaderProps> = ({isSecondary = false, className}) => {
  return (
    <div className={cn(s.loader, className)}>
      <div className={cn(s.dot, {
        [s.dotSecondary]: isSecondary
      })} />
      <div className={cn(s.dot, {
        [s.dotSecondary]: isSecondary
      })} />
      <div className={cn(s.dot, {
        [s.dotSecondary]: isSecondary
      })} />
    </div>
  );
}

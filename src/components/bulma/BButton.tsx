import { MouseEventHandler, ReactNode, useEffect, useState } from "react"

type BButtonProps = {
  children?: ReactNode
  loading?: boolean
  className?: string
  onClick?: MouseEventHandler
}

export default function BButton (props: BButtonProps) {
  const [buttonClasses, setButtonClasses] = useState('button ' + props.className);

  useEffect(() => {
    const classes = ['button'];

    if (props.loading) {
      classes.push('is-loading');
    }
    setButtonClasses(classes.join(' ') + ' ' + props.className);
  }, [props.className, props.loading]);

  return (
    <button className={ buttonClasses } onClick={props.onClick}>{ props.children }</button>
  )
}

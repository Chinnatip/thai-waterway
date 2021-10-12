import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Review full icon at ....
// https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=close

type Props = {
  fill: any
  noMargin?: boolean
  width?: number
}

// Font Awesome Icon
const Icon = ({ fill, noMargin = false, width = 28 }: Props) => {
  return (
    <FontAwesomeIcon
      icon={fill}
      className={`${noMargin ? '' : 'mr-3'} fa-show inline`}
      style={{ width: `${width}px`, height: `${width}px` }}
    />
  )
}

export default Icon
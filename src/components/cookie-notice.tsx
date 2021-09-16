import React from 'react'

import styles from '../styles.module.css'

import Icon from './icon'
import Text from './text'
import Buttons from './buttons'

import { setCookie, getCookie } from '../helpers/cookies'
import { formatMessage } from '../intl/format'
import {
  validateAcceptButtonLabel,
  validateReadMoreButtonLabel,
  validateReadMoreButtonLink,
  validateReadMoreButtonOpenInNewTab,
  validateCookieTextLabel,
  validateCookieExpiration,
  validateCookieName,
} from '../validator'

interface CookieNoticeProps {
  acceptButtonLabel?: string
  readMoreButtonLabel?: string
  readMoreButtonLink?: string
  readMoreButtonOpenInNewTab?: boolean
  cookieTextLabel?: string
  cookieExpiration?: number
  cookieName?: string
  onAcceptButtonClick?: () => void
}

const CookieNotice: React.FC<CookieNoticeProps> = ({
  acceptButtonLabel,
  readMoreButtonLabel,
  readMoreButtonLink,
  readMoreButtonOpenInNewTab,
  cookieTextLabel,
  cookieExpiration,
  cookieName,
  onAcceptButtonClick,
}) => {
  const validCookieName = validateCookieName(cookieName)
  const userCookiesAllowed = getCookie(validCookieName) === 'true'

  const [cookiesAllowed, setCookiesAllowed] = React.useState(userCookiesAllowed)

  const handleAcceptButtonClick = () => {
    setCookiesAllowed(true)
    setCookie(
      validCookieName,
      'true',
      validateCookieExpiration(cookieExpiration),
    )
    onAcceptButtonClick && onAcceptButtonClick()
  }

  if (cookiesAllowed) {
    return null
  }

  return (
    <div className={styles['react-cookienotice-root']}>
      <div className={styles['react-cookienotice-stick-to-bottom']}>
        <div className={styles['react-cookienotice-wrapper']}>
          <Icon />
          <Text
            cookieTextLabel={formatMessage(
              'text.cookieTextLabel',
              validateCookieTextLabel(cookieTextLabel),
            )}
          />
          <Buttons
            acceptButtonLabel={formatMessage(
              'buttons.accept.acceptButtonLabel',
              validateAcceptButtonLabel(acceptButtonLabel),
            )}
            handleAcceptButtonClick={handleAcceptButtonClick}
            readMoreButtonLabel={formatMessage(
              'buttons.readMore.readMoreButtonLabel',
              validateReadMoreButtonLabel(readMoreButtonLabel),
            )}
            readMoreButtonLink={validateReadMoreButtonLink(readMoreButtonLink)}
            readMoreButtonOpenInNewTab={validateReadMoreButtonOpenInNewTab(
              readMoreButtonOpenInNewTab,
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default CookieNotice

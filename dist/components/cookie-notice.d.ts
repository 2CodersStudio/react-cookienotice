export interface CookieNoticeProps {
    /**
     * The label for the accept all cookies button.
     */
    acceptAllButtonLabel?: string;
    /**
     * A callback function to be called when the accept all cookies button is clicked.
     */
    onAcceptAllButtonClick?: () => void;
    /**
     * The label for the decline all cookies button.
     */
    declineAllButtonLabel?: string;
    /**
     * A callback function to be called when the decline all cookies button is clicked.
     */
    onDeclineAllButtonClick?: () => void;
    /**
     * The label for the customize cookies button.
     */
    customizeButtonLabel?: string;
    /**
     * The title for the customize view.
     */
    customizeTitleLabel?: string;
    /**
     * List of services to be customized.
     */
    services?: string[];
    /**
     * The label for the accept button.
     */
    acceptButtonLabel?: string;
    /**
     * A callback function to be called when the accept cookies button is clicked. The first param returns the checked services.
     */
    onAcceptButtonClick?: (services: string[]) => void;
    /**
     * The label for the back button.
     */
    backButtonLabel?: string;
    /**
     * The title for the cookie banner.
     */
    titleLabel?: string;
    /**
     * The description for the cookie banner.
     */
    descriptionLabel?: string;
    /**
     * The label for the read more link.
     */
    readMoreLabel?: string;
    /**
     * The link for the read more label.
     */
    readMoreLink?: string;
    /**
     * Whether the read more link should open in a new tab.
     */
    readMoreInNewTab?: boolean;
    /**
     * Days after cookie expires and user should reaccept cookies.
     */
    cookieExpiration?: number;
    /**
     * The name of the cookie that saves the user consent.
     */
    cookieName?: string;
}
/**
 * The cookie banner.
 *
 * @example
 * <CookieNotice
 *   acceptAllButtonLabel='acceptAllButtonLabel'
 *   onAcceptAllButtonClick={() => {}}
 *   declineAllButtonLabel='declineAllButtonLabel'
 *   onDeclineAllButtonClick={() => {}}
 *   customizeButtonLabel='customizeButtonLabel'
 *   customizeTitleLabel='customizeTitleLabel'
 *   services={['GOOGLE_ANALYTICS', 'HUBSPOT']}
 *   acceptButtonLabel='acceptButtonLabel'
 *   onAcceptButtonClick={(services: string[]) => {}}
 *   backButtonLabel='backButtonLabel'
 *   titleLabel='titleLabel'
 *   descriptionLabel='descriptionLabel'
 *   readMoreLabel='readMoreLabel'
 *   readMoreLink='readMoreLink'
 *   readMoreInNewTab={true}
 *   cookieExpiration={30}
 *   cookieName='cookieName'
 * />
 */
declare const CookieNotice: ({ acceptAllButtonLabel, onAcceptAllButtonClick, declineAllButtonLabel, onDeclineAllButtonClick, customizeButtonLabel, customizeTitleLabel, services, acceptButtonLabel, onAcceptButtonClick, backButtonLabel, titleLabel, descriptionLabel, readMoreLabel, readMoreLink, readMoreInNewTab, cookieExpiration, cookieName, }: CookieNoticeProps) => import("react/jsx-runtime").JSX.Element | null;
export default CookieNotice;
//# sourceMappingURL=cookie-notice.d.ts.map
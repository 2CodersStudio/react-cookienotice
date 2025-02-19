export interface CookieNoticeProps {
    /**
     * The label for the accept all cookies button.
     */
    acceptAllButtonLabel?: string;
    /**
     * A callback function to be called when the accept all cookies button is clicked. The first param returns the services if any.
     */
    onAcceptAllButtonClick?: (services?: string[]) => void;
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
    services?: ServiceObject[];
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
     * The label for the always active services.
     */
    alwaysActiveLabel?: string;
    /**
     * The label for the accept all button in the customize view.
     */
    customizeAcceptAllButtonLabel?: string;
    /**
     * The timeout for the accept all button in the customize view.
     */
    customizeAcceptAllTimeout?: number;
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
     * The placement of the cookie banner.
     */
    placement?: PlacementOptions;
    /**
     * Cookie options.
     */
    cookieOptions?: CookieOptions;
}
/**
 * The cookie banner.
 *
 * [See documentation](https://github.com/xavierbriole/react-cookienotice#props)
 *
 * @example
 * <CookieNotice
 *   acceptAllButtonLabel='acceptAllButtonLabel'
 *   onAcceptAllButtonClick={(services?: string[]) => {}}
 *   declineAllButtonLabel='declineAllButtonLabel'
 *   onDeclineAllButtonClick={() => {}}
 *   customizeButtonLabel='customizeButtonLabel'
 *   customizeTitleLabel='customizeTitleLabel'
 *   services={[{ name: 'serviceName', description: 'serviceDescription', code: 'serviceCode' }]}
 *   acceptButtonLabel='acceptButtonLabel'
 *   onAcceptButtonClick={(services: string[]) => {}}
 *   backButtonLabel='backButtonLabel'
 *   alwaysActiveLabel='alwaysActiveLabel'
 *   customizeAcceptAllButtonLabel='customizeAcceptAllButtonLabel'
 *   customizeAcceptAllTimeout={1000}
 *   titleLabel='titleLabel'
 *   descriptionLabel='descriptionLabel'
 *   readMoreLabel='readMoreLabel'
 *   readMoreLink='readMoreLink'
 *   readMoreInNewTab={true}
 *   placement={{ vertical: 'bottom', horizontal: 'left' }}
 *   cookieOptions={{ name: 'hide-notice', value: 'true', expires: 30, secure: false, httpOnly: false, sameSite: 'lax' }}
 * />
 */
declare const CookieNotice: ({ acceptAllButtonLabel, onAcceptAllButtonClick, declineAllButtonLabel, onDeclineAllButtonClick, customizeButtonLabel, customizeTitleLabel, services, acceptButtonLabel, onAcceptButtonClick, backButtonLabel, alwaysActiveLabel, customizeAcceptAllButtonLabel, customizeAcceptAllTimeout, titleLabel, descriptionLabel, readMoreLabel, readMoreLink, readMoreInNewTab, placement, cookieOptions, }: CookieNoticeProps) => import("react/jsx-runtime").JSX.Element;
export default CookieNotice;
//# sourceMappingURL=cookie-notice.d.ts.map
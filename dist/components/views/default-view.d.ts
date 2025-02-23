interface DefaultViewProps {
    titleLabel?: string;
    descriptionLabel?: string;
    readMoreLink?: string;
    readMoreInNewTab?: boolean;
    readMoreLabel?: string;
    onAcceptAllButtonClick: (services?: string[]) => void;
    acceptAllButtonLabel?: string;
    onCustomizeButtonClick: () => void;
    customizeButtonLabel?: string;
    onDeclineAllButtonClick: () => void;
    declineAllButtonLabel?: string;
    services?: ServiceObject[];
}
declare const DefaultView: ({ titleLabel, descriptionLabel, readMoreLink, readMoreInNewTab, readMoreLabel, onAcceptAllButtonClick, acceptAllButtonLabel, onCustomizeButtonClick, customizeButtonLabel, onDeclineAllButtonClick, declineAllButtonLabel, services, }: DefaultViewProps) => import("react/jsx-runtime").JSX.Element;
export default DefaultView;
//# sourceMappingURL=default-view.d.ts.map
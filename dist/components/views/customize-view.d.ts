interface CustomizeViewProps {
    customizeTitleLabel?: string;
    services: ServiceObject[];
    onAcceptButtonClick: (services: string[]) => void;
    acceptButtonLabel?: string;
    onBackButtonClick: () => void;
    backButtonLabel?: string;
    alwaysActiveLabel?: string;
    customizeAcceptAllButtonLabel?: string;
    onCustomizeAcceptAllButtonClick?: (services: string[]) => void;
    customizeAcceptAllTimeout?: number;
}
declare const CustomizeView: ({ customizeTitleLabel, services, onAcceptButtonClick, acceptButtonLabel, onBackButtonClick, backButtonLabel, alwaysActiveLabel, customizeAcceptAllButtonLabel, onCustomizeAcceptAllButtonClick, customizeAcceptAllTimeout, }: CustomizeViewProps) => import("react/jsx-runtime").JSX.Element;
export default CustomizeView;
//# sourceMappingURL=customize-view.d.ts.map
interface CustomizeViewProps {
    customizeTitleLabel?: string;
    services: string[];
    onAcceptButtonClick: (services: string[]) => void;
    acceptButtonLabel?: string;
    onBackButtonClick: () => void;
    backButtonLabel?: string;
}
declare const CustomizeView: ({ customizeTitleLabel, services, onAcceptButtonClick, acceptButtonLabel, onBackButtonClick, backButtonLabel, }: CustomizeViewProps) => import("react/jsx-runtime").JSX.Element;
export default CustomizeView;
//# sourceMappingURL=customize-view.d.ts.map
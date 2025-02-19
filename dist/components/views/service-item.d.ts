interface ServiceItemProps {
    name: string;
    description: string;
    code: string;
    alwaysActive?: boolean;
    alwaysActiveLabel?: string;
    isChecked: boolean;
    onCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const ServiceItem: ({ name, description, code, alwaysActive, isChecked, onCheckboxChange, }: ServiceItemProps) => import("react/jsx-runtime").JSX.Element;
export default ServiceItem;
//# sourceMappingURL=service-item.d.ts.map